// 开发vue插件echarts

import echarts from 'echarts'
// 导入之前安装的echarts中的中国地图js
import 'echarts/map/js/china'

// Object.defineProperties(obj,props)方法直接在一个对象上定义新的属性或修改现有属性，并返回对象
const install = function (Vue, options) {
  Object.defineProperties(Vue.prototype, {
    $myEchart: {
      get () {
        return {
          line (id) {
            const myChart = echarts.init(document.getElementById(id))
            // 指定图表的配置项和数据
            const option = {
              title: {
                text: 'ECharts 入门示例'
              },
              tooltip: {},
              legend: {
                data: ['销量']
              },
              xAxis: {
                data: [
                  '衬衫',
                  '羊毛衫',
                  '雪纺衫',
                  '裤子',
                  '高跟鞋',
                  '袜子'
                ]
              },
              yAxis: {},
              series: [
                {
                  name: '销量',
                  type: 'line',
                  data: [5, 20, 36, 10, 10, 20]
                }
              ]
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
          },
          // 2. 中国地图
          chinaMap (id, data) {
            const myChart = echarts.init(document.getElementById(id))
            const option = {
              tooltip: { // 悬浮弹框
                triggerOn: 'click', // 提示框触发的条件
                enterable: true, // 鼠标是否可进入提示框浮层中，默认为false
                formatter (item) { // item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
                  return '<a href="#/citys/' + item.name + '" style="color:#fff">省份：' + item.name + '</a>'
                }
              },
              visualMap: [{ // 映射高亮颜色
                orient: 'horizontal', // 水平的
                type: 'piecewise', // 离散
                bottom: 0,
                textGap: 4,
                itemGap: 4,
                itemWidth: 10,
                itemHeight: 10,
                padding: 2,
                textStyle: {
                  fontSize: 9
                },
                pieces: [ // 配置颜色区间
                  {
                    min: 0,
                    max: 0,
                    color: '#FFFFFF'
                  },
                  {
                    min: 1,
                    max: 9,
                    color: '#FAEBD2'
                  },
                  {
                    min: 10,
                    max: 99,
                    color: '#E9A188'
                  },
                  {
                    min: 100,
                    max: 499,
                    color: '#D56355'
                  },
                  {
                    min: 500,
                    max: 999,
                    color: '#BB3937'
                  },
                  {
                    min: 1000,
                    max: 10000,
                    color: '#772526'
                  },
                  {
                    min: 10000,
                    color: '#480F10'
                  }
                ]
              }],
              series: [{
                name: '省',
                type: 'map', // 地图  bar  line  map
                map: 'china', // 中国地图 需要引入地图china.js
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)'
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data
                // data: [
                //     { name: '内蒙古', value: 200 },
                //     { name: '北京', value: 800 },
                // ]
              }]
            }
            myChart.setOption(option)
          }
        }
      }
    }
  })
}

export default install
