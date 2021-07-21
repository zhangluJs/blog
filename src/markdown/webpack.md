# webpack

**首先来看一下[webpack](https://www.webpackjs.com/)官网给出的一个示意图**

![webpack](./static/img/webpack.png)

其实仔细的看看官网这个图片就发现基本上已经把webpack给总结出来了。一个一个相互独立却又关联的模块（js、img、sass）通过webpack被打包构建成为了一个个整体。这对我们开发者来说是一种解放。还记得很久以前学习前端，不知道有构建工具，一个inde.html，若干个css、js文件就开始敲代码（小白的时候），页面一多起来就会发现随之而来的是css与js的臃肿，无意中给开发以及日后维护带来了很大的痛苦。后来使用这种构建工具，它将我们的一个一个模块独立拆分出来，各个模块之间独立，只需要关注模块内部的东西，化繁为简。大大提高了工作效率，维护成本。

### 开始学习

1. 创建文件夹。在文件夹下执行命令 ```npm init```（默认已经安装npm、node、vscode、chrome等），来初始化package.json文件。这个文件里描述了你项目中的用到的一些开发依赖项，以及项目入口执行脚本、版本，作者等等一系列关于该项目的信息。

2. ```npm install webpack webpack-cli --save-dev```， install webpack 相关的包才可以来使用webpack进行后续的开发配置等等。 --save-dev的作用是开发时需要依赖的包，会将包信息添加到package.json中devDependencies。因为webpack是在开发时候需要的工具，而打包完成上线并不需要webpack所以我们将它保存在开发环境依赖中。

3. 创建index.htlm文件。创建src文件夹，来存放具体的页面组件相关内容。创建webpack.config.js文件（使用webpack命令的情况下，webpack会默认在项目目录下寻找webpack.config.js文件，把它作为默认的入口文件来运行）。我这里手动将webpack的启动与构建命令写入了package.json的script中。这样通过简易的```npm run dev```与```npm run build```命令就可以完成启动与构建。

**webpack具体相关配置项**

#### entry：

项目的入口。有三种类型的值可以选择，一种是string，也就是指定一个具体的入口文件。第二种是数组，指定多个入口文件。第三种是对象：对象的key代表chunkName,value就是一个真实的entry（在多页面应用时会用到第三种方式）。要注意的是，以对象为入口时output中filename也要相应的做出调整，可以用这三种占位符来表达你输出的文件名称[name]/[hash]/[chunkhash]。如果依旧只指定一个出口文件名称的，打包出的结果会被覆盖掉。

```js
entry: path.join(__dirname, 'src/main.js')
```

#### output：

文件打包出口。值为对象，其中常用的属性有 filename、path。

```js
output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/main.[hash].js'
}
```

#### devtool：

使用构建工具后，项目一旦报错就很难找出具体问题所在，webpack提供了devtool来帮助我们解决这个问题（开发中遇到了这个问题才添加到配置中）。

#### devServer：

webpack-dev-server是一个小型的Node.js Express服务器。通过它我们可以在本地快速启动项目开发等。

```js
devServer: {
    contentBase: './',
    inline: true,
    port: 8080,
    compress: false,
    hot: true
}
```

#### loader：

对加载的文件资源进行转换。比如对图片进行压缩，es6/es7转为浏览器识别的es5，编译less、sass等。我在这个项目中打算使用reacr所以需要对jsx来进行编译。在使用各种laoder的时候别忘了提前install。关于各个loader就不介绍了，基本上官网就已经给出很好的解释了。
```js
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(jpg|jpeg|gif|png|svg)$/,
            loader: 'url-loader'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        // ...
    ]
}
```

* postcss-loader 这个loader是给css属性加浏览器内核前缀的。为了解决兼容问题

#### plugins：

对于这个选项官网给出的解释是```用于以各种方式自定义 webpack 构建过程```。
```js
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'body'
    })
    // ...
}
```

**马后炮一发。其实整体配置完了后发现，配置项并没有多复杂，按照自己的需要选择不同的loader、plugin来满足项目的需要。当然了，vue-cli那种复杂并且区分开发环境生产环境的架子一时半会还是搞不定的，还需要慢慢学习、经历与沉淀。(2021年7月19日，收回这句话，太难了)**


## 高级配置

### webpack如何配置多入口

```js
// 多个项目入口，index.js other.js
{
    entry: {
        index: path.join(__dirname, 'src/main.js'),
        other: path.join(__dirname, 'src/other.js'),
    }
    // 多个出口
    output: {
        // name依赖于entry的文件名这里是index于other
        filename: '[name].[contentHash:8].js',
        path: path: path.join(__dirname, 'dist'),
    }
    // 多个plugin
    plugin: [
        // 多入口 - 生成index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // 指定html文件
            template: path.join(__dirname, 'src/index.html'),
            // chunks表示该页面要引用哪些chunk（即上面的index.js 和 other.js）
            // 如果不写chunks的话，两个文件都会被引入
            chunks: ['index'] // 只引用index.js
        }),
        // 多入口 - 生成 other.html
        new HtmlWebpackPlugin({
            filename: 'other.html',
            // 指定html文件
            template: path.join(__dirname, 'src/other.html'),
            // chunks表示该页面要引用哪些chunk（即上面的index.js 和 other.js）
            chunks: ['other'] // 只引用other.js
        }),
    ]
}
```

### 抽离压缩CSS文件

webpack使用loader加工后的css如果不做处理是在js文件中写入的，所以我们需要把它抽离出来形成单独的文件。需要使用MiniCssExtractPlugin来完成。

```js
module: {
    rules: [{
        // 使用MiniCssExtractPlugin.loader对css less进行编译
        text: '/\.less/$',
        exclued: /node_modules/,
        loader: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader',
            'postcss-loader'
        ]
    }]
},
plugin: [
    // 生成css文件
    new MiniCssExtractPlugin({
        filename: 'css/main.[contentHash:8].css'
    })
],
optimization: {
    // 压缩文件css
    minimizer: [new TerderJSPlugin({}), new OptimizeCSSAssetsWebpackPLugin()]
}
```

### 抽离公共代码

多入口的情况下，不同文件引入了相同的公共模块，如果不将公共的部分抽离出来将会造成代码重复。这时候就需要把公共的文件单独抽离出来，可以避免重复使用。

```js
optimization: {
    // 压缩文件css
    minimizer: [new TerderJSPlugin({}), new OptimizeCSSAssetsWebpackPLugin()],
    splitChunks: {
        /**
         * initial 入口chunk，对于异步带入的文件不处理
         * async   异步chunk，只对异步导入的文件处理
         * all     全部chunk
        */
        chunks: 'all',
        // 缓存分组
        cacheGroups: {
            // 第三方模块
            vendor: {
                // chunk 名称
                name: 'vendor',
                // 权重更高，优先抽离，重要！！！
                priority: 1,
                // 如果是node_modules包中的模块，就打包到vendor中
                test: /node_modules/,
                // 大小限制。如果公共的模块太小，单独打包反而不好，所以就需要判断一下模块大小
                minSize: 0,
                // 最少复用过几次。这里的意思是，如果用过一次就单独打包出来。
                minChunks: 1
            },
            // 公共的模块
            common: {
                // chunk名称
                name: 'common',
                // 优先级
                priority: 0,
                // 大小限制
                minSize: 0,
                // 最少复用过几次
                minChunks: 2
            }
        }
    }

}
```

### 异步加载JS(懒加载)

下面这个data.js文件也会单独的打包成为一个js，来被引用。

```js
setTimeout(() => {
    import('./data.js').then(res => {
        console.log(res.default.message)
    })
})
```

### module chunk bundle 的区别

* module - 各个源文件，webpack中一切皆模块。任意一个文件都可以看做是一个module

* entry - 多个模块合并成的，如entry import splitChunk

* bundle - 最终输出的文件

### webpack性能优化

1. 构建速度

    * 优化babel-loader 可用于生产环境

```js
{
    test: /\.js$/,
    // 开启缓存 cacheDirectory 会将没有修改的代码缓存，在下次修改时，如果代码没有被修改就不会被编译
    use: ['babel-loader?cacheDirectory'],
    // 明确编译的范围
    include: path.resolve(__dirname, 'src'),
    // 明确不需要编译的范围 include / exlude 两者选一个即可
    exclude: path.resolve(__dirname, 'node_modules')
}

```

2. IgnorePlugin 可用于生产环境

    避免引入无用模块

    用moment这个日期库举例，它里面有一部分是用来支持其他语言的模块，当我们开发的时候其实是不需要这部分的。我们就可以忽略掉这部分的内容。这样打包就不会把这部分内容打进去。

```js
plugin: [
    // 忽略moment下的locale目录
    new webpack.IngorePlugin(/\.\/locale/, /moment/)
]
 
// index.js 如果还需要用到某些locale下的内容，可以手动引入
// 这样的目的是只引入zh-cn这个语言包，其他的语言包依然被忽略
import 'moment-locale/zh-cn';
```

3. noParse 可用于生产环境

    避免重复打包，比如react.min.js这是已经打包后的文件，我们在编译的可以不用对其打包

```js
module: {
    noParse: ['/react\.min\.js$/']
}
```

* IgnorePlugin 与 noParse的区别

> IgnorePlugin直接忽略掉文件，代码中没有。noParse引入，但不打包。

4. happyPack 可用于生产环境

    开启多进程打包

```js
const HappyPack = require('happypack');
module: {
    rules: [{
        test: '/\.js$/',
        // 这里的id对应下面plugin中设置的id 
        use: ['happypack/loader?id=babel'],
        include: Path.resolve(__dirname, 'src')

    }]
},
plugin: [
    // happypack 开启多进程打包
    new HappyPack({
        // 这里的id对应上面的id=babel
        id: 'babel',
        // 如何处理.js文件，用法和loader配置中一样
        loaders: ['babel-loader?cacheDirectory']
    })
]
```

5. parallelUglifyPlugin 必须用于生产环境

    开启多进程压缩js

```js
const ParallelUglifyPlugin = require('webpack-paralle-uglify-plugin');
plugin: [
    new ParallelUglifyPlugin({
        uglifyJS: {
            output: {
                // 最紧凑的输出
                beautify: false,
                // 删除所有注释
                comments: false
            },
            compress: {
                // 删除所有的 console 语句，可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }
    })
]
```

6. 自动刷新 不可用于生产环境

    修改完代码后浏览器自动刷新一下

```js
module.exports = {
    watch: true, // 默认是false
    watchOptions: {}
}
```

7. 热更新 不可用于生产环境

    页面不刷新，直接应用最新的代码

```js
module.exports = {
    entry: {
        index: [
            // 固定的写法 域名端口要与你本地的服务一致 也就是devserver中定义的
            'webpack-dev-server/client?http://localhost:3001/',
            'webpack/hot/dev-server',
            path.join(__dirname, 'src/main.js')
        ]
    },
    devServer: {
        // 开启热更新
        hot: true,
        port: 3001
    },
    plugin: [
        // 调用HotModuleReplacementPlugin
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

8. DllPlugin 动态链接库插件 没必要用于生产环境

    前端框架如Vue、React体积大，构建慢。版本较稳定，不常升级版本。同一个版本只构建一次即可，不用每次都重新构建。

    DllPlugin - 打包出dll文件

    DllReferencePlugin - 使用dll文件

    题外话：个人理解，大型项目中代码量上来后，每次编译都是比较耗时的，而且像vue、react这种比较大的框加。而如果我提前将vue、react这类框架编译一份放在本地，每次都使用这份编译后的dll文件，除非版本升级否则就不重新编译，这样就可以增加开发时编译的速度。`webpack水好深，之前没弄过这玩意。`

```js
// webpack.dll.js
module.exports = {
    mode: 'development',
    // 入口文件
    entry: {
        // 期望生成dll内容的库
        // 把React相关的模块放到一个单独的动态链接库
        react: ['react', 'react-dom']
    },
    output: {
        // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称
        // 也就是 entry 中配置的 react 和 polyfill
        filename: '[name].dll.js',
        // 输出的文件全部放在dist文件下
        path: path.join(__dirname, 'dist'),
        // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
        // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
        library: '_dll_[name]'
    },
    plugin: [
        // 接入dllplugin
        new webpack.Dllplugin({
            // 动态链接库的全局变量名称，需要和 output.library 中保持一致
            // 该字段的值也就是输出的 manifest.json 文件中 name 字段的值
            // 例如 react.manifest.json 中就有 "name": "_dll_react"
            name: '_dll_[name]',
            // 描述动态链接库的 manifest.json 文件输出时的文件名称
            path: path.join(__dirname, '[name].manifest.json'),
        })
    ]
}

// webpack.config.js
plugin: [
    // 告诉webpack 使用了哪些动态链接库
    new webpack.DllReferencePlugin({
        // 描述react动态链接库的文件内容 react.manifest.json这个文件就是上面生成的，相当于一个索引，告诉你怎么去使用dll中的内容
        manifest: require(path.join(__dirname, 'react.manifest.json'));
    })
]

// index.html
<script src="./react.dll.js"></script>
```

#### webpack性能优化 - 产出代码

    可以让打包后的代码体积更小。合理分包，不重复加载。速度更快，内存使用更少。

1. 小图片base64编码

```js
module.exports = {
    module: {
        result: [{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // 小于 5kb 的图片用base64 格式产出
                    // 否则，依然延用 file-loader 的行驶，产出url格式
                    limit: 5 * 1024,
                    output: '/img1/'
                }
            }
        }]
    }
}
```

2. bundle 后面加hash

```js
module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        // 添加内容hash，如果内容有更改则hash会改变，重新拉取新的资源。否则hash不改变，不会重新拉取
        filename: 'bundle.[contentHash:8].js',
        path: path.join(__dirname, 'dist')
    }
}
```

3. 懒加载

4. 提取公共代码

```js
module.exports = {
    optimization: {
        splitChunks: {
            chunk: 'all'
            cacheGroup: {
                vendor: {
                    name: 'vendor',
                    test: /node_modules/,
                    priority: 1,
                    minSize: 0,
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    minSize: 1,
                    minCunks: 2,
                    priority: 0
                }
            }
        }
    }
}
```

5. IgnorePlugin 忽略掉没用的某些多余的包

6. 使用CDN加速 publicPath

7. 使用production

    使用了production之后会自动压缩代码

    会启动Tree-shaking(只用使用ES6 module才能生效。commonjs不行)

8. Scope Hosting

    代码体积更小

    创建函数作用域更少

    代码可读性更好


## ES Module 和 Commonjs 的区别

这两者都是前端的模块化的解决方案，目前比较常用的是es6的module。nodejs中比较常用的是Commonjs。

- 建议使用ES6module。ES6Module静态引入，编译时引入。

- Commonjs动态引入，执行时引入。

## babel 

    解析es6/7到es5，保证浏览器的兼容性。

* babel-polyfill