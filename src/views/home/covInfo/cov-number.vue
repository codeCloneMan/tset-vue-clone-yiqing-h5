<template>
    <div class="num">
        <div class="content">
            <div class="title">
                截止{{ covData.modifyTime | time }}全国数据统计
            </div>
            <ul class="wrap">
                <li>
                    <div class="number">
                        <span>较昨日</span
                        >{{ covData.currentConfirmedIncr | number }}
                    </div>
                    <div class="bold">
                        {{ covData.currentConfirmedCount | division }}
                    </div>
                    <strong>现有确诊</strong>
                </li>
                <li>
                    <div class="number">
                        <span>较昨日</span>{{ covData.suspectedIncr | number }}
                    </div>
                    <div class="bold">
                        {{ covData.suspectedCount | division }}
                    </div>
                    <strong>境外输入</strong>
                </li>
                <li>
                    <span>较昨日</span>{{ covData.seriousIncr | number }}
                    <div class="bold">
                        {{ covData.seriousCount | division }}
                    </div>
                    <strong>现存无症状</strong>
                </li>
                <li>
                    <span>较昨日</span>{{ covData.confirmedIncr | number }}
                    <div class="bold">
                        {{ covData.confirmedCount | division }}
                    </div>
                    <strong>累计确诊</strong>
                </li>
                <li>
                    <span>较昨日</span>{{ covData.deadIncr | number }}
                    <div class="bold">{{ covData.deadCount | division }}</div>
                    <strong>累计死亡</strong>
                </li>
                <li>
                    <span>较昨日</span>{{ covData.curedIncr | number }}
                    <div class="bold">{{ covData.curedCount | division }}</div>
                    <strong>累计治愈</strong>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['covData'],
  // 定义过滤器
  filters: {
    // 1.数字>0 补+
    number: function (val) {
      val = val > 0 ? '+' + val : val
      if (val === 0) {
        return ''
      }
      return val
    },
    // 2.处理事件格式 --- js:年月日
    time: function (time) {
      time = new Date().toLocaleString('chinese', { hour12: false })
      return time
    },
    // 3.js中数字加逗号处理(每三位加逗号)
    division: function (num) {
      if (num === undefined) return ''
      return num.toLocaleString()
    }
  }
}
</script>

<style lang="less" scoped>
.num {
    background: #f5f5f5;
    padding-top: 0.2rem;
    .content {
        background: #fff;
        padding: 0.2rem;
        min-height: 0.2rem;
        border-radius: 0.2rem 0.2rem 0;
        .title {
            color: yellowgreen;
            margin-bottom: 0.2rem;
        }
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.2rem;
        border-radius: 0.2rem;
        box-shadow: 2px 3px 3px 6px darkgray;
        li {
            width: 33.3333%;
            text-align: center;
            margin-bottom: 0.3rem;
            strong {
                color: #333;
            }
        }
        .bold {
            font-weight: bold;
            font-size: 0.3rem;
        }
        li:nth-child(1) .bold {
            color: red;
        }
        li:nth-child(2) .bold {
            color: green;
        }
        li:nth-child(3) .bold {
            color: darkcyan;
        }
        li:nth-child(4) .bold {
            color: sandybrown;
        }
        li:nth-child(5) .bold {
            color: darkgreen;
        }
        li:nth-child(6) .bold {
            color: seagreen;
        }
    }
}
</style>
