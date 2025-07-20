import { defineConfig } from 'cspell';

const cspellConfig = defineConfig({
  words: ['rsbuild', 'Rsbuild', 'dawanbuchila', 'liry', 'pico', 'languagedetector'],
  ignorePaths: ['pnpm-lock.yaml', 'package.json', 'dist']
});

export default cspellConfig;
