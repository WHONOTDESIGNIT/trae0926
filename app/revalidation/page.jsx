import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Revalidation'
};

const explainer = `
# Next.js Revalidation Demo

This page demonstrates Next.js revalidation features on Netlify.

## Static Generation with Revalidation

Next.js allows you to create or update static pages after you've built your site. 
Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, 
without needing to rebuild the entire site.

## How it works

1. **On-demand Revalidation**: Trigger revalidation programmatically
2. **Time-based Revalidation**: Automatically revalidate after a certain time period
3. **Background Regeneration**: Pages are regenerated in the background

## Example Usage

\`\`\`javascript
// In your page component
export async function getStaticProps() {
  const data = await fetchData();
  
  return {
    props: { data },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
\`\`\`

This feature is particularly useful for:
- E-commerce product pages
- Blog posts
- News articles
- Any content that changes periodically
`;

export default function RevalidationPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <Markdown content={explainer} />
        </div>
    );
}