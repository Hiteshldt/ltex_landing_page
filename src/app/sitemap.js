import { absoluteUrl } from "@/lib/seo";

// [path, priority, images shown on that page]
const ROUTES = [
  ["/", 1.0, ["/fiber.webp", "/pineapple-fiber.webp", "/algae-leather.webp"]],
  ["/products", 0.9, ["/fiber.webp", "/CaramelBrown.webp", "/algae-leather.webp", "/coating.webp"]],
  ["/products/fibers", 0.8, ["/fiber.webp", "/pineapple-fiber.webp"]],
  ["/products/vegan-leather", 0.8, ["/CaramelBrown.webp", "/ChocolateBrown.webp", "/tan-beige.webp", "/Amber.webp", "/espresso-black.webp"]],
  ["/products/algae-leather", 0.8, ["/algae-leather.webp"]],
  ["/products/leaf-guard", 0.8, ["/coating.webp"]],
  ["/technology", 0.7, []],
  ["/about", 0.6, []],
  ["/contact", 0.6, []],
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(([path, priority, images]) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
    ...(images.length ? { images: images.map((src) => absoluteUrl(src)) } : {}),
  }));
}
