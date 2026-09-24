export type ProductStatus = 'live' | 'in-development';

export type ProductLinkType = 'overview' | 'documentation' | 'publication' | 'app';

export interface ProductLink {
  label: string;
  href: string;
  type: ProductLinkType;
  external?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  description: string;
  audience: string;
  capabilities: readonly string[];
  image: string;
  links: readonly ProductLink[];
}

/**
 * The public product lineup. Keep this list authoritative for product-facing
 * pages and machine-readable summaries; do not add roadmap ideas here until
 * they are part of Cafecito's public lineup.
 */
export const products = [
  {
    slug: 'beans',
    name: 'Beans',
    status: 'live',
    statusLabel: 'Live',
    category: 'News API',
    description:
      'A public-information discovery and search service with a browser-based News App, semantic search, practical filtering, clean JSON, and MCP support. Coverage and availability vary by source and record.',
    audience: 'Developers, AI agents, and teams building RAG or media-monitoring workflows.',
    capabilities: ['Natural-language article and document search', '14 documented filterable content types', 'Structured source, topic, entity, region, and date filters', 'Article, Story, Source, and mention context', 'Cursor-paginated JSON REST and MCP'],
    image: '/images/beans.png',
    links: [
      { label: 'Beans product overview', href: '/beans/', type: 'overview' },
      {
        label: 'Beans API and MCP documentation',
        href: 'https://developer.cafecito.tech/howtos/beans-howto',
        type: 'documentation',
        external: true,
      },
      {
        label: 'Beans News App',
        href: 'https://beans.cafecito.tech/',
        type: 'app',
        external: true,
      },
    ],
  },
  {
    slug: 'espresso',
    name: 'Espresso',
    status: 'live',
    statusLabel: 'Live',
    category: 'Market Intelligence Suite',
    description:
      'A curated intelligence suite combining the Espresso API and MCP with publications, event digests, synthesized signals, tags, and relationships.',
    audience: 'Developers, analysts, dashboards, and AI agents that need market-intelligence research and monitoring tools.',
    capabilities: ['Separate Event and Signal search', 'Semantic and structured filters', 'Traversal to supporting Events, evidence, and Sources', 'REST and MCP with cursor pagination', 'JSON, YAML, and TOON representations'],
    image: '/images/espresso.png',
    links: [
      { label: 'Espresso product overview', href: '/espresso/', type: 'overview' },
      {
        label: 'Espresso API and MCP documentation',
        href: 'https://developer.cafecito.tech/howtos/espresso-howto',
        type: 'documentation',
        external: true,
      },
      {
        label: 'Espresso Publications',
        href: 'https://espresso.cafecito.tech/',
        type: 'publication',
        external: true,
      },
    ],
  },
  {
    slug: 'cortado',
    name: 'Cortado',
    status: 'in-development',
    statusLabel: 'In development',
    category: 'Social Automation',
    description:
      'A planned social media automation product for consistent posting, cleaner campaigns, and less manual wrangling.',
    audience: 'Small businesses and consultants who need repeatable social publishing workflows.',
    capabilities: ['Social media automation', 'Campaign workflows', 'Consistent publishing'],
    image: '/images/cortado.png',
    links: [],
  },
  {
    slug: 'medicafe',
    name: 'MediCafe',
    status: 'in-development',
    statusLabel: 'In Limited Pilot',
    category: 'Healthcare Revenue Cycle Management',
    description:
      'A medical-billing workspace in pilot deployment, designed for clear and accountable operations.',
    audience: 'Medical practices and operations teams managing repetitive billing workflows.',
    capabilities: ['Source intake and identity review with synthetic data', 'Recorded service corrections and operator approval', 'Versioned claim assembly with an immutable approved payload', 'Simulated delivery tracking and uncertain-outcome reconciliation'],
    image: '/images/medicafe.png',
    links: [{ label: 'MediCafe product overview', href: '/medicafe/', type: 'overview' }],
  },
] as const satisfies readonly Product[];

export const liveProducts = products.filter((product) => product.status === 'live');
export const inDevelopmentProducts = products.filter((product) => product.status === 'in-development');
