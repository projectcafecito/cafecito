---
title: "Launching Beans"
description: "News API & MCP for AI agents, RAG pipelines, trend dashboards, and real-time content workflows."
publishedAt: 2026-04-08
type: announcement
tags: ["beans", "api", "mcp", "news", "agents"]
---

Hey gang, I am back with some fresh shit. But first, it is my pleasure to introduce Project Cafecito's second product: Beans.

Beans, like coffee beans, is our news and blogs API. Like everything these days, it comes with an MCP server for AI agents. It is currently in beta and therefore considers every bug a feature. But:

- Good news: It is free until we knock out the list of v1 readiness bugs.
- Better news: v1 will be cheaper than other news APIs out there. Yes, we will beat the price for a similar rate limit and quota. That's literally the point.

Create an API key and start sipping for free.

![Beans API & MCP banner](/images/beans-banner.png)

There are so many news APIs out there. They all charge an arm and a leg for a bunch of sources no one cares about. Almost none give you social media stats or trend data.

And that's why, when you need a fresh data pipeline for your AI agent's RAG without bleeding money, you use Beans.

## Cheaper Price, Higher Precision

## Features

The stuff that actually matters:

- Vector search: Plug straight into your RAG agent. You can even adjust search accuracy.
- Keyword search: Filter by people, products, places, companies, stock tickers, and categories.
- Enriched tags and sentiment analysis: Avoid clickbait with 100+ categories, 24+ sentiments, and named entities extracted from the actual body of the content.
- Story propagation mapping: See how different sources are publishing the same news. This one took some work and is still getting tuned.
- Social media stats and trend scoring from real social signals: Find what the cool kids are talking about.
- 7,000+ sources and still growing: Source quality matters, and so does focus. We have the usual suspects, and we pick sources to primarily serve technology, engineering, business, and finance aficionados. One thing we are intentionally focused on is sourcing tech blogs from the many amazing startups out there.

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

Pulling a bunch of RSS feeds is not much on its own these days. But the second you try to feed real-time content into an AI agent or RAG pipeline at scale, things get complicated fast.

I got tired of:

- Crawling the same 7,000+ sites and social media groups.
- Dealing with rate limits, timeouts, and random 403s.
- Clickbait that had nothing to do with the content.
- Vector DBs choking on burst loads.
- Having zero idea what is trending globally.

So we built Beans API & MCP. You can find trending stuff, latest stuff, and stuff from your grandma's closet. We have some old stuff. You can filter by your heart's desire. One API key and boom.

## How We Built It

Under the hood:

- One dude collects news and blogs from RSS feeds and social media.
- One dude parses the stuff and extracts keywords that matter.
- One dude stores it in the vector data warehouse.
- One dude serves it on a plate to you through the API and MCP server.

Theoretically, it is a simple system. Building the first prototype was a cakewalk. But building cost-efficient production-scale infrastructure is hard. When that infrastructure has to maintain reliability through my stress testing, it starts sweating from places where the sun does not shine.

That is why it took a while to release the API. In the coming days, I will publish a series of blogs on how I keep the infrastructure duct-taped together.

## So... What Now?

Fire up that app or agent with Beans. It's free.

There are some obvious bugs that I am still pruning out. I would love to hear from you.

- Drop a comment.
- File a bug.
- Request a new feature.
- Stress test it because you feel like it.
- Just yell at me. I read every single reply. Yes, even the mean ones.

[Try it here](https://cafecito.tech/beans).

Happy building. And may your vectors always stay dense.
