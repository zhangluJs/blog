#### JS

# 时间复杂度计算

时间复杂度可以理解为是一个函数，用大写的O表示，比如O(n)、O(1)、O(logN)...

描述该算法大概的运行时间的趋势

O(n2) > O(n) > O(logN) > O(1)

```js
// 时间负责度为 O(1)
/**
 * 为什么下面这两行代码的时间复杂度为 O(1)?
 * 
 * 是因为这两行代码只会被执行一次
 */
let i = 0;
i += 1;
```

```js
// 时间复杂度为 O(n)
/**
 * 为什么下面这两行代码的时间复杂度为 O(n)?
 * 
 * 是因为下面这行代码执行了n次，随着n的增大，执行次数也会增大
 */
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

计算时间复杂度的时候，如果两个时间复杂度先后排列，就把它们相加，而且要取最大的增长更快的时间复杂度。看下面代码

> 相乘与相加是不一样的，相加会忽略增长趋势较小的复杂度，取增加趋势较快的复杂度。

```js
// O(1) + O(n) = O(n);

// O(1)
let i = 0;
i += 1;
// O(n)
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

```js
// 注意这里是相乘
// 时间复杂度为 O(n) * O(n) = O(n2)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        onsole.log(i, j);
    }
}
```

```js
// O(logN)
let i = 1;
while(i < n) {
    console.log(i);
    i *= 2;
}
```

# 空间复杂度计算

和时间复杂度一样也是这样表示。一个函数，用大写的O表示，比如O(n)、O(1)、O(n^2)...

算法在运行过程中临时占用存储空间大小的量度

```js
// O(1)
/**
 * 为什么下面这两行代码的空间复杂度为 O(n)?
 * 
 * 因为它只声明了单个变量，单个变量占用的内存永远是1，恒定的
 */
let i = 0;
i += 1;
```

```js
// 空间复杂度为O(n)
/**
 * 为什么下面这两行代码的空间复杂度为 O(n)?
 * 
 * 因为它声明了list的数组，它要添加N个值。相当于占用了N个单元，所以就是O(n)
 */
const list = []
for (let i = 0; i < n; i++) {
    list.push(i);
}
```

```js
// 空间复杂度为O(n^2)
/**
 * 为什么下面这两行代码的空间复杂度为 O(n^2)?
 * 
 * 因为它声明了list的数组，它要添加N个值。相当于占用了N个单元，所以就是O(n)
 */
const list = []
for (let i = 0; i < n; i++) {
    list.push([]);
    for (let j = 0; j < n; j++) {
        list[i].push(j);
    }
}
```

总结一下时间复杂度和空间复杂度：大白话就是执行一次的就是O(1)、套循环的就是O(n)、嵌套就是O(n^*)、非嵌套大的覆盖小的。


# 栈

在javascript中可以用数组来表示栈。栈是一个后进先出的数据结构。可以用数组的 push、pop表示。

```js
let stack = [];
stack.push(1);
stack.push(2); // 后进
stack.pop();   // 2 先出
stack.pop();   // 1
```

# 队列

一个先进先出的数据结构。依然可以用数组来表示队列。

比如js异步中的任务队列

```js
let queue = [];
queue.push(1); // 先进
queue.push(2);
queue.shift(); // 1 先出
queue.shift(); // 2
```

# 链表

多个元素组成的列表。

元素存储不连续，用next指针连在一起。

* 数组 VS 链表

数组：增删非首尾元素时，往往需要移动元素。

链表：增删非首尾元素时，不需要移动元素，只需要更改next指针。

链表的操作其实就是改变指针。

添加一个节点，其实就是将之前的节点的指针指向被添加的节点，被添加的节点指针指向下一个节点。

删除一个节点，其实就是将被删除的这个节点的前一个节点的指针，指向被删除节点的下一个节点。（其实看上去并不是删除，而且跳过了这个被删除的节点，由于跳过了它，所以这个链表里就没有了这个节点，就是被删除掉了）

```js
let a = {val: 'a'};
let b = {val: 'b'};
let c = {val: 'c'};
a.next = b;
b.next = c;

// 遍历链表
let d = a;
while(d) {
    console.log(d.val);
    // 调整循环最终值。一直向下指，直到null
    d = d.next;
}

// 添加节点  b 和 c中间添加e
let e = {val: 'e'};
b.next = e;
e.next = c;

// 删除节点 e
b.next = c;
```


* 反转链表

1 -> 2 -> 3 -> 4 -> 5 -> null

null -> 5 -> 4 -> 3 -> 2 -> 1

这个题最开始总是看不明白，因为总是把熟悉的数组操作的想法套进去，然后就是绕啊绕的不明白。仔细看了看链表结构后，其实就是将当前的节点的next指向当前节点的下一个节点，然后将当前节点修改为前一个节点。重复循环这个操作。最后达到反转整个链表的目的。

```js
function reverseList(head) {
    // 当前节点
    let pre = head;
    // 前一个节点 由于反转后第一个节点是null，所以这里将前一个节点赋值为null
    let cur = null;
    // 遍历当前节点，由于当前节点最后会的指针会指向null。所以直接遍历就可以
    while(pre) {
        // 3 保存下一个节点的位置。修改起点
        const tmp = pre.next;

        // 1. 反转当前节点。所以就是将当前节点的指针指向前一个节点
        pre.next = cur;
        // 2. 两个节点互换位置  1 2两步操作其实就是将两个节点的位置互换
        cur = pre;
        // 3. 将当前节点重新赋值为下一个节点。这一步相当于移动了起始位置
        pre = pre.next
    }
    // 返回修改后的结构
    return cur;
}
```

# 集合

集合是一种`无序且唯一`的数据结构

ES6中有集合，Set

集合的常用操作：去重、判断某元素是否在集合中、求交集

```js
// 去重
const arr = [1,2,2,1];
const arr2 = [...new Set(arr)];

// 判断元素是否在元素中
const set = new Set(arr);
// has是Set中自带的方法。类似于对象的hasOwnProperty。返回true / false
const has = set.has(3);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));
// 求差集
const set3 = new Set([...set].filter(item => !set2.has(item)));
```

```js
let mySet = new Set();
// 添加一个属性
mySet.add(1);
// 注意这里，Set对象只会保留唯一值，所以add两次5只会保留一个
mySet.add(5);
mySet.add(5);
mySet.add('some text');
let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});

mySet.has(5) // true

// 删除5
mySet.delete(5)
```
```js
// 遍历集合
for (let key of mySet) {
    console.log(key);
}
for (let key of mySet.keys()) {
    console.log(key);
}
```

# 字典

与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储的

ES6中有字段，名为Map

```js
const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');

// 查
m.get('a');

// 删
m.delete('b');
m.clear();

// 改
m.set('a', 'aaa');
```

# 树

一种分层的数据的抽象模型

前端工作中常见的树包括：DOM树、级联选择

* 什么是深度优先遍历？

    尽可能深的搜索树的分支

    ![深度优先遍历](./static/img/tree.png)

    深度优先算法口诀。1、访问跟节点 2、对跟节点的chuildren挨个进行深度优先遍历。

```js
/**
 * 树的深度优先遍历
 */
const tree = {
    val: 'a',
    children: [{
        val: 'b',
        children: [{
            val: 'd',
            children: []
        }, {
            val: 'e',
            children: []
        }]
    }, {
        val: 'c',
        children: [{
            val: 'f',
            children: []
        }, {
            val: 'g',
            children: []
        }]
    }]
};

const dfs = root => {
    console.log(root.val);
    root.children.forEach(child => {
        dfs(child);
    });
};

dfs(tree);
```

* 什么是广度优先遍历？

    先访问离跟节点最近的节点

    ![广度优先遍历](./static/img/guang.png)

    广度有优先算法口诀。1、新建一个队列，把根节点入队。2、把队头出队并访问。3、把队头的children挨个入队。4、重复第二、三步，直到队列为空。

```js
const tree = {
    val: 'a',
    children: [{
        val: 'b',
        children: [{
            val: 'd',
            children: []
        }, {
            val: 'e',
            children: []
        }]
    }, {
        val: 'c',
        children: [{
            val: 'f',
            children: []
        }, {
            val: 'g',
            children: []
        }]
    }]
};

const bfs = (root) => {
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const n = queue.shift();
        console.log(n);
        n.children.forEach(item => {
            queue.push(item);
        });
    }
}

bfs(tree);
```

### 二叉树是什么？

    树中每个节点最多只能有两个子节点

    在js中通常用Object来模拟二叉树

    二叉树的先序遍历：根节点、左子树、右子树
    二叉树的中序遍历：左子树、根节点、右子树
    二叉树的后序遍历：左子树、右子树、根节点

```js
/**
 *          根节点
 *
 *    左子树        右子树
 */


// 介个就是神奇的二叉树
const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}
```



* 二叉树的先序遍历

1、访问根节点

2、对根节点的左子树进行先序遍历

3、对根节点的右子树进行先序遍历

```js
//  递归版
const preorder = (root) => {
    if (!root) {
        return false;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

// 非递归版
const preorder = (root) => {
    if (!root) {return false};
    const stack = [root];
    while(stack.length) {
        let n = stack.pop();
        console.log(n.val);
        if (n.right) {stack.push(n.right)};
        if (n.left) {stack.push(n.left)};
    }
}
```

* 二叉树的中序遍历

1、对根节点的左子树进行中序遍历

2、访问根节点

3、对根节点的右子树进行中序遍历

```js
// 递归版
const inorder = (root) => {
    if (!root) {
        return false;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
// 非递归版
const inorder = (root) => {
    if (!root) {return false};
    const stack = [];
    let p = root;
    while(stack.length || p) {
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}
```

* 二叉树的后序遍历

1、对根节点的左子树进行后序遍历

2、对根节点的右子树进行后序遍历

3、访问根节点

```js
// 递归版
const postorder = (root) => {
    if (!root) {
        return false;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
// 非递归版
const postorder = (root) => {
    if (!root) {return false};
    const stack = [root];
    const reverse = [];
    while(stack.length) {
        let n = stack.pop();
        reverse.push(n);
        if (n.left) {stack.push(n.left)};
        if (n.right) {stack.push(n.right)};
    }
    while(reverse.length) {
        let n = reverse.pop();
        console.log(n.val);
    }
}
```