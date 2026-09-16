# External legal and business actions

Use this as the handoff list for counsel, publishers, vendors, insurers, and company operations.

## Priority 0 — before continuing unlicensed full-text distribution

1. **Copyright/internet counsel:** Review the exact Beans and PyCoffeeMaker data flow, copies, retention, outputs, and source terms. Decide whether unlicensed RSS/feed full text must be disabled while licenses are negotiated.
2. **Publisher permissions:** Obtain written rights for each source whose full text is returned. Permission must cover reproduction, feed ingestion, transformation, storage, API distribution, downstream display, territory, attribution, corrections, and termination. Add RAG, embeddings, translation, archives, datasets, and training only when expressly negotiated.
3. **Rights chain:** Confirm that the publisher can sublicense any wire-service, syndicated, freelance, image, video, chart, logo, and embedded content. Exclude anything it cannot license.
4. **Product owner:** Inventory all full-text sources and produce an evidence record for each: source terms, license, contact, effective/expiry dates, rights scope, and output fields.

## Priority 1 — launch controls

1. **Counsel:** Review and finalize the Terms, Privacy Policy, AUP, Third-Party Content Policy, liability cap, indemnity, governing law, and any dispute-resolution approach.
2. **Account/product team:** Add affirmative clickwrap to account and API-key creation; save policy version, timestamp, user, organization, and acceptance evidence.
3. **DMCA counsel/operations:** Determine safe-harbor eligibility, select and register one designated agent, create a private notice email and phone, publish matching details, implement counter-notices and a repeat-infringer policy, and keep registration current.
4. **Publisher operations:** Establish private opt-out, copyright, correction, retraction, and privacy-request channels with response targets and escalation owners.
5. **Engineering:** Implement a runtime rights registry, conservative defaults, per-output rights checks, machine-readable license metadata, and expiration/purge controls.
6. **Privacy counsel/operations:** Complete the data map, state-law threshold analysis, data-broker analysis, retention schedule, deletion workflows, and notices at collection.
7. **Security owner:** Create a written security and incident-response program and confirm vendor contracts and breach-notification responsibilities.

## Priority 2 — commercial readiness

1. **Content counsel:** Produce a Master Publisher Content License, publisher order form/rights schedule, and negotiation playbook.
2. **Commercial counsel:** Produce an enterprise MSA, order form, SLA, security exhibit, and DPA; add international transfer terms only where needed.
3. **Payments counsel/operations:** Review recurring-subscription, automatic-renewal, cancellation, refund, pricing-change, tax, and invoice behavior in every sales jurisdiction.
4. **Marketing owner:** Substantiate source-count, freshness, coverage, accuracy, licensing, and “real-time” claims; retain support for each claim.
5. **Insurance broker:** Quote and review Tech E&O, cyber, media liability, copyright/IP, privacy, and defamation coverage, focusing on exclusions.
6. **Corporate counsel/accountant:** Confirm exact legal name, trade-name filings, address, good standing, registered agent, licenses, taxes, and sanctions/export screening.

## Priority 3 — ongoing program

1. Re-review source terms, robots instructions, licenses, vendors, retention, and policy text at least annually and after material product changes.
2. Audit a sample of API responses for attribution, prohibited full text, expired rights, media leakage, and correct license metadata.
3. Exercise takedown, correction, privacy deletion, incident response, and license-termination purge procedures.
4. Track changes in federal copyright/AI litigation, state privacy and data-broker laws, consumer subscription rules, and publisher licensing markets.
5. Budget for contract negotiation, notice handling, outside counsel, licensing fees, and insurance renewals.

## Counsel package

Provide counsel:

- the public policies under `src/content/docs/`;
- `worklog/LEGAL_READINESS.md`;
- the publisher rights schedule and data map templates;
- sample Beans API responses for scraped-web and RSS/feed records;
- PyCoffeeMaker acquisition, processing, storage, and deletion diagrams;
- current source list, robots/terms decisions, and existing publisher communications;
- retention and infrastructure/vendor details; and
- account creation, API-key, checkout, cancellation, and policy-acceptance screens.
