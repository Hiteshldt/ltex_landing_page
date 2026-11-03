export default function manifest() {
  return {
    name: "LeafTex — Farm to Fashion",
    short_name: "LeafTex",
    description:
      "Biomaterials platform upcycling banana, pineapple and algae waste into fibers, vegan leather and edible coatings.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#18C25A",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
