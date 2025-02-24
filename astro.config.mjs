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
    tailwind(),
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
        custom: ['article-icon.png'] // Específicamente incluimos el icono de artículo
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
      },
    })
  ],
  output: "static",
  adapter: vercel(),
  site: 'https://alezana85.github.io',
  base: 'alezana85.github.io',
});