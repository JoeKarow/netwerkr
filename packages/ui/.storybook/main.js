const path = require( 'path' )

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-swc",
    "storybook-dark-mode",
    // "@react-theming/storybook-addon",
    // {
    //   name: "storybook-addon-next",
    //   options: {
    //     // nextConfigPath: path.resolve( __dirname, '../../../', 'apps/web/next.config.js' )
    //   }
    // }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}