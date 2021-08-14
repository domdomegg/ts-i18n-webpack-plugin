# ts-i18n-webpack-plugin

Webpack plugin for running [ts-i18n](https://github.com/domdomegg/ts-i18n)

## Usage

Install the npm package:

```
npm i --save-dev ts-i18n-webpack-plugin
```

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

See the [ts-i18n](https://github.com/domdomegg/ts-i18n) docs for more details about configuration and setup.