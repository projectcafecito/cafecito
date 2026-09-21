# Marketing Claims Readiness

**Internal worklog — not a public representation, service commitment, or legal advice.**

## Current public-documentation posture

On September 21, 2026, Cafecito removed fixed source-count, fixed-update-frequency, "real-time," "fresh," "tunable accuracy," and unqualified social-signal claims from the public site, developer portal, README, machine-readable catalog, and launch material. Beans and Espresso are described by their available features and limitations instead:

- source coverage, availability, update timing, and fields vary by source and record;
- semantic search, enrichment, trends, and generated analysis can be incomplete, unavailable, or incorrect;
- attention observations do not establish accuracy, popularity, or completeness;
- Espresso supports research, monitoring, and briefing workflows and is not professional advice or a sole basis for a consequential decision; and
- `full_content=true` does not grant downstream rights and must not be used beyond a documented source/field/use basis.

The public documentation change is not evidence that the underlying controls below exist.

## Future engineering and operations work

- [ ] Create a canonical claim registry with: exact wording, approved surfaces, definition, supporting owner, evidence location, measurement date, revalidation date, limitations, and retirement trigger.
- [ ] Generate an auditable source report from production data. Define a qualifying source/outlet; record active, inactive, blocked, duplicate, failed, and rights-restricted sources; and preserve the query/version used to calculate any published count.
- [ ] Instrument production ingestion-to-customer-availability latency by source type. Retain representative median, P95, and worst-case measurements, document outages and publisher delays, and alert when an approved freshness claim no longer holds.
- [ ] Provide a public or internal source-health view that distinguishes cataloged sources from actively ingesting and customer-queryable sources before any quantity or freshness claim is restored.
- [ ] Enforce third-party-content rights at the API output layer by source, field, permitted use, territory, customer, and expiration. Unknown, withdrawn, expired, or restricted rights must fail closed for `full_content` and any other third-party expression.
- [ ] Add provenance for published/generated Espresso output: source URLs or permitted snapshots, input/output version, timestamp, material human edits, and correction history.
- [ ] Add controls for generated-output quotation/extractive similarity and explicit quotation handling before using output in broader distribution or paid products.
- [ ] Add an internal high-risk publication escalation for crime, fraud, misconduct, private persons, minors, health claims, and potential mistaken identity.
- [ ] Before paid API-key or subscription sales, implement affirmative acceptance of the applicable Terms and policies and retain the user or organization, policy version, timestamp, and acceptance evidence. Do not describe this as clickwrap until it is operating and verified.

## External legal review required

- [ ] Counsel reviews each proposed quantitative, comparative, freshness, accuracy, social-signal, cost-saving, or performance claim against its completed evidence package before publication.
- [ ] Counsel confirms that the exact public wording, qualifications, and any applicable consumer-protection requirements are appropriate for the jurisdictions and channels in which the claim will appear.
- [ ] Counsel reviews the source/field/use rights model and the `full_content` enforcement design before Cafecito represents rights-aware access as implemented or expands distribution.
- [ ] Counsel reviews the high-risk editorial escalation and evidence-preservation processes before they are described as operating controls.

## Release gate for any future objective claim

Do not publish or restore an objective marketing claim unless all of the following are recorded in the claim registry:

1. The exact wording and every public surface using it.
2. A measurable definition that does not rely on an implied guarantee.
3. A reproducible production measurement, including its date, method, population, exclusions, and raw results.
4. Known limitations, including availability, rights, latency, and source-health limitations where relevant.
5. Named engineering/data, product, marketing, and legal owners.
6. A revalidation cadence and a removal trigger if evidence no longer supports the claim.

Do not use a disclaimer to cure an unsupported claim. If the evidence is unavailable, use a capability description without the objective assertion.
