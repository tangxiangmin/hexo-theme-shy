Shy
===
> 一个Hexo主题

## 遇见的坑

### 新增自定义页面
首先
```
hexo new page test
```
然后发现在`source`目录下生成了对应的`test/index.md`，修改其`Front-matter`的`layout`属性，指定对应模板
```
---
title: test
date: 2017-10-14 22:38:14
layout: "test"
comments: false
---
```

然后在对应的主题`layout`目录新增模板即可，这里指定的模板名称是`layout.ejs`

### 常见变量的属性
文档里面只给出了全局变量和页面变量，但是对于单个变量比如`tag`并没有很详细的说明（也许是我没看见），所以采用最原始的`console`获取对应变量的属性，并记录在下面

* tag
    * name，标签名
    * length，标签的数量，可以用来制作标签云
    * path，跳转到对应的标签归档
* category，跟标签基本类似
    * name，分类名
    * length，分类的数量
    * path，跳转到对应的分类归档

### 在theme目录中使用gulp
为了方便调试，直接`hexo init`了一个测试博客，然后直接在`theme`目录下进行开发，发现安装了`node_modules`目录后，`hexo s`等命令会非常卡

### 修改代码高亮
自带的代码高亮比较蛋疼，还是使用`hightlightjs`比较熟悉，这里参考[Hexo高级教程之代码高亮](http://blog.csdn.net/melordljm/article/details/51991389)，记得先在根目录的`_config.yml`中关闭`highlight.enable`

这么做的缺点是在前端实现，体验不是很好，更好的做法应该是在解析`markdown`的同时配置`hightlight`，这需要修改hexo源码，

### 修改配置文件无效
有时候遇见修改配置文件却无效的情况，比如上面关闭默认的`highlight`，需要使用`hexo clean`清除缓存

