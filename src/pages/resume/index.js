/**
 * @file resume
 * @date 2021/06/26
 */

import React from 'react';
import './index.scss';
export default class Resume extends React.Component {

    componentDidMount() {
        document.title = '张璐-前端开发-5年';
    }

    render() {
        return (
            <div className="resume-container">
                <header className="resume-container-head">
                    <section className="resume-container-head-title">
                        <h1>张璐</h1>
                        <div className="job">
                            <h2>web前端开发<small> / 在职</small></h2>
                        </div>
                    </section>
                    <ul className="resume-container-head-info">
                        <li>男 / 1993.12</li>
                        <li>本科 / 5年工作经验</li>
                        <li>华中师范大学</li>
                    </ul>
                    <ul className="resume-container-head-contact">
                        <li>
                            <a href="https://zhanglujs.github.io/blog" target="_blank">
                                <span className="url">https://zhanglujs.github.io/blog</span>
                                <span className="iconfont icon-Homehomepagemenu"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zhangluJs" target="_blank">
                                <span className="url">https://github.com/zhangluJs</span>
                                <span className="iconfont icon-github-copy"></span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:zhangluecma@163.com" target="_blank">
                                <span className="url">zhangluecma@163.com</span>
                                <span className="iconfont icon-emailFilled"></span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:15210205880" target="_blank">
                                <span className="url">15210205880</span>
                                <span className="iconfont icon-phone"></span>
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="resume-container-body">
                    <h3 className="title">
                        专业技能
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>HTML5</strong>、<strong>CSS3</strong>进行<strong>页面布局</strong>。熟悉<strong>响应式布局</strong>、<strong>定位</strong>{ /*、<strong>浮动</strong> */}、<strong>过渡属性</strong>{ /* 、<strong>动画</strong> */}等属性。重视<strong>页面交互</strong>与<strong>用户体验</strong>。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>Javascript</strong>、<strong>ES6</strong>。追求代码<strong>高质量</strong>、<strong>可维护性</strong>、<strong>可复用性</strong>。严格遵守<strong>ESLint</strong>等开发规范。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>JQuery</strong>、<strong>Lodash</strong>、<strong>Echarts</strong>、<strong>ElementUI</strong>、<strong>Git</strong>、<strong>Less/Sass</strong>等前端工具(库)。
                        </li>
                        {/* <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉<strong>Promise</strong>、<strong>async/await</strong>、<strong>异步</strong>、<strong>闭包</strong>、<strong>DOM操作</strong>等前端相关特性。
                        </li> */}
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用{/* <strong>Vue1.x</strong>、*/}<strong>Vue</strong>、<strong>Vuex</strong>、<strong>Vue-router</strong>{/* 、<strong>Element-ui</strong>、<strong>axios</strong>*/}。深入了解过<strong>实现原理</strong>、<strong>源码</strong>。了解<strong>Vue3</strong>等相关新特性等。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉<strong>React</strong>以及<strong>React Hooks</strong>、<strong>Redux</strong>等相关特性。
                        </li>
                        {/* <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉<strong>Ajax</strong>网络请求等基本内容。了解网络协议及开发中常见<strong>HTTP code码</strong>、<strong>HTTP 报文</strong>等相关内容含义，有效提高与后端<strong>联调</strong>、<strong>开发</strong>效率。
                        </li> */}
                        {/* <li className="info-item">
                            <span className="iconfont icon-dian"></span>了解Server端基本的<strong>缓存策略</strong>。熟练使用<strong>chrome</strong>、<strong>Firefox</strong>等浏览器相关开发工具<strong>辅助开发</strong>、<strong>定位问题</strong>等。
                        </li> */}
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉前端构建工具<strong>webpack</strong>相关配置。维护过<strong>gulp</strong>等相关项目。
                        </li>
                        <li className="info-item">
                            <span className="iconfont icon-dian"></span>了解<strong>Node.js</strong>，对<strong>数据可视化</strong>、<strong>性能优化</strong>、<strong>前端安全</strong>、<strong>跨域</strong>等也有一定的应用。
                        </li>
                        {/* <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟练使用<strong>Git</strong>进行版本控制、代码管理，了解项目常规<strong>开发流程</strong>、<strong>开发调试技巧</strong>，了解简单的<strong>Linux</strong>命令、<strong>pm2</strong>项目部署等。
                        </li> */}
                        {/* <li className="info-item">
                            <span className="iconfont icon-dian"></span>熟悉项目从需求确认、开发、上线的整个流程。工作上<strong>积极执行</strong><strong>有责任心</strong>、<strong>响应快</strong>。具有良好的<strong>团队沟通合作能力</strong>以及<strong>学习能力</strong>。
                        </li> */}
                    </ul>
                    <h3 className="title">
                        工作经历
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.06 ～ 至今</strong></span>
                            <span className="info-item-name"><strong>首汽租赁有限责任公司</strong>（信息技术部）</span>
                            <p className="info-item-desc"><strong>公司简介：</strong>线下出行方式的解决方案。业务包括长租、短租、商务车队等一切用车需求。与滴滴出行等公司有相关业务合作。全国各大城市均有线下门店。</p>
                            <p className="info-item-desc"><strong>工作职责：</strong></p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>负责项目中接入技术的<strong>前期调研</strong>、<strong>可实施性</strong>、<strong>能否满足需求需要</strong>。</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>项目开发中的<strong>技术支持</strong>、<strong>问题排解</strong>、<strong>排期推进</strong>等。</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>各项目中<strong>公共部分</strong>需求的开发、<strong>bug修复</strong>等。</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>各方资源的协调。如<strong>需求确定</strong>、<strong>接口数据格式定义</strong>、<strong>开发排期</strong>等。</p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2017.08 ～ 2019.06</strong></span>
                            <span className="info-item-name"><strong>软通动力信息技术（集团）有限公司</strong></span>
                            <p className="info-item-desc"><strong>工作职责：</strong></p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>负责日常需求的<strong>迭代开发</strong>、<strong>包括需求评审</strong>、<strong>提测上线</strong>支持等。</p>
                            <p className="info-item-desc"><span className="iconfont icon-dian"></span>按照UI设计稿<strong>还原页面</strong>、<strong>实现页面交互</strong>等。</p>
                        </li>
                    </ul>
                    <h3 className="title">
                        项目经历
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.08 ～ 至今</strong></span>
                            <span className="info-item-name">
                                <strong>
                                    <a className="link" href="https://saas.izuche.com/#/Login" target="_blank">
                                        综合管理平台
                                        <span className="iconfont icon-lianjie"></span>
                                    </a>
                                </strong>
                            </span>
                            <p className="info-item-desc">
                                <strong>项目介绍：</strong>综合管理平台是内部toB后台管理系统。主要支持公司内部日常业务运行，功能包括车辆资产管理、客户数据分析、人员权限划分、OA审批等。
                            </p>
                            <p className="info-item-desc"><strong>技术栈：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>框架：Vue + Vuex + Vue-router + ElementUI
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建：webpack
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>CI/CD：gitlab CI + jenkins + 阿里云
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>项目管理：wiki + jira
                            </p>
                            <p className="info-item-desc"><strong>工作内容：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责系统中萤石云监控的前期接入技术调研，并开发组件供维修实况需求使用。可以实时查看车辆维修、保养进度。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                负责车机管理中电子围栏公共组件的开发。通过调用高德地图api，完成多边形的电子围栏绘制、围栏回显等功能。并提供暴露围栏坐标点的回调函数等。
                                在车辆监控、安全管理模块中使用。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>负责CRM-BI需求的开发，其中包括客户管理图表数据分析、销售线索数据分析等模块。和组内成员一个月时间从设计、开发、测试并提前上线，当月绩效考核+20分。
                            </p>
                        </li>
                        <div style={{pageBreakAfter: 'always'}}></div>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.10 ～ 2019.12</strong></span>
                            <span className="info-item-name">
                                <strong>
                                    <a className="link" href="https://m.izuche.com/" target="_blank">
                                        移动端-租车M站
                                        <span className="iconfont icon-lianjie"></span>
                                    </a>
                                </strong>
                            </span>
                            <p className="info-item-desc">
                                <strong>项目介绍：</strong>
                                拓展租车渠道以m站方式接入，方便快捷。后续可通过链接嵌入方式接入到各大应用。
                                目前已对接高德地图、携程、首汽约车等app。用户可在其应用下单，同在“首汽租车APP”下单。
                            </p>
                            <p className="info-item-desc"><strong>技术栈：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>框架：react + react-redux + react-router + antd-mobile
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建：webpack
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>CI/CD：gitlab CI + jenkins + 阿里云
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>项目管理：wiki + jira
                            </p>
                            <p className="info-item-desc"><strong>工作内容：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                参与首页、城市选择页面开发。其中包括门店选择、租车时间、城市搜索等模块。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                负责渠道对接、免登录需求开发。通过判断运行环境userAgent，与客户端进行交互。调用客户端暴露的方法获取用户身份信息，隐藏nav导航栏等功能。
                            </p>
                        </li>
                        <li className="info-item">
                            <span className="info-item-time"><strong>2019.07 ～ 2019.08</strong></span>
                            <span className="info-item-name"><strong>支付宝小程序-首汽租车</strong></span>
                            <p className="info-item-desc">
                                <strong>项目介绍：</strong>
                                借用支付宝大平台推广公司租车服务。用户在需要用车时，无需下载应用使用小程序即可快捷租车。同时推出芝麻信用免押金租车服务。
                            </p>
                            <p className="info-item-desc"><strong>技术栈：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>框架：支付宝小程序(axml、js、json、acss) + mini-antui
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建：小程序开发者工具
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>项目管理：gitlab + wiki + jira + 开发者中心
                            </p>
                            <p className="info-item-desc"><strong>工作内容：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                参与首页、车辆详情页、门店更换页面开发。包括获取用户位置推送最近门店、切换当前城市、所选车型信息等模块。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                参与后期优惠券发放、ui样式优化调整等功能开发。
                            </p>
                        </li>
                        {/* <div style={{pageBreakAfter: 'always'}}></div> */}
                        <li className="info-item">
                            <span className="info-item-time"><strong>2018.10 ～ 2019.01</strong></span>
                            <span className="info-item-name"><strong>XPage</strong></span>
                            <p className="info-item-desc">
                                <strong>项目介绍：</strong>
                                XPage  解决后台管理系统的前端页面开发效率和体验问题，快速创建后台管理系统，开箱即用的企业管理系统前端/设计解决方案。
                            </p>
                            <p className="info-item-desc"><strong>技术栈：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>框架：Vue + Vuex + Vue-router + Vue-Electron + ElementUI
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建：webpack
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>项目管理：icafe
                            </p>
                            <p className="info-item-desc"><strong>工作内容：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                参与提供了物料库中的部分物料。包括线性面积图（图表）、地图（图表）、进度条、数据列表等模块。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>开发了一套可动态布局改变整站样式风格的数据分析报表模板。并根据部门ui规范，使用element-ui自定义主题，
                                生成并发布了one-design-element主题样式npm包。
                            </p>
                        </li>
                    </ul>
                    <h3 className="title">
                        个人博客
                    </h3>
                    <ul className="info">
                        <li className="info-item">
                            <span className="info-item-time"><strong>2018.09 ～ 至今</strong></span>
                            <span className="info-item-name">
                                <strong>
                                    <a className="link" href="https://zhanglujs.github.io/blog" target="_blank">
                                        个人主页
                                        <span className="iconfont icon-lianjie"></span>
                                    </a>
                                </strong>
                            </span>
                            <p className="info-item-desc">
                                <strong>介绍：</strong>
                                最开始做这个主页是为了熟悉react及webpack配置相关的内容，之后又接触到markdown。所以就修改配置，开始用md的形式记录工作中遇到的一些问题，以及学习时的笔记。使用gitpage的形式部署到线上，方便查阅。
                            </p>
                            <p className="info-item-desc">
                                <strong>技术栈：</strong>
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>框架：react + react-redux + react-router-dom + markdown
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>构建：webpack
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>项目管理/部署：github/gitpage
                            </p>
                            <p className="info-item-desc"><strong>项目内容：</strong></p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                手动配置了webpack。通过laoder完成了对es6语法，图片、md、scss、fontface等文件的编译转换。
                                通过plugin完成了对构建过程中文件的处理，如生成模版、提取css文件、清除dist文件、复制静态文件等操作。
                                了解了多页面的配置方式，devServer、devtool等配置项的使用。
                            </p>
                            <p className="info-item-desc">
                                <span className="iconfont icon-dian"></span>
                                文章内容使用markdown格式进行编辑，快速生成html页面，提高了产出效率。了解markdown基本的语法。
                            </p>
                        </li>
                    </ul>
                </div>
                <footer className="resume-container-footer">
                    <a href="https://zhanglujs.github.io/blog/#/resume" target="_blank">
                        <span className="iconfont icon-lianjie"></span>
                        &nbsp;&nbsp;网页版简历 https://zhanglujs.github.io/blog/#/resume
                    </a>
                </footer>
            </div>
        );
    }

    componentWillUnmount() {
        document.title = 'blog';
    }
}