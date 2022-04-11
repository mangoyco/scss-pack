# scss-pack

可以理解为适用于单纯的样式开发的 `scss` + `webpack` 开发环境 demo

## scene

在为一些简单的项目（比如只有`html` `css`），或者单独编写样式的时，希望使用 `scss` 语法并单独打包 样式 的情况

帮盆友搭了一下，感觉好像也挺有用，于是...发出来吧干脆

## How to use
安装依赖：
 ```bash
 npm install
 ```

 安装依赖：
 ```bash
 npm run dev
 ```

打包后css文件夹中的代码，即为scss文件夹中对应scss文件  
添加新的 `scss` 文件时，需要在 `webpack.config.js` 中的 `entry` 中再添加上对应项  

可以配合 `Live Serve` vscode插件使用，开发体验会更好 🎉