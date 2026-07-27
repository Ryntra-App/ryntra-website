import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ryntra",
    short_name: "Ryntra",
    description: "Native Modrinth workspace for Android and iOS.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f9f3",
    theme_color: "#f4f9f3",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
