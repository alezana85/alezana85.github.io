// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Ensure Tailwind builds correctly
      config: { applyBaseStyles: false }
    }),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        'simple-icons': ['*'],
        ph: ['*'],
        heroicons: ['*'],
        fa: ['*'],
        lucide: ['*'],
        bi: ['*'],
        tabler: ['*'],
        custom: ['article-icon.png']
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    })
  ],
  output: "static",
  site: 'https://alezana85.github.io',
  base: '/',
  build: {
    assets: '_assets',
    assetsPrefix: '/'
  },
  // Remove vercel adapter since we're using GitHub Pages
  // adapter: vercel(),
});