# 单独的样式开发

## scene

在为一些项目，或者某些html文件单独编写的css文件的时候，使用 `scss` + `weboack` 单独打包 `scss`文件

## How to use
安装依赖：
 ```bash
 npm start
 ```

 安装依赖：
 ```bash
 npm run dev
 ```

css文件夹中的代码，即为scss文件夹中对应scss文件
添加新的 `scss` 文件时，需要在 `webpack.config.js` 中的 `entry` 中再添加上对应项