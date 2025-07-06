import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';

const rsbuildConfig = defineConfig({
  plugins: [pluginReact(), pluginLess()],
  server: {
    port: 29763
  }
});

export default rsbuildConfig;
