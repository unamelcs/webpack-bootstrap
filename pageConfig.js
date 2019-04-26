const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    {
        title: 'React 中文文档 - 用于构建用户界面的 JavaScript 库',
        name: 'react'
    },
    {
        title: 'Vue 中文文档 - 用于构建用户界面的 JavaScript 库',
        name: 'vue'
    },
]

const configPlugins = []
pages.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
      title: page.title,
      filename: `assets/${page.name}.html`, // 打包地址，访问地址示例: http://localhost:8080/assets/react.html
      template: `src/pages/${page.name}/${page.name}.html`,
      hash: true, // 为静态资源生成hash值
      minify: true,
      xhtml: true,
    });
    configPlugins.push(htmlPlugin);
  });
  exports.configPlugins = configPlugins
