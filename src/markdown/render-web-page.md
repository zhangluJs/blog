浏览器从url输入到敲下回车到最终页面渲染出来整个过程都经历了什么，今天复习一下。做个简单的总结，因为其中涉及的知识面太广，甚至触及到一些知识盲区，慢慢来吧，一点一点啃。

1. 输入完成后，浏览器开启一个线程处理这个请求。
2. 浏览器先从缓存中查找，先查找是自身DNS，在查找本地HOST文件，找无限路由器。发起DNS系统调用，让运营商帮忙查找。这些步骤的目的只有一个，那就是通过url查找到对应的ip。如果有任意一步找到了缓存中的ip地址，那么就直接跳出这一步。
3. 找到了对应的ip地址，浏览器会与其建立tcp连接，进行三次握手。
4. 建立连接后发送http请求
5. 请求返回所需一些文件，包括html、css、image等一些静态资源
6. 浏览器对html进行渲染。浏览器渲染html并不是整体解析完成后才进行渲染，而是自上而下边解析边渲染，解析过程中如有遇请求外部资源时，比如css，image等，会异步下载，并不会影响html的加载。浏览器会解析html构建dom树，然后解析css，将两者合并构建渲染树。渲染完成后浏览器开始布局渲染树并将其渲染到屏幕上。上面这些操作并一个只进行一次。而是重复进行的，在这个过程中又涉及到回流（reflow）与重绘（repaint）。之所以会有reflow是因为在节点构建完成后，会有其他的一些操作改变页面中的dom结构，比如用户操作，或者某段js代码让元素隐藏。此时浏览器就不得不重新计算重新渲染，而reflow是非常影响浏览器性能的，所以尽量少的操作dom。重绘（repaint）则是改变背景色、文字颜色等会引起。
7. 最终将页面呈现出来，整个过程结束。


参考：http://www.nowamagic.net/librarys/veda/detail/2168、https://www.imooc.com/article/40004、https://blog.csdn.net/Crazypokerk_/article/details/89416546