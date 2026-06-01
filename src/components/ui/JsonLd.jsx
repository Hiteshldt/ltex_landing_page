// Server component — emits a JSON-LD <script> for structured data / rich results.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
