/**
 * Renders a JSON-LD <script> tag for structured data.
 * Server component — no client JS shipped.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); this injects
      // structured data for search engines.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
