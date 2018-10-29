<img src="https://github.com/overtrue/vscode-miniapp-helper/blob/master/assets/images/logo.png" align="right" width="100"/>
<h1 align="left">微信小程序开发助手</h1>

<img src="https://github.com/overtrue/vscode-miniapp-helper/blob/master/assets/images/logo.png" height="16"/> 微信小程序开发助手 for VSCode，代码提示 + 语法高亮

## Installation

- 打开 VSCode
- 拓展中心搜索 "小程序开发助手"
- 点击安装

## Features

- 支持 js，json，wxml 文件的代码提示
- wxml 文件语法高亮

## Snippets

### js
| 前缀 | 描述 |
| :-- | :-- |
| `animation-width` | 宽度 |
| `audioContext-setSrc` | 设置音频的地址。1.6.0 起不再维护 |
| `backAudioManager-stop` | 停止 |
| `cameraContext-takePhoto` | 拍照，可指定质量(high, normal, low，默认normal)，成功则返回图片 |
| `cvsCtx-translate` | 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角 |
| `downTask-onProgressUpdate` | 监听下载进度变化事件 |
| `fileManager-writeFileSync` | 写文件，同步接口 |
| `fileStat-isFile` | 判断当前文件是否一个普通文件 |
| `getApp` | 获取小程序实例 |
| `getCurrentPages` | 获取当前页面栈 |
| `innerAudioContext-stop` | 停止 |
| `interObser-relativeToViewport` | 指定页面显示区域作为参照区域之一 |
| `livePlayerContext-stop` | 停止 |
| `livePusherContext-toggleTorch` | 切换闪光灯 |
| `logger-warn` | 写 warn 日志，可以提供任意个参数 |
| `mapContext-translateMarker` | 平移 marker，带动画 |
| `recordManager-stop` | 停止录音 |
| `reqTask-abort` | 中断请求任务 |
| `selQuery-selectViewport` | 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息 |
| `sockTask-send` | 通过 WebSocket 连接发送数据 |
| `upTask-onProgressUpdate` | 监听上传进度变化事件 |
| `updateManager-onUpdateReady` | 当新版本下载完成，会进行回调 |
| `videoContext-stop` | 停止 |
| `worker-terminate` | 结束当前 Worker 线程，仅限在主线程 Worker 实例上调用 |
| `wx-writeBLECharacteristicValue` | 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用，具体参照 characteristic 的 properties 属性 |
| `wx-Component` | Component 对象及其生命周期函数和回调函数 |
| `wx-app` | App 对象及其生命周期函数和回调函数 |
| `wx-page` | Page 对象及其生命周期函数和回调函数 |
---

### json
| 前缀 | 描述 |
| :-- | :-- |
| `debug` | App 对应的 JSON 文件 debug 配置项，是否是调试模式 |
| `functionalPages` | 是否启用插件功能页 |
| `networktimeout` | App 对应的 JSON 文件 networktimeout 配置项，超时设置 |
| `pages` | App 对应的 JSON 文件 pages 配置项 |
| `plugins` | 使用到的插件 |
| `preloadRule` | 分包预下载规则 |
| `requiredBackgroundModes` | 需要在后台使用的能力，如“音乐播放” |
| `resizable` | iPad 小程序是否支持屏幕旋转，默认关闭 |
| `subPackages` | App 对应的 JSON 文件 subPackages 配置项，分包结构配置 |
| `tabbar` | App 对应的 JSON 文件 tabbar 配置项 |
| `window` | App 对应的 JSON 文件 window 配置项 |
| `workers` | Worker 代码放置的目录 |
| `page` | Page 页面对应的 JSON 文件配置项 |
---

### wxml
| 前缀 | 描述 |
| :-- | :-- |
| `ad` | 广告 |
| `audio` | 音频。1.6.0 版本开始，该组件不再维护 |
| `block` | block 标签，不是组件，只是包装元素，不会在页面中做任何渲染，只接受控制属性 |
| `button` | 按钮 |
| `camera` | 系统相机。需要用户授权 scope.camera |
| `canvas` | 画布 |
| `checkbox-group` | 多项选择器，内部由多个 checkbox 组成 |
| `checkbox` | 多选项目 |
| `cover-image` | 覆盖在原生组件之上的图片视图，可覆盖的原生组件同 cover-view，支持嵌套在 cover-view 里 |
| `cover-view` | 覆盖在原生组件之上的文本视图，可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher，只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button |
| `form` | 表单，将组件内的用户输入的 <switch/> <input/> <checkbox/> <slider/> <radio/> <picker/> 提交 |
| `functional-page-navigator` | 页面链接 |
| `icon` | 图标 |
| `image` | 图片。默认宽度 300px、高度 225px。image 组件中二维码/小程序码图片不支持长按识别 |
| `input` | 输入框 |
| `label` | 用来改进表单组件的可用性，使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。目前可以绑定的控件有 <button/>、<checkbox/>、<radio/>、<switch/> |
| `live-player` | 实时音视频播放。默认宽度 300px、高度 225px，可通过 wxss 设置宽高 |
| `live-pusher` | 实时音视频录制。需要用户授权 scope.camera、scope.record。默认宽度为 100%、无默认高度，请通过 wxss 设置宽高 |
| `map` | 地图 |
| `movable-area` | movable-view 的可移动区域 |
| `movable-view` | 可移动的视图容器，在页面中可以拖拽滑动 |
| `navigator` | 页面链接 |
| `open-data` | 用于展示微信开放的数据 |
| `picker-view-column` | 仅可放置于 <picker-view />中 其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致 |
| `picker-view` | 嵌入页面的滚动选择器 |
| `picker` | 滚动选择器。现支持三种选择器 通过 mode 来区分，分别是普通选择器、时间选择器、日期选择器。默认是普通选择器 |
| `progress` | 进度条 |
| `radio-group` | 单项选择器，内部由多个 <radio/> 组成 |
| `radio` | 单选项目 |
| `rich-text` | 富文本 |
| `scroll-view` | 可滚动视图区域 |
| `slider` | 滑动选择器 |
| `swiper-item` | 仅可放置在 <swiper/>组件中，宽高自动设置为 100% |
| `swiper` | 滑块视图容器 |
| `switch` | 开关选择器 |
| `text` | 文本 |
| `textarea` | 多行输入框 |
| `video` | 视频。默认宽度 300px、高度 225px，可通过 wxss 设置宽高 |
| `view` | 基础的视图容器 |
| `web-view` | 可以用来承载网页的容器，会自动铺满整个小程序页面 |
---

## License

MIT

## Reference

代码提示部分内容参考自拓展：[ChandZhang/wechat-snippet-vscode](https://github.com/ChandZhang/wechat-snippet-vscode)

**Enjoy!**
