
## 丁香医生疫情
    移动端的疫情数据信息介绍
    
## 技术点
1.组件拆分
2.网络请求axios
3.vue中使用echarts图标
4.Vue汇总封装的tabs组件-自定义封装组件
5.Vue中使用swiper
6.vue中使用vant库

## 项目初始化
1.创建项目 vue create vue-yiqing
2.安装： axios(cnpm i axios -S) vant(cnpm i vant -S) 
3.删除无用的组件
4.css初始化，两种引入方式，在app.vue或main.js中
5.移动端适配的方案：
    1.phone.js(放在assets下会一起打包)引入main.js /媒体查询设置 各个屏幕的css
    2.vm布局(此项目中选中这个方法)
6.配置一个公共的接口文档，易于管理、查找

## 疫情的信息
1.处理接口地址
2.http://api.tianapi.com/ncov/index?key=736fd9f43c575ba7a9096c0ee277b00a


## vant库使用
1.安装 npm i vant -S
2.自动按需引入组件: npm i babel-plugin-import -D
3.对于实用babel7 的用户，可以在babel.config.js 中配置如下：
module.export = {
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
4.创建一个vant.js插件使用
5.main.js引入vant库
    import './plugins/vant'
    
## Echarts
1.安装指定版本echarts: npm i echarts@4.x -S
2.使用方式：
    1.组件内部使用单独使用
        1.导入：import echarts from 'echarts'
        2.初始化
        3.组件中引入，并挂载
        （或写成一个methods方法，然后在mounted中调用）
    2.挂载到vue原型上，所有组件都可以使用
        1.先导入：import echarts from 'echarts'
        2.main.js挂载: Vue.prototype.$echarts = echarts
        3.组件中使用this.$echarts.init()
    3.开发成vue插件echarts
        拓展：Object.defineProperties()
        1.plugins中开发echarts.js插件，使用Object.defineProperties()，并导出
        2.main.js中导入，并use
        3.在组件中使用this.$myEcharts.line(id)传入
3.对于vant库的问题：
    用vant包裹住，会产生加载不一致问题，则需要使用vue中异步调用方法：nextTick(()=>{操作dom方式})

## md5使用
1.安装npm install md5-js -S
2.引入md5模块
3.使用加密处理


## vant库-轮播图


## swiper使用 轮播滑动
注意：loop: true


## vue组件之间的数据传递方式
1.父传子：prop传递数据   子传父：自定义事件
2.父组件实例：$parent
3.子组件实例：$children
4.兄弟元素：子组件数据给父组件---另外的子组件
5.dom元素和子组件实例：$refs
6.获取根组件：$root
7.深层传递：provide / inject
8.原型链数据：Vue.prototype.xx = xx
9.本地存储：localStorage.setItem()/getItem()
10.中央系统：eventBus --- 跨组件之间的传递数据 (简单使用可以，大量使用不推荐，官网已舍弃)
11.Vuex












# project-test1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

