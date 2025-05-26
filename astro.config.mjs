import { defineConfig } from 'astro/config';
import plantuml from 'astro-plantuml';

// https://astro.build/config
export default defineConfig({
  integrations: [plantuml()],
});