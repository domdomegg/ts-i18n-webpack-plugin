# ts-i18n-webpack-plugin

Webpack plugin for running [ts-i18n](https://github.com/domdomegg/ts-i18n)

## Usage

Install the npm package:

```
npm i --save-dev ts-i18n-webpack-plugin
```

### Webpack

Add the plugin to your `webpack.config.js`

```js
module.exports = {
  plugins: [
    new TsI18nWebpackPlugin({
      inputDirectory: 'i18n/src',
      outputDirectory: 'i18n/generated',
      defaultLanguage: 'en'
    })
    ...
  ]
  ...
}
```

See the [webpack](https://webpack.js.org/concepts/plugins/) and [ts-i18n](https://github.com/domdomegg/ts-i18n) docs for more details.

### Create React App (using Craco)

Install the npm packages:

```
npm i --save-dev ts-i18n-webpack-plugin @craco/craco
```

Create a `craco.config.js` file with the following:

```js
const TsI18nWebpackPlugin = require("ts-i18n-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new TsI18nWebpackPlugin({
          inputDirectory: 'i18n',
          outputDirectory: 'src/i18n',
          defaultLanguage: 'en',
        }),
      ],
    },
  },
};
```

Update your `package.json` file to replace the calls to `react-scripts` in `scripts` with `craco`:

```
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
    ...
  }
  ...
}
```

See the [craco](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation) and [ts-i18n](https://github.com/domdomegg/ts-i18n) docs for more details.