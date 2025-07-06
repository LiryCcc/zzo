import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';

const assetPrefix = process.env.LIRY_ASSET_PREFIX;
const envPrefixList = ['LIRY_'];

const rsbuildConfig = defineConfig({
  plugins: [pluginReact(), pluginLess()],
  server: {
    port: 29763
  },
  source: {
    define: loadEnv({ prefixes: envPrefixList }).publicVars
  },
  output: {
    assetPrefix
  }
});

export default rsbuildConfig;
