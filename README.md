# @elin/tinyimg-webpack-plugin

## 使用说明

```bash
npm install @elin/tinyimg-webpack-plugin -D
```

#### 参数说明
- **logged** 是否显示日志
- **enabled** 是否启用图片压缩
- **minSize** 图片压缩的最小尺寸限制
- **apiKey** tinyPNG的api key(可选)，不填则使用秘法上传，超过20张不稳定

#### vue

```js
// vue.config.js
const TinyimgWebpackPlugin = require('@elin/tinyimg-webpack-plugin')

module.exports = {
  // ....
  configureWebpack: (config) => {
    // ....
    config.plugins.push(new TinyimgWebpackPlugin())
  }
}
```

**补充：** 如果使用了多个插件，webpack 插件的执行顺序首先是由不同钩子的触发时机决定的，具体可以看文档，而如果是相同钩子内的执行顺序是钩子本身决定的。比如 emit 钩子是一个 AsyncSeriesHook （异步串行钩子），会根据 plugin 插入的顺序从上向下执行，因此如果你用了比如 compression-webpack-plugin ，该插件与我们的插件使用的都是 emit 钩子，我们需要将该插件放最后，当图片压缩完成后，再处理 gzip 之类的逻辑。
