# Cafecito API legal readiness

**Prepared:** September 11, 2026  
**Primary scope:** United States; Cafecito websites, Beans, Espresso, APIs, MCP services, PyCoffeeMaker processing, and news/blog distribution  
**Status:** Working legal and operational framework; not legal advice and not a substitute for product-specific counsel

## Executive decision

The highest-priority issue is not solved by website terms: full article text received through an RSS or similar feed can still be copyrighted, and the existence of the feed does not by itself establish a right to redistribute the full text through a commercial API.

Until a source-specific license or counsel-approved basis is recorded, the conservative output policy is:

| Source/right state | Metadata and source URL | Derived tags/attributes | Limited excerpt or summary | Full text |
|---|---:|---:|---:|---:|
| Unknown or unlicensed webpage | Allowed only after access-policy review | Allowed only after legal review of processing and retention | Case-by-case | No |
| Unknown or unlicensed RSS/feed | Allowed only after source-policy review | Allowed only after legal review | Case-by-case | No |
| Search/summarization license | As licensed | As licensed | As licensed | No |
| Full-display/API license | As licensed | As licensed | As licensed | Only within license scope |

Attribution and a customer disclaimer help define downstream duties but do not create Cafecito’s upstream right to copy or distribute content.

## Existing-document audit and changes

| Surface | Prior gap | Action in this repository | Remaining dependency |
|---|---|---|---|
| Terms of Service | Covered only Espresso; personal-use framing; no API keys, Beans, third-party content, output rights, AUP, suspension, or customer indemnity | Replaced with service-wide API terms and linked policies | Counsel review; implement affirmative acceptance and version records |
| Privacy Policy | Covered only Espresso; asserted Google Analytics, Clover, HubSpot, cookies, and broad U.S. rights without a verified service-wide data map; omitted API queries/logs and public-source processing | Replaced with service-wide categories, purposes, public-source processing, qualified rights, security, retention criteria, and content-request process | Verify every statement against production vendors and fixed retention periods |
| Acceptable Use Policy | Missing | Added | Enforce in API gateway, account suspension, and support procedures |
| Third-Party Content Policy | Missing | Added RSS/web-processing distinction, ownership, downstream restrictions, attribution, corrections, publisher requests, and DMCA limitation | Add private intake channel; counsel review; implement rights controls |
| Legal/company index | Policies fragmented; no central legal page | Added legal index with operator and mailing address | Confirm exact registered entity name and address |
| Overview/navigation/AI-readable index | Linked only Terms and Privacy | Updated to link all public policies | Keep product portals and checkout flows synchronized |
| API agreement/checkout assent | No evidence in this repository | Not implementable in this static site alone | Add clickwrap and acceptance logs to account/API-key creation |
| DMCA designated-agent notice | Missing agent name, phone, private email, registration, and counter-notice workflow | Public policy states that registration is not identified or confirmed | Counsel eligibility review, confirm or register an agent, then publish a complete notice |

## Exhaustive implementation checklist

### 1. Content access and acquisition

- [ ] Inventory every source domain, feed URL, acquisition method, and controlling source terms.
- [ ] Record whether access is public, authenticated, paywalled, metered, API-based, licensed, or user-directed.
- [ ] Identify every crawler user agent and publish a crawler-information page with purpose, contact, rate behavior, robots behavior, caching, and opt-out instructions.
- [ ] Enforce robots and source-policy decisions at fetch time; document any exceptions approved by counsel.
- [ ] Prohibit paywall, login, CAPTCHA, credential, session-token, and technical-control circumvention.
- [ ] Maintain a cease-and-desist escalation rule that can stop a source immediately.
- [ ] Reassess source terms and technical restrictions on a schedule and when a publisher changes them.

### 2. Copyright and publisher rights

- [ ] Classify each returned field as source metadata, source expression, feed-supplied text, scraped text, licensed media, or Cafecito-derived data.
- [ ] Obtain a written legal opinion on fetching, transient copies, indexing, excerpting, summarization, embeddings, and derived attributes for the actual implementation.
- [ ] Do not treat public availability, RSS availability, robots permission, or paid crawl access as full-text redistribution permission.
- [ ] Obtain publisher permission for full display, reproduction, format transformation, API distribution, customer display/sublicense, storage, and territory.
- [ ] Negotiate RAG, embeddings, translation, archive, dataset, and model-training rights separately.
- [ ] Exclude wire-service, syndicated, freelance, image, video, chart, logo, and embedded third-party material unless separately cleared.
- [ ] Require publisher authority representations, an exclusion feed, correction/withdrawal duties, indemnity, audit/reporting terms, security, and termination/purge rules.
- [ ] Ensure customer rights never exceed Cafecito’s rights.
- [ ] Preserve copyright notices, bylines, canonical URLs, required attribution, and source links.
- [ ] Track license effective date, expiration, territory, channel, usage unit, rates, caps, and renewal.

### 3. Rights-aware product controls

- [ ] Build a source and content rights registry that is authoritative at runtime.
- [ ] Store acquisition method per record, including at least `rss`, `publisher_api`, `licensed_feed`, and `web_fetch`.
- [ ] Store separate booleans/scopes for crawl, index, metadata, excerpt, summary, full display, cache, embeddings, RAG, translation, training, and downstream display.
- [ ] Default unknown rights to no full text, no durable cache, and no training.
- [ ] Gate every output field against the effective source/article license.
- [ ] Emit machine-readable rights metadata: scope, attribution, retention, redistribution, training, license expiration, and deletion requirements.
- [ ] Strip or separately gate images and other media.
- [ ] Implement transient, licensed-content, and derived-data cache classes.
- [ ] Implement license-expiration and publisher-withdrawal purge jobs, including downstream notices.
- [ ] Log the rights decision used for each full-text response.
- [ ] Test that scraped full bodies never reach customers and that unlicensed feed full text is suppressed.

### 4. Notices, complaints, and editorial controls

- [ ] Create a private legal/privacy intake address; a public GitHub issue is not suitable for notices containing personal or confidential information.
- [ ] Create copyright, publisher opt-out, privacy, correction, retraction, and abuse queues with owners and response targets.
- [ ] Publish the registered DMCA agent’s name, address, phone number, and email only after registration.
- [ ] Adopt and reasonably implement any repeat-infringer policy required for the applicable DMCA safe harbor.
- [ ] Implement takedown and counter-notice procedures, restoration controls, evidence preservation, and notice logs.
- [ ] Propagate source corrections, retractions, removals, and license changes to stored text and derived attributes.
- [ ] Preserve allegation language and distinguish allegations, charges, findings, and convictions.
- [ ] Prohibit fabricated quotations and add review controls for crime, health, finance, minors, safety, and identifiable-person claims.
- [ ] Record original value, corrected value, reason, source update, timestamp, and reviewer.

### 5. Customer contract stack

- [x] Service-wide Terms of Service draft.
- [x] Acceptable Use Policy draft.
- [x] Third-Party Content Policy draft.
- [ ] Counsel-approved API/developer agreement or confirmation that the public Terms are sufficient.
- [ ] Affirmative clickwrap at account and API-key creation with policy version, timestamp, user, organization, and IP/device evidence.
- [ ] Enterprise master services agreement and order form.
- [ ] Service-level agreement and support policy for paid plans.
- [ ] Security exhibit and data-processing addendum where Cafecito processes customer personal data.
- [ ] Publisher master content license and source-specific rights schedule.
- [ ] Subscription renewal, cancellation, refund, pricing-change, and tax terms matched to checkout behavior.
- [ ] Contract hierarchy stating which order form, DPA, publisher restriction, or API metadata controls a conflict.
- [ ] Export/sanctions language and screening appropriate to the offering.

### 6. Privacy and data governance

- [ ] Complete the service-wide data map using the repository template.
- [ ] Verify categories, sources, purposes, recipients, vendors, locations, security controls, and retention periods.
- [ ] Publish exact notice-at-collection disclosures where required.
- [ ] Determine applicability of each U.S. state comprehensive privacy law based on consumers, revenue, volume, sale/share, targeted advertising, profiling, and sensitive-data activity.
- [ ] Determine whether Cafecito is a data broker in California or any other state and complete registrations/deletion-platform duties if applicable.
- [ ] Implement access, correction, deletion, portability, opt-out, appeal, authorized-agent, and non-discrimination procedures where required.
- [ ] Honor Global Privacy Control where legally required and technically applicable.
- [ ] Document sale/share/targeted-advertising positions and contractually classify vendors.
- [ ] Implement a retention schedule with deletion jobs; avoid indefinite API-query, content-copy, and security-log retention.
- [ ] Establish a reasonable written information-security program, vendor security review, access controls, encryption, backup, vulnerability, incident-response, and breach-notification processes.
- [ ] Evaluate public-source personal information, sensitive information, doxxing, minors, and deletion/correction requests separately from account data.
- [ ] Confirm the Services are not directed to children under 13 and implement an age/actual-knowledge escalation if that changes.
- [ ] Complete GDPR/UK/international assessments, DPA terms, subprocessors, and transfer mechanisms before making international compliance claims.

### 7. Consumer protection, marketing, and communications

- [ ] Substantiate claims such as source count, freshness, coverage, accuracy, “real time,” licensed status, and completeness before publication.
- [ ] Clearly disclose generated or potentially delayed/incomplete attributes near material claims.
- [ ] Do not imply publisher endorsement from a source name, logo, or attribution.
- [ ] For commercial email, use accurate headers and subjects, identify the sender and postal address, provide a working opt-out, honor it within the legal period, and monitor vendors.
- [ ] Review automatic-renewal and negative-option requirements for every state in which paid recurring plans are sold.
- [ ] Maintain an accessible cancellation method and consistent checkout, invoice, and refund language.

### 8. Corporate, insurance, and records

- [ ] Confirm the exact registered entity name; repository materials currently require confirmation between “Strategic Implementation Advising, LLC” and prior variants.
- [ ] Confirm good standing, registered agent, business licenses, tax registrations, and authority to use the Project Cafecito trade name.
- [ ] Maintain a private legal email, phone number, and responsible owner.
- [ ] Evaluate Technology E&O, cyber, media liability, copyright/IP, privacy, and defamation coverage and exclusions.
- [ ] Maintain contract, license, notice, rights-decision, deletion, correction, training, and incident records under a documented schedule.
- [ ] Review accessibility obligations for the public website, policies, account creation, and complaint channels.
- [ ] Schedule at least annual legal review and event-driven review before new countries, full-text sources, training uses, or material product changes.

## Publication blockers

The drafted public documents should not be treated as launch-complete until these facts are confirmed:

1. exact legal entity name and address;
2. current account, authentication, billing, support, hosting, analytics, and communication vendors;
3. whether account/API data is sold, shared, used for targeted advertising, or disclosed beyond the draft;
4. fixed retention periods and deletion behavior;
5. private legal/privacy contact email and phone;
6. whether a DMCA agent is designated and the scope of any claimed safe harbor;
7. actual crawler identity, robots behavior, source opt-out, and cease-and-desist handling;
8. publisher rights for every RSS/feed source whose full text is returned;
9. whether the API emits and enforces rights metadata; and
10. checkout, renewal, cancellation, refunds, and affirmative terms acceptance.

## Primary legal references

- U.S. Copyright Office, copyright owner rights: https://www.copyright.gov/what-is-copyright/
- U.S. Copyright Office, fair use: https://copyright.gov/fair-use/
- U.S. Copyright Office, section 512 resources: https://www.copyright.gov/512/
- U.S. Copyright Office, DMCA designated-agent directory: https://www.copyright.gov/dmca-directory/
- U.S. Copyright Office, section 1201: https://www.copyright.gov/policy/1201/
- Ninth Circuit, `hiQ Labs v. LinkedIn` (2022): https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf
- California Attorney General, CCPA: https://www.oag.ca.gov/privacy/ccpa
- California Privacy Protection Agency, required CCPA notices: https://cppa.ca.gov/pdf/general_notices.pdf
- Federal Trade Commission, protecting personal information: https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business
- Federal Trade Commission, COPPA compliance: https://www.ftc.gov/business-guidance/resources/childrens-online-privacy-protection-rule-six-step-compliance-plan-your-business
- Federal Trade Commission, CAN-SPAM: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- Federal Trade Commission, advertising and marketing: https://www.ftc.gov/business-guidance/advertising-marketing

## Important legal conclusions from the sources

- Copyright owners generally control reproduction, adaptation, distribution, and public display, subject to statutory limitations.
- Fair use is case-specific; there is no fixed safe word count or percentage.
- Public-web access under `hiQ` is not a nationwide license to copy, bypass controls, violate contracts, or redistribute content.
- DMCA safe harbor is conditional and activity-specific; it does not legalize Cafecito’s own unlicensed copying or distribution.
- Covered California businesses need notices and operational rights processes, not merely a privacy-policy paragraph.
- FTC guidance emphasizes data minimization, reasonable security, honest marketing claims, and functioning email opt-outs.
