<template>
    <div>
        <!-- <div class="title">国内疫情地图</div>
        <div id="main" style="width: 7rem; height: 8rem"></div> -->
        <h3 class="title">中国地图</h3>
        <div id="main2" style="width: 7rem; height: 8rem"></div>
    </div>
</template>

<script>
// 1.安装 2.导入echarts
// import echarts from 'echarts' //全局使用后，此处注销
import Api from '../../../src/api/index'
export default {
  mounted () {
    // console.log('this', this)
    // this.getMycharts()
    // this.$myEchart.line('main')
    Api.getChinaData().then((res) => {
      // console.log('----------', res.data)
      const citys = res.data.retdata
      const arr = []
      for (let i = 0; i < citys.length; i++) {
        const obj = {}
        obj.name = citys[i].xArea
        obj.value = citys[i].confirm
        arr.push(obj)
      }
      console.log('城市的数据', arr)
      this.$myEchart.chinaMap('main2', arr)
    })
    // data=[{name: '内蒙古', value: 200},{name: '', value: ''}]
    // this.$myEchart.chinaMap('main2')
  },
  methods: {
  //   getMycharts () {
  //     // 基于准备好的dom，初始化echarts实例
  //     // const myChart = echarts.init(document.getElementById('main'))
  //     // 全局使用echarts
  //     const myChart = this.$echarts.init(document.getElementById('main'))
  //     // 指定图表的配置项和数据
  //     const option = {
  //       title: {
  //         text: 'ECharts 入门示例'
  //       },
  //       tooltip: {},
  //       legend: {
  //         data: ['销量']
  //       },
  //       xAxis: {
  //         data: [
  //           '衬衫',
  //           '羊毛衫',
  //           '雪纺衫',
  //           '裤子',
  //           '高跟鞋',
  //           '袜子'
  //         ]
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: '销量',
  //           type: 'line',
  //           data: [5, 20, 36, 10, 10, 20]
  //         }
  //       ]
  //     }
  //     // 使用刚指定的配置项和数据显示图表。
  //     myChart.setOption(option)
  //   // }
  }
}
</script>

<style lang="less" scoped>
.title {
    margin: 0.2rem;
    padding-top: 0.2rem;
    border-top: 1px solid #eee;
}
// .title::before {
//     content: "";
//     border-left: 0.1rem solid rgb(9, 60, 202);
//     font-size: 0.26rem;
//     margin-right: 0.1rem;
// }
// #main,
// #nowMain {
//     background: #f5f5f5;
// }
</style>
