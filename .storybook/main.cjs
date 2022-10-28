module.exports = {
  stories: ["../src/**/*.stories.@(ts|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  staticDirs: ["../public"],
};
