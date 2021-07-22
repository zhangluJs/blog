# React-hooks

### 为什么会有react-hooks，它解决了什么问题？

> 我个人在使用react-hooks后最直观的感受就是，它有了函数式组件的灵活性，同时又具备了class组件的状态管理、生命周期等特性。能够将逻辑更加细分，颗粒度更小，使用起来更灵活。多个细小的函数式组件组合成一个大的功能逻辑。

- 大型组件很难拆分和重构，很难测试（即class不易拆分）

- 相同业务逻辑，分散到各个方法中，逻辑混乱

- 复用逻辑变的复杂，如Minxins,HOC,Render Prop

- React提倡函数式编程。view = fu(props)

- 函数更灵活，更容易拆分，更易测试

- 函数组件太简单，需要增强能力 -- hooks

### react-hooks如何模拟组件生命周期？

useEffect可以模拟生命周期，它接受两个参数，第一个参数是一个函数，第二个参数是一个数组。

- 如果第二个参数不传，那么useEffect在DidMount、DidUpdate时都会被调用。

- 如果第二个参数传了一个空的数组，那么它只在DidMount阶段被调用一次。

- 如果第二个参数传了带有useState的数组，那么它在除了DidMount阶段被调用以外，在这个useState发生变化的也会被调用也就是DidUpdate。

- 如果第一个参数函数中可以return一个函数，来达到模拟WillUnmount的目的。需要注意的一点是，除了组件初始化这个return不会被执行，剩下的DidMount、DidUpdate执行时，都会先调用这个return的函数。

```js
useEffect(() => {
    // DidMount
    // DidUpdate
    return () => {
        // WillUnmount
    }
}, [])
```

### 如何自定义hooks?

### react-hooks性能优化？

- useMemo 缓存数据 相当于ShouldComponentUpdate pureComponent

```js
import React, {memo, useMemo} from 'react';
// 使用memo包裹子组件
const Child = memo((useInfo) => {
    return <div>
        {userInfo.name}
    </div>
});

function App() {
    const [name, setName] = useState('name');
    const [age, setAge] = useState(20);
    // 使用useMemo将数据缓存起来，第一个参数是函数，返回子组件需要用的数据，第二个是依赖，当依赖中的数据发生变化才更新子组件，否则不更新
    const userInfo = useMemo(() => {
        return {name, age};
    }, [name, age]);
    return <div>
        <Child userInfo={userInfo}>
    </div>
}
```

- useCallback 缓存函数

```js
const Child = memo((userInfo, onChange) => {
    return <div>
        {userInfo.name}
        <input type="text" onChange={onChange}>
    </div>
});

function App() {
    const [name, setName] = useState('name');
    const [age, setAge] = useState(20);
    // 缓存数据
    const userInfo = useMemo(() => {
        return {name, age};
    }, [name, age]);
    // 缓存事件
    const onChange = useCallback((e) => {
        console.log(e.target.value);
    }, []);
    return <div>
        <Child userInfo={userInfo} onChange={onChange}>
    </div>
}
```

### 使用react-hooks遇到哪些坑？

### hooks相比HOT和render Prop有哪些优点？ 