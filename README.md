<img src="https://raw.githubusercontent.com/overtrue/vscode-miniapp-helper/master/assets/images/logo.png" align="right" width="100"/>
<h1 align="left">微信小程序开发助手</h1>

<img src="https://raw.githubusercontent.com/overtrue/vscode-miniapp-helper/master/assets/images/logo.png" height="16"/> 微信小程序开发助手 for VSCode，代码提示 + 语法高亮

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
| `animation-backgroundColor` | 设置背景色 |
| `animation-bottom` | 底部距离 |
| `animation-height` | 长度 |
| `animation-left` | 左侧距离 |
| `animation-matrix` | 平面矩阵变换 |
| `animation-matrix3d` | 立体矩阵变换 |
| `animation-opacity` | 透明度，参数范围 0~1 |
| `animation-right` | 右侧距离 |
| `animation-rotate` | 绕原点旋转 |
| `animation-rotate3d` | 3D 旋转 |
| `animation-rotateX` | 绕 x 轴旋转 |
| `animation-rotateY` | 绕 Y 轴旋转 |
| `animation-rotateZ` | 从 Z 轴顺时针旋转一个角度 |
| `animation-scale` | x轴[y轴]缩放。一个参数时，表示在X轴、Y轴两个相同；两个参数时表示在X轴，在Y轴不同 |
| `animation-scale3d` | 3D 缩放 |
| `animation-scaleX` | x 轴缩放 |
| `animation-scaleY` | y 轴缩放 |
| `animation-scaleZ` | z 轴缩放 |
| `animation-skew` | x轴[y轴]倾斜。一个参数时，表示在X轴；两个参数时表示在X轴，在Y轴 |
| `animation-skewX` | x 轴倾斜 |
| `animation-skewY` | y 轴倾斜 |
| `animation-top` | 顶部距离 |
| `animation-translate` | x轴[y轴]偏移。一个参数时，表示在X轴；两个参数时表示在X轴，在Y轴 |
| `animation-translate3d` | 3D 偏移 |
| `animation-translateX` | x 轴偏移 |
| `animation-translateY` | y 轴偏移 |
| `animation-translateZ` | z 轴偏移 |
| `animation-width` | 宽度 |
| `audioContext-pause` | 暂停。1.6.0 起不再维护 |
| `audioContext-play` | 播放。1.6.0 起不再维护 |
| `audioContext-seek` | 跳转到指定位置，单位 s。1.6.0 起不再维护 |
| `audioContext-setSrc` | 设置音频的地址。1.6.0 起不再维护 |
| `backAudioManager-onCanplay` | 背景音频进入可以播放状态，但不保证后面可以流畅播放 |
| `backAudioManager-onEnded` | 背景音频自然播放结束事件 |
| `backAudioManager-onError` | 背景音频播放错误事件 |
| `backAudioManager-onNext` | 用户在系统音乐播放面板点击下一曲事件（iOS only） |
| `backAudioManager-onPause` | 背景音频暂停事件 |
| `backAudioManager-onPlay` | 背景音频播放事件 |
| `backAudioManager-onPrev` | 用户在系统音乐播放面板点击上一曲事件（iOS only） |
| `backAudioManager-onStop` | 背景音频停止事件 |
| `backAudioManager-onTimeUpdate` | 背景音频播放进度更新事件 |
| `backAudioManager-onWaiting` | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 |
| `backAudioManager-pause` | 暂停 |
| `backAudioManager-play` | 播放 |
| `backAudioManager-seek` | 跳转到指定位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 |
| `backAudioManager-src` | 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav |
| `backAudioManager-stop` | 停止 |
| `cameraContext-startRecord` | 开始录像 |
| `cameraContext-stopRecord` | 结束录像，成功则返回封面与视频 |
| `cameraContext-takePhoto` | 拍照，可指定质量(high, normal, low，默认normal)，成功则返回图片 |
| `cvsCtx-addColorStop` | 创建一个颜色的渐变点 |
| `cvsCtx-arc` | 画一条弧线 |
| `cvsCtx-arcTo` | 根据控制点和半径绘制圆弧路径 |
| `cvsCtx-beginPath` | 开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边 |
| `cvsCtx-bezierCurveTo` | 创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点 |
| `cvsCtx-clearRect` | 清除画布上在该矩形区域内的内容 |
| `cvsCtx-clip` | 从原始画布中剪切任意形状和尺寸 |
| `cvsCtx-closePath` | 关闭一个路径 |
| `cvsCtx-createCircularGradient` | 创建一个圆形的渐变颜色。需要使用 addColorStop() 来指定渐变点，至少要两个 |
| `cvsCtx-createLinearGradient` | 创建一个线性的渐变颜色。需要使用 addColorStop() 来指定渐变点，至少要两个 |
| `cvsCtx-createPattern` | 对指定的图像创建模式的方法，可在指定的方向上重复元图像 |
| `cvsCtx-draw` | 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中 |
| `cvsCtx-drawImage` | 绘制图像到画布 |
| `cvsCtx-fill` | 对当前路径中的内容进行填充 |
| `cvsCtx-fillRect` | 填充一个矩形 |
| `cvsCtx-fillStyle` | 设置填充色。基础库 1.9.90 起支持 |
| `cvsCtx-fillText` | 在画布上绘制被填充的文本 |
| `cvsCtx-font` | 设置当前字体样式的属性 |
| `cvsCtx-globalAlpha` | 设置全局画笔透明度。基础库 1.9.90 起支持 |
| `cvsCtx-globalCompositeOperation` | 该属性是设置要在绘制新形状时应用的合成操作的类型 |
| `cvsCtx-lineCap` | 设置线条的端点样式。基础库 1.9.90 起支持 |
| `cvsCtx-lineDashOffset` | 设置虚线偏移量的属性 |
| `cvsCtx-lineJoin` | 设置线条的交点样式。基础库 1.9.90 起支持 |
| `cvsCtx-lineTo` | lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线 |
| `cvsCtx-lineWidth` | 设置线条的宽度。基础库 1.9.90 起支持 |
| `cvsCtx-measureText` | 测量文本尺寸信息，目前仅返回文本宽度。同步接口 |
| `cvsCtx-moveTo` | 把路径移动到画布中的指定点，不创建线条 |
| `cvsCtx-quadraticCurveTo` | 创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点 |
| `cvsCtx-rect` | 创建一个矩形 |
| `cvsCtx-restore` | 恢复之前保存的绘图上下文 |
| `cvsCtx-rotate` | 以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴 |
| `cvsCtx-save` | 保存当前的绘图上下文 |
| `cvsCtx-scale` | 在调用 scale 方法后，之后创建的路径其横纵坐标会被缩放。多次调用 scale，倍数会相乘 |
| `cvsCtx-setFillStyle` | 设置填充色 |
| `cvsCtx-setFontSize` | 设置字体的字号 |
| `cvsCtx-setGlobalAlpha` | 设置全局画笔透明度 |
| `cvsCtx-setLineCap` | 设置线条的端点样式 |
| `cvsCtx-setLineDash` | 设置线条的宽度 |
| `cvsCtx-setLineJoin` | 设置线条的交点样式 |
| `cvsCtx-setLineWidth` | 设置线条的宽度 |
| `cvsCtx-setMiterLimit` | 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效 |
| `cvsCtx-setShadow` | 设置阴影样式 |
| `cvsCtx-setStrokeStyle` | 设置边框颜色 |
| `cvsCtx-setTextAlign` | 用于设置文字的对齐 |
| `cvsCtx-setTextBaseline` | 用于设置文字的水平对齐 |
| `cvsCtx-setTransform` | 使用矩阵重新设置（覆盖）当前变换的方法 |
| `cvsCtx-shadowBlur` | 设置阴影的模糊级别 |
| `cvsCtx-shadowColor` | 设置阴影的颜色 |
| `cvsCtx-shadowOffsetX` | 设置阴影相对于形状在水平方向的偏移 |
| `cvsCtx-shadowOffsetY` | 设置阴影相对于形状在竖直方向的偏移 |
| `cvsCtx-stroke` | 画出当前路径的边框 |
| `cvsCtx-strokeRect` | 画一个矩形(非填充) |
| `cvsCtx-strokeStyle` | 设置边框颜色。基础库 1.9.90 起支持 |
| `cvsCtx-strokeText` | 给定的 (x, y) 位置绘制文本描边的方法 |
| `cvsCtx-textAlign` | 用于设置文字的对齐，基础库 1.9.90 起支持 |
| `cvsCtx-textBaseline` | 用于设置文字的水平对齐，基础库 1.9.90 起支持 |
| `cvsCtx-translate` | 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角 |
| `downTask-abort` | 中断下载任务 |
| `downTask-onProgressUpdate` | 监听下载进度变化事件 |
| `fileManager-access` | 判断文件/目录是否存在 |
| `fileManager-accessSync` | 判断文件/目录是否存在，同步接口 |
| `fileManager-appendFile` | 在文件结尾追加内容 |
| `fileManager-appendFileSync` | 在文件结尾追加内容，同步接口 |
| `fileManager-copyFile` | 复制文件 |
| `fileManager-copyFileSync` | 复制文件，同步接口 |
| `fileManager-getFileInfo` | 获取该小程序下的本地临时文件或本地缓存文件信息 |
| `fileManager-getSavedFileList` | 获取该小程序下已保存的本地缓存文件列表 |
| `fileManager-mkdir` | 创建目录 |
| `fileManager-mkdirSync` | 创建目录，同步接口 |
| `fileManager-readFile` | 读取本地文件内容 |
| `fileManager-readFileSync` | 读取本地文件内容，同步接口 |
| `fileManager-readdir` | 读取目录内文件列表 |
| `fileManager-readdirSync` | 读取目录内文件列表，同步接口 |
| `fileManager-removeSavedFile` | 删除该小程序下已保存的本地缓存文件 |
| `fileManager-rename` | 重命名文件，可以把文件从 oldPath 移动到 newPath |
| `fileManager-renameSync` | 重命名文件，可以把文件从 oldPath 移动到 newPath，同步接口 |
| `fileManager-rmdir` | 删除目录 |
| `fileManager-rmdirSync` | 删除目录，同步接口 |
| `fileManager-saveFile` | 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用 |
| `fileManager-saveFileSync` | 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用，同步接口 |
| `fileManager-stat` | 获取文件 Stats 对象 |
| `fileManager-statSync` | 获取文件 Stats 对象，同步接口 |
| `fileManager-unlink` | 删除文件 |
| `fileManager-unlinkSync` | 删除文件,同步接口 |
| `fileManager-unzip` | 解压文件 |
| `fileManager-writeFile` | 写文件 |
| `fileManager-writeFileSync` | 写文件，同步接口 |
| `fileStat-isDirectory` | 判断当前文件是否一个目录 |
| `fileStat-isFile` | 判断当前文件是否一个普通文件 |
| `getApp` | 获取小程序实例 |
| `getCurrentPages` | 获取当前页面栈 |
| `innerAudioContext-destroy` | 销毁当前实例 |
| `innerAudioContext-offCanplay` | 取消监听 onCanplay 事件 |
| `innerAudioContext-offEnded` | 取消监听 onEnded 事件 |
| `innerAudioContext-offError` | 取消监听 onError 事件 |
| `innerAudioContext-offPlay` | 取消监听 onPlay 事件 |
| `innerAudioContext-offSeeked` | 取消监听 onSeeked 事件 |
| `innerAudioContext-offSeeking` | 取消监听 onSeeking 事件 |
| `innerAudioContext-offStop` | 取消监听 onStop 事件 |
| `innerAudioContext-offTimeUpdate` | 取消监听 onTimeUpdate 事件 |
| `innerAudioContext-offWaiting` | 取消监听 onWaiting 事件 |
| `innerAudioContext-onCanplay` | 音频进入可以播放状态，但不保证后面可以流畅播放 |
| `innerAudioContext-onEnded` | 音频自然播放结束事件 |
| `innerAudioContext-onError` | 音频播放错误事件 |
| `innerAudioContext-onPause` | 音频暂停播放事件 |
| `innerAudioContext-onPlay` | 音频播放事件 |
| `innerAudioContext-onSeeked` | 音频完成 seek 操作事件 |
| `innerAudioContext-onSeeking` | 音频进行 seek 操作事件 |
| `innerAudioContext-onStop` | 音频停止播放事件 |
| `innerAudioContext-onTimeUpdate` | 音频播放进度更新事件 |
| `innerAudioContext-onWaiting` | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 |
| `innerAudioContext-pause` | ???? |
| `innerAudioContext-play` | 播放 |
| `innerAudioContext-seek` | 跳转到指定位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度 |
| `innerAudioContext-stop` | 停止 |
| `interObser-disconnect` | 停止监听，回调函数将不再触发 |
| `interObser-observe` | 指定目标节点并开始监听相交状态变化情况 |
| `interObser-relativeTo` | 使用选择器指定一个节点，作为参照区域之一 |
| `interObser-relativeToViewport` | 指定页面显示区域作为参照区域之一 |
| `livePlayerContext-exitFullScreen` | 退出全屏 |
| `livePlayerContext-mute` | 静音 |
| `livePlayerContext-pause` | 暂停 |
| `livePlayerContext-play` | 播放 |
| `livePlayerContext-requestFullScreen` | 进入全屏 |
| `livePlayerContext-resume` | 恢复 |
| `livePlayerContext-stop` | 停止 |
| `livePusherContext-pause` | 暂停推流 |
| `livePusherContext-play` | 播放推流 |
| `livePusherContext-resume` | 恢复推流 |
| `livePusherContext-snapshot` | 快照 |
| `livePusherContext-stop` | 停止推流 |
| `livePusherContext-switchCamera` | 切换前后摄像头 |
| `livePusherContext-toggleTorch` | 切换闪光灯 |
| `logger-debug` | 写 debug 日志，可以提供任意个参数 |
| `logger-info` | 写 info 日志，可以提供任意个参数 |
| `logger-log` | 写 log 日志，可以提供任意个参数 |
| `logger-warn` | 写 warn 日志，可以提供任意个参数 |
| `mapContext-getCenterLocation` | 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation |
| `mapContext-getRegion` | 获取当前地图的视野范围 |
| `mapContext-getScale` | 获取当前地图的缩放级别 |
| `mapContext-includePoints` | 缩放视野展示所有经纬度 |
| `mapContext-moveToLocation` | 将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用 |
| `mapContext-translateMarker` | 平移 marker，带动画 |
| `recordManager-onError` | 录音错误事件, 会回调错误信息 |
| `recordManager-onFrameRecorded` | 已录制完指定帧大小的文件，会回调录音分片结果数据 |
| `recordManager-onPause` | 录音暂停事件 |
| `recordManager-onStart` | 录音开始事件 |
| `recordManager-onStop` | 录音停止事件，会回调文件地址 |
| `recordManager-pause` | 暂停录音 |
| `recordManager-resume` | 恢复录音 |
| `recordManager-start` | ?? |
| `recordManager-stop` | 停止录音 |
| `reqTask-abort` | 中断请求任务 |
| `selQuery-exec` | 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回 |
| `selQuery-in` | 将选择器的选取范围更改为自定义组件 component 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点） |
| `selQuery-select` | 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息 |
| `selQuery-selectAll` | 在当前页面下选择匹配选择器 selector 的所有节点 |
| `selQuery-selectViewport` | 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息 |
| `sockTask-close` | 关闭 WebSocket 连接 |
| `sockTask-onClose` | 监听 WebSocket 连接关闭事件 |
| `sockTask-onError` | 监听 WebSocket 错误 |
| `sockTask-onMessage` | 监听 WebSocket 接受到服务器的消息事件 |
| `sockTask-onOpen` | 监听 WebSocket 连接打开事件 |
| `sockTask-send` | 通过 WebSocket 连接发送数据 |
| `upTask-abort` | 中断上传任务 |
| `upTask-onProgressUpdate` | 监听上传进度变化事件 |
| `updateManager-applyUpdate` | 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启 |
| `updateManager-onCheckForUpdate` | 当向微信后台请求完新版本信息，会进行回调 |
| `updateManager-onUpdateFailed` | 当新版本下载失败，会进行回调 |
| `updateManager-onUpdateReady` | 当新版本下载完成，会进行回调 |
| `videoContext-exitFullScreen` | 退出全屏 |
| `videoContext-hideStatusBar` | 隐藏状态栏，仅在 iOS 全屏下有效 |
| `videoContext-pause` | 暂停 |
| `videoContext-play` | 播放 |
| `videoContext-playbackRate` | 设置倍速播放，支持的倍率有 0.5/0.8/1.0/1.25/1.5 |
| `videoContext-requestFullScreen` | 进入全屏，可传入 direction 参数, 有效值为 0, 90, -90 |
| `videoContext-seek` | 跳转到指定位置，单位 s |
| `videoContext-sendDanmu` | 发送弹幕，包含两个属性 text, color |
| `videoContext-showStatusBar` | 显示状态栏，仅在 iOS 全屏下有效 |
| `videoContext-stop` | 停止 |
| `worker-onMessage` | 监听 Worker 线程向当前线程发送的消息 |
| `worker-postMessage` | 向 Worker 线程发送的消息 |
| `worker-terminate` | 结束当前 Worker 线程，仅限在主线程 Worker 实例上调用 |
| `wx-addCard` | 批量添加卡券 |
| `wx-addPhoneContact` | 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。此 API 参数非常多，请参考文档 |
| `wx-authorize` | 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功 |
| `wx-canIUse` | 判断小程序的 API，回调，参数，组件等是否在当前版本可用 |
| `wx-canvasGetImageData` | 返回一个数组，用来描述 canvas 区域隐含的像素数据 |
| `wx-canvasPutImageData` | 将像素数据绘制到画布的方法 |
| `wx-canvasToTempFilePath` | 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径 |
| `wx-checkIsSoterEnrolledInDevice` | 获取设备内是否录入如指纹等生物信息的接口 |
| `wx-checkIsSupportSoterAuthentication` | 获取本机支持的 SOTER 生物认证方式 |
| `wx-checkSession` | 校验用户当前 session_key 是否有效 |
| `wx-chooseAddress` | 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址 |
| `wx-chooseImage` | 从本地相册选择图片或使用相机拍照 |
| `wx-chooseInvoice` | 选择用户已有的发票 |
| `wx-chooseInvoiceTitle` | 选择用户的发票抬头 |
| `wx-chooseLocation` | 打开地图选择位置。需要用户授权 scope.userLocation |
| `wx-chooseVideo` | 拍摄视频或从手机相册中选视频，返回视频的临时文件路径 |
| `wx-clearStorage` | 异步清除本地数据缓存 |
| `wx-clearStorageSync` | 同步清除本地数据缓存 |
| `wx-closeBLEConnection` | 断开与低功耗蓝牙设备的连接 |
| `wx-closeBluetoothAdapter` | 关闭蓝牙模块，使其进入未初始化状态。调用该方法将断开所有已建立的链接并释放系统资源 |
| `wx-closeSocket` | 关闭 WebSocket 连接 |
| `wx-connectSocket` | 创建一个 WebSocket 连接 |
| `wx-connectWifi` | 连接 WiFi。若已知 WiFi 信息，可以直接利用该接口连接 |
| `wx-createAnimation` | 创建一个动画实例 animation。调用实例的方法来描述动画 |
| `wx-createAudioContext` | 创建并返回 audio 上下文 audioContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<audio/>` 组件。1.6.0 起不再维护 |
| `wx-createBLEConnection` | 连接低功耗蓝牙设备 |
| `wx-createCameraContext` | 创建并返回 camera 上下文 cameraContext 对象，cameraContext 与页面的 camera 组件绑定，一个页面只能有一个 camera，通过它可以操作对应的 `<camera/>` 组件。1.6.0 开始支持 |
| `wx-createCanvasContext` | 创建 canvas 绘图上下文（指定 canvasId） |
| `wx-createInnerAudioContext` | 创建并返回内部 audio 上下文 innerAudioContext 对象。本接口是 wx.createAudioContext 升级版。1.6.0 开始支持 |
| `wx-createIntersectionObserver` | 创建并返回一个 IntersectionObserver 对象实例 |
| `wx-createLivePlayerContext` | 操作对应的 `<live-player/>` 组件。 创建并返回 live-player 上下文 LivePlayerContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<live-player/>` 组件 |
| `wx-createLivePusherContext` | 创建并返回 live-pusher 上下文 LivePusherContext 对象，LivePusherContext 与页面的 `<live-pusher />` 组件绑定，一个页面只能有一个 live-pusher，通过它可以操作对应的 `<live-pusher/>` 组件。 在自定义组件下，第一个参数传入组件实例 this，以操作组件内 `<live-pusher/>` 组件 |
| `wx-createMapContext` | 创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件 |
| `wx-createSelectorQuery` | 返回一个 SelectorQuery 对象实例 |
| `wx-createVideoContext` | 创建并返回 video 上下文 videoContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<video/>` 组件 |
| `wx-createWorker` | 创建一个 Worker 线程，并返回 Worker 实例，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate |
| `wx-downloadFile` | 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径 |
| `wx-faceVerifyForPay` | 支付各个安全场景验证人脸 |
| `wx-getAccountInfoSync` | 获取当前账号信息 |
| `wx-getAvailableAudioSources` | 获取当前支持的音频输入源 |
| `wx-getBLEDeviceCharacteristics` | 获取蓝牙设备某个服务中的所有 characteristic（特征值） |
| `wx-getBLEDeviceServices` | 获取蓝牙设备所有 service（服务） |
| `wx-getBackgroundAudioManager` | 获取全局唯一的背景音频管理器 backgroundAudioManager |
| `wx-getBackgroundAudioPlayerState` | 获取后台音乐播放状态。1.2.0 起不再维护 |
| `wx-getBeacons` | 获取所有已搜索到的 iBeacon 设备 |
| `wx-getBluetoothAdapterState` | 获取本机蓝牙适配器状态 |
| `wx-getBluetoothDevices` | 获取在小程序蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备 |
| `wx-getClipboardData` | 获取系统剪贴板内容 |
| `wx-getConnectedBluetoothDevices` | 根据 uuid 获取处于已连接状态的设备 |
| `wx-getConnectedWifi` | 获取已连接中的 WiFi 信息 |
| `wx-getExtConfig` | 获取第三方平台自定义的数据字段 |
| `wx-getExtConfigSync` | 同步获取第三方平台自定义的数据字段 |
| `wx-getFileSystemManager` | 获取全局唯一的文件管理器 |
| `wx-getHCEState` | 判断当前设备是否支持 HCE 能力 |
| `wx-getImageInfo` | 获取图片信息，倘若为网络图片，需先配置 download 域名才能生效 |
| `wx-getLocation` | 获取当前的地理位置、速度 |
| `wx-getLogManager` | 获取日志管理器 logManager 对象 |
| `wx-getMenuButtonBoundingClientRect` | 获取菜单按钮的布局置信息 |
| `wx-getNetworkType` | 获取网络类型 |
| `wx-getRecorderManager` | 获取全局唯一的录音管理器 recorderManager |
| `wx-getSavedFileInfo` | 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口 |
| `wx-getSavedFileList` | 获取本地已保存的文件列表 |
| `wx-getScreenBrightness` | 获取屏幕亮度 |
| `wx-getSetting` | 获取用户的当前设置 |
| `wx-getShareInfo` | 获取转发详细信息 |
| `wx-getStorage` | 从本地缓存中异步获取指定 key 对应的内容 |
| `wx-getStorageInfo` | 异步获取当前 storage 的相关信息 |
| `wx-getStorageInfoSync` | 同步获取当前 storage 的相关信息 |
| `wx-getStorageSync` | 从本地缓存中同步获取指定 key 对应的内容 |
| `wx-getSystemInfo` | 异步获取系统信息 |
| `wx-getSystemInfoSync` | 获取系统信息同步接口 |
| `wx-getUpdateManager` | 获取全局唯一的版本更新管理器，用于管理小程序更新 |
| `wx-getUserInfo` | 当用户未授权过，调用该接口将直接报错；当用户授权过，可以使用该接口获取用户信息 |
| `wx-getWeRunData` | 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口 |
| `wx-getWifiList` | 请求获取 WiFi列表，在 onGetWifiList 注册的回调中返回 wifiList 数据 |
| `wx-hideLoading` | 隐藏 loading 提示框 |
| `wx-hideNavigationBarLoading` | 隐藏导航条加载动画 |
| `wx-hideShareMenu` | 隐藏转发按钮 |
| `wx-hideTabBar` | ?? tabBar |
| `wx-hideTabBarRedDot` | 隐藏 tabBar 某一项的右上角的红点 |
| `wx-hideToast` | 隐藏消息提示框 |
| `wx-loadFontFace` | 动态加载网络字体 |
| `wx-login` | 调用接口 wx.login() 获取临时登录凭证（code） |
| `wx-makePhoneCall` | 拨打电话 |
| `wx-navigateBack` | 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层 |
| `wx-navigateBackMiniProgram` | 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功 |
| `wx-navigateTo` | 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面。目前页面路径最多只能十层 |
| `wx-navigateToMiniProgram` | 打开同一公众号下关联的另一个小程序 |
| `wx-nextTick` | 用于延迟一部分操作到下一个时间片再执行 |
| `wx-notifyBLECharacteristicValueChange` | 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用，具体参照 characteristic 的 properties 属性 |
| `wx-offWindowResize` | 取消监听窗口尺寸变化事件 |
| `wx-onAccelerometerChange` | 监听加速度数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听 |
| `wx-onBLECharacteristicValueChange` | 监听低功耗蓝牙设备的特征值变化。必须先启用 notify 接口才能接收到设备推送的 notification |
| `wx-onBLEConnectionStateChange` | 监听低功耗蓝牙连接状态的改变事件，包括开发者主动连接或断开连接，设备丢失，连接异常断开等等 |
| `wx-onBackgroundAudioPause` | 监听音乐暂停。1.2.0 起不再维护 |
| `wx-onBackgroundAudioPlay` | 监听音乐播放。1.2.0 起不再维护 |
| `wx-onBackgroundAudioStop` | 监听音乐停止。1.2.0 起不再维护 |
| `wx-onBeaconServiceChange` | 监听 iBeacon 服务的状态变化 |
| `wx-onBeaconUpdate` | 监听 iBeacon 设备的更新事件 |
| `wx-onBluetoothAdapterStateChange` | 监听蓝牙适配器状态变化事件 |
| `wx-onBluetoothDeviceFound` | 监听寻找到新设备的事件 |
| `wx-onCompassChange` | 监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听 |
| `wx-onGetWifiList` | 监听在获取到 WiFi 列表数据时的事件，在回调中将返回 wifiList |
| `wx-onHCEMessage` | 监听 NFC 设备的消息回调，并在回调中处理 |
| `wx-onMemoryWarning` | 监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分 |
| `wx-onNetworkStatusChange` | 监听网络状态变化 |
| `wx-onSocketClose` | 监听 WebSocket 关闭 |
| `wx-onSocketError` | 监听 WebSocket 错误 |
| `wx-onSocketMessage` | 监听 WebSocket 接受到服务器的消息事件 |
| `wx-onSocketOpen` | 监听 WebSocket 连接打开事件 |
| `wx-onUserCaptureScreen` | 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件 |
| `wx-onWifiConnected` | 监听连接上 WiFi 的事件 |
| `wx-onWindowResize` | 监听窗口尺寸变化事件 |
| `wx-openBluetoothAdapter` | 初始化小程序蓝牙模块，生效周期为调用 wx.openBluetoothAdapter 至调用 wx.closeBluetoothAdapter 或小程序被销毁为止 |
| `wx-openCard` | 查看微信卡包中的卡券 |
| `wx-openDocument` | 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx |
| `wx-openLocation` | 使用微信内置地图查看位置，需要用户授权 scope.userLocation |
| `wx-openSetting` | 调起客户端小程序设置界面，返回用户设置的操作结果 |
| `wx-pageScrollTo` | 将页面滚动到目标位置 |
| `wx-pauseBackgroundAudio` | 暂停播放音乐，1.2.0 起不再维护 |
| `wx-pauseVoice` | 暂停正在播放的语音，1.6.0 起不再维护 |
| `wx-playBackgroundAudio` | 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。1.2.0 起不再维护 |
| `wx-playVoice` | 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。1.6.0 起不再维护 |
| `wx-previewImage` | 预览图片 |
| `wx-reLaunch` | 关闭所有页面，打开到应用内的某个页面 |
| `wx-readBLECharacteristicValue` | 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用，具体参照 characteristic 的 properties 属性 |
| `wx-redirectTo` | 关闭当前页面，跳转到应用内的某个页面 |
| `wx-removeSavedFile` | 删除本地存储的文件 |
| `wx-removeStorage` | 从本地缓存中异步移除指定 key |
| `wx-removeStorageSync` | 从本地缓存中同步移除指定 key |
| `wx-removeTabBarBadge` | 移除 tabBar 某一项右上角的文本 |
| `wx-reportMonitor` | 自定义业务数据监控上报接口 |
| `wx-request` | 发起网络请求 |
| `wx-requestPayment` | 发起微信支付 |
| `wx-saveFile` | 保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用 |
| `wx-saveImageToPhotosAlbum` | 保存图片到系统相册。需要用户授权 scope.writePhotosAlbum |
| `wx-saveVideoToPhotosAlbum` | 保存视频到系统相册。需要用户授权 scope.writePhotosAlbum |
| `wx-scanCode` | 调起客户端扫码界面，扫码成功后返回对应的结果 |
| `wx-seekBackgroundAudio` | 控制音乐播放进度(秒)。1.2.0 起不再维护 |
| `wx-sendHCEMessage` | 发送 NFC 消息。仅在安卓系统下有效 |
| `wx-sendSocketMessage` | 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送 |
| `wx-setBackgroundColor` | 动态设置窗口的背景色 |
| `wx-setBackgroundTextStyle` | 动态设置下拉背景字体、loading 图的样式 |
| `wx-setClipboardData` | 设置系统剪贴板的内容 |
| `wx-setEnableDebug` | 设置是否打开调试开关，此开关对正式版也能生效 |
| `wx-setKeepScreenOn` | 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效 |
| `wx-setNavigationBarColor` | 设置导航栏颜色 |
| `wx-setNavigationBarTitle` | 动态设置当前页面的标题 |
| `wx-setScreenBrightness` | 设置屏幕亮度 |
| `wx-setStorage` | 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口 |
| `wx-setStorageSync` | 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口 |
| `wx-setTabBarBadge` | 为tabBar某一项的右上角添加文本 |
| `wx-setTabBarItem` | 动态设置 tabBar 某一项的内容 |
| `wx-setTabBarStyle` | 动态设置 tabBar 的整体样式 |
| `wx-setTopBarText` | 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容 |
| `wx-setWifiList` | iOS 特有接口，在 onGetWifiList 回调后，利用接口设置 wifiList 中 AP 的相关信息 |
| `wx-showActionSheet` | 显示操作菜单 |
| `wx-showLoading` | 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框 |
| `wx-showModal` | 显示模态弹窗 |
| `wx-showNavigationBarLoading` | 在当前页面显示导航条加载动画 |
| `wx-showShareMenu` | 显示当前页面的转发按钮 |
| `wx-showTabBar` | ?? tabBar |
| `wx-showTabBarRedDot` | 显示 tabBar 某一项的右上角的红点 |
| `wx-showToast` | 显示消息提示框 |
| `wx-startAccelerometer` | 开始监听加速度数据 |
| `wx-startBeaconDiscovery` | 开始搜索附近的 iBeacon 设备 |
| `wx-startBluetoothDevicesDiscovery` | 开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索 |
| `wx-startCompass` | 开始监听罗盘数据。 |
| `wx-startHCE` | 初始化 NFC 模块 |
| `wx-startPullDownRefresh` | 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致 |
| `wx-startRecord` | 开始录音。需要用户授权 scope.record。1.6.0 起不再维护 |
| `wx-startSoterAuthentication` | 开始 SOTER 生物认证 |
| `wx-startWifi` | 初始化 WiFi 模块 |
| `wx-stopAccelerometer` | 停止监听加速度数据 |
| `wx-stopBackgroundAudio` | 停止播放音乐。1.2.0 起不再维护 |
| `wx-stopBeaconDiscovery` | 停止搜索附近的 iBeacon 设备 |
| `wx-stopBluetoothDevicesDiscovery` | 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索 |
| `wx-stopCompass` | 停止监听罗盘数据。 |
| `wx-stopHCE` | 关闭 NFC 模块。仅在安卓系统下有效 |
| `wx-stopPullDownRefresh` | 停止当前页面下拉刷新 |
| `wx-stopRecord` | 停止录音。1.6.0 起不再维护 |
| `wx-stopVoice` | 结束播放语音。1.6.0 起不再维护 |
| `wx-stopWifi` | 关闭 WiFi 模块 |
| `wx-switchTab` | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 |
| `wx-updateShareMenu` | 更新转发属性 |
| `wx-uploadFile` | 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data |
| `wx-vibrateLong` | 使手机发生较长时间的振动（400ms） |
| `wx-vibrateShort` | 使手机发生较短时间的振动（15ms） |
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
| `form` | 表单，将组件内的用户输入的 `<switch/>`、`<input/>`、`<checkbox/>`、`<slider/>`、`<radio/>` `<picker/>` 提交 |
| `functional-page-navigator` | 页面链接 |
| `icon` | 图标 |
| `image` | 图片。默认宽度 300px、高度 225px。image 组件中二维码/小程序码图片不支持长按识别 |
| `input` | 输入框 |
| `label` | 用来改进表单组件的可用性，使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。目前可以绑定的控件有 `<button/>`、`<checkbox/>`、`<radio/>`、`<switch/>` |
| `live-player` | 实时音视频播放。默认宽度 300px、高度 225px，可通过 wxss 设置宽高 |
| `live-pusher` | 实时音视频录制。需要用户授权 scope.camera、scope.record。默认宽度为 100%、无默认高度，请通过 wxss 设置宽高 |
| `map` | 地图 |
| `movable-area` | movable-view 的可移动区域 |
| `movable-view` | 可移动的视图容器，在页面中可以拖拽滑动 |
| `navigator` | 页面链接 |
| `open-data` | 用于展示微信开放的数据 |
| `picker-view-column` | 仅可放置于 `<picker-view />`中 其孩子节点的高度会自动设置成与 picker-view 的选中框的高度一致 |
| `picker-view` | 嵌入页面的滚动选择器 |
| `picker` | 滚动选择器。现支持三种选择器 通过 mode 来区分，分别是普通选择器、时间选择器、日期选择器。默认是普通选择器 |
| `progress` | 进度条 |
| `radio-group` | 单项选择器，内部由多个 `<radio/>` 组成 |
| `radio` | 单选项目 |
| `rich-text` | 富文本 |
| `scroll-view` | 可滚动视图区域 |
| `slider` | 滑动选择器 |
| `swiper-item` | 仅可放置在 `<swiper/>`组件中，宽高自动设置为 100% |
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
