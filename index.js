// 引入 ipcRenderer 模块 用于从渲染进程到主进程的异步通信 你可以使用它提供的一些方法从渲染进程 (web 页面) 发送同步或异步的消息到主进程 也可以接收主进程回复的消息
const { ipcRenderer } = require('electron');
// require('./renderer.js')
// require('./functions.js')

document.getElementById('btn').onclick = () => {
  // 向主进程发送一个名为 btnclick 消息
  console.log('xxxxx')
  // ipcRenderer.send('asynchronous-message', 'btnclick');
}