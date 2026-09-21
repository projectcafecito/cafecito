# Code and Asset IP Readiness

**Internal worklog — not a public ownership representation, legal conclusion, or evidence that any listed control is complete.**

## Purpose and current status

Before expanding distribution, paid offerings, or Tech E&O representations, Cafecito needs an auditable chain of title for software and shipped assets, plus an open-source compliance record. Repository licenses, commit history, dependency manifests, or a public statement of ownership do not establish those facts by themselves.

Status: **not verified**. Do not represent Cafecito as having completed IP assignment, asset-rights clearance, OSS-license compliance, or SBOM controls until the evidence below is collected and reviewed.

## Required evidence and release gates

- [ ] Inventory every founder, employee, contractor, consultant, and external contributor to shipped code, documentation, design, and creative assets. Retain the signed agreement or assignment that transfers applicable rights to the correct Cafecito entity; identify any missing agreements and pre-entity work.
- [ ] Where work predates the operating entity, confirm a written transfer from the original owner to the entity. Counsel should determine whether moral-rights waivers or local-law provisions are needed.
- [ ] Build an asset register for every shipped logo, icon, photograph, illustration, font, screenshot, video, third-party mark, and AI-assisted asset: creator or source, license or assignment, permitted uses/channels, attribution obligation, proof location, and expiration or restriction.
- [ ] Generate and retain versioned SPDX or CycloneDX SBOMs for each production release, covering the API, corporate site, collector, deployed containers, and other shipped artifacts. Record the source commit, build timestamp, artifact/image digest, generator, and SBOM hash.
- [ ] Review direct and transitive dependency licenses, notices, source-offer/copyleft obligations, and modified third-party code before each commercial release. Record exceptions, mitigation, and approval; preserve required notices with the release.
- [ ] Establish an intake/release gate requiring code-dependency and creative-asset review before a new dependency, external contribution, or shipped asset is accepted.
- [ ] Have counsel review founder/entity transfers, contributor terms, license exceptions, trademarks, any AI-assisted-output policy, and the evidence appropriate for insurance underwriting.

## Evidence record for each release

Record the release identifier, legal entity, designated owner, contributor/assignment index, asset-register version, SBOM locations and hashes, license-review result, exceptions, counsel decision where needed, and final release approval. Retain supporting agreements and receipts in restricted-access storage; link only to their identifiers here.

## Information needed to complete this worklog

1. The legal entity that owns each relevant repository, site asset, and deployed artifact, and whether any work predates that entity.
2. A contributor list and the signed founder, employee, contractor, consultant, and vendor IP-assignment records (or confirmation that none exist).
3. The source, license/receipt, and intended use for every non-self-created image, logo, font, screenshot, video, trademark, customer asset, or stock asset.
4. Whether AI tools contributed source code, designs, copy, or images; the applicable account/tool terms and intended commercial use.
5. The production build and container artifacts actually deployed, so SBOM coverage targets releases rather than only repositories.
6. The intended repository licensing posture, including whether the current MIT licensing remains deliberate for each shipped codebase.
