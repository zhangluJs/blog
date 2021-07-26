/**
 * @file resume
 * @date 2021/06/26
 */

import React from 'react';
import './index.scss';
export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume-container">
                <header className="resume-container-head">
                    <section className="resume-container-head-title">
                        <h1>张璐</h1>
                        <div className="job">
                            <h2>web前端开发<small> / 北京</small></h2>
                        </div>
                    </section>
                    <ul className="resume-container-head-info">
                        <li>男 / 1993.12</li>
                        <li>本科 / 4年工作经验</li>
                        <li>华中师范大学</li>
                    </ul>
                    <ul className="resume-container-head-contact">
                        <li>
                            <a href="https://zhanglujs.github.io/blog" target="_blank">
                                https://zhanglujs.github.io/blog
                                <span className="iconfont icon-Homehomepagemenu"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zhangluJs" target="_blank">
                                https://github.com/zhangluJs
                                <span className="iconfont icon-github-copy"></span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:zhangluecma@163.com" target="_blank">
                                zhangluecma@163.com
                                <span className="iconfont icon-emailFilled"></span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:15210205880" target="_blank">
                                15210205880
                                <span className="iconfont icon-phone"></span>
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="resume-container-body">
                    <h3 className="title">
                        专业能力
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>H5</strong>、<strong>CSS3</strong>、<strong>页面布局</strong>、<strong>响应式布局</strong>等，重视<strong>页面交互</strong>与<strong>用户体验</strong>。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>ES6</strong>语法编程，追求代码<strong>高质量可维护性</strong>。熟悉<strong>异步</strong>、<strong>网络请求</strong>等基本内容。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>Vue2.x</strong>。了解<strong>Vuex</strong>、<strong>Vue-router</strong>。了解<strong>Vue3</strong>等相关新特性
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉<strong>React</strong>以及<strong>React Hooks</strong>等相关特性。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>了解<strong>webpack</strong>相关基础配置。有过简单的配置经验。维护过<strong>gulp</strong>相关项目
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>对<strong>Node.js</strong>、<strong>CSS预处理器</strong>、<strong>数据可视化</strong>、<strong>性能优化</strong>、<strong>前端安全</strong>等也有一定的应用。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>Git</strong>进行版本控制和代码管理、了解项目常规<strong>开发流程</strong>、<strong>开发调试技巧</strong>，了解简单的<strong>Linux</strong>命令。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>工作上<strong>积极执行</strong><strong>有责任心</strong>，具有良好的<strong>团队沟通合作</strong>能力以及<strong>学习能力</strong>。
                        </li>
                    </ul>
                    <h3 className="title">
                        工作经验
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.06 ～ 至今</strong></span>
                            <span className="info-item-name"><strong>首汽租赁有限责任公司</strong></span>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>负责项目中接入技术的前期调研</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>项目开发中的技术支持</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>整站公共部分需求的开发、bug修复等</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>各方资源的协调。需求明确、接口数据格式定义、进度排期等</p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2017.08 ～ 2019.06</strong></span>
                            <span className="info-item-name"><strong>软通动力</strong></span>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>负责日常需求的迭代开发、包括需求评审、提测上线支持等</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>按照UI设计稿还原、实现页面交互</p>
                        </li>
                    </ul>
                    <h3 className="title">
                        项目经验
                    </h3>
                    <ul>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.08 ～ 至今</strong></span>
                            <span className="info-item-name"><strong>综合管理平台、短租管理平台</strong></span>
                            <p className="info-item-desc">
                                技术栈：<strong>Vue-cli</strong>、<strong>Element-ui</strong>、<strong>Echarts</strong>等。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责系统迭代更新。维保，BI数据可视化、CRM、维保管理、车辆资产等模块的开发。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责统中关于电子围栏的公共组件开发。通过调用高德地图api，完成圆形、多边形的电子围栏绘制，以及切换城市时地图及围栏中心点的初始化。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>开发文件上传后回显list组件开发，暴露出删除文件、查看当前文件等回调函数。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>修复系统中公共部分bug，例如系统多页签用户登录信息显示错误等
                            </p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.10 ～ 2019.12</strong></span>
                            <span className="info-item-name"><strong>短租租车M站开发</strong></span>
                            <p className="info-item-desc">
                                技术栈：<strong>React全家桶</strong>、<strong>Antd-mobile</strong>。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>主要负责了项目中首页、城市选择页面开发。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>调用高德api获取当前用户经纬度，请求接口推送距离最近的租车门店。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>通过拆分组件、降低颗粒度减少逻辑的复杂度。将城市页面输入搜索、城市列表、右侧字母导航拆分成独立的组件。暴露方法、数据来完成组件间的通信
                            </p>
                        </li>
                        <div style={{pageBreakAfter: 'always'}}></div>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.08 ～ 至今</strong></span>
                            <span className="info-item-name"><strong>H5活动页、APP端H5页面支持</strong></span>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责H5相关活动页的开发。使用jQuery完成页面的基本交互，通过用户填写手机号完成活动优惠券的发送
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>APP端webview协议相关页面的开发支持。判断user-agent分别调用安卓、ios暴露出的方法来完成相应的交互等
                            </p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2018.10 ～ 2019.01</strong></span>
                            <span className="info-item-name"><strong>XPage</strong></span>
                            <p className="info-item-desc">
                                项目背景：XPage  解决后台管理系统的前端页面开发效率和体验问题，快速创建后台管理系统，开箱即用的企业管理系统前端/设计解决方案。
                            </p>
                            <p className="info-item-desc">
                                技术栈：<strong>Vue-cli 2.x</strong>、<strong>element-ui</strong>
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责XPage物料库中物料的提供。提供了线性面积图（图表）、地图（图表）、进度条数据列表、富文本编辑器等模块
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>开发了一套可动态布局改变整站样式风格的数据分析报表模板
                            </p>
                        </li>
                    </ul>
                    <h3 className="title">
                        个人项目
                    </h3>
                    <ul>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2018.09 ～ 至今</strong></span>
                            <span className="info-item-name">
                                <strong>
                                    <a className="link" href="https://zhanglujs.github.io/blog" target="_blank">
                                        个人博客
                                        <span className="iconfont icon-lianjie"></span>
                                    </a>
                                </strong>
                            </span>
                            <p className="info-item-desc">
                                技术栈：<strong>React</strong>、<strong>webpack</strong>、<strong>Markdown</strong>
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>公共组件、首页、子页面使用<strong>React</strong>开发，路由部分使用<strong>React-router</strong>开发
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>文档部分使用<strong>Markdown</strong>来完成编辑。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建工具使用<strong>webpack</strong>进行配置。其中配置了<strong>babel-loader</strong>用于转义ES6语法、<strong>file-loader</strong>解析字体文件、<strong>babel-loader!markdown-it-react-loader</strong>解析md文件等。
                                plugins部分使用了<strong>HtmlWebpackPlugin</strong>、<strong>CleanWebpackPlugin</strong>、<strong>CopyWebpackPlugin</strong>等完成build文件的处理。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>使用<strong>gitpage</strong>通过访问静态文件的方式完成部署。
                            </p>
                        </li>
                    </ul>
                </div>
                <footer className="resume-container-footer">
                    <a href="https://zhanglujs.github.io/blog/index.html#/resume" target="_blank">
                        <span className="iconfont icon-lianjie"></span>
                        &nbsp;&nbsp;网页版简历 https://zhanglujs.github.io/blog/index.html#/resume
                    </a>
                </footer>
            </div>
        );
    }
}