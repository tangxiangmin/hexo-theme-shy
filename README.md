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
* category，跟标签基本类似
    * name，分类名
    * length，分类的数量



