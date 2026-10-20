---
title: "Your RAG Knows Today: Building News-Aware RAG with the Beans API"
description: "A developer guide to grounding AI applications in current news, press releases, official statements, reports, legal material, and recent-event coverage with Beans REST or MCP."
publishedAt: 2026-10-20T12:00:00-04:00
type: blog
tags: ["beans", "rag", "news-api", "mcp", "ai-agents", "developers"]
---

Your users ask what happened today. Your RAG hands them last month's answer with immaculate citations. Congratulations: you built a very articulate time machine.

A company issues a recall this morning, posts a statement at lunch, and draws new coverage by evening. Your assistant should be able to find those documents when the question arrives. The model is good at writing the answer; it needs current material to write the right one.

Retrieval-augmented generation fixes the evidence problem by retrieving relevant material at request time and placing it in the model's context. For current public information, that material cannot be one frozen document collection assembled during a heroic Tuesday six months ago. It needs news, press releases, official statements, reports, legal records, research, and the coverage that appeared after the original announcement.

That is where the [Beans API](https://developer.cafecito.tech/products/beans) and [Beans MCP](https://developer.cafecito.tech/guides/mcp-ai-agents) fit: they provide the current publisher-material retrieval layer for a news-aware RAG system.

## RAG gets more useful when time is allowed to pass

Traditional RAG examples are pleasantly stationary. Upload a handbook, split it into chunks, create embeddings, retrieve five passages, and ask the model which form Gerald in accounting should file.

Recent events are less considerate.

- New Articles arrive after your last indexing job.
- A press release presents one version of events; independent reporting presents several others.
- A developing Story can contain coverage from multiple publishers across hours or days.
- The newest Article is not necessarily the Article attracting the most attention.
- A body may be unavailable even when the title, summary, source, URL, labels, and publication time are useful.

For this kind of application, retrieval is not merely “find a similar paragraph.” It is “find the relevant material, establish when it was published, distinguish the document type, inspect related coverage, and preserve the original URLs.” Tiny difference. Only most of the system.

Beans exposes publisher Articles, Sources, Stories, and external mention observations through one API. Article search supports a natural-language relevance query plus filters for content type, source, domain, author, category, region, entity, sentiment, tags, language, and publication dates. Results include stable IDs that can be used for selective detail and follow-up calls.

## The evidence your application may actually need

Beans currently supports 14 request-filterable content types. The useful point is not the number; numbers look excellent in launch decks and are less helpful during an incident. The useful point is that your retriever can ask for the kind of evidence the question requires.

Concrete inputs include:

- `news` and `blog` for publisher reporting and commentary;
- `press_release` and `official_statement` for first-party corporate or institutional claims;
- `earnings_report` and `financial_report` for company-performance updates;
- `lawsuit`, `enforcement_action`, and `contract` for legal and regulatory monitoring;
- `research_paper`, `technical_documentation`, and `whitepaper` for research and engineering context;
- `podcast` and `site` for additional publication discovery.

Beans uses a changing catalog of public-information sources, so coverage and timing vary. That is worth saying plainly. “Everything on the internet, instantly” is not a product requirement; it is a cry for help.

## Where recent-event RAG earns its keep

### 1. Incident and crisis assistants

Suppose a user asks, “What is known about the outage, and has the vendor responded?” The concrete material to look for might be a vendor newsroom statement, an engineering blog update, and reporting that checks the vendor's account.

A useful retrieval plan can combine:

1. recent `news` coverage for independent reporting;
2. an `official_statement` or `press_release` for the vendor's position;
3. `technical_documentation` for any changed operational guidance;
4. related Articles and Story membership to see whether multiple publishers are covering the same event;
5. mention observations to identify available external discussion around a selected Article URL.

The generated answer can then separate publisher reporting from the vendor's own statement and link to both. This is more useful than asking the model to remember an outage that began 14 minutes ago. It was busy being a matrix multiplication at the time.

### 2. Competitive and product intelligence

A product team may ask, “What did our competitor launch, how are publishers describing it, and is anyone paying attention?”

Retrieve `press_release`, `official_statement`, `blog`, and `news` Articles around the company and product. Use related-Article calls for adjacent reading, Story Articles for same-event coverage, and trending results or available trend observations for attention context.

This gives the model first-party claims, outside coverage, and the shape of the conversation. It also reduces the chance that your competitive brief is simply a press release wearing a fake mustache.

### 3. Earnings and company-monitoring copilots

For questions such as “What changed this quarter, and how was it reported?”, look for an investor-relations earnings release and a quarterly financial filing, then retrieve relevant press releases, official statements, and news coverage from the available Beans records. Start with `earnings_report` and `financial_report` to keep those documents distinct from the reporting about them.

The first-party documents supply the company's published account. Publisher Articles add interpretation and context. Date filters keep the retrieval window tied to the reporting period instead of inviting a beloved result from 2023 to wander into the prompt.

### 4. Legal and regulatory watch

Compliance, policy, and risk tools often need to track a company, industry, or jurisdiction across `enforcement_action`, `lawsuit`, `contract`, `official_statement`, and `news` material. Think of an agency enforcement notice, a court complaint, the company's response, and subsequent reporting as separate pieces of the answer; search for whichever are available.

Beans entity, region, category, Source, and date filters make that retrieval explicit. Your application can preserve each Article's type and URL, then instruct the model to describe what each source says rather than blending allegations, enforcement notices, and corporate responses into one legally adventurous paragraph.

### 5. Research and engineering radar

Developer tools can monitor `research_paper`, `technical_documentation`, `whitepaper`, `blog`, and `news` material for a technology or organization.

That supports questions like:

- What new research appeared this week?
- Did the project publish technical guidance after the announcement?
- Which publisher Articles discuss the paper rather than merely repeat its title with impressive confidence?
- Is this one Article, several related Articles, or a broader Story?

The model still needs to evaluate evidence and communicate uncertainty. Beans supplies retrievable material and structured context; it does not turn a whitepaper into peer review by the healing power of JSON.

## A practical REST retrieval flow

The [Beans route guide](https://developer.cafecito.tech/products/beans/scenarios) recommends small, intentional calls. For RAG, a sensible flow is:

1. Search a compact candidate set with `GET /beans/articles/search`.
2. Filter by document type, date, entity, region, Source, or other known constraints.
3. Select candidates across document types so one busy news cycle does not crowd out the original statement.
4. Request `GET /beans/articles/{id}?full_content=true` only for the Articles chosen for context.
5. Follow Story, similar-Article, Source, or mention links only when the question needs them.
6. Build the model context with titles, publication times, content types, summaries or available bodies, and canonical URLs.
7. Require the answer to cite those URLs and distinguish first-party material from publisher reporting.

Here is a small server-side JavaScript example. It searches the past seven UTC days across several evidence types because `content_type` accepts one value per request. Each Article's `published_at` tells you when its publisher says it was published; each collection's `meta.as_of` tells you when Beans produced that response.

```js
const BASE_URL = "https://api.cafecito.tech";
const API_KEY = process.env.CAFECITO_API_KEY;

async function beansGet(path, query = {}) {
  const url = new URL(path, BASE_URL);
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!response.ok) throw new Error(`Beans returned HTTP ${response.status}`);
  return response.json();
}

export async function retrieveRecentContext(question) {
  const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const contentTypes = ["news", "press_release", "official_statement"];

  const pages = await Promise.all(
    contentTypes.map((contentType) =>
      beansGet("/beans/articles/search", {
        q: question,
        content_type: contentType,
        from,
        limit: 8,
      }),
    ),
  );

  const firstByType = pages.flatMap((page) => page.data.slice(0, 1));
  const remaining = pages.flatMap((page) => page.data.slice(1));
  const selected = [
    ...new Map(
      [...firstByType, ...remaining].map((article) => [article.id, article]),
    ).values(),
  ].slice(0, 6);

  const details = await Promise.all(
    selected.map((article) =>
      beansGet(`/beans/articles/${article.id}`, { full_content: true }),
    ),
  );

  return {
    from,
    asOf: Object.fromEntries(
      pages.map((page, index) => [contentTypes[index], page.meta.as_of]),
    ),
    articles: details.map(({ data }) => ({
      title: data.title,
      publishedAt: data.published_at,
      contentType: data.content_type,
      source: data.source,
      text: data.content ?? data.summary ?? data.title,
      url: data.url,
      storyId: data.story_id,
    })),
  };
}
```

The first pass reserves a place for each content type that returns a match, then fills the remaining slots. A press release does not disappear merely because eight news Articles arrived first. Adjust the seven-day window to fit the question.

Beans collection responses include `data`, `pagination`, and `meta`. Continue pagination only by returning `pagination.next_cursor` unchanged on the same route with the same filters. Do not decode it. There is no hidden treasure inside, only a future support ticket.

## Stories are useful when one event becomes 27 headlines

Article similarity and Story membership answer different questions.

- `GET /beans/articles/{id}/similar` returns related publisher reading.
- `GET /beans/stories` finds related-coverage groups.
- `GET /beans/stories/{id}` returns Story detail.
- `GET /beans/stories/{id}/articles` returns the Articles assigned to that Story.

For RAG, Story retrieval is useful when the answer should reflect how an event was covered across publishers rather than treating every headline as a separate event. It also gives your application a cleaner unit for deduplication and follow-up research.

Do not assume that every similar Article belongs to the same Story. Related is not identical. Software occasionally requires nouns to retain their meanings.

## Or let the agent use Beans through MCP

If your application already has an MCP-capable agent, connect it to:

```text
https://api.cafecito.tech/beans/mcp
```

The server uses the same Bearer API key as REST. Beans MCP exposes tools such as `searchArticles`, `getLatestArticles`, `getTrendingArticles`, `getArticle`, `getSimilarArticles`, `getArticleMentions`, `listStories`, `getStory`, `listStoryArticles`, and Source or taxonomy discovery tools.

The tool sequence is the same deliberate retrieval flow:

1. `searchArticles` or another collection tool finds candidates.
2. The agent reads real UUIDs from `data`.
3. `getArticle` retrieves only selected detail.
4. Story, similar, mention, or Source tools add context only when needed.
5. The agent cites the returned Article URLs.

MCP removes some integration plumbing. It does not remove the need for tool policy, call limits, source attribution, or a stern instruction against inventing UUIDs.

## Production details that prevent exciting weekends

- Keep the API key on the server or in the agent client's secret store.
- Treat empty `data: []` as a successful retrieval with no matches.
- Use `score_threshold` only when `q` is present.
- Preserve Article, Source, and Story UUIDs exactly.
- Keep `latest`, `top-headlines`, `trending`, and relevance search conceptually separate.
- Request `full_content=true` only for selected Articles and handle missing content.
- Retain canonical Article URLs for attribution.
- Treat categories, entities, sentiments, ideology, trend observations, and generated answers as context that may require verification—not fresh tablets from the mountain.

Most importantly, content availability is not a grant to republish, redistribute, archive, train on, or otherwise reuse it. Review the [Third-Party Content Policy](/docs/third-party-content-policy/) and assess the rights required for your application.

## The short version

The next time someone asks what changed today, retrieve the dated material, compare the first-party account with publisher reporting, and answer with links to the original documents.

Beans gives developers REST and MCP access to searchable publisher Articles, Sources, Stories, related reading, and external mention observations. You decide what evidence the question requires, retrieve a compact candidate set, enrich only the selected records, and give the model dated, typed, attributable context.

Start with the [Beans developer guide](https://developer.cafecito.tech/products/beans), use the [workflow examples](https://developer.cafecito.tech/products/beans/scenarios) for call sequencing, or connect an agent through the [Beans MCP guide](https://developer.cafecito.tech/guides/mcp-ai-agents).

Your model can keep doing the prose. Give it Beans for the part where today actually happened.
