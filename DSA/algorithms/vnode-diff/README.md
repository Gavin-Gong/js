# vnode diff 算法

使用 vnode 的框架 如 vue react，其中影响性能比较大的点在于对 children 进行更新。
一般来说 diff 算法出于性能和常见场景考虑只会对 vnode tree 进行同级比较，减少不必要的计算。
一旦新老 vnode tree 的同一层级都存在多个子节点的话，再加上浏览器中，对 DOM 进行操作比较消耗性能，我们需要对尽可能复用现有 DOM 元素，来减少 DOM 操作（创建 & 移动）。
而对 children 进行更新会产生以下几种基本情景

- 新增元素
- 删除元素
- 移动元素

于是我们可以把问题抽象为一道题：
存在 x，y 两个数组，数组元素在该数组内都是唯一不重复的，有以下要求，

- 可以对数组进行增删改查等操作，但是不能重新赋值数组

- 最大可能地复用 x 中的元素，若 x，y 数组同时存在该元素只不能对该元素进行删除操作

那么如何通过最少的步骤将 y 数组变化成 x 数组（形式一致）？

## 参考

- <http://hcysun.me/vue-design/zh/>

## 前言

前端的虚拟 DOM 框架，一般是用 js 树结构来对视图层进行抽象表达，通过对树的遍历创建 UI 元素，渲染到视图。
如果想要对视图进行更新，这时候会产生一颗新的树，显然根据新的数据全量重新创建 UI 元素，渲染到视图是极其消耗性能的。
因此需要对新老两颗树进行对比，找到差异点，将差异部分更新到存在的视图。

为了保证性能，我们需要考虑以下下几点:

1. 尽可能复用现有 UI 元素
2. 减少对 UI 元素的操作
3. 减少遍历次数

在实际场景中，其实基本不会遇到子树的层级跃迁移动，往往只会对同一层级的元素进行更新。所以没必要进行跨层级的比较。于是就变成了两个数组之间的比较。

## 正文

基于以上可以抽象为一道算法题：
存在 oldChildren newChildren 两个数组，数组元素在该数组内都是唯一且不重复的，UIChildren 初始值为 oldChildren 的副本，

- 尽可能少地操作读取 UIChildren
- 尽可能少地读写 oldChildren 和 newChildren

尽可能利用 UIChildren 中的现有元素（newChildren，oldChildren 中的交集元素在 UIChildren 中 只能被移动不能被删除），
通过对比 oldChildren 和 newChildren 实现将 UIChildren 变为 newChildren 的副本
例如；
oldChildren 为 [1, 3, 4]
newChildren 为 [1, 2, 4]
那么 UIChildren 的初始值为 [1, 3, 4]
最后返回的 UIChildren 为 [1, 2, 4]
值得注意的是，对 UIChildren 进行操作的过程中，1 和 4 是属于可以复用的元素，所以只可以被移动但是不可以被删除的元素。

``` js
function diff(oldChildren, newChildren) {
  let UIChildren = oldChildren.map(v => v) // clone
  // TODO:
  return UIChildren
}
```

对 UIChildren 进行操作提供了以下几个 API（其实是为了模拟 DOM 的 API，它和数组用法上设计风格差异很大，一个基于 index，一个基于元素）

- inesertBefore(UIChildren, child, refChild) 讲一个元素插入到某一个元素前面
- removeChild(UIChildren, child) 移除某一个元素
- nextSibling(UIChildren, child) 获取某一个元素之后的元素

### React

 
### Snabddom / Vue2

### Inferno / Vue3
