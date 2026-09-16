---
title: "Launching Beans"
description: "News API & MCP for AI agents, search workflows, and trend dashboards using public information updated daily."
publishedAt: 2026-04-08
type: announcement
tags: ["beans", "api", "mcp", "news", "agents"]
---

Hey gang, I am back with some fresh shit. But first, it is my pleasure to introduce Project Cafecito's second product: Beans.

Beans, like coffee beans, is our news and blogs API. Like everything these days, it comes with an MCP server for AI agents. It is currently in beta and therefore considers every bug a feature.

All Cafecito products are currently available as free tier. When paid services are introduced, applicable pricing, billing, renewal, cancellation, refund, tax, and additional contract terms will be presented before purchase.

Create an API key and start sipping for free.

![Beans API & MCP banner](/images/beans-banner.png)

Beans focuses on broad source coverage, precise search, useful metadata, and trend context for applications that need current public information.

## Features

The stuff that actually matters:

- Vector search: Plug straight into your RAG agent. You can even adjust search accuracy.
- Keyword search: Filter by people, products, places, companies, stock tickers, and categories.
- Enriched tags and sentiment analysis: Avoid clickbait with 100+ categories, 24+ sentiments, and named entities extracted from the actual body of the content.
- Story propagation mapping: See how different sources are publishing the same news. This one took some work and is still getting tuned.
- Social media stats and trend scoring from real social signals: Find what the cool kids are talking about.
- Nearly 15,000 sources/outlets: Cafecito collects data from nearly 15,000 different public-information and publicly available sources/outlets daily. Source availability varies, and inclusion does not imply endorsement or unrestricted content rights.

**Coverage update — September 16, 2026:** coverage has grown substantially since the original launch. The current source figure replaces the earlier launch count and describes sources/outlets, not unique publishers.

## Who Is This For?

If you're building:

- AI agents that need the latest data, not just something that matches a query.
- A daily newsletter on a specific topic, person, place, or company.
- Tools for tracking product launches from different tech startups and how to use them.
- News trend intelligence dashboards.
- A news app to take over the world.
- Anything that lives and dies by "what's happening today."

Then Beans is the missing piece you need.

## Why We Built It

Collecting and enriching public information at scale gets complicated fast when an application needs current, searchable source material.

I got tired of:

- Maintaining broad, changing source coverage.
- Dealing with availability changes, incomplete records, and inconsistent metadata.
- Clickbait that had nothing to do with the content.
- Vector DBs choking on burst loads.
- Having zero idea what is trending globally.

So we built Beans API & MCP. You can find trending stuff, latest stuff, and stuff from your grandma's closet. We have some old stuff. You can filter by your heart's desire. One API key and boom.

## How We Built It

Under the hood, public-information collection and enrichment systems organize source material, add useful metadata, and make available results searchable through the API and MCP service.

Theoretically, it is a simple system. Building the first prototype was a cakewalk. But building cost-efficient production-scale infrastructure is hard. When that infrastructure has to maintain reliability through my stress testing, it starts sweating from places where the sun does not shine.

That is why it took a while to release the API. In the coming days, I will publish a series of blogs on how I keep the infrastructure duct-taped together.

## So... What Now?

Fire up that app or agent with Beans. It is currently available as free tier.

There are some obvious bugs that I am still pruning out. I would love to hear from you.

- Drop a comment.
- File a bug.
- Request a new feature.
- Stress test it because you feel like it.
- Just yell at me. I read every single reply. Yes, even the mean ones.

[Try it here](https://cafecito.tech/beans).

Happy building. And may your vectors always stay dense.
