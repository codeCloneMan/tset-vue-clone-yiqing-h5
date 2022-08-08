<template>
    <div class="home">
        <!-- 1.疫情的图片 -->
        <div class="logo">
            <img src="../../assets/images/logo.png" width="100%" alt="" />
            <!-- 点击进入城市选择 -->
            <!-- <router-link class="select" to="/selectCity">{{ city }}=</router-link> -->
        </div>
        <!-- 2.病毒信息 -->
        <covInfo :covDesc="covDesc" :news="news" />
        <div class="list">
            <div>
                <router-link to="/area">
                    <img src="../../assets/images/1.png" alt="" />
                    <div>风险地区</div>
                </router-link>
            </div>
            <div>
                <router-link to="/hesuan">
                    <img src="../../assets/images/2.png" alt="" />
                    <div>核算检测</div>
                </router-link>
            </div>
            <div>
                <router-link to="/prevention">
                    <img src="../../assets/images/3.png" alt="" />
                    <div>防疫物资</div>
                </router-link>
            </div>
            <div>
                <router-link to="/travel">
                    <img src="../../assets/images/4.png" alt="" />
                    <div>出行政策</div>
                </router-link>
            </div>
        </div>
        <!-- 4.数据统计 -->
        <CovNumber :covData="covData" />
        <!-- 5.中国地图 -->
        <ChinaMap />
        <!-- 6.世界地图 -->
        <!-- <WorldMap /> -->
        <!-- 7.轮播图 -->
        <!-- <VueSwiper /> -->
        <!-- 8.数据统计 -->
        <!-- <CovList /> -->
    </div>
</template>

<script>
import covInfo from './covInfo/covInfo.vue'
import CovNumber from './covInfo/cov-number.vue'
// 导入接口
import api from '../../api/index'
import ChinaMap from '../vueEcharts/china-map.vue'
export default {
  name: 'home-view',
  data () {
    return {
      covDesc: {},
      news: [],
      covData: {} // 全国数据
    }
  },
  components: {
    covInfo,
    CovNumber,
    ChinaMap
  },
  created () {
    // 请求病毒接口
    api.getCovInfo().then((res) => {
      // console.log(res.data)
      // console.log(res.data.newslist[0])
      // console.log(res.data.newslist[0].news)
      // 1.病毒信息
      const data1 = res.data.newslist[0]
      this.covDesc = {
        note1: data1.news[0].infoSource,
        note2: data1.news[0].summary,
        note3: data1.news[0].title
      }
      // 2.疫情热点
      this.news = res.data.newslist[0].news
      // console.log('处理的数据', this.covDesc)
      // 3.全国疫情的数据统计信息---
      this.covData = {
        currentConfirmedCount: data1.desc.currentConfirmedCount, // 现存确诊人数
        confirmedCount: data1.desc.confirmedCount, // 累计确诊人数
        suspectedCount: data1.desc.suspectedCount, // 累计境外输入人生
        deadCount: data1.desc.deadCount,
        seriousCount: data1.desc.seriousCount,
        suspectedIncr: data1.desc.suspectedIncr,
        currentConfirmedIncr: data1.desc.currentConfirmedIncr,
        confirmedIncr: data1.desc.confirmedIncr,
        curedIncr: data1.desc.curedIncr,
        deadIncr: data1.desc.deadIncr,
        seriousIncr: data1.desc.seriousIncr,
        curedCount: data1.desc.curedCount,
        modifyTime: data1.desc.modifyTime
      }
      // console.log('处理的数据2', this.covData)
    })
  }
}
</script>
<style lang='less' scoped>
.logo {
    position: relative;
}
.list {
    display: flex;
    padding-bottom: 0.2rem;
    > div {
        flex: 1;
        text-align: center;
        color: #666;
        img {
            width: 0.8rem;
            height: 0.8rem;
        }
    }
}
</style>
