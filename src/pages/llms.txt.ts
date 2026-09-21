export const prerender = true;

const content = `# Project Cafecito

> Project Cafecito builds practical AI tools and workflows for independent professionals and small businesses.

All Cafecito products are currently available as free tier. When paid services are introduced, applicable pricing, billing, renewal, cancellation, refund, tax, and additional contract terms will be presented before purchase.

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
- Description: Public-information discovery and search service with a browser-based News App, semantic query search, practical filtering, clean JSON output, and MCP support.
- Product page: https://cafecito.tech/beans/
- News App: https://beans.cafecito.tech/
- Developer documentation: https://developer.cafecito.tech/howtos/beans-howto

### Espresso

- Status: live, meaning publicly accessible; no guaranteed uptime or instantaneous delivery is promised.
- Description: Market intelligence suite with an API, event digests, synthesized signals, tags, relationships, and human-readable publications for dashboards, monitoring workflows, and AI agents.
- Product page: https://cafecito.tech/espresso/
- Developer documentation: https://developer.cafecito.tech/howtos/espresso-howto
- Publications: https://espresso.cafecito.tech/

## Products in development

### Cortado

- Status: in development.
- Description: Social media automation for consistent posting and campaign workflows.
- No public product page is currently available.

### MediCafe

- Status: in development.
- Description: Medical operations concept that is unavailable and is not accepting production medical or patient data.
- No public product page is currently available.

## Contact

- Private contact: https://cafecito.tech/docs/contact/
- Report a public software bug: https://github.com/soumitsalman/cafecito/issues/new?template=general_contact.yml

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
