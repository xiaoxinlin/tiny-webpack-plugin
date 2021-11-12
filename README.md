# tinyimg-webpack-plugin-no-key

## 使用说明

```bash
npm install tinyimg-webpack-plugin-no-key -D
```

#### vue

```js
// vue.config.js
const TinyimgWebpackPlugin = require('tinyimg-webpack-plugin-no-key')

module.exports = {
  // ....
  configureWebpack: (config) => {
    // ....
    config.plugins.push(new TinyimgWebpackPlugin())
  }
}
```
