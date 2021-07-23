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

自定义hooks其实就是一个函数，约定这个函数以use开头。然后你也可以让这个函数返回一个数组，就类似useState那样，当然了返回其他的值也可以。

下面自定义一个关于axios的hooks

起初不太明白，我在使用这个hooks的时候loading初始值为false，那我在使用的时候它不一直都是false了吗？而且像data、error甚至还是网络请求里的异步操作，那么我状态改变了但是在引用的时候它是个空值这不是有问题吗？后来才发现，useState的变化，会重新触发渲染，组件的更新。即便是你定义在其他hooks中的state。

```js
// 自定义hooks
function useAxios(url) {
    // 定义三个状态
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    })

    return [loading, data, error];
}

// 使用上面的hooks
function App() {
    const [loading, data, error] = useAxios('https://xxx.json');
    if (loading) {
        return <div>loading...</div>
    }
    error
        ? <div>{JSON.stringify(error)}</div>
        : <div>{JSON.stringify(data)}</div>
}
```

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

* useState初始化值，只有第一次有效

    想要修改status的值，只能通过setXxx来进行修改。useState只会在第一次初始化的时候赋值。如果useState可以反复修改值的话，那么它与setXxx的界限将会模糊。会引发一些没必要的麻烦。

* useEffect 可能出现死循环

    useEffect的依赖中如果有引用类型（对象、数组...）那么就会出现死循环。
    
    为什么会出现这种情况呢？在useEffect新旧依赖的对比上，react使用的是Object.is这个方法。Object.is在对比基本类型的时候，是可以直接判断出正确结果的，而如果对两个引用类型进行判断，即 Object.is({}, {})它一直都是false，useEffect会认为它的依赖一直有更新，所以它会一直执行下去，就会造成死循环。

```js
// bad
useEffect(() => {
    axios.get(url, config)
}, [url, config]);

// good
useEffect(() => {
    const config = {a, b, c};
    axios.get(url, config)
}, [url, a, b, c]);
```

### hooks相比HOT和render Prop有哪些优点？ 

下面使用三种方式实现同一个功能。获取鼠标位置，看看逻辑方面的复杂度

我在下面分别写了HOC、render props、 hooks实现获取鼠标位置的公共逻辑。从理解的难易逻辑上看，hooks是最直观的，能一眼看出来useMousePosition这个方法是干嘛的，而且在调用的时候更加简洁。而HOC、render props看上去并没有那么直观，在使用部分与公共部分的嵌套逻辑过于复杂，代码可读性上也更差一些。

1. HOC
```js
function WithMouse(component) {
    class Factory extends React.Component {
        constructor(props) {
            super(props);
            this.state = {x: 0, y: 0};
        }
        getMousePOsition(e) {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener('mousemove', getMousePOsition);
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', getMousePOsition);
        }
        render() {
            return <div>
                <component {...this.props} mouse={this.state}></component>
            </div>
        }
    }
    return Factory;
}

function GetMouseMove(props) {
    return <div>
        <p>x: {props.mouse.x}</p>
        <p>y: {props.mouse.y}</p>
    </div>
}
export default WithMouse(GetMouseMove);
```
2. render props

```js
class Factory  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    }
    getMousePOsition(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    componentDidMount() {
        window.addEventListener('mousemove', getMousePOsition);
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', getMousePOsition);
    }
    render() {
        return <div>
            {this.props.render(this.state)}
        </div>
    }
}

function GetMouseMove() {
    return <Factory render={(props) => {
        return <div>
            <p>x: {props.mouse.x}</p>
            <p>y: {props.mouse.y}</p>
        </div>
    }}>
    </Factory>
}
```

3. hooks

```js
function useMousePosition() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    getMousePOsition(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    useEffect(() => {
        window.addEventListener('mousemove', getMousePOsition);
        return () => {
            window.removeEventListener('mousemove', getMousePOsition);
        }
    }, []);
    return [x, y]
};
function App() {
    const [x, y] = useMousePosition();
    return <div>
        <p>x: {props.mouse.x}</p>
        <p>y: {props.mouse.y}</p>
    </div>
}
```


### Hooks使用规范

* 自定义Hooks要以use开头 useXxxx

* 只能用于React函数组件和自定义hook中，其他地方不可以

* 只能用于顶层代码，不能在循环、判断中使用hooks

