import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';
import { resolve } from 'node:path';

const assetPrefix = process.env.LIRY_ASSET_PREFIX;
const envPrefixList = ['LIRY_'];

const rsbuildConfig = defineConfig({
  plugins: [pluginReact(), pluginLess()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
      '@@': resolve(import.meta.dirname)
    }
  },
  server: {
    port: 29763
  },
  source: {
    define: loadEnv({ prefixes: envPrefixList }).publicVars
  },
  output: {
    assetPrefix,
    sourceMap: true
  }
});

export default rsbuildConfig;
