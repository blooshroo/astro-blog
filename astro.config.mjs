import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--the-training-of-the-shrew.netlify.app/",
  integrations: [preact()]
});