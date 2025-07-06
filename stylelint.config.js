/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard', // 标准配置
    'stylelint-config-recommended-less' // 针对 Less 的推荐配置
  ],
  plugins: [
    'stylelint-less' // Less 插件
  ],
  customSyntax: 'postcss-less' // 指定 Less 的解析器
};

export default stylelintConfig;
