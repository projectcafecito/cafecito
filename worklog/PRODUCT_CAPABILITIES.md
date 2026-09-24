# Product capabilities for marketing

**Research date:** 2026-09-23  
**Purpose:** Internal knowledge base for product positioning and draft marketing copy. For Espresso API behavior, use the [developer portal](https://developer.cafecito.tech/products/espresso) and its API reference first. Check current evidence before publishing route-level or comparative claims.

## At a glance

| Product | Primary offering | Current state | Best-fit buyer or builder | Distinctive angle |
| --- | --- | --- | --- | --- |
| **Beans** | Public-information discovery API and MCP | Live | Developers building news, research, monitoring, and agent workflows | One documented search surface for news and 13 other filterable content types, including business, legal, official, research, and technical material. |
| **Espresso** | Market and business intelligence API and MCP | Live, documented as v0.5 | Developers and analysts building briefings, monitoring, dashboards, and agents | Separate concrete Events from interpretive Signals, then traverse back through supporting Events, evidence, and Sources. |
| **MediCafe** | Medical-billing operator application | Limited pilot; [join the waitlist](https://cafecito.tech/medicafe/) for access | Prospective clinics and billing operators | Evidence-first intake, explicit human approval, immutable claim payloads, and visible uncertainty in the public repository's synthetic delivery workflow. |

The angles above describe combinations and design emphasis; they are **not** claims of market exclusivity or measured superiority.

## Beans — public-information discovery API

**Positioning:** Beans helps applications and agents find and examine available public information **beyond news headlines**. The **API and MCP** are the product; the [Beans News App](https://beans.cafecito.tech/) demonstrates a browser experience built around it. Use the current [Beans developer portal](https://developer.cafecito.tech/products/beans) and [API contract](https://developer.cafecito.tech/api/beans) for customer-visible types and routes.

### Existing capabilities

| Capability | What a customer can do |
| --- | --- |
| Article and document search | Search by natural-language relevance; adjust a similarity threshold; look up known article UUIDs or URLs. Select from 14 documented filterable types spanning news, blogs, company reports, legal and regulatory material, official communications, research, and technical content. |
| Controlled retrieval | Combine route-supported source/domain include and exclude filters with author, category, region, entity, sentiment, language, tag, and publication-date filters. Discover accepted Sources and normalized label values through catalog routes. |
| Feeds and trend context | Request latest articles, news-scoped feeds, recent top headlines, or attention-ranked trending records. Attention is an observation about available records, not a measure of truth or complete popularity. |
| Article inspection | Retrieve article details and, when available, body content. Follow similar-article links or inspect external platform/forum mentions and available engagement observations. |
| Story coverage | Discover Stories, inspect a Story's source and article counts, and page through its member articles. Similar articles, Story membership, and external mentions are distinct kinds of context. |
| Integration | Use cursor-paginated JSON REST responses or MCP tools with the same public API key for apps, RAG pipelines, and agents. |

### Content breadth: the clearest Beans advantage

The live Beans contract exposes **14 request-filterable `content_type` values**:

| Customer question | Documented Beans types |
| --- | --- |
| What is being reported or discussed? | `news`, `blog`, `podcast`, `site` |
| What did an organization publish? | `press_release`, `official_statement`, `earnings_report`, `financial_report` |
| What legal or regulatory development is available? | `lawsuit`, `enforcement_action`, `contract` |
| What research or technical material is available? | `research_paper`, `whitepaper`, `technical_documentation` |

This lets a customer use the same search and filter model to look for reporting **alongside** available source documents, such as a company's earnings report, an official statement, a lawsuit, or a research paper. Availability varies by type, source, and query; the list describes supported filters, not a promise that every category has comprehensive coverage.

The upstream collector's [canonical kinds](../../pycoffeemaker/utils/kinds.py) and [classification rules](../../pycoffeemaker/datacollectors/CONTENT_KIND_CLASSIFICATION.md) also recognize `job`, `procurement_notice`, `sec_filing`, `legislative_bill`, `legislative_proposal`, `enacted_law`, `regulation`, `rulemaking_notice`, `court_opinion`, `government_report`, `budget_document`, `legislative_record`, and `hearing`. **Those 13 values are not accepted as `content_type` filters by the current public Beans API.** `post` may appear in responses but is also not a request filter. Treat the upstream-only kinds as classification capacity to validate for future API exposure, not current customer-selectable features.

### How that compares with the reviewed market

| Reviewed service | Documented retrieval focus | Beans positioning |
| --- | --- | --- |
| [NewsAPI.org](https://newsapi.org/docs/endpoints/everything) and [World News API](https://worldnewsapi.com/docs/search-news/) | News-source and blog articles, or news search with article-category and entity filters. | Beans documents specific **document-type** filters for reports, legal records, official statements, research, and technical material in addition to news. |
| [GDELT Cloud](https://docs.gdeltcloud.com/API_DOCUMENTATION_GUIDE) | Generated Events and clustered Stories with linked article evidence. | Beans is article and document first, with explicit content-type selection and Story navigation. |
| [Perigon](https://docs.perigon.io/docs/article-data) | Rich news-article, Story, semantic-search, and enrichment surfaces; the reviewed article contract does not document the same named document-type selector. | Beans gives builders a smaller, explicit selector for its documented mix of news and non-news content. |
| [NewsAPI.ai / Event Registry](https://www.newsapi.ai/documentation/examples) | Explicit `news`, `blog`, and `pr` types, with extensive analysis and enrichment. | Beans' published selector extends across more kinds of business, legal, research, and technical records; Event Registry remains a strong comparison for blogs, PR, and analysis. |

The [news/blog market report](../../cafecito-api-platform/apis/design/NEWS_AND_BLOG_API_MARKET_REPORT.md) is the comparison inventory. Its **Beans Baseline and implications sections describe an older two-type, offset-paginated contract**; the live Beans portal and OpenAPI contract take priority for Beans' current 14 types and cursor pagination. The table compares documented route surfaces, not total corpus coverage, document quality, price, or exclusive access.

**Marketing-ready description:** “Beans is a public-information discovery API for apps and AI agents. Search news and blogs alongside available earnings and financial reports, official statements, legal records, research, and technical documents using semantic and structured filters. Explore source metadata, related articles, Story coverage, and observed mentions through JSON or MCP.”

**Claim boundaries:** Source coverage, update timing, labels, relationships, mention observations, and body availability vary. `full_content=true` requests available content; it does not guarantee a complete publisher copy or confer reuse rights. Avoid fixed source counts, freshness guarantees, comprehensive coverage, and accuracy or popularity claims.

**Evidence:** [Beans portal overview](https://developer.cafecito.tech/products/beans) · [API reference](https://developer.cafecito.tech/api/beans) · [upstream kind definitions](../../pycoffeemaker/utils/kinds.py) · [marketing page](../src/pages/beans.astro) · [market comparison](../../cafecito-api-platform/apis/design/NEWS_AND_BLOG_API_MARKET_REPORT.md).

## Espresso — market and business intelligence API

**Positioning:** Espresso gives research and monitoring systems two distinct resources: **Events** for concrete developments and **Signals** for synthesized conclusions, implications, and outlook. The [developer portal](https://developer.cafecito.tech/products/espresso) and [API reference](https://developer.cafecito.tech/api/espresso) take priority for API capabilities, version, response formats, and route details. The API and MCP are primary. [Espresso Publications](https://espresso.cafecito.tech/) is a secondary human-readable outlet; [X](https://x.com/espressovibz) and [Threads](https://www.threads.com/@espresso.sips) are tertiary distribution channels.

### Existing capabilities

| Capability | What a customer can do |
| --- | --- |
| Event and Signal retrieval | Search and inspect Events and Signals separately, selecting concrete developments or synthesized interpretation according to the question. Some records expose key points, impacts, forecasts, or other extension fields; their presence varies. |
| Semantic and structured search | Run natural-language queries with an adjustable similarity threshold. Combine fuzzy tags with documented exact filters, including Event types, categories, companies, people, products, regions, impact levels, Signal domains, Source IDs, and record-created date bounds where supported. |
| Evidence traversal | Move from an Event to directly related evidence and associated Signals; move from a Signal to supporting Events, then to Event evidence and available Source metadata. |
| Filter-value and Source discovery | Look up Sources, tags, entities, regions, and Event types before constructing repeatable queries. These vocabularies are filter aids, not canonical company profiles or a geographic knowledge graph. |
| Agent integration | Use REST or MCP with cursor pagination. JSON is the canonical representation; YAML and TOON expose the same logical payload for clients that prefer compact agent context. |

### How Espresso compares with the reviewed market

| Reviewed service | Documented strength | Espresso positioning |
| --- | --- | --- |
| [GDELT Cloud](https://docs.gdeltcloud.com/API_DOCUMENTATION_GUIDE) | Generated Events and Stories, rollups, entity discovery, and article-evidence traversal. | Espresso makes **Events and interpretive Signals** separate resources and connects Signals back to supporting Events and Event evidence. |
| [PredictHQ](https://docs.predicthq.com/api/events/search-events) | Predicted or observed events with strong time, place, category, impact, and count filters. | Espresso serves questions about what a development may mean, with linked Signal interpretation and source context. |
| [Perigon](https://perigon.io/docs/api/intro) | News articles, Story clusters, semantic retrieval, source/entity enrichment, and summarization. | Espresso starts with structured developments and conclusions instead of asking clients to assemble an interpretation from article or Story search alone. |

The [industry event API report](../../cafecito-api-platform/apis/design/INDUSTRY_EVENT_API_ROUTE_REFERENCE.md) supplies these market comparisons; the **developer portal remains authoritative for live Espresso behavior**. Semantic search, evidence links, and entity filters also exist in other services. Espresso's defensible design emphasis is the **Event → Signal → supporting Event/evidence** workflow plus JSON, YAML, TOON, and MCP for agent use. The [Unusual Whales inventory](../../cafecito-api-platform/apis/design/UNUSUAL_WHALES_API_INVENTORY.md) describes a broader financial-data category; Espresso is not a price or options-flow feed.

**Marketing-ready description:** “Espresso is a market and business intelligence API for research, monitoring, and AI briefings. Search concrete Events and synthesized Signals, filter by relevant business context, and follow links to supporting Events, evidence, and Sources through REST or MCP.”

**Claim boundaries:** Generated interpretation may omit context or be incorrect. Evidence is a bounded related set, not a complete article archive or full story-cluster export. `created_at` is record creation, not the date an Event occurred. Do not present Signals as verified predictions or professional advice. Verify material information before consequential use.

**Evidence, in priority order for API claims:** [Espresso portal overview](https://developer.cafecito.tech/products/espresso) · [API reference](https://developer.cafecito.tech/api/espresso) · [portal workflows](https://developer.cafecito.tech/products/espresso/workflows) · [migration guide](https://developer.cafecito.tech/products/espresso/migration). The [marketing page](../src/pages/espresso.astro) describes the broader suite; the [event API comparison](../../cafecito-api-platform/apis/design/INDUSTRY_EVENT_API_ROUTE_REFERENCE.md) supplies market context rather than live Espresso behavior.

**Source-of-truth note:** The current developer portal describes v0.5 with JSON, YAML, and TOON. The local marketing page still says v0.1 and `response_type=text`; use the portal's wording for API claims and update the page separately when editing that surface. The older Espresso route proposal in `apis/design/` is marked superseded. Database structure is not a source of customer-facing capability claims.

## MediCafe — limited-pilot billing operations product

**Positioning and access:** MediCafe is a medical-billing product in **limited pilot**. Prospective customers should [join the waitlist](https://cafecito.tech/medicafe/); general self-service access is not offered. The [public GitHub repository](https://github.com/katanada2/MediCafe-v1) is the evidence base for the product's design and inspectable capabilities. Its accepted F1–F3 runtime uses synthetic data, so it does not by itself establish which integrations or operational results are live in the clinic pilot.

### Capabilities demonstrated in the public F1–F3 runtime

| Capability | What an operator can do |
| --- | --- |
| Intake and identity review | Upload CSV/DOCX sources within an authenticated organization, retain source bytes, parse durable observations, and explicitly resolve uncertain patient and encounter matches. Organization boundaries are enforced in the reviewed workflow. |
| Service correction and approval | Accept service records with recorded corrections, exclusions, reinstatements, reasons, and evidence; select ordered service lines for a claim. |
| Claim assembly | Build a deterministic, immutable claim JSON envelope with totals, routing information, a digest, versioned policy, and operator approval. Changes after approval produce blockers rather than silently changing approved work. |
| Simulated dispatch and reconciliation | Persist exact approved payload bytes and a dispatch intent, process synthetic delivery through separate worker/receiver components, retain independent receiver evidence and attempt history, and make uncertain outcomes explicit for operator reconciliation. Retry behavior is versioned and constrained. |

**Strength relative to similar billing software:** [athenaOne](https://www.athenahealth.com/solutions/athenaone/practice-management) and [AdvancedMD](https://www.advancedmd.com/medical-billing/software/) market mature, broad billing and practice-management suites with capabilities such as claim management, payment workflows, and reporting. MediCafe's current distinction is a **narrower implementation focus**: source observations, operator corrections, approvals, exact claim bytes, independent receiver observations, and uncertain delivery states remain inspectable across its synthetic workflow. The reviewed sources do not establish that MediCafe is faster, safer, more transparent, or more complete than either vendor; those vendors also offer workflow visibility.

**Marketing-ready description:** “MediCafe is a medical-billing workspace in limited pilot, designed around clear, accountable claim decisions. Its public product foundation demonstrates source intake, identity review, versioned service and claim approval, and traceable delivery handling with synthetic data. Join the waitlist to learn about access.”

**Claim boundaries:** Limited-pilot status comes from the product owner and the [MediCafe product page](../src/pages/medicafe.astro); it is an access statement, not proof of every proposed feature. The public repository explicitly limits its accepted runtime evidence to synthetic F1–F3 work. It does **not** establish live payer connectivity, actual 837P submission, ERA posting, financial reconciliation, multi-clinic production operation, real-patient-data readiness, or revenue recovery outcomes. F4 outcomes and archive work are future or admission-stage work. The product page describes broader pilot capabilities that require separate operating evidence before being claimed as implemented. No public MediCafe JSON API is documented in the reviewed charter.

**Evidence:** [repository README](https://github.com/katanada2/MediCafe-v1/blob/main/README.md) · [capability map](https://github.com/katanada2/MediCafe-v1/blob/main/docs/architecture/CAPABILITY_MAP.md) · [F1 intake](https://github.com/katanada2/MediCafe-v1/blob/main/docs/roadmap/F1_SETUP.md) · [F2 claim approval](https://github.com/katanada2/MediCafe-v1/blob/main/docs/roadmap/F2_SETUP.md) · [F3 simulated delivery](https://github.com/katanada2/MediCafe-v1/blob/main/docs/roadmap/F3_SETUP.md) · [F4 admission](https://github.com/katanada2/MediCafe-v1/blob/main/docs/roadmap/F4_IMPLEMENTATION_ADMISSION.md).

## Product fit and messaging rules

| If the customer needs… | Lead with… | Why |
| --- | --- | --- |
| News together with available company, legal, official, research, or technical source material | **Beans API** | Its public search contract exposes 14 content-type filters plus related coverage. |
| A concise interpretation of developments, connected implications, and evidence trails | **Espresso API** | It separates Events and Signals and supports follow-up evidence traversal. |
| An operator-facing claim decision trail and controlled billing workflow | **MediCafe waitlist** | The product is in limited pilot; the public implementation demonstrates intake, approval, and traceable synthetic dispatch state. |

Across all products, describe available behavior, not guaranteed outcomes. Do not turn a design proposal, schema field, demo, synthetic test, or publication channel into a claim that a customer-facing production capability exists. The repository's [marketing-claims guidance](MARKETING_CLAIMS_READINESS.md) requires evidence before quantitative, freshness, accuracy, social-signal, cost-saving, or performance claims are published.
