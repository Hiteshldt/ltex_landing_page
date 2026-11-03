// Shared SEO helpers: canonical URLs, per-page metadata, and breadcrumb structured data.
export const SITE_URL = "https://leaftex.bio";
export const SITE_NAME = "LeafTex";
export const ORG_ID = `${SITE_URL}/#organization`;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

// 1200×630 social-share cards live in /public/og/<name>.jpg.
export const ogImage = (name, alt) => ({ url: `/og/${name}.jpg`, width: 1200, height: 630, alt });

// Builds a page's metadata so the <title>, description, canonical, Open Graph and
// Twitter tags always agree. `title` follows the layout's "%s — LeafTex" template.
export function pageMetadata({ title, description, path, image, socialTitle }) {
  const shareTitle = socialTitle ?? (typeof title === "string" ? `${title} — ${SITE_NAME}` : title.absolute);
  const images = [ogImage(image, shareTitle)];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: shareTitle,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images },
  };
}

// crumbs: [[label, href], …] ending with the current page.
export function breadcrumbLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([name, href], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(href),
    })),
  };
}

export function productLd({ name, description, path, image, category, material }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    category,
    ...(material ? { material } : {}),
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": ORG_ID },
  };
}
