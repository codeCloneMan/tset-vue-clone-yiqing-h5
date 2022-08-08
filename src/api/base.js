// 公共的请求的接口
const base = {
  host: 'http://api.tianapi.com', // 天行数据 --疫情病毒
  baseUrl: 'https://yupn.api.storeapi.net', // 挖数据---国内疫情
  covInfo: '/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3', // 疫情病毒信息
  chinaData: '/api/94/221?format=json&appid=20115&city_name=%E5%8D%97%E4%BA%AC&sign=b54429206827ba450468d7bd37dd11ae' // 国内疫情

}

export default base
