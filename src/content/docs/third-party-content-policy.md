---
title: Third-Party Content Policy
description: How Project Cafecito handles source content, RSS feeds, attribution, rights, corrections, and publisher requests.
---

# Third-Party Content Policy

**Effective date:** September 11, 2026

Project Cafecito services help users discover and analyze news, blogs, and other public-source material. This policy explains the content model and how authors, publishers, subjects, and users can raise concerns.

## Content model

| Content type | Cafecito handling | Typical user-facing output |
|---|---|---|
| Public webpages processed by the PyCoffeeMaker pipeline | Content may be fetched and processed to derive structured attributes. Cafecito does not intentionally provide the scraped full article body to API users. | Source URL and available source metadata, plus categories, entities, sentiment, relationships, scores, and other derived attributes. |
| Publisher-controlled RSS or similar feeds | Cafecito may receive article text directly in the feed rather than extracting it from the linked webpage. | Feed-supplied fields may include full text when allowed by the applicable source policy or license. |
| Cafecito-generated attributes | Automated systems classify and relate source material. | Categories, entities, sentiment, topics, scores, summaries, and related metadata. |

The technical source of a copy does not decide the legal rights attached to it. Content supplied through an RSS or similar feed may remain copyrighted and may not include permission for commercial API redistribution or downstream republication. Cafecito therefore treats full-text display, storage, transformation, API distribution, customer display, embeddings/RAG, and model training as separate rights that must be supported by a license or other legally approved basis.

## Ownership and permitted use

Third-Party Content remains owned by the applicable author, publisher, syndication service, photographer, or other rights holder. Cafecito does not claim ownership of it. Attribution or a link does not itself grant a right to copy or redistribute content.

Unless machine-readable rights metadata, product documentation, an order form, or a separate written license expressly permits otherwise, users must not republish, resell, publicly display, archive, create datasets from, train models on, or remove attribution from full-text Third-Party Content.

## Source and rights records

Where available, Cafecito records the publisher, author, canonical URL, publication and update dates, acquisition method, source identifier, and applicable license or restriction. Rights may differ by source, article, field, territory, channel, and use. If rights metadata conflicts with a broader product description, the narrower restriction controls unless Cafecito confirms otherwise in writing.

Images, video, charts, logos, social-media embeds, and wire-service material may carry rights different from article text and should not be copied unless separately authorized.

## Automated attributes and editorial care

Automated categories, entities, sentiment, scores, summaries, and story relationships can be wrong. Cafecito aims to preserve source attribution, allegation language, publication dates, and traceability. Users should review the original source before relying on an output, especially for crime, health, finance, minors, safety, or claims about identifiable people.

## Publisher controls and content requests

Authors, publishers, rights holders, and subjects may request review of:

- copyright or license concerns;
- source opt-out or crawl restrictions;
- incorrect attribution, canonical URL, author, or publication date;
- a source correction, retraction, or withdrawal;
- inaccurate or harmful machine-generated attributes;
- sensitive personal information, doxxing, or information about a minor; or
- retention or deletion required by an applicable license or law.

Start with the [Project Cafecito contact form](https://github.com/soumitsalman/cafecito/issues/new?template=general_contact.yml), identifying the affected URL or record and the requested action. Do not post copyrighted material beyond what is needed to identify it, confidential information, identification documents, or sensitive personal data in a public issue. Cafecito will provide a private channel when verification or supporting records are needed.

Formal written notices may also be mailed to:

**Strategic Implementation Advising, LLC**  
Attn: Project Cafecito Content Rights  
7683 SE 27th St. #188  
Mercer Island, WA 98040  
United States

## Review process

We may request information reasonably necessary to verify identity, authority, ownership, the affected material, and the legal or factual basis for the request. Depending on urgency and risk, we may temporarily restrict a URL, domain, full-text field, or derived attribute while reviewing it. Outcomes may include correction, source refresh, attribution change, full-text suppression, removal, domain restriction, restoration, or no action.

We keep records needed to apply a decision consistently, honor license restrictions, prevent repeat issues, and meet legal obligations. A source correction or license termination may require cache invalidation and downstream deletion instructions.

## DMCA notices

The public documentation reviewed for this policy does not identify a registered Digital Millennium Copyright Act agent, and this policy does not represent that the general contact channel is a registered agent. A rights holder may still send a detailed copyright complaint through the private process or mailing address above. The complaint should identify the copyrighted work, the affected Cafecito URL or record, contact information, the rights holder’s authority, a good-faith statement, an accuracy statement under penalty of perjury, and a physical or electronic signature.

Counsel must confirm any existing registration and Cafecito’s eligibility. Registration of a designated agent, publication of matching contact details, and a formal counter-notice process are operational prerequisites before Cafecito relies on a DMCA safe harbor.
