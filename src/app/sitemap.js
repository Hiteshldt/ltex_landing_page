const SITE_URL = "https://leaftex.bio";

export default function sitemap() {
  const now = new Date();
  const routes = [
    ["", 1.0],
    ["/products", 0.9],
    ["/products/fibers", 0.8],
    ["/products/vegan-leather", 0.8],
    ["/products/algae-leather", 0.8],
    ["/products/leaf-guard", 0.8],
    ["/technology", 0.7],
    ["/about", 0.6],
    ["/contact", 0.6],
  ];
  return routes.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
