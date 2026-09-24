export const prerender = true;

const content = `# Project Cafecito

> Project Cafecito builds practical AI tools and workflows for independent professionals and small businesses.

Publicly accessible Cafecito services may offer a free tier. MediCafe is in limited pilot and has no general self-service access. When paid services are introduced, applicable pricing, billing, renewal, cancellation, refund, tax, and additional contract terms will be presented before purchase.

Cafecito uses a changing catalog of public-information and publicly available sources/outlets. This does not imply source endorsement, complete coverage, a fixed update frequency, or unrestricted content rights.

## Canonical sources

- Website: https://cafecito.tech/
- Company overview: https://cafecito.tech/docs/overview/
- About the founders: https://cafecito.tech/docs/about-us/
- Product updates: https://cafecito.tech/blogs/
- Developer portal: https://developer.cafecito.tech/

## Live products

### Beans

- Status: live, meaning publicly accessible; no guaranteed uptime or instantaneous delivery is promised.
- Description: Public-information discovery API and MCP for apps, research tools, monitoring, and AI agents. The Beans News App is a news-focused browser example, not the full API surface.
- Search: Find available Articles and documents by natural-language relevance with an adjustable threshold, or look up known Article UUIDs or URLs.
- Content types: 14 documented request filters: news, blog, podcast, site, press_release, official_statement, earnings_report, financial_report, lawsuit, enforcement_action, contract, research_paper, whitepaper, and technical_documentation.
- Filtering: Combine route-supported Source or domain include/exclude filters with author, category, region, entity, sentiment, language, tag, and publication-date filters. Source and normalized-label catalog routes help discover accepted values.
- Feeds: Request latest Articles, news-scoped feeds, recent top headlines, or attention-ranked trending records. Attention observations do not establish truth, complete popularity, or comprehensive coverage.
- Context: Inspect Article details and body content when available; follow similar Articles, Story membership and member Articles, Source metadata, or available external mentions. These are distinct kinds of context.
- Integration: Use cursor-paginated JSON REST responses or MCP tools with an API key in applications, RAG pipelines, and agents.
- Limits: Coverage, update timing, labels, relationships, mentions, and body availability vary by source and record. Supported content types do not guarantee available results for every query. Available content does not grant reuse rights; verify material information with canonical sources.
- Product page: https://cafecito.tech/beans/
- News App: https://beans.cafecito.tech/
- Developer documentation: https://developer.cafecito.tech/products/beans
- API reference: https://developer.cafecito.tech/api/beans

### Espresso

- Status: live, meaning publicly accessible; no guaranteed uptime or instantaneous delivery is promised.
- Description: Market and business intelligence API and MCP for developers building research, monitoring, dashboards, briefings, and agent workflows. Espresso keeps concrete Events separate from synthesized Signals so applications can show developments alongside interpretation.
- Capabilities:
  - Search Events and Signals separately with natural-language semantic search and an adjustable similarity threshold.
  - Apply supported filters for Event types, categories, companies, people, products, regions, impact levels, Signal domains, Source IDs, and record-created date bounds where supported.
  - Traverse from an Event to related evidence and associated Signals; follow a Signal to supporting Events, Event evidence, and available Source metadata.
  - Discover available Sources, tags, entities, regions, and Event types to build repeatable searches.
  - Integrate through REST or MCP with cursor pagination. JSON is canonical; YAML and TOON expose the same logical payload.
- Important limits: Available fields and evidence links vary. Related evidence is a bounded set, not a complete article archive. A record's created_at indicates when the record was created, not when the Event occurred. Generated interpretation may omit context or be incorrect; Signals are not verified predictions or professional advice. Verify consequential information against available sources.
- Product page: https://cafecito.tech/espresso/
- Developer portal (current v0.5 documentation): https://developer.cafecito.tech/products/espresso
- API reference: https://developer.cafecito.tech/api/espresso
- Workflows: https://developer.cafecito.tech/products/espresso/workflows
- Publications: https://espresso.cafecito.tech/

## Limited pilot and products in development

### Cortado

- Status: in development.
- Description: Social media automation for consistent posting and campaign workflows.
- No public product page is currently available.

### MediCafe

- Status: limited pilot; no general self-service access. The public F1–F3 product foundation demonstrates the workflow with synthetic data.
- Audience: clinic billing teams and operators responsible for claim intake, review, approval, and follow-up.
- Description: Limited-pilot medical billing back-office platform being built to reduce manual claim work and help practices pursue payment for care delivered. Its documented foundation emphasizes error review, operator-approved claims, and traceable handling.
- Product direction: intelligent error correction, automated filing, claim-status tracing, and broader revenue-cycle follow-up are goals of the pilot, not capabilities established by the public synthetic-data foundation.
- Demonstrated capabilities in the public synthetic-data foundation:
  - Authenticated organization-based CSV and DOCX intake retains source bytes and extracted observations; an operator reviews uncertain patient and encounter matches.
  - Operators record service corrections, exclusions, reinstatements, reasons, and evidence before selecting ordered claim lines.
  - Claim assembly creates a versioned, deterministic, immutable JSON payload with totals, routing information, a digest, and explicit operator approval. Later changes block silent alteration of approved work.
  - Simulated dispatch preserves exact approved payload bytes, dispatch intent, attempt history, and independent receiver observations for reconciliation of uncertain outcomes.
- Availability boundary: these capabilities describe the public synthetic F1–F3 runtime, not proof that every feature or integration is active in the clinic pilot. Current evidence does not establish live payer connectivity, actual 837P submission, ERA posting, production financial reconciliation, multi-clinic production operation, readiness for real patient data, or revenue recovery outcomes. F4 admission and archive work remain future or admission-stage work. No public MediCafe JSON API is documented.
- Product page: https://cafecito.tech/medicafe/
- Join the waitlist: https://tally.so/r/VLK2xy
- Public product foundation: https://github.com/katanada2/MediCafe-v1

## Contact

- Private contact: https://cafecito.tech/contact/
- Report a public software bug: https://github.com/projectcafecito/cafecito/issues/new?template=general_contact.yml

## Legal and policies

- Legal index: https://cafecito.tech/docs/legal/
- Terms of Service: https://cafecito.tech/docs/terms-of-use/
- Privacy Policy: https://cafecito.tech/docs/privacy-policy/
- Acceptable Use Policy: https://cafecito.tech/docs/acceptable-use-policy/
- Third-Party Content Policy: https://cafecito.tech/docs/third-party-content-policy/
- Copyright Policy: https://cafecito.tech/docs/copyright-policy/
- Publisher Requests: https://cafecito.tech/docs/publisher-requests/
- Corrections Policy: https://cafecito.tech/docs/corrections-policy/
- Public-Information Collection Policy: https://cafecito.tech/docs/public-information-collection-policy/
- Editorial and AI Policy: https://cafecito.tech/docs/editorial-and-ai-policy/
`;

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
