### 运行 Demo

```
yarn run android
```

### 图标更新

在 iconfont 的 gm-xfont 项目中上传 svg 图标，去色处理，更新链接，然后打包下载，解压后 iconfont.css 文件放到 ./src/icon 目录下，iconfont.ttf 放到 ./font 目录下，然后运行

```
yarn run icon
```
就可以使用新增的图标了。

>注意：在开发项目中暂时需要手动把 iconfont 复制到 ./android/app/src/main/assets/fonts/iconfont.ttf 目录
