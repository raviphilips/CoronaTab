
import { PlaceSeedData } from '../../places'
const RegionPolygons = require('./polygons.json')

export const RegionsData: PlaceSeedData[] = [{
  id: `france-la-réunion`,
  locales: {
    en: `Réunion`
  },
  alternativeNames: undefined,
  phoneCode: `+262`,
  alpha2code: `RE`,
  alpha3code: `REU`,
  population: 859959,
  coordinates: [55.53996829500005,-21.115329685499916],
  polygon: RegionPolygons[`france-la-réunion`],
  parentId: `united-kingdom`,
  dataSource: undefined
}, {
  id: `united-kingdom-gibraltar`,
  locales: {
    en: `Gibraltar`
  },
  alternativeNames: undefined,
  phoneCode: `+350`,
  alpha2code: `GI`,
  alpha3code: `GIB`,
  population: 33691,
  coordinates: [-5.348580120852014,36.13020456349999],
  polygon: RegionPolygons[`united-kingdom-gibraltar`],
  parentId: `united-kingdom`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom-jersey`,
  locales: {
    en: `Jersey`
  },
  alternativeNames: undefined,
  phoneCode: `+44`,
  alpha2code: `JE`,
  alpha3code: `JEY`,
  population: 97857,
  coordinates: [-2.133269823499944,49.21578603700004],
  polygon: RegionPolygons[`united-kingdom-jersey`],
  parentId: `united-kingdom`,
  dataSource: undefined
}, {
  id: `united-kingdom-guernsey`,
  locales: {
    en: `Guernsey`
  },
  alternativeNames: undefined,
  phoneCode: `+44`,
  alpha2code: `GG`,
  alpha3code: `GGY`,
  population: 67052,
  coordinates: [-2.601714647499932,49.46224599800004],
  polygon: RegionPolygons[`united-kingdom-guernsey`],
  parentId: `united-kingdom`,
  dataSource: undefined
}, {
  id: `united-kingdom-british-indian-ocean-territory`,
  locales: {
    en: `British Indian Ocean Territory`
  },
  alternativeNames: undefined,
  phoneCode: `+246`,
  alpha2code: `IO`,
  alpha3code: `IOT`,
  population: 2500,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-british-indian-ocean-territory`],
  parentId: `united-kingdom`,
  dataSource: undefined
}, {
  id: `united-kingdom-british-virgin-islands`,
  locales: {
    en: `British Virgin Islands`
  },
  alternativeNames: undefined,
  phoneCode: `+1`,
  alpha2code: `VG`,
  alpha3code: `VGB`,
  population: 30231,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-british-virgin-islands`],
  parentId: `united-kingdom`,
  dataSource: undefined
}, {
  id: `united-states-of-america-us-virgin-islands`,
  locales: {
    en: `US Virgin Islands`
  },
  alternativeNames: undefined,
  phoneCode: `+1`,
  alpha2code: `VI`,
  alpha3code: `VIR`,
  population: 104425,
  coordinates: [28.674670765279913,55.186838891464824],
  polygon: RegionPolygons[`united-states-of-america-us-virgin-islands`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-hubei`,
  locales: {
    en: `Hubei`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59170000,
  coordinates: [112.26392825753302,31.166405443456426],
  polygon: RegionPolygons[`china-hubei`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-guangdong`,
  locales: {
    en: `Guangdong`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 113460000,
  coordinates: [113.41792352680932,22.876783758944043],
  polygon: RegionPolygons[`china-guangdong`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-henan`,
  locales: {
    en: `Henan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 96050000,
  coordinates: [113.48442223524788,33.87707977965809],
  polygon: RegionPolygons[`china-henan`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-zhejiang`,
  locales: {
    en: `Zhejiang`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57370000,
  coordinates: [120.1641359794138,29.189050400871963],
  polygon: RegionPolygons[`china-zhejiang`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-hunan`,
  locales: {
    en: `Hunan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 68990000,
  coordinates: [111.50909061104284,27.369414984613826],
  polygon: RegionPolygons[`china-hunan`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-anhui`,
  locales: {
    en: `Anhui`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 63240000,
  coordinates: [117.2581712176775,32.02378204990168],
  polygon: RegionPolygons[`china-anhui`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-jiangxi`,
  locales: {
    en: `Jiangxi`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46480000,
  coordinates: [116.01917707751011,27.275131334293633],
  polygon: RegionPolygons[`china-jiangxi`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-shandong`,
  locales: {
    en: `Shandong`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 100470000,
  coordinates: [118.74515424940193,36.33507593620547],
  polygon: RegionPolygons[`china-shandong`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-jiangsu`,
  locales: {
    en: `Jiangsu`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 80510000,
  coordinates: [119.14963721029278,32.934811713190015],
  polygon: RegionPolygons[`china-jiangsu`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-chongqing`,
  locales: {
    en: `Chongqing`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31020000,
  coordinates: [107.73296451180275,30.198712571927643],
  polygon: RegionPolygons[`china-chongqing`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-sichuan`,
  locales: {
    en: `Sichuan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 83410000,
  coordinates: [102.93966535826965,30.165213324835065],
  polygon: RegionPolygons[`china-sichuan`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-heilongjiang`,
  locales: {
    en: `Heilongjiang`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37730000,
  coordinates: [127.97325321185173,48.501949771374576],
  polygon: RegionPolygons[`china-heilongjiang`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-beijing`,
  locales: {
    en: `Beijing`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21540000,
  coordinates: [116.42780846573805,40.236575323991985],
  polygon: RegionPolygons[`china-beijing`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-shanghai`,
  locales: {
    en: `Shanghai`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24240000,
  coordinates: [121.43153719907554,31.266158547445322],
  polygon: RegionPolygons[`china-shanghai`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-hebei`,
  locales: {
    en: `Hebei`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75560000,
  coordinates: [116.65206139450123,39.323827419599695],
  polygon: RegionPolygons[`china-hebei`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-fujian`,
  locales: {
    en: `Fujian`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39410000,
  coordinates: [118.13227705193037,25.971159641604146],
  polygon: RegionPolygons[`china-fujian`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-guangxi`,
  locales: {
    en: `Guangxi`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49260000,
  coordinates: [108.27096784823755,23.899949245349177],
  polygon: RegionPolygons[`china-guangxi`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-shaanxi`,
  locales: {
    en: `Shaanxi`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38640000,
  coordinates: [108.36171166401203,35.63509908705319],
  polygon: RegionPolygons[`china-shaanxi`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-yunnan`,
  locales: {
    en: `Yunnan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48300000,
  coordinates: [101.85510583221756,25.179122725058342],
  polygon: RegionPolygons[`china-yunnan`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-hainan`,
  locales: {
    en: `Hainan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9340000,
  coordinates: [109.81287682400003,19.150763250500063],
  polygon: RegionPolygons[`china-hainan`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-guizhou`,
  locales: {
    en: `Guizhou`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36000000,
  coordinates: [106.60127648352287,26.9387435980386],
  polygon: RegionPolygons[`china-guizhou`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-tianjin`,
  locales: {
    en: `Tianjin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15600000,
  coordinates: [117.34508644325369,39.40813751918114],
  polygon: RegionPolygons[`china-tianjin`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-shanxi`,
  locales: {
    en: `Shanxi`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37180000,
  coordinates: [112.3891919290642,37.66312775369286],
  polygon: RegionPolygons[`china-shanxi`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-gansu`,
  locales: {
    en: `Gansu`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26370000,
  coordinates: [100.73804263765757,37.69770367228662],
  polygon: RegionPolygons[`china-gansu`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-liaoning`,
  locales: {
    en: `Liaoning`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43590000,
  coordinates: [122.31055016440854,41.09091390618639],
  polygon: RegionPolygons[`china-liaoning`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-jilin`,
  locales: {
    en: `Jilin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27040000,
  coordinates: [126.47365482303488,43.56576924140737],
  polygon: RegionPolygons[`china-jilin`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-xinjiang`,
  locales: {
    en: `Xinjiang`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24870000,
  coordinates: [84.98429810398284,41.752899103285706],
  polygon: RegionPolygons[`china-xinjiang`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-inner-mongolia`,
  locales: {
    en: `Inner Mongolia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25000034,
  coordinates: [111.62347220837569,45.35383134546877],
  polygon: RegionPolygons[`china-inner-mongolia`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-ningxia`,
  locales: {
    en: `Ningxia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6880000,
  coordinates: [106.00808271719359,37.31081075681095],
  polygon: RegionPolygons[`china-ningxia`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-qinghai`,
  locales: {
    en: `Qinghai`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6030000,
  coordinates: [96.23774885477579,35.43499502195269],
  polygon: RegionPolygons[`china-qinghai`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-st-martin`,
  locales: {
    en: `St Martin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-63.06228647314417,18.07776461717568],
  polygon: RegionPolygons[`france-st-martin`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom-channel-islands`,
  locales: {
    en: `Channel Islands`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.3644,49.3723],
  polygon: RegionPolygons[`united-kingdom-channel-islands`],
  parentId: `united-kingdom`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china-tibet`,
  locales: {
    en: `Tibet`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3440000,
  coordinates: [88.74489831230724,31.88221486755922],
  polygon: RegionPolygons[`china-tibet`],
  parentId: `china`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-saint-barthelemy`,
  locales: {
    en: `Saint Barthelemy`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9793,
  coordinates: [-62.82453365799992,17.903509833000072],
  polygon: RegionPolygons[`france-saint-barthelemy`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-french-polynesia`,
  locales: {
    en: `French Polynesia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [149.4068,-17.6797],
  polygon: RegionPolygons[`france-french-polynesia`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-french-guiana`,
  locales: {
    en: `French Guiana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-53.13299882399991,3.9276570495000627],
  polygon: RegionPolygons[`france-french-guiana`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-mayotte`,
  locales: {
    en: `Mayotte`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [45.150157097500085,-12.856052341999913],
  polygon: RegionPolygons[`france-mayotte`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-guadeloupe`,
  locales: {
    en: `Guadeloupe`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-61.49286861849993,16.196804103500057],
  polygon: RegionPolygons[`france-guadeloupe`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `netherlands-curacao`,
  locales: {
    en: `Curacao`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-68.97252356699991,12.19135163000007],
  polygon: RegionPolygons[`netherlands-curacao`],
  parentId: `netherlands`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom-cayman-islands`,
  locales: {
    en: `Cayman Islands`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-81.21929895699992,19.329608600000057],
  polygon: RegionPolygons[`united-kingdom-cayman-islands`],
  parentId: `united-kingdom`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-reunion`,
  locales: {
    en: `Reunion`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [55.2471,-21.1351],
  polygon: RegionPolygons[`france-reunion`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `netherlands-aruba`,
  locales: {
    en: `Aruba`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-70.0358,12.5186],
  polygon: RegionPolygons[`netherlands-aruba`],
  parentId: `netherlands`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom-montserrat`,
  locales: {
    en: `Montserrat`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-62.19774555640687,16.757985463853487],
  polygon: RegionPolygons[`united-kingdom-montserrat`],
  parentId: `united-kingdom`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `denmark-greenland`,
  locales: {
    en: `Greenland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-36.74461070059533,77.31684743914664],
  polygon: RegionPolygons[`denmark-greenland`],
  parentId: `denmark`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france-new-caledonia`,
  locales: {
    en: `New Caledonia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [165.618,-20.9043],
  polygon: RegionPolygons[`france-new-caledonia`],
  parentId: `france`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom-bermuda`,
  locales: {
    en: `Bermuda`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-64.75903561222813,32.30135133732527],
  polygon: RegionPolygons[`united-kingdom-bermuda`],
  parentId: `united-kingdom`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `australia-australian-capital-territory`,
  locales: {
    en: `Australian Capital Territory`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 426709,
  coordinates: [149.06023522322693,-35.53036325446061],
  polygon: RegionPolygons[`australia-australian-capital-territory`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-new-south-wales`,
  locales: {
    en: `New South Wales`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8089526,
  coordinates: [147.3153664483503,-32.82977854599065],
  polygon: RegionPolygons[`australia-new-south-wales`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-northern-territory`,
  locales: {
    en: `Northern Territory`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 245869,
  coordinates: [133.50015133877957,-18.516157321898987],
  polygon: RegionPolygons[`australia-northern-territory`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-queensland`,
  locales: {
    en: `Queensland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5095100,
  coordinates: [145.75436445400004,-19.64674041161055],
  polygon: RegionPolygons[`australia-queensland`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-south-australia`,
  locales: {
    en: `South Australia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1751693,
  coordinates: [135.0000995213503,-32.035240980898976],
  polygon: RegionPolygons[`australia-south-australia`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-tasmania`,
  locales: {
    en: `Tasmania`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 534281,
  coordinates: [146.16134687600004,-41.60023365649994],
  polygon: RegionPolygons[`australia-tasmania`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-victoria`,
  locales: {
    en: `Victoria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6594804,
  coordinates: [145.4695804428331,-36.537788791607284],
  polygon: RegionPolygons[`australia-victoria`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `australia-western-australia`,
  locales: {
    en: `Western Australia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2621680,
  coordinates: [120.95978010457588,-24.407891534499925],
  polygon: RegionPolygons[`australia-western-australia`],
  parentId: `australia`,
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `brazil-ro`,
  locales: {
    en: `RO`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1777225,
  coordinates: [-63.32729183604937,-10.831668929677392],
  polygon: RegionPolygons[`brazil-ro`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ac`,
  locales: {
    en: `AC`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 881935,
  coordinates: [-70.31670546006357,-9.121958699499913],
  polygon: RegionPolygons[`brazil-ac`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-am`,
  locales: {
    en: `AM`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4144597,
  coordinates: [-65.09820771798518,-3.801031659031324],
  polygon: RegionPolygons[`brazil-am`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-rr`,
  locales: {
    en: `RR`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 60576,
  coordinates: [-61.83588456621507,1.9338620027494215],
  polygon: RegionPolygons[`brazil-rr`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-pa`,
  locales: {
    en: `PA`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11433957,
  coordinates: [-52.52830438760455,-3.626695330355169],
  polygon: RegionPolygons[`brazil-pa`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ap`,
  locales: {
    en: `AP`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 845731,
  coordinates: [-52.330210155520206,1.6322509422846565],
  polygon: RegionPolygons[`brazil-ap`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-to`,
  locales: {
    en: `TO`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1572866,
  coordinates: [-48.25017595025989,-9.258995252778703],
  polygon: RegionPolygons[`brazil-to`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ma`,
  locales: {
    en: `MA`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7075181,
  coordinates: [-45.273975185456436,-5.739146620286533],
  polygon: RegionPolygons[`brazil-ma`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-pi`,
  locales: {
    en: `PI`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3273227,
  coordinates: [-43.19888220914663,-6.830773613917813],
  polygon: RegionPolygons[`brazil-pi`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ce`,
  locales: {
    en: `CE`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9132078,
  coordinates: [-39.34288443632698,-5.320150038402943],
  polygon: RegionPolygons[`brazil-ce`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-rn`,
  locales: {
    en: `RN`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3506853,
  coordinates: [-36.77516515873181,-5.902948951918576],
  polygon: RegionPolygons[`brazil-rn`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-pb`,
  locales: {
    en: `PB`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4018127,
  coordinates: [-36.764700791862396,-7.154162489157557],
  polygon: RegionPolygons[`brazil-pb`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-pe`,
  locales: {
    en: `PE`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9557071,
  coordinates: [-38.08805322348826,-8.378092949979674],
  polygon: RegionPolygons[`brazil-pe`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-al`,
  locales: {
    en: `AL`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3337357,
  coordinates: [-36.69176762624364,-9.66813364038606],
  polygon: RegionPolygons[`brazil-al`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-se`,
  locales: {
    en: `SE`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2298696,
  coordinates: [-37.32497127995194,-10.542973727655408],
  polygon: RegionPolygons[`brazil-se`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ba`,
  locales: {
    en: `BA`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14873064,
  coordinates: [-42.00270718030532,-13.428636359280546],
  polygon: RegionPolygons[`brazil-ba`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-mg`,
  locales: {
    en: `MG`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21168791,
  coordinates: [-45.44658738839726,-18.569305515387242],
  polygon: RegionPolygons[`brazil-mg`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-es`,
  locales: {
    en: `ES`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4018650,
  coordinates: [-40.768499482415194,-19.583987593752454],
  polygon: RegionPolygons[`brazil-es`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-rj`,
  locales: {
    en: `RJ`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17264943,
  coordinates: [-42.912834105494625,-22.06503752988857],
  polygon: RegionPolygons[`brazil-rj`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-sp`,
  locales: {
    en: `SP`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45919049,
  coordinates: [-48.6671272450763,-22.549618393174313],
  polygon: RegionPolygons[`brazil-sp`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-pr`,
  locales: {
    en: `PR`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11433957,
  coordinates: [-51.32115169669102,-24.601107883122296],
  polygon: RegionPolygons[`brazil-pr`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-sc`,
  locales: {
    en: `SC`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7164788,
  coordinates: [-51.10965735219543,-27.65149708429871],
  polygon: RegionPolygons[`brazil-sc`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-rs`,
  locales: {
    en: `RS`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11377239,
  coordinates: [-53.65568620171301,-30.406333313679497],
  polygon: RegionPolygons[`brazil-rs`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-ms`,
  locales: {
    en: `MS`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2778986,
  coordinates: [-54.559985008967104,-20.618883874041558],
  polygon: RegionPolygons[`brazil-ms`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-mt`,
  locales: {
    en: `MT`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3484466,
  coordinates: [-55.92350865614955,-12.685375257861864],
  polygon: RegionPolygons[`brazil-mt`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-go`,
  locales: {
    en: `GO`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7018354,
  coordinates: [-49.57789852549655,-15.936701348488441],
  polygon: RegionPolygons[`brazil-go`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `brazil-df`,
  locales: {
    en: `DF`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3015268,
  coordinates: [-47.79019110808315,-15.764954725480209],
  polygon: RegionPolygons[`brazil-df`],
  parentId: `brazil`,
  dataSource: `http://plataforma.saude.gov.br/novocoronavirus/resources/scripts/database.js?v=2020-03-20`
}, {
  id: `canada-british-columbia`,
  locales: {
    en: `British Columbia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5071000,
  coordinates: [-126.56202337499991,54.15716767014678],
  polygon: RegionPolygons[`canada-british-columbia`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-alberta`,
  locales: {
    en: `Alberta`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4067175,
  coordinates: [-115.00016854279502,54.49628672664678],
  polygon: RegionPolygons[`canada-alberta`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-saskatchewan`,
  locales: {
    en: `Saskatchewan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1098352,
  coordinates: [-105.6821561755884,54.496338403094796],
  polygon: RegionPolygons[`canada-saskatchewan`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-manitoba`,
  locales: {
    en: `Manitoba`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1278365,
  coordinates: [-95.4742987434922,54.496368513369816],
  polygon: RegionPolygons[`canada-manitoba`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-ontario`,
  locales: {
    en: `Ontario`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13448494,
  coordinates: [-84.7533750036988,49.26501413726137],
  polygon: RegionPolygons[`canada-ontario`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-quebec`,
  locales: {
    en: `Quebec`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8164361,
  coordinates: [-68.38833574149993,53.79378896700006],
  polygon: RegionPolygons[`canada-quebec`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-newfoundland-and-labrador`,
  locales: {
    en: `Newfoundland and Labrador`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 519716,
  coordinates: [-60.21844100481229,53.46112743006114],
  polygon: RegionPolygons[`canada-newfoundland-and-labrador`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-new-brunswick`,
  locales: {
    en: `New Brunswick`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 747101,
  coordinates: [-66.43830941249992,46.36274594300005],
  polygon: RegionPolygons[`canada-new-brunswick`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-nova-scotia`,
  locales: {
    en: `Nova Scotia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 923598,
  coordinates: [-63.021209276499945,45.266872463000055],
  polygon: RegionPolygons[`canada-nova-scotia`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-prince-edward-island`,
  locales: {
    en: `Prince Edward Island`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 142907,
  coordinates: [-63.21041826049995,46.49290599200006],
  polygon: RegionPolygons[`canada-prince-edward-island`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-yukon`,
  locales: {
    en: `Yukon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35874,
  coordinates: [-132.41233364551596,64.82713023550005],
  polygon: RegionPolygons[`canada-yukon`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-northwest-territories`,
  locales: {
    en: `Northwest Territories`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41786,
  coordinates: [-119.22198188100899,69.38320119914675],
  polygon: RegionPolygons[`canada-northwest-territories`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `canada-nunavut`,
  locales: {
    en: `Nunavut`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35944,
  coordinates: [-90.88314938052307,67.52741120000007],
  polygon: RegionPolygons[`canada-nunavut`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `switzerland-zurich`,
  locales: {
    en: `Zurich`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`switzerland-zurich`],
  parentId: `switzerland`,
  dataSource: `https://raw.githubusercontent.com/openZH/covid_19/master/COVID19_Fallzahlen_Kanton_ZH_total.csv`
}, {
  id: `spain-andalucía`,
  locales: {
    en: `Andalucía`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-5.760709740962795,36.52305392954614],
  polygon: RegionPolygons[`spain-andalucía`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-aragón`,
  locales: {
    en: `Aragón`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.08049929380734966,42.134828154805525],
  polygon: RegionPolygons[`spain-aragón`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-principado-de-asturias`,
  locales: {
    en: `Principado de Asturias`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-principado-de-asturias`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-illes-balears`,
  locales: {
    en: `Illes Balears`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-illes-balears`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-canarias`,
  locales: {
    en: `Canarias`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-canarias`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-cantabria`,
  locales: {
    en: `Cantabria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-3.991235879578522,43.13970978396958],
  polygon: RegionPolygons[`spain-cantabria`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-castilla-y-león`,
  locales: {
    en: `Castilla y León`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-6.152125149456111,41.68636903055628],
  polygon: RegionPolygons[`spain-castilla-y-león`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-castilla-la-mancha`,
  locales: {
    en: `Castilla-La Mancha`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.8916374333209092,38.724266107394925],
  polygon: RegionPolygons[`spain-castilla-la-mancha`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-cataluña`,
  locales: {
    en: `Cataluña`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [1.0855422223956452,42.03562612236923],
  polygon: RegionPolygons[`spain-cataluña`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-comunidad-valenciana`,
  locales: {
    en: `Comunidad Valenciana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-comunidad-valenciana`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-extremadura`,
  locales: {
    en: `Extremadura`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-6.250120712850645,39.75451443774111],
  polygon: RegionPolygons[`spain-extremadura`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-galicia`,
  locales: {
    en: `Galicia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-7.54885392701712,42.19553303442197],
  polygon: RegionPolygons[`spain-galicia`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-comunidad-de-madrid`,
  locales: {
    en: `Comunidad de Madrid`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-comunidad-de-madrid`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-región-de-murcia`,
  locales: {
    en: `Región de Murcia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-región-de-murcia`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-comunidad-foral-de-navarra`,
  locales: {
    en: `Comunidad Foral de Navarra`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`spain-comunidad-foral-de-navarra`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-país-vasco`,
  locales: {
    en: `País Vasco`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.154373327342114,43.14304220529398],
  polygon: RegionPolygons[`spain-país-vasco`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-la-rioja`,
  locales: {
    en: `La Rioja`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.4031165223596247,42.28492574697563],
  polygon: RegionPolygons[`spain-la-rioja`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-ceuta`,
  locales: {
    en: `Ceuta`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-5.345359091499915,35.88593067100006],
  polygon: RegionPolygons[`spain-ceuta`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `spain-melilla`,
  locales: {
    en: `Melilla`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.939916344999915,35.29882680600007],
  polygon: RegionPolygons[`spain-melilla`],
  parentId: `spain`,
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `italy-abruzzo`,
  locales: {
    en: `Abruzzo`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1311580,
  coordinates: [13.90075072681885,42.28841046055399],
  polygon: RegionPolygons[`italy-abruzzo`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-basilicata`,
  locales: {
    en: `Basilicata`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 562869,
  coordinates: [16.10092821894685,40.51736165566957],
  polygon: RegionPolygons[`italy-basilicata`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-pa-bolzano`,
  locales: {
    en: `P.A. Bolzano`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 107436,
  coordinates: [11.419398570635366,46.65500433907897],
  polygon: RegionPolygons[`italy-pa-bolzano`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-calabria`,
  locales: {
    en: `Calabria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1947131,
  coordinates: [16.418351979942813,39.02984011561159],
  polygon: RegionPolygons[`italy-calabria`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-campania`,
  locales: {
    en: `Campania`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5801692,
  coordinates: [14.783939401902451,40.74896505776182],
  polygon: RegionPolygons[`italy-campania`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-emilia-romagna`,
  locales: {
    en: `Emilia Romagna`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4459477,
  coordinates: [10.977418355306853,44.43551924350304],
  polygon: RegionPolygons[`italy-emilia-romagna`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-friuli-venezia-giulia`,
  locales: {
    en: `Friuli Venezia Giulia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1215220,
  coordinates: [13.120408018720507,46.11416103259626],
  polygon: RegionPolygons[`italy-friuli-venezia-giulia`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-lazio`,
  locales: {
    en: `Lazio`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5879082,
  coordinates: [12.738640304805985,41.811776720877134],
  polygon: RegionPolygons[`italy-lazio`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-liguria`,
  locales: {
    en: `Liguria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1550640,
  coordinates: [8.783353306551223,44.22635345917788],
  polygon: RegionPolygons[`italy-liguria`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-lombardia`,
  locales: {
    en: `Lombardia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10060574,
  coordinates: [9.96253973345539,45.65756679322394],
  polygon: RegionPolygons[`italy-lombardia`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-marche`,
  locales: {
    en: `Marche`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1525271,
  coordinates: [13.051090223045493,43.327895591043244],
  polygon: RegionPolygons[`italy-marche`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-molise`,
  locales: {
    en: `Molise`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 305617,
  coordinates: [14.551257200672993,41.716894204537866],
  polygon: RegionPolygons[`italy-molise`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-piemonte`,
  locales: {
    en: `Piemonte`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4356406,
  coordinates: [7.920205809104651,45.2610218282163],
  polygon: RegionPolygons[`italy-piemonte`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-puglia`,
  locales: {
    en: `Puglia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4029053,
  coordinates: [16.726699634103944,41.010137150757664],
  polygon: RegionPolygons[`italy-puglia`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-sardegna`,
  locales: {
    en: `Sardegna`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1639591,
  coordinates: [8.980454405390873,40.08640349767029],
  polygon: RegionPolygons[`italy-sardegna`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-sicilia`,
  locales: {
    en: `Sicilia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4999891,
  coordinates: [13.78962610516875,37.15296765317062],
  polygon: RegionPolygons[`italy-sicilia`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-toscana`,
  locales: {
    en: `Toscana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3729641,
  coordinates: [11.02809014521221,43.35572961610775],
  polygon: RegionPolygons[`italy-toscana`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-pa-trento`,
  locales: {
    en: `P.A. Trento`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1072276,
  coordinates: [11.214905976229801,46.10760284849263],
  polygon: RegionPolygons[`italy-pa-trento`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-umbria`,
  locales: {
    en: `Umbria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 882015,
  coordinates: [12.578027098494626,42.99086726176927],
  polygon: RegionPolygons[`italy-umbria`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-valle-d'aosta`,
  locales: {
    en: `Valle d'Aosta`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 125666,
  coordinates: [7.3704153357535205,45.726711771467265],
  polygon: RegionPolygons[`italy-valle-d'aosta`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `italy-veneto`,
  locales: {
    en: `Veneto`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4905854,
  coordinates: [11.862938179646614,45.737146979710815],
  polygon: RegionPolygons[`italy-veneto`],
  parentId: `italy`,
  dataSource: `https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/dpc-covid19-ita-regioni.csv`
}, {
  id: `united-states-of-america-alaska`,
  locales: {
    en: `Alaska`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `AK`,
  alpha3code: undefined,
  population: 731545,
  coordinates: [0.7835596040000752,61.51689280800005],
  polygon: RegionPolygons[`united-states-of-america-alaska`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-alabama`,
  locales: {
    en: `Alabama`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `AL`,
  alpha3code: undefined,
  population: 4903185,
  coordinates: [-86.69343876373793,32.6211173120505],
  polygon: RegionPolygons[`united-states-of-america-alabama`],
  parentId: `united-states-of-america`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-arkansas`,
  locales: {
    en: `Arkansas`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `AR`,
  alpha3code: undefined,
  population: 3017804,
  coordinates: [-92.142816204804,34.755387388617066],
  polygon: RegionPolygons[`united-states-of-america-arkansas`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-american-samoa`,
  locales: {
    en: `American Samoa`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `AS`,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-american-samoa`],
  parentId: `united-states-of-america`,
  dataSource: `https://covidtracking.com/api/states`
}, {
  id: `united-states-of-america-arizona`,
  locales: {
    en: `Arizona`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `AZ`,
  alpha3code: undefined,
  population: 7278717,
  coordinates: [-111.93299895849756,34.165156819218375],
  polygon: RegionPolygons[`united-states-of-america-arizona`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-colorado`,
  locales: {
    en: `Colorado`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `CO`,
  alpha3code: undefined,
  population: 5758736,
  coordinates: [-105.54309696705135,38.99982098225249],
  polygon: RegionPolygons[`united-states-of-america-colorado`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-connecticut`,
  locales: {
    en: `Connecticut`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `CT`,
  alpha3code: undefined,
  population: 3565287,
  coordinates: [-72.75935673202756,41.52780529315321],
  polygon: RegionPolygons[`united-states-of-america-connecticut`],
  parentId: `united-states-of-america`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-district-of-columbia`,
  locales: {
    en: `District of Columbia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `DC`,
  alpha3code: undefined,
  population: 705749,
  coordinates: [-77.0145477695639,38.899451555326564],
  polygon: RegionPolygons[`united-states-of-america-district-of-columbia`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-delaware`,
  locales: {
    en: `Delaware`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `DE`,
  alpha3code: undefined,
  population: 973764,
  coordinates: [-75.41630955251765,39.14564123795276],
  polygon: RegionPolygons[`united-states-of-america-delaware`],
  parentId: `united-states-of-america`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-florida`,
  locales: {
    en: `Florida`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `FL`,
  alpha3code: undefined,
  population: 21477737,
  coordinates: [-83.82965067998012,28.060753542550117],
  polygon: RegionPolygons[`united-states-of-america-florida`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-georgia`,
  locales: {
    en: `Georgia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `GA`,
  alpha3code: undefined,
  population: 10617423,
  coordinates: [-83.22068258120515,32.68249920507424],
  polygon: RegionPolygons[`united-states-of-america-georgia`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-guam`,
  locales: {
    en: `Guam`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `GU`,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-guam`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-hawaii`,
  locales: {
    en: `Hawaii`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `HI`,
  alpha3code: undefined,
  population: 1415872,
  coordinates: [-157.30113772849992,20.58419053050008],
  polygon: RegionPolygons[`united-states-of-america-hawaii`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-iowa`,
  locales: {
    en: `Iowa`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `IA`,
  alpha3code: undefined,
  population: 3155070,
  coordinates: [-93.38911747419203,41.94023846253498],
  polygon: RegionPolygons[`united-states-of-america-iowa`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-idaho`,
  locales: {
    en: `Idaho`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `ID`,
  alpha3code: undefined,
  population: 1787065,
  coordinates: [-114.12702030654191,45.49602738420207],
  polygon: RegionPolygons[`united-states-of-america-idaho`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-illinois`,
  locales: {
    en: `Illinois`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `IL`,
  alpha3code: undefined,
  population: 12671821,
  coordinates: [-89.26887859227318,39.74570721281759],
  polygon: RegionPolygons[`united-states-of-america-illinois`],
  parentId: `united-states-of-america`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-indiana`,
  locales: {
    en: `Indiana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `IN`,
  alpha3code: undefined,
  population: 6732219,
  coordinates: [-86.41467899783746,39.774149595877134],
  polygon: RegionPolygons[`united-states-of-america-indiana`],
  parentId: `united-states-of-america`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-kansas`,
  locales: {
    en: `Kansas`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `KS`,
  alpha3code: undefined,
  population: 2913314,
  coordinates: [-98.33450321689992,38.49995525967745],
  polygon: RegionPolygons[`united-states-of-america-kansas`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-kentucky`,
  locales: {
    en: `Kentucky`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `KY`,
  alpha3code: undefined,
  population: 4467673,
  coordinates: [-85.69484257237679,37.820719419565535],
  polygon: RegionPolygons[`united-states-of-america-kentucky`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-louisiana`,
  locales: {
    en: `Louisiana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `LA`,
  alpha3code: undefined,
  population: 4648794,
  coordinates: [-91.53320699521313,31.022399050426287],
  polygon: RegionPolygons[`united-states-of-america-louisiana`],
  parentId: `united-states-of-america`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-massachusetts`,
  locales: {
    en: `Massachusetts`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MA`,
  alpha3code: undefined,
  population: 6892503,
  coordinates: [-71.72305888370983,42.12038082106261],
  polygon: RegionPolygons[`united-states-of-america-massachusetts`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-maryland`,
  locales: {
    en: `Maryland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MD`,
  alpha3code: undefined,
  population: 6045680,
  coordinates: [-77.28591288692019,38.84687414823583],
  polygon: RegionPolygons[`united-states-of-america-maryland`],
  parentId: `united-states-of-america`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maine`,
  locales: {
    en: `Maine`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `ME`,
  alpha3code: undefined,
  population: 1344212,
  coordinates: [-69.03113847999994,45.261826073000044],
  polygon: RegionPolygons[`united-states-of-america-maine`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-michigan`,
  locales: {
    en: `Michigan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MI`,
  alpha3code: undefined,
  population: 9986857,
  coordinates: [-86.2800539156174,44.99773029893432],
  polygon: RegionPolygons[`united-states-of-america-michigan`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-minnesota`,
  locales: {
    en: `Minnesota`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MN`,
  alpha3code: undefined,
  population: 5639632,
  coordinates: [-93.36252550514794,46.434810139826055],
  polygon: RegionPolygons[`united-states-of-america-minnesota`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-missouri`,
  locales: {
    en: `Missouri`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MO`,
  alpha3code: undefined,
  population: 6137428,
  coordinates: [-92.44567264977294,38.30249432230511],
  polygon: RegionPolygons[`united-states-of-america-missouri`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-northern-mariana-islands`,
  locales: {
    en: `Northern Mariana Islands`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MP`,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-northern-mariana-islands`],
  parentId: `united-states-of-america`,
  dataSource: `https://covidtracking.com/api/states`
}, {
  id: `united-states-of-america-mississippi`,
  locales: {
    en: `Mississippi`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MS`,
  alpha3code: undefined,
  population: 2976149,
  coordinates: [-89.87338261081882,32.59642655665229],
  polygon: RegionPolygons[`united-states-of-america-mississippi`],
  parentId: `united-states-of-america`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-montana`,
  locales: {
    en: `Montana`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `MT`,
  alpha3code: undefined,
  population: 1068778,
  coordinates: [-110.04412235741086,46.70905513463874],
  polygon: RegionPolygons[`united-states-of-america-montana`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-north-carolina`,
  locales: {
    en: `North Carolina`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NC`,
  alpha3code: undefined,
  population: 10488084,
  coordinates: [-80.02322978144363,35.24607653682786],
  polygon: RegionPolygons[`united-states-of-america-north-carolina`],
  parentId: `united-states-of-america`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-dakota`,
  locales: {
    en: `North Dakota`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `ND`,
  alpha3code: undefined,
  population: 762062,
  coordinates: [-100.3019580214955,47.46721085597658],
  polygon: RegionPolygons[`united-states-of-america-north-dakota`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-nebraska`,
  locales: {
    en: `Nebraska`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NE`,
  alpha3code: undefined,
  population: 1934408,
  coordinates: [-99.68549198596634,41.50023602157509],
  polygon: RegionPolygons[`united-states-of-america-nebraska`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-new-hampshire`,
  locales: {
    en: `New Hampshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NH`,
  alpha3code: undefined,
  population: 1359711,
  coordinates: [-71.64192281532604,44.002575579129676],
  polygon: RegionPolygons[`united-states-of-america-new-hampshire`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-new-jersey`,
  locales: {
    en: `New Jersey`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NJ`,
  alpha3code: undefined,
  population: 8882190,
  coordinates: [-74.71937008349994,40.14601558652788],
  polygon: RegionPolygons[`united-states-of-america-new-jersey`],
  parentId: `united-states-of-america`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-mexico`,
  locales: {
    en: `New Mexico`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NM`,
  alpha3code: undefined,
  population: 2096829,
  coordinates: [-106.02383427161152,34.16360001562739],
  polygon: RegionPolygons[`united-states-of-america-new-mexico`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-nevada`,
  locales: {
    en: `Nevada`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NV`,
  alpha3code: undefined,
  population: 3080156,
  coordinates: [-117.02047733760901,38.50182293528022],
  polygon: RegionPolygons[`united-states-of-america-nevada`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-new-york`,
  locales: {
    en: `New York`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `NY`,
  alpha3code: undefined,
  population: 19453561,
  coordinates: [-75.8409706677239,42.76080525150005],
  polygon: RegionPolygons[`united-states-of-america-new-york`],
  parentId: `united-states-of-america`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-ohio`,
  locales: {
    en: `Ohio`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `OH`,
  alpha3code: undefined,
  population: 11689100,
  coordinates: [-82.67188114679749,40.36645852284252],
  polygon: RegionPolygons[`united-states-of-america-ohio`],
  parentId: `united-states-of-america`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-oklahoma`,
  locales: {
    en: `Oklahoma`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `OK`,
  alpha3code: undefined,
  population: 3956971,
  coordinates: [-98.71994022800911,35.32361248602737],
  polygon: RegionPolygons[`united-states-of-america-oklahoma`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-oregon`,
  locales: {
    en: `Oregon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `OR`,
  alpha3code: undefined,
  population: 4217737,
  coordinates: [-120.50533834262885,44.11740471870206],
  polygon: RegionPolygons[`united-states-of-america-oregon`],
  parentId: `united-states-of-america`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-pennsylvania`,
  locales: {
    en: `Pennsylvania`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `PA`,
  alpha3code: undefined,
  population: 12801989,
  coordinates: [-77.60961308037935,41.12951166463159],
  polygon: RegionPolygons[`united-states-of-america-pennsylvania`],
  parentId: `united-states-of-america`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-puerto-rico`,
  locales: {
    en: `Puerto Rico`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `PR`,
  alpha3code: undefined,
  population: 3193694,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-puerto-rico`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-rhode-island`,
  locales: {
    en: `Rhode Island`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `RI`,
  alpha3code: undefined,
  population: 1059361,
  coordinates: [-71.48453225865693,41.66332011094793],
  polygon: RegionPolygons[`united-states-of-america-rhode-island`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-south-carolina`,
  locales: {
    en: `South Carolina`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `SC`,
  alpha3code: undefined,
  population: 5148714,
  coordinates: [-80.96432271741013,33.619274050261765],
  polygon: RegionPolygons[`united-states-of-america-south-carolina`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-south-dakota`,
  locales: {
    en: `South Dakota`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `SD`,
  alpha3code: undefined,
  population: 884659,
  coordinates: [-100.2551086848679,44.230179869105655],
  polygon: RegionPolygons[`united-states-of-america-south-dakota`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-tennessee`,
  locales: {
    en: `Tennessee`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `TN`,
  alpha3code: undefined,
  population: 6829174,
  coordinates: [-85.98153690830165,35.837455259602535],
  polygon: RegionPolygons[`united-states-of-america-tennessee`],
  parentId: `united-states-of-america`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-texas`,
  locales: {
    en: `Texas`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `TX`,
  alpha3code: undefined,
  population: 28995881,
  coordinates: [-100.0884705015624,31.177528238191037],
  polygon: RegionPolygons[`united-states-of-america-texas`],
  parentId: `united-states-of-america`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-utah`,
  locales: {
    en: `Utah`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `UT`,
  alpha3code: undefined,
  population: 3205958,
  coordinates: [-111.54443973955233,39.49994305252983],
  polygon: RegionPolygons[`united-states-of-america-utah`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-virginia`,
  locales: {
    en: `Virginia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `VA`,
  alpha3code: undefined,
  population: 8535519,
  coordinates: [-79.76028754243612,37.99530438119223],
  polygon: RegionPolygons[`united-states-of-america-virginia`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-vermont`,
  locales: {
    en: `Vermont`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `VT`,
  alpha3code: undefined,
  population: 623989,
  coordinates: [-72.47219594044931,43.87150381198679],
  polygon: RegionPolygons[`united-states-of-america-vermont`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-washington`,
  locales: {
    en: `Washington`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `WA`,
  alpha3code: undefined,
  population: 7614893,
  coordinates: [-120.80671709265283,47.27941361449236],
  polygon: RegionPolygons[`united-states-of-america-washington`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-wisconsin`,
  locales: {
    en: `Wisconsin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `WI`,
  alpha3code: undefined,
  population: 5822434,
  coordinates: [-89.56690985655462,44.89991863863423],
  polygon: RegionPolygons[`united-states-of-america-wisconsin`],
  parentId: `united-states-of-america`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-west-virginia`,
  locales: {
    en: `West Virginia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `WV`,
  alpha3code: undefined,
  population: 1792147,
  coordinates: [-80.1829407161911,38.92806805344787],
  polygon: RegionPolygons[`united-states-of-america-west-virginia`],
  parentId: `united-states-of-america`,
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america-wyoming`,
  locales: {
    en: `Wyoming`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `WY`,
  alpha3code: undefined,
  population: 578759,
  coordinates: [-107.55199589229656,42.999967466625236],
  polygon: RegionPolygons[`united-states-of-america-wyoming`],
  parentId: `united-states-of-america`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-alabama-baldwin-county`,
  locales: {
    en: `Baldwin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 218022,
  coordinates: [-87.69793150000001,30.765086],
  polygon: RegionPolygons[`united-states-of-america-alabama-baldwin-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-calhoun-county`,
  locales: {
    en: `Calhoun County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 114277,
  coordinates: [-85.837497,33.7622675],
  polygon: RegionPolygons[`united-states-of-america-alabama-calhoun-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-chambers-county`,
  locales: {
    en: `Chambers County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33615,
  coordinates: [-85.3626035,32.9183035],
  polygon: RegionPolygons[`united-states-of-america-alabama-chambers-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-elmore-county`,
  locales: {
    en: `Elmore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 81887,
  coordinates: [-86.13298,32.5876855],
  polygon: RegionPolygons[`united-states-of-america-alabama-elmore-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 163941,
  coordinates: [-85.348772,32.578877500000004],
  polygon: RegionPolygons[`united-states-of-america-alabama-lee-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 659300,
  coordinates: [-86.92924049999999,33.544622000000004],
  polygon: RegionPolygons[`united-states-of-america-alabama-jefferson-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-limestone-county`,
  locales: {
    en: `Limestone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 96174,
  coordinates: [-87.030965,34.774907],
  polygon: RegionPolygons[`united-states-of-america-alabama-limestone-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 366519,
  coordinates: [-86.52351200000001,34.7338515],
  polygon: RegionPolygons[`united-states-of-america-alabama-madison-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-mobile-county`,
  locales: {
    en: `Mobile County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 413757,
  coordinates: [-88.1779755,30.7006685],
  polygon: RegionPolygons[`united-states-of-america-alabama-mobile-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 225763,
  coordinates: [-86.2080335,32.2330785],
  polygon: RegionPolygons[`united-states-of-america-alabama-montgomery-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 215707,
  coordinates: [-86.6839795,33.2828065],
  polygon: RegionPolygons[`united-states-of-america-alabama-shelby-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-st-clair-county`,
  locales: {
    en: `St. Clair County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 88690,
  coordinates: [-86.310896,33.690028999999996],
  polygon: RegionPolygons[`united-states-of-america-alabama-st-clair-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-talladega-county`,
  locales: {
    en: `Talladega County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 79828,
  coordinates: [-86.148843,33.4003975],
  polygon: RegionPolygons[`united-states-of-america-alabama-talladega-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-tuscaloosa-county`,
  locales: {
    en: `Tuscaloosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 208911,
  coordinates: [-87.4532105,33.306606],
  polygon: RegionPolygons[`united-states-of-america-alabama-tuscaloosa-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-walker-county`,
  locales: {
    en: `Walker County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-87.294891,33.7590165],
  polygon: RegionPolygons[`united-states-of-america-alabama-walker-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-autauga-county`,
  locales: {
    en: `Autauga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55601,
  coordinates: [-86.665704,32.508009],
  polygon: RegionPolygons[`united-states-of-america-alabama-autauga-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-barbour-county`,
  locales: {
    en: `Barbour County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24881,
  coordinates: [-85.4006615,31.882748],
  polygon: RegionPolygons[`united-states-of-america-alabama-barbour-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-bibb-county`,
  locales: {
    en: `Bibb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22400,
  coordinates: [-87.149027,33.0392145],
  polygon: RegionPolygons[`united-states-of-america-alabama-bibb-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-blount-county`,
  locales: {
    en: `Blount County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57840,
  coordinates: [-86.633437,34.0123165],
  polygon: RegionPolygons[`united-states-of-america-alabama-blount-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-bullock-county`,
  locales: {
    en: `Bullock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10138,
  coordinates: [-85.704699,32.092782],
  polygon: RegionPolygons[`united-states-of-america-alabama-bullock-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-butler-county`,
  locales: {
    en: `Butler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19680,
  coordinates: [-86.673651,31.744161],
  polygon: RegionPolygons[`united-states-of-america-alabama-butler-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-cherokee-county`,
  locales: {
    en: `Cherokee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26032,
  coordinates: [-85.621319,34.232777999999996],
  polygon: RegionPolygons[`united-states-of-america-alabama-cherokee-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-chilton-county`,
  locales: {
    en: `Chilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44153,
  coordinates: [-86.69706550000001,32.865989],
  polygon: RegionPolygons[`united-states-of-america-alabama-chilton-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-choctaw-county`,
  locales: {
    en: `Choctaw County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12841,
  coordinates: [-88.201944,32.004263],
  polygon: RegionPolygons[`united-states-of-america-alabama-choctaw-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-clarke-county`,
  locales: {
    en: `Clarke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23920,
  coordinates: [-87.840657,31.5906725],
  polygon: RegionPolygons[`united-states-of-america-alabama-clarke-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13275,
  coordinates: [-85.90775099999999,33.294501],
  polygon: RegionPolygons[`united-states-of-america-alabama-clay-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-cleburne-county`,
  locales: {
    en: `Cleburne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14987,
  coordinates: [-85.59611050000001,33.716739000000004],
  polygon: RegionPolygons[`united-states-of-america-alabama-cleburne-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-coffee-county`,
  locales: {
    en: `Coffee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51909,
  coordinates: [-85.99275349999999,31.4000105],
  polygon: RegionPolygons[`united-states-of-america-alabama-coffee-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-colbert-county`,
  locales: {
    en: `Colbert County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54762,
  coordinates: [-87.7799545,34.736847],
  polygon: RegionPolygons[`united-states-of-america-alabama-colbert-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-conecuh-county`,
  locales: {
    en: `Conecuh County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12277,
  coordinates: [-87.0447685,31.467902000000002],
  polygon: RegionPolygons[`united-states-of-america-alabama-conecuh-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-coosa-county`,
  locales: {
    en: `Coosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10715,
  coordinates: [-86.264735,32.929111],
  polygon: RegionPolygons[`united-states-of-america-alabama-coosa-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-covington-county`,
  locales: {
    en: `Covington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36986,
  coordinates: [-86.444992,31.2608775],
  polygon: RegionPolygons[`united-states-of-america-alabama-covington-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-crenshaw-county`,
  locales: {
    en: `Crenshaw County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13824,
  coordinates: [-86.3217415,31.745868],
  polygon: RegionPolygons[`united-states-of-america-alabama-crenshaw-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-cullman-county`,
  locales: {
    en: `Cullman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 83442,
  coordinates: [-86.802028,34.08601],
  polygon: RegionPolygons[`united-states-of-america-alabama-cullman-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-dale-county`,
  locales: {
    en: `Dale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48956,
  coordinates: [-85.6039195,31.4073225],
  polygon: RegionPolygons[`united-states-of-america-alabama-dale-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-dallas-county`,
  locales: {
    en: `Dallas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38310,
  coordinates: [-87.1416965,32.3886835],
  polygon: RegionPolygons[`united-states-of-america-alabama-dallas-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-dekalb-county`,
  locales: {
    en: `DeKalb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 71385,
  coordinates: [-85.81629649999999,34.5301885],
  polygon: RegionPolygons[`united-states-of-america-alabama-dekalb-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-escambia-county`,
  locales: {
    en: `Escambia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36748,
  coordinates: [-87.15210149999999,31.127944499999998],
  polygon: RegionPolygons[`united-states-of-america-alabama-escambia-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-etowah-county`,
  locales: {
    en: `Etowah County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102501,
  coordinates: [-86.0536445,34.021176999999994],
  polygon: RegionPolygons[`united-states-of-america-alabama-etowah-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16433,
  coordinates: [-87.687743,33.719749],
  polygon: RegionPolygons[`united-states-of-america-alabama-fayette-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31363,
  coordinates: [-87.85164950000001,34.4431505],
  polygon: RegionPolygons[`united-states-of-america-alabama-franklin-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-geneva-county`,
  locales: {
    en: `Geneva County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26314,
  coordinates: [-85.839618,31.096378],
  polygon: RegionPolygons[`united-states-of-america-alabama-geneva-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8233,
  coordinates: [-87.954248,32.839098500000006],
  polygon: RegionPolygons[`united-states-of-america-alabama-greene-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-hale-county`,
  locales: {
    en: `Hale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14726,
  coordinates: [-87.638464,32.743871],
  polygon: RegionPolygons[`united-states-of-america-alabama-hale-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-henry-county`,
  locales: {
    en: `Henry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17209,
  coordinates: [-85.22967,31.541520499999997],
  polygon: RegionPolygons[`united-states-of-america-alabama-henry-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-houston-county`,
  locales: {
    en: `Houston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 104722,
  coordinates: [-85.35514699999999,31.156028],
  polygon: RegionPolygons[`united-states-of-america-alabama-houston-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51736,
  coordinates: [-85.9710895,34.727785499999996],
  polygon: RegionPolygons[`united-states-of-america-alabama-jackson-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-lamar-county`,
  locales: {
    en: `Lamar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13844,
  coordinates: [-88.110569,33.791199],
  polygon: RegionPolygons[`united-states-of-america-alabama-lamar-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-lauderdale-county`,
  locales: {
    en: `Lauderdale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92387,
  coordinates: [-87.70685900000001,34.870044500000006],
  polygon: RegionPolygons[`united-states-of-america-alabama-lauderdale-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32957,
  coordinates: [-87.3173975,34.552049],
  polygon: RegionPolygons[`united-states-of-america-alabama-lawrence-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-lowndes-county`,
  locales: {
    en: `Lowndes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9974,
  coordinates: [-86.6566535,32.1843205],
  polygon: RegionPolygons[`united-states-of-america-alabama-lowndes-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-macon-county`,
  locales: {
    en: `Macon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18439,
  coordinates: [-85.72827749999999,32.413954000000004],
  polygon: RegionPolygons[`united-states-of-america-alabama-macon-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-marengo-county`,
  locales: {
    en: `Marengo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19066,
  coordinates: [-87.7927455,32.2682795],
  polygon: RegionPolygons[`united-states-of-america-alabama-marengo-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29763,
  coordinates: [-87.920977,34.1178885],
  polygon: RegionPolygons[`united-states-of-america-alabama-marion-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-marshall-county`,
  locales: {
    en: `Marshall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 96109,
  coordinates: [-86.319824,34.349608],
  polygon: RegionPolygons[`united-states-of-america-alabama-marshall-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21067,
  coordinates: [-87.3453475,31.529543],
  polygon: RegionPolygons[`united-states-of-america-alabama-monroe-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 119089,
  coordinates: [-86.8301385,34.4953655],
  polygon: RegionPolygons[`united-states-of-america-alabama-morgan-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9140,
  coordinates: [-87.27148,32.5912085],
  polygon: RegionPolygons[`united-states-of-america-alabama-perry-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-pickens-county`,
  locales: {
    en: `Pickens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19938,
  coordinates: [-88.088514,33.2626035],
  polygon: RegionPolygons[`united-states-of-america-alabama-pickens-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-pike-county`,
  locales: {
    en: `Pike County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33338,
  coordinates: [-85.928538,31.839152],
  polygon: RegionPolygons[`united-states-of-america-alabama-pike-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-randolph-county`,
  locales: {
    en: `Randolph County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22725,
  coordinates: [-85.443016,33.304006],
  polygon: RegionPolygons[`united-states-of-america-alabama-randolph-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-russell-county`,
  locales: {
    en: `Russell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57781,
  coordinates: [-85.1624695,32.286625],
  polygon: RegionPolygons[`united-states-of-america-alabama-russell-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-sumter-county`,
  locales: {
    en: `Sumter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12691,
  coordinates: [-88.13148,32.65227],
  polygon: RegionPolygons[`united-states-of-america-alabama-sumter-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-tallapoosa-county`,
  locales: {
    en: `Tallapoosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40497,
  coordinates: [-85.8035175,32.8001965],
  polygon: RegionPolygons[`united-states-of-america-alabama-tallapoosa-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16378,
  coordinates: [-88.177704,31.406800500000003],
  polygon: RegionPolygons[`united-states-of-america-alabama-washington-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-wilcox-county`,
  locales: {
    en: `Wilcox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10627,
  coordinates: [-87.2622605,32.0480285],
  polygon: RegionPolygons[`united-states-of-america-alabama-wilcox-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-alabama-winston-county`,
  locales: {
    en: `Winston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23660,
  coordinates: [-87.3730145,34.1460005],
  polygon: RegionPolygons[`united-states-of-america-alabama-winston-county`],
  parentId: `united-states-of-america-alabama`,
  dataSource: `http://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html`
}, {
  id: `united-states-of-america-california`,
  locales: {
    en: `California`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: `CA`,
  alpha3code: undefined,
  population: 1666753,
  coordinates: [-121.9024445,37.6801065],
  polygon: RegionPolygons[`united-states-of-america-california`],
  parentId: `united-states-of-america`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-alameda-county`,
  locales: {
    en: `Alameda County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1666753,
  coordinates: [-121.9024445,37.6801065],
  polygon: RegionPolygons[`united-states-of-america-california-alameda-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-alpine-county`,
  locales: {
    en: `Alpine County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1101,
  coordinates: [-119.80744899999999,38.630102],
  polygon: RegionPolygons[`united-states-of-america-california-alpine-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-amador-county`,
  locales: {
    en: `Amador County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39383,
  coordinates: [-120.5499495,38.462022000000005],
  polygon: RegionPolygons[`united-states-of-america-california-amador-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-butte-county`,
  locales: {
    en: `Butte County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 231256,
  coordinates: [-121.57306299999999,39.723763],
  polygon: RegionPolygons[`united-states-of-america-california-butte-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-calaveras-county`,
  locales: {
    en: `Calaveras County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45602,
  coordinates: [-120.507724,38.170645500000006],
  polygon: RegionPolygons[`united-states-of-america-california-calaveras-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-colusa-county`,
  locales: {
    en: `Colusa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21627,
  coordinates: [-122.2913685,39.169222000000005],
  polygon: RegionPolygons[`united-states-of-america-california-colusa-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-contra-costa-county`,
  locales: {
    en: `Contra Costa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1150215,
  coordinates: [-121.983341,37.9092535],
  polygon: RegionPolygons[`united-states-of-america-california-contra-costa-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-del-norte-county`,
  locales: {
    en: `Del Norte County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27828,
  coordinates: [-123.88695,41.6909115],
  polygon: RegionPolygons[`united-states-of-america-california-del-norte-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-el-dorado-county`,
  locales: {
    en: `El Dorado County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 190678,
  coordinates: [-120.509148,38.785457],
  polygon: RegionPolygons[`united-states-of-america-california-el-dorado-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-fresno-county`,
  locales: {
    en: `Fresno County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 994400,
  coordinates: [-119.6396585,36.7464615],
  polygon: RegionPolygons[`united-states-of-america-california-fresno-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-glenn-county`,
  locales: {
    en: `Glenn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28047,
  coordinates: [-122.405772,39.5913755],
  polygon: RegionPolygons[`united-states-of-america-california-glenn-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-humboldt-county`,
  locales: {
    en: `Humboldt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 136373,
  coordinates: [-123.9078155,40.733564],
  polygon: RegionPolygons[`united-states-of-america-california-humboldt-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-imperial-county`,
  locales: {
    en: `Imperial County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 181827,
  coordinates: [-115.28455500000001,33.026174499999996],
  polygon: RegionPolygons[`united-states-of-america-california-imperial-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-inyo-county`,
  locales: {
    en: `Inyo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17987,
  coordinates: [-117.211517,36.6258705],
  polygon: RegionPolygons[`united-states-of-america-california-inyo-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-kern-county`,
  locales: {
    en: `Kern County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 896764,
  coordinates: [-118.9051705,35.294389],
  polygon: RegionPolygons[`united-states-of-america-california-kern-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-kings-county`,
  locales: {
    en: `Kings County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 151366,
  coordinates: [-119.8948375,36.139044999999996],
  polygon: RegionPolygons[`united-states-of-america-california-kings-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64382,
  coordinates: [-122.71659249999999,39.124087],
  polygon: RegionPolygons[`united-states-of-america-california-lake-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-lassen-county`,
  locales: {
    en: `Lassen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30802,
  coordinates: [-120.664132,40.446086],
  polygon: RegionPolygons[`united-states-of-america-california-lassen-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-los-angeles-county`,
  locales: {
    en: `Los Angeles County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10105518,
  coordinates: [-118.29563049999999,33.8115605],
  polygon: RegionPolygons[`united-states-of-america-california-los-angeles-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-madera-county`,
  locales: {
    en: `Madera County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 157672,
  coordinates: [-119.7828125,37.273546499999995],
  polygon: RegionPolygons[`united-states-of-america-california-madera-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-marin-county`,
  locales: {
    en: `Marin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 259666,
  coordinates: [-122.731167,38.071675],
  polygon: RegionPolygons[`united-states-of-america-california-marin-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-mariposa-county`,
  locales: {
    en: `Mariposa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17471,
  coordinates: [-119.8483325,37.528814999999994],
  polygon: RegionPolygons[`united-states-of-america-california-mariposa-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-mendocino-county`,
  locales: {
    en: `Mendocino County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 87606,
  coordinates: [-123.422765,39.380249],
  polygon: RegionPolygons[`united-states-of-america-california-mendocino-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-merced-county`,
  locales: {
    en: `Merced County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 274765,
  coordinates: [-120.649022,37.1868725],
  polygon: RegionPolygons[`united-states-of-america-california-merced-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-modoc-county`,
  locales: {
    en: `Modoc County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8777,
  coordinates: [-120.7277465,41.590548],
  polygon: RegionPolygons[`united-states-of-america-california-modoc-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-mono-county`,
  locales: {
    en: `Mono County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14250,
  coordinates: [-118.73838749999999,38.088132],
  polygon: RegionPolygons[`united-states-of-america-california-mono-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-monterey-county`,
  locales: {
    en: `Monterey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 435594,
  coordinates: [-121.0962855,36.351338],
  polygon: RegionPolygons[`united-states-of-america-california-monterey-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-napa-county`,
  locales: {
    en: `Napa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 139417,
  coordinates: [-122.35855000000001,38.5095905],
  polygon: RegionPolygons[`united-states-of-america-california-napa-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-nevada-county`,
  locales: {
    en: `Nevada County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 99696,
  coordinates: [-120.641325,39.266033],
  polygon: RegionPolygons[`united-states-of-america-california-nevada-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3185968,
  coordinates: [-117.76484500000001,33.66652],
  polygon: RegionPolygons[`united-states-of-america-california-orange-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-placer-county`,
  locales: {
    en: `Placer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 393149,
  coordinates: [-120.7434505,39.0142165],
  polygon: RegionPolygons[`united-states-of-america-california-placer-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-plumas-county`,
  locales: {
    en: `Plumas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18804,
  coordinates: [-120.798487,40.0219],
  polygon: RegionPolygons[`united-states-of-america-california-plumas-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-riverside-county`,
  locales: {
    en: `Riverside County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2450758,
  coordinates: [-116.05561750000001,33.752829500000004],
  polygon: RegionPolygons[`united-states-of-america-california-riverside-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-sacramento-county`,
  locales: {
    en: `Sacramento County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1540975,
  coordinates: [-121.444773,38.377659],
  polygon: RegionPolygons[`united-states-of-america-california-sacramento-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-benito-county`,
  locales: {
    en: `San Benito County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61537,
  coordinates: [-121.1202815,36.595779],
  polygon: RegionPolygons[`united-states-of-america-california-san-benito-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-bernardino-county`,
  locales: {
    en: `San Bernardino County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2171603,
  coordinates: [-115.96848299999999,34.840230000000005],
  polygon: RegionPolygons[`united-states-of-america-california-san-bernardino-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-diego-county`,
  locales: {
    en: `San Diego County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3343364,
  coordinates: [-116.83848499999999,33.01959050000001],
  polygon: RegionPolygons[`united-states-of-america-california-san-diego-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-francisco-county`,
  locales: {
    en: `San Francisco County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 883305,
  coordinates: [-122.4356335,37.7901875],
  polygon: RegionPolygons[`united-states-of-america-california-san-francisco-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-joaquin-county`,
  locales: {
    en: `San Joaquin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 752660,
  coordinates: [-121.2534915,37.891017500000004],
  polygon: RegionPolygons[`united-states-of-america-california-san-joaquin-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-luis-obispo-county`,
  locales: {
    en: `San Luis Obispo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 284010,
  coordinates: [-120.40954099999999,35.3481785],
  polygon: RegionPolygons[`united-states-of-america-california-san-luis-obispo-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-san-mateo-county`,
  locales: {
    en: `San Mateo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 769545,
  coordinates: [-122.30050299999999,37.407824500000004],
  polygon: RegionPolygons[`united-states-of-america-california-san-mateo-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-santa-barbara-county`,
  locales: {
    en: `Santa Barbara County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 446527,
  coordinates: [-120.0556245,34.503122000000005],
  polygon: RegionPolygons[`united-states-of-america-california-santa-barbara-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-santa-clara-county`,
  locales: {
    en: `Santa Clara County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1937570,
  coordinates: [-121.70515,37.190824000000006],
  polygon: RegionPolygons[`united-states-of-america-california-santa-clara-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-santa-cruz-county`,
  locales: {
    en: `Santa Cruz County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 274255,
  coordinates: [-121.94941800000001,37.0683515],
  polygon: RegionPolygons[`united-states-of-america-california-santa-cruz-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-shasta-county`,
  locales: {
    en: `Shasta County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 180040,
  coordinates: [-122.192699,40.7359105],
  polygon: RegionPolygons[`united-states-of-america-california-shasta-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-sierra-county`,
  locales: {
    en: `Sierra County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2987,
  coordinates: [-120.52976100000001,39.5841895],
  polygon: RegionPolygons[`united-states-of-america-california-sierra-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-siskiyou-county`,
  locales: {
    en: `Siskiyou County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43724,
  coordinates: [-122.57274799999999,41.511016],
  polygon: RegionPolygons[`united-states-of-america-california-siskiyou-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-solano-county`,
  locales: {
    en: `Solano County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 446610,
  coordinates: [-122.0001255,38.2871145],
  polygon: RegionPolygons[`united-states-of-america-california-solano-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-sonoma-county`,
  locales: {
    en: `Sonoma County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 499942,
  coordinates: [-122.946388,38.4810965],
  polygon: RegionPolygons[`united-states-of-america-california-sonoma-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-stanislaus-county`,
  locales: {
    en: `Stanislaus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 549815,
  coordinates: [-120.937052,37.606097500000004],
  polygon: RegionPolygons[`united-states-of-america-california-stanislaus-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-sutter-county`,
  locales: {
    en: `Sutter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 96807,
  coordinates: [-121.681341,39.020133],
  polygon: RegionPolygons[`united-states-of-america-california-sutter-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-tehama-county`,
  locales: {
    en: `Tehama County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 63916,
  coordinates: [-122.2081015,40.123926],
  polygon: RegionPolygons[`united-states-of-america-california-tehama-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-trinity-county`,
  locales: {
    en: `Trinity County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12535,
  coordinates: [-123.044575,40.6514625],
  polygon: RegionPolygons[`united-states-of-america-california-trinity-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-tulare-county`,
  locales: {
    en: `Tulare County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 465861,
  coordinates: [-118.7856615,36.266967],
  polygon: RegionPolygons[`united-states-of-america-california-tulare-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-tuolumne-county`,
  locales: {
    en: `Tuolumne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54539,
  coordinates: [-119.928327,38.033612500000004],
  polygon: RegionPolygons[`united-states-of-america-california-tuolumne-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-ventura-county`,
  locales: {
    en: `Ventura County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 850967,
  coordinates: [-119.1057185,34.058353],
  polygon: RegionPolygons[`united-states-of-america-california-ventura-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-yolo-county`,
  locales: {
    en: `Yolo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 220408,
  coordinates: [-121.962515,38.619189],
  polygon: RegionPolygons[`united-states-of-america-california-yolo-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-california-yuba-county`,
  locales: {
    en: `Yuba County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 78041,
  coordinates: [-121.32262800000001,39.2891885],
  polygon: RegionPolygons[`united-states-of-america-california-yuba-county`],
  parentId: `united-states-of-america-california`,
  dataSource: `https://docs.google.com/spreadsheets/d/1CwZA4RPNf_hUrwzNLyGGNHRlh1cwl8vDHwIoae51Hac/gviz/tq?tqx=out:csv&sheet=master`
}, {
  id: `united-states-of-america-colorado-saguache-county`,
  locales: {
    en: `Saguache County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6829,
  coordinates: [-106.215006,38.103038],
  polygon: RegionPolygons[`united-states-of-america-colorado-saguache-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-sedgwick-county`,
  locales: {
    en: `Sedgwick County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2275,
  coordinates: [-102.3523775,40.875999500000006],
  polygon: RegionPolygons[`united-states-of-america-colorado-sedgwick-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-cheyenne-county`,
  locales: {
    en: `Cheyenne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1867,
  coordinates: [-102.6090085,38.829744000000005],
  polygon: RegionPolygons[`united-states-of-america-colorado-cheyenne-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-custer-county`,
  locales: {
    en: `Custer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4934,
  coordinates: [-105.42259200000001,38.077787],
  polygon: RegionPolygons[`united-states-of-america-colorado-custer-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-la-plata-county`,
  locales: {
    en: `La Plata County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 56446,
  coordinates: [-107.93047,37.319665],
  polygon: RegionPolygons[`united-states-of-america-colorado-la-plata-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-san-juan-county`,
  locales: {
    en: `San Juan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 747,
  coordinates: [-107.71467949999999,37.802258],
  polygon: RegionPolygons[`united-states-of-america-colorado-san-juan-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-pitkin-county`,
  locales: {
    en: `Pitkin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17926,
  coordinates: [-106.946222,39.171949],
  polygon: RegionPolygons[`united-states-of-america-colorado-pitkin-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-park-county`,
  locales: {
    en: `Park County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18545,
  coordinates: [-105.76916299999999,39.130874],
  polygon: RegionPolygons[`united-states-of-america-colorado-park-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-alamosa-county`,
  locales: {
    en: `Alamosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16178,
  coordinates: [-105.74678800000001,37.554131],
  polygon: RegionPolygons[`united-states-of-america-colorado-alamosa-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-prowers-county`,
  locales: {
    en: `Prowers County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12076,
  coordinates: [-102.394781,37.9561955],
  polygon: RegionPolygons[`united-states-of-america-colorado-prowers-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-moffat-county`,
  locales: {
    en: `Moffat County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13201,
  coordinates: [-108.18256099999999,40.611532],
  polygon: RegionPolygons[`united-states-of-america-colorado-moffat-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 579877,
  coordinates: [-105.2238445,39.5219745],
  polygon: RegionPolygons[`united-states-of-america-colorado-jefferson-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-summit-county`,
  locales: {
    en: `Summit County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30978,
  coordinates: [-106.10532549999999,39.6416725],
  polygon: RegionPolygons[`united-states-of-america-colorado-summit-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-pueblo-county`,
  locales: {
    en: `Pueblo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 167081,
  coordinates: [-104.5522995,38.1285485],
  polygon: RegionPolygons[`united-states-of-america-colorado-pueblo-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-boulder-county`,
  locales: {
    en: `Boulder County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 325520,
  coordinates: [-105.37153699999999,40.0878355],
  polygon: RegionPolygons[`united-states-of-america-colorado-boulder-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-denver-county`,
  locales: {
    en: `Denver County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 717862,
  coordinates: [-104.855181,39.76426],
  polygon: RegionPolygons[`united-states-of-america-colorado-denver-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-montrose-county`,
  locales: {
    en: `Montrose County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42280,
  coordinates: [-108.28004100000001,38.4104405],
  polygon: RegionPolygons[`united-states-of-america-colorado-montrose-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-eagle-county`,
  locales: {
    en: `Eagle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54895,
  coordinates: [-106.645068,39.6373275],
  polygon: RegionPolygons[`united-states-of-america-colorado-eagle-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-san-miguel-county`,
  locales: {
    en: `San Miguel County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8196,
  coordinates: [-108.3879545,37.964549],
  polygon: RegionPolygons[`united-states-of-america-colorado-san-miguel-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-costilla-county`,
  locales: {
    en: `Costilla County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3819,
  coordinates: [-105.4539,37.3221975],
  polygon: RegionPolygons[`united-states-of-america-colorado-costilla-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-broomfield-county`,
  locales: {
    en: `Broomfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 69130,
  coordinates: [-105.0634215,39.967068499999996],
  polygon: RegionPolygons[`united-states-of-america-colorado-broomfield-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-chaffee-county`,
  locales: {
    en: `Chaffee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20010,
  coordinates: [-106.238668,38.740337999999994],
  polygon: RegionPolygons[`united-states-of-america-colorado-chaffee-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-crowley-county`,
  locales: {
    en: `Crowley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5855,
  coordinates: [-103.7800745,38.3175405],
  polygon: RegionPolygons[`united-states-of-america-colorado-crowley-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-fremont-county`,
  locales: {
    en: `Fremont County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47921,
  coordinates: [-105.4765585,38.477588999999995],
  polygon: RegionPolygons[`united-states-of-america-colorado-fremont-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-huerfano-county`,
  locales: {
    en: `Huerfano County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6850,
  coordinates: [-104.9261975,37.6560375],
  polygon: RegionPolygons[`united-states-of-america-colorado-huerfano-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-delta-county`,
  locales: {
    en: `Delta County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30936,
  coordinates: [-107.9397795,38.9429835],
  polygon: RegionPolygons[`united-states-of-america-colorado-delta-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-garfield-county`,
  locales: {
    en: `Garfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59854,
  coordinates: [-108.0417065,39.728802],
  polygon: RegionPolygons[`united-states-of-america-colorado-garfield-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-rio-blanco-county`,
  locales: {
    en: `Rio Blanco County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6293,
  coordinates: [-108.0442015,39.938113],
  polygon: RegionPolygons[`united-states-of-america-colorado-rio-blanco-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28436,
  coordinates: [-103.8075595,40.262602],
  polygon: RegionPolygons[`united-states-of-america-colorado-morgan-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5574,
  coordinates: [-103.604952,39.04137],
  polygon: RegionPolygons[`united-states-of-america-colorado-lincoln-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-montezuma-county`,
  locales: {
    en: `Montezuma County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26121,
  coordinates: [-108.5080625,37.3192465],
  polygon: RegionPolygons[`united-states-of-america-colorado-montezuma-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 511720,
  coordinates: [-104.3794855,39.87063],
  polygon: RegionPolygons[`united-states-of-america-colorado-adams-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-mineral-county`,
  locales: {
    en: `Mineral County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 754,
  coordinates: [-106.915857,37.683724],
  polygon: RegionPolygons[`united-states-of-america-colorado-mineral-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-otero-county`,
  locales: {
    en: `Otero County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18352,
  coordinates: [-103.7308725,37.954505499999996],
  polygon: RegionPolygons[`united-states-of-america-colorado-otero-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-phillips-county`,
  locales: {
    en: `Phillips County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4280,
  coordinates: [-102.358048,40.594029500000005],
  polygon: RegionPolygons[`united-states-of-america-colorado-phillips-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-ouray-county`,
  locales: {
    en: `Ouray County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4812,
  coordinates: [-107.82163,38.112279],
  polygon: RegionPolygons[`united-states-of-america-colorado-ouray-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-bent-county`,
  locales: {
    en: `Bent County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5833,
  coordinates: [-103.072417,37.9551955],
  polygon: RegionPolygons[`united-states-of-america-colorado-bent-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-archuleta-county`,
  locales: {
    en: `Archuleta County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13764,
  coordinates: [-106.9792055,37.207684],
  polygon: RegionPolygons[`united-states-of-america-colorado-archuleta-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-routt-county`,
  locales: {
    en: `Routt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25716,
  coordinates: [-107.034562,40.4610575],
  polygon: RegionPolygons[`united-states-of-america-colorado-routt-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-hinsdale-county`,
  locales: {
    en: `Hinsdale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 804,
  coordinates: [-107.2959845,37.78497],
  polygon: RegionPolygons[`united-states-of-america-colorado-hinsdale-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-weld-county`,
  locales: {
    en: `Weld County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 314288,
  coordinates: [-104.315327,40.5011525],
  polygon: RegionPolygons[`united-states-of-america-colorado-weld-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-larimer-county`,
  locales: {
    en: `Larimer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 350424,
  coordinates: [-105.5669625,40.628046999999995],
  polygon: RegionPolygons[`united-states-of-america-colorado-larimer-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7766,
  coordinates: [-106.360843,39.2185175],
  polygon: RegionPolygons[`united-states-of-america-colorado-lake-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-rio-grande-county`,
  locales: {
    en: `Rio Grande County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11213,
  coordinates: [-106.37501850000001,37.617297],
  polygon: RegionPolygons[`united-states-of-america-colorado-rio-grande-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-gilpin-county`,
  locales: {
    en: `Gilpin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6096,
  coordinates: [-105.548784,39.8421315],
  polygon: RegionPolygons[`united-states-of-america-colorado-gilpin-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-yuma-county`,
  locales: {
    en: `Yuma County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10037,
  coordinates: [-102.42678649999999,40.0039245],
  polygon: RegionPolygons[`united-states-of-america-colorado-yuma-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1394,
  coordinates: [-106.3595425,40.664885],
  polygon: RegionPolygons[`united-states-of-america-colorado-jackson-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-kit-carson-county`,
  locales: {
    en: `Kit Carson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7169,
  coordinates: [-102.6048215,39.305834000000004],
  polygon: RegionPolygons[`united-states-of-america-colorado-kit-carson-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-clear-creek-county`,
  locales: {
    en: `Clear Creek County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9659,
  coordinates: [-105.66211949999999,39.7084305],
  polygon: RegionPolygons[`united-states-of-america-colorado-clear-creek-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-logan-county`,
  locales: {
    en: `Logan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21858,
  coordinates: [-103.1163375,40.719452000000004],
  polygon: RegionPolygons[`united-states-of-america-colorado-logan-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4716,
  coordinates: [-103.243516,40.00205],
  polygon: RegionPolygons[`united-states-of-america-colorado-washington-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-douglas-county`,
  locales: {
    en: `Douglas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 342937,
  coordinates: [-104.994923,39.34788],
  polygon: RegionPolygons[`united-states-of-america-colorado-douglas-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-conejos-county`,
  locales: {
    en: `Conejos County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8151,
  coordinates: [-106.1984215,37.1987175],
  polygon: RegionPolygons[`united-states-of-america-colorado-conejos-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-el-paso-county`,
  locales: {
    en: `El Paso County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 714536,
  coordinates: [-104.5619235,38.824693999999994],
  polygon: RegionPolygons[`united-states-of-america-colorado-el-paso-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-kiowa-county`,
  locales: {
    en: `Kiowa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1373,
  coordinates: [-102.7757135,38.4403555],
  polygon: RegionPolygons[`united-states-of-america-colorado-kiowa-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-teller-county`,
  locales: {
    en: `Teller County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25068,
  coordinates: [-105.13471899999999,38.888707],
  polygon: RegionPolygons[`united-states-of-america-colorado-teller-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-gunnison-county`,
  locales: {
    en: `Gunnison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17182,
  coordinates: [-106.94099,38.702179],
  polygon: RegionPolygons[`united-states-of-america-colorado-gunnison-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-baca-county`,
  locales: {
    en: `Baca County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3551,
  coordinates: [-102.563815,37.3187205],
  polygon: RegionPolygons[`united-states-of-america-colorado-baca-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-elbert-county`,
  locales: {
    en: `Elbert County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26243,
  coordinates: [-104.1886255,39.216578999999996],
  polygon: RegionPolygons[`united-states-of-america-colorado-elbert-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-mesa-county`,
  locales: {
    en: `Mesa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 153628,
  coordinates: [-108.21971400000001,38.933332],
  polygon: RegionPolygons[`united-states-of-america-colorado-mesa-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-dolores-county`,
  locales: {
    en: `Dolores County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2050,
  coordinates: [-108.4521545,37.690124499999996],
  polygon: RegionPolygons[`united-states-of-america-colorado-dolores-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-arapahoe-county`,
  locales: {
    en: `Arapahoe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 651513,
  coordinates: [-104.38034350000001,39.6533655],
  polygon: RegionPolygons[`united-states-of-america-colorado-arapahoe-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-las-animas-county`,
  locales: {
    en: `Las Animas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14529,
  coordinates: [-104.1148525,37.4051085],
  polygon: RegionPolygons[`united-states-of-america-colorado-las-animas-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-colorado-grand-county`,
  locales: {
    en: `Grand County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15503,
  coordinates: [-106.14149,40.085187000000005],
  polygon: RegionPolygons[`united-states-of-america-colorado-grand-county`],
  parentId: `united-states-of-america-colorado`,
  dataSource: `https://opendata.arcgis.com/datasets/dec84f18254341419c514af8f9e784ba_0.csv`
}, {
  id: `united-states-of-america-connecticut-fairfield-county`,
  locales: {
    en: `Fairfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 943823,
  coordinates: [-73.397813,41.3259525],
  polygon: RegionPolygons[`united-states-of-america-connecticut-fairfield-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-hartford-county`,
  locales: {
    en: `Hartford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 892697,
  coordinates: [-72.71937700000001,41.7926935],
  polygon: RegionPolygons[`united-states-of-america-connecticut-hartford-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-litchfield-county`,
  locales: {
    en: `Litchfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 181111,
  coordinates: [-73.20264900000001,41.759701],
  polygon: RegionPolygons[`united-states-of-america-connecticut-litchfield-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-middlesex-county`,
  locales: {
    en: `Middlesex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 162682,
  coordinates: [-72.529236,41.4513225],
  polygon: RegionPolygons[`united-states-of-america-connecticut-middlesex-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-new-haven-county`,
  locales: {
    en: `New Haven County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 857620,
  coordinates: [-72.93228500000001,41.4056375],
  polygon: RegionPolygons[`united-states-of-america-connecticut-new-haven-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-tolland-county`,
  locales: {
    en: `Tolland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 150921,
  coordinates: [-72.3087795,41.813062],
  polygon: RegionPolygons[`united-states-of-america-connecticut-tolland-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-connecticut-windham-county`,
  locales: {
    en: `Windham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 117027,
  coordinates: [-72.01981850000001,41.8316135],
  polygon: RegionPolygons[`united-states-of-america-connecticut-windham-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-delaware-new-castle-county`,
  locales: {
    en: `New Castle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 559335,
  coordinates: [-75.5969975,39.565300500000006],
  polygon: RegionPolygons[`united-states-of-america-delaware-new-castle-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-delaware-kent-county`,
  locales: {
    en: `Kent County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 178550,
  coordinates: [-75.5358555,39.0977575],
  polygon: RegionPolygons[`united-states-of-america-delaware-kent-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-delaware-pea-patch-county`,
  locales: {
    en: `Pea Patch County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-delaware-pea-patch-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-delaware-sussex-county`,
  locales: {
    en: `Sussex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 229286,
  coordinates: [-75.38576900000001,38.706443],
  polygon: RegionPolygons[`united-states-of-america-delaware-sussex-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-delaware-reedy-island-county`,
  locales: {
    en: `Reedy Island County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-delaware-reedy-island-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-delaware-de/nj-county`,
  locales: {
    en: `DE/NJ County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-delaware-de/nj-county`],
  parentId: `united-states-of-america-delaware`,
  dataSource: `http://opendata.arcgis.com/datasets/c8d4efa2a6bd48a1a7ae074a8166c6fa_0.csv`
}, {
  id: `united-states-of-america-florida-alachua-county`,
  locales: {
    en: `Alachua County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 269956,
  coordinates: [-82.3544225,29.681131999999998],
  polygon: RegionPolygons[`united-states-of-america-florida-alachua-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-brevard-county`,
  locales: {
    en: `Brevard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 596849,
  coordinates: [-80.7171115,28.306647499999997],
  polygon: RegionPolygons[`united-states-of-america-florida-brevard-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-broward-county`,
  locales: {
    en: `Broward County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1951260,
  coordinates: [-80.478035,26.1561005],
  polygon: RegionPolygons[`united-states-of-america-florida-broward-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-charlotte-county`,
  locales: {
    en: `Charlotte County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 184998,
  coordinates: [-81.9689695,26.902401],
  polygon: RegionPolygons[`united-states-of-america-florida-charlotte-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-citrus-county`,
  locales: {
    en: `Citrus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 147929,
  coordinates: [-82.4640235,28.858776],
  polygon: RegionPolygons[`united-states-of-america-florida-citrus-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 216072,
  coordinates: [-81.815316,29.956068000000002],
  polygon: RegionPolygons[`united-states-of-america-florida-clay-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-collier-county`,
  locales: {
    en: `Collier County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 378488,
  coordinates: [-81.35938300000001,26.1601955],
  polygon: RegionPolygons[`united-states-of-america-florida-collier-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-miami-dade-county`,
  locales: {
    en: `Miami-Dade County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2761581,
  coordinates: [-80.495494,25.5606775],
  polygon: RegionPolygons[`united-states-of-america-florida-miami-dade-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-duval-county`,
  locales: {
    en: `Duval County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 950181,
  coordinates: [-81.714645,30.34499],
  polygon: RegionPolygons[`united-states-of-america-florida-duval-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-escambia-county`,
  locales: {
    en: `Escambia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 315534,
  coordinates: [-87.27711500000001,30.639738],
  polygon: RegionPolygons[`united-states-of-america-florida-escambia-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-gadsden-county`,
  locales: {
    en: `Gadsden County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45894,
  coordinates: [-84.60754,30.5497575],
  polygon: RegionPolygons[`united-states-of-america-florida-gadsden-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-hillsborough-county`,
  locales: {
    en: `Hillsborough County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1436888,
  coordinates: [-82.3526,27.909229500000002],
  polygon: RegionPolygons[`united-states-of-america-florida-hillsborough-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 356495,
  coordinates: [-81.655052,28.810972999999997],
  polygon: RegionPolygons[`united-states-of-america-florida-lake-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 754610,
  coordinates: [-81.9169395,26.5528805],
  polygon: RegionPolygons[`united-states-of-america-florida-lee-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-leon-county`,
  locales: {
    en: `Leon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 292502,
  coordinates: [-84.3462925,30.479469],
  polygon: RegionPolygons[`united-states-of-america-florida-leon-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-manatee-county`,
  locales: {
    en: `Manatee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 394855,
  coordinates: [-82.4000485,27.4272245],
  polygon: RegionPolygons[`united-states-of-america-florida-manatee-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-nassau-county`,
  locales: {
    en: `Nassau County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 85832,
  coordinates: [-81.73892599999999,30.550462500000002],
  polygon: RegionPolygons[`united-states-of-america-florida-nassau-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-okaloosa-county`,
  locales: {
    en: `Okaloosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 207269,
  coordinates: [-86.59446449999999,30.687763500000003],
  polygon: RegionPolygons[`united-states-of-america-florida-okaloosa-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1380645,
  coordinates: [-81.2607525,28.566533999999997],
  polygon: RegionPolygons[`united-states-of-america-florida-orange-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-osceola-county`,
  locales: {
    en: `Osceola County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 367990,
  coordinates: [-81.2600415,27.995169500000003],
  polygon: RegionPolygons[`united-states-of-america-florida-osceola-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-palm-beach-county`,
  locales: {
    en: `Palm Beach County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1485941,
  coordinates: [-80.4587305,26.645985500000002],
  polygon: RegionPolygons[`united-states-of-america-florida-palm-beach-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-pasco-county`,
  locales: {
    en: `Pasco County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 539630,
  coordinates: [-82.4298955,28.3252435],
  polygon: RegionPolygons[`united-states-of-america-florida-pasco-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-pinellas-county`,
  locales: {
    en: `Pinellas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 975280,
  coordinates: [-82.70897249999999,27.893119],
  polygon: RegionPolygons[`united-states-of-america-florida-pinellas-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 708009,
  coordinates: [-81.6193315,28.002553],
  polygon: RegionPolygons[`united-states-of-america-florida-polk-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-santa-rosa-county`,
  locales: {
    en: `Santa Rosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 179349,
  coordinates: [-87.047978,30.669196499999998],
  polygon: RegionPolygons[`united-states-of-america-florida-santa-rosa-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-sarasota-county`,
  locales: {
    en: `Sarasota County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 426718,
  coordinates: [-82.349667,27.167500500000003],
  polygon: RegionPolygons[`united-states-of-america-florida-sarasota-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-seminole-county`,
  locales: {
    en: `Seminole County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 467832,
  coordinates: [-81.2234725,28.745247499999998],
  polygon: RegionPolygons[`united-states-of-america-florida-seminole-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-st-johns-county`,
  locales: {
    en: `St. Johns County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 254261,
  coordinates: [-81.4511455,29.937673],
  polygon: RegionPolygons[`united-states-of-america-florida-st-johns-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-sumter-county`,
  locales: {
    en: `Sumter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 128754,
  coordinates: [-82.1326385,28.633043],
  polygon: RegionPolygons[`united-states-of-america-florida-sumter-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-volusia-county`,
  locales: {
    en: `Volusia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 547538,
  coordinates: [-81.20657349999999,29.0200235],
  polygon: RegionPolygons[`united-states-of-america-florida-volusia-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-walton-county`,
  locales: {
    en: `Walton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 71375,
  coordinates: [-86.12087299999999,30.631812500000002],
  polygon: RegionPolygons[`united-states-of-america-florida-walton-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-baker-county`,
  locales: {
    en: `Baker County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28355,
  coordinates: [-82.254514,30.360368],
  polygon: RegionPolygons[`united-states-of-america-florida-baker-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-bay-county`,
  locales: {
    en: `Bay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 185287,
  coordinates: [-85.6900155,30.2459645],
  polygon: RegionPolygons[`united-states-of-america-florida-bay-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-bradford-county`,
  locales: {
    en: `Bradford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27732,
  coordinates: [-82.23241999999999,29.930684],
  polygon: RegionPolygons[`united-states-of-america-florida-bradford-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-calhoun-county`,
  locales: {
    en: `Calhoun County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14587,
  coordinates: [-85.16109900000001,30.404001],
  polygon: RegionPolygons[`united-states-of-america-florida-calhoun-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-columbia-county`,
  locales: {
    en: `Columbia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70503,
  coordinates: [-82.628231,30.2116605],
  polygon: RegionPolygons[`united-states-of-america-florida-columbia-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-desoto-county`,
  locales: {
    en: `DeSoto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37489,
  coordinates: [-81.80983549999999,27.18619],
  polygon: RegionPolygons[`united-states-of-america-florida-desoto-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-dixie-county`,
  locales: {
    en: `Dixie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16700,
  coordinates: [-83.16632100000001,29.5571445],
  polygon: RegionPolygons[`united-states-of-america-florida-dixie-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-flagler-county`,
  locales: {
    en: `Flagler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 112067,
  coordinates: [-81.3127915,29.4659115],
  polygon: RegionPolygons[`united-states-of-america-florida-flagler-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11736,
  coordinates: [-84.77814599999999,29.8004055],
  polygon: RegionPolygons[`united-states-of-america-florida-franklin-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-gilchrist-county`,
  locales: {
    en: `Gilchrist County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18256,
  coordinates: [-82.8146775,29.7474385],
  polygon: RegionPolygons[`united-states-of-america-florida-gilchrist-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-glades-county`,
  locales: {
    en: `Glades County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13724,
  coordinates: [-81.21855,26.9897045],
  polygon: RegionPolygons[`united-states-of-america-florida-glades-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-gulf-county`,
  locales: {
    en: `Gulf County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16164,
  coordinates: [-85.213759,29.928089],
  polygon: RegionPolygons[`united-states-of-america-florida-gulf-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14310,
  coordinates: [-82.978114,30.477425500000003],
  polygon: RegionPolygons[`united-states-of-america-florida-hamilton-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-hardee-county`,
  locales: {
    en: `Hardee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27245,
  coordinates: [-81.8095355,27.491686],
  polygon: RegionPolygons[`united-states-of-america-florida-hardee-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-hendry-county`,
  locales: {
    en: `Hendry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41556,
  coordinates: [-81.22287,26.605982],
  polygon: RegionPolygons[`united-states-of-america-florida-hendry-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-hernando-county`,
  locales: {
    en: `Hernando County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 190865,
  coordinates: [-82.36744999999999,28.5641575],
  polygon: RegionPolygons[`united-states-of-america-florida-hernando-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-highlands-county`,
  locales: {
    en: `Highlands County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 105424,
  coordinates: [-81.2535995,27.339483],
  polygon: RegionPolygons[`united-states-of-america-florida-highlands-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-holmes-county`,
  locales: {
    en: `Holmes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19477,
  coordinates: [-85.7677915,30.850031],
  polygon: RegionPolygons[`united-states-of-america-florida-holmes-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-indian-river-county`,
  locales: {
    en: `Indian River County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 157413,
  coordinates: [-80.6014185,27.7090665],
  polygon: RegionPolygons[`united-states-of-america-florida-indian-river-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48305,
  coordinates: [-85.2289275,30.782612],
  polygon: RegionPolygons[`united-states-of-america-florida-jackson-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14288,
  coordinates: [-83.8401145,30.37801],
  polygon: RegionPolygons[`united-states-of-america-florida-jefferson-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-lafayette-county`,
  locales: {
    en: `Lafayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8732,
  coordinates: [-83.123253,30.041446],
  polygon: RegionPolygons[`united-states-of-america-florida-lafayette-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-levy-county`,
  locales: {
    en: `Levy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40770,
  coordinates: [-82.78466399999999,29.2921995],
  polygon: RegionPolygons[`united-states-of-america-florida-levy-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-liberty-county`,
  locales: {
    en: `Liberty County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8457,
  coordinates: [-84.844459,30.288896],
  polygon: RegionPolygons[`united-states-of-america-florida-liberty-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18529,
  coordinates: [-83.49560199999999,30.4558045],
  polygon: RegionPolygons[`united-states-of-america-florida-madison-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 359977,
  coordinates: [-82.0871435,29.240444],
  polygon: RegionPolygons[`united-states-of-america-florida-marion-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-martin-county`,
  locales: {
    en: `Martin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 160912,
  coordinates: [-80.482585,27.1101785],
  polygon: RegionPolygons[`united-states-of-america-florida-martin-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75027,
  coordinates: [-81.2078935,25.175038999999998],
  polygon: RegionPolygons[`united-states-of-america-florida-monroe-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-okeechobee-county`,
  locales: {
    en: `Okeechobee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41537,
  coordinates: [-80.945572,27.301078500000003],
  polygon: RegionPolygons[`united-states-of-america-florida-okeechobee-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 74163,
  coordinates: [-81.74503150000001,29.582303],
  polygon: RegionPolygons[`united-states-of-america-florida-putnam-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-st-lucie-county`,
  locales: {
    en: `St. Lucie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 321128,
  coordinates: [-80.4395545,27.3822015],
  polygon: RegionPolygons[`united-states-of-america-florida-st-lucie-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-suwannee-county`,
  locales: {
    en: `Suwannee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44191,
  coordinates: [-83.004895,30.162244],
  polygon: RegionPolygons[`united-states-of-america-florida-suwannee-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-taylor-county`,
  locales: {
    en: `Taylor County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21623,
  coordinates: [-83.65523300000001,29.9849565],
  polygon: RegionPolygons[`united-states-of-america-florida-taylor-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14940,
  coordinates: [-82.35704849999999,30.033105],
  polygon: RegionPolygons[`united-states-of-america-florida-union-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-wakulla-county`,
  locales: {
    en: `Wakulla County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32461,
  coordinates: [-84.406681,30.132134],
  polygon: RegionPolygons[`united-states-of-america-florida-wakulla-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-florida-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24880,
  coordinates: [-85.71250549999999,30.609936],
  polygon: RegionPolygons[`united-states-of-america-florida-washington-county`],
  parentId: `united-states-of-america-florida`,
  dataSource: `https://opendata.arcgis.com/datasets/b4930af3f43a48138c70bca409b5c452_0.csv`
}, {
  id: `united-states-of-america-illinois-illinois-county`,
  locales: {
    en: `Illinois County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-illinois-illinois-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-chicago-county`,
  locales: {
    en: `Chicago County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-illinois-chicago-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-suburban-cook-county`,
  locales: {
    en: `Suburban Cook County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-illinois-suburban-cook-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65691,
  coordinates: [-91.212524,39.9787775],
  polygon: RegionPolygons[`united-states-of-america-illinois-adams-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-alexander-county`,
  locales: {
    en: `Alexander County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6060,
  coordinates: [-89.32553899999999,37.1527035],
  polygon: RegionPolygons[`united-states-of-america-illinois-alexander-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-bond-county`,
  locales: {
    en: `Bond County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16630,
  coordinates: [-89.4448145,38.884501],
  polygon: RegionPolygons[`united-states-of-america-illinois-bond-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-boone-county`,
  locales: {
    en: `Boone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53577,
  coordinates: [-88.822878,42.323683],
  polygon: RegionPolygons[`united-states-of-america-illinois-boone-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-brown-county`,
  locales: {
    en: `Brown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6556,
  coordinates: [-90.71462349999999,39.971889000000004],
  polygon: RegionPolygons[`united-states-of-america-illinois-brown-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-bureau-county`,
  locales: {
    en: `Bureau County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32993,
  coordinates: [-89.51302799999999,41.3669235],
  polygon: RegionPolygons[`united-states-of-america-illinois-bureau-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-calhoun-county`,
  locales: {
    en: `Calhoun County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4802,
  coordinates: [-90.693794,39.134271999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-calhoun-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14312,
  coordinates: [-90.0009245,42.0640145],
  polygon: RegionPolygons[`united-states-of-america-illinois-carroll-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-cass-county`,
  locales: {
    en: `Cass County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12260,
  coordinates: [-90.28896950000001,39.9982515],
  polygon: RegionPolygons[`united-states-of-america-illinois-cass-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-champaign-county`,
  locales: {
    en: `Champaign County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 209983,
  coordinates: [-88.19621000000001,40.139787999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-champaign-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-christian-county`,
  locales: {
    en: `Christian County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32661,
  coordinates: [-89.2802045,39.583156],
  polygon: RegionPolygons[`united-states-of-america-illinois-christian-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-clark-county`,
  locales: {
    en: `Clark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15596,
  coordinates: [-87.77278000000001,39.322432500000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-clark-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13253,
  coordinates: [-88.4735945,38.7574025],
  polygon: RegionPolygons[`united-states-of-america-illinois-clay-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-clinton-county`,
  locales: {
    en: `Clinton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37639,
  coordinates: [-89.4227085,38.579451500000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-clinton-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-coles-county`,
  locales: {
    en: `Coles County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50885,
  coordinates: [-88.216126,39.530221499999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-coles-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-cook-county`,
  locales: {
    en: `Cook County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5180493,
  coordinates: [-87.893711,41.811950499999995],
  polygon: RegionPolygons[`united-states-of-america-illinois-cook-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-crawford-county`,
  locales: {
    en: `Crawford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18807,
  coordinates: [-87.731286,39.014365999999995],
  polygon: RegionPolygons[`united-states-of-america-illinois-crawford-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-cumberland-county`,
  locales: {
    en: `Cumberland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10808,
  coordinates: [-88.2394565,39.275043],
  polygon: RegionPolygons[`united-states-of-america-illinois-cumberland-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-dekalb-county`,
  locales: {
    en: `DeKalb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 104143,
  coordinates: [-88.765222,41.8909545],
  polygon: RegionPolygons[`united-states-of-america-illinois-dekalb-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-de-witt-county`,
  locales: {
    en: `De Witt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15769,
  coordinates: [-88.8618245,40.1658715],
  polygon: RegionPolygons[`united-states-of-america-illinois-de-witt-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-douglas-county`,
  locales: {
    en: `Douglas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19479,
  coordinates: [-88.2051055,39.7656955],
  polygon: RegionPolygons[`united-states-of-america-illinois-douglas-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-dupage-county`,
  locales: {
    en: `DuPage County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 928589,
  coordinates: [-88.0886665,41.8397805],
  polygon: RegionPolygons[`united-states-of-america-illinois-dupage-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-edgar-county`,
  locales: {
    en: `Edgar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17360,
  coordinates: [-87.750202,39.679879],
  polygon: RegionPolygons[`united-states-of-america-illinois-edgar-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-edwards-county`,
  locales: {
    en: `Edwards County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6392,
  coordinates: [-88.0448,38.4129205],
  polygon: RegionPolygons[`united-states-of-america-illinois-edwards-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-effingham-county`,
  locales: {
    en: `Effingham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34208,
  coordinates: [-88.58372399999999,39.063554999999994],
  polygon: RegionPolygons[`united-states-of-america-illinois-effingham-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21416,
  coordinates: [-88.9754655,38.977119],
  polygon: RegionPolygons[`united-states-of-america-illinois-fayette-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-ford-county`,
  locales: {
    en: `Ford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13264,
  coordinates: [-88.1958575,40.698344500000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-ford-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38701,
  coordinates: [-88.9411015,37.993596999999994],
  polygon: RegionPolygons[`united-states-of-america-illinois-franklin-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-fulton-county`,
  locales: {
    en: `Fulton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34844,
  coordinates: [-90.1619825,40.449306],
  polygon: RegionPolygons[`united-states-of-america-illinois-fulton-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-gallatin-county`,
  locales: {
    en: `Gallatin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5058,
  coordinates: [-88.20168100000001,37.744911],
  polygon: RegionPolygons[`united-states-of-america-illinois-gallatin-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13044,
  coordinates: [-90.3851795,39.31966],
  polygon: RegionPolygons[`united-states-of-america-illinois-greene-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-grundy-county`,
  locales: {
    en: `Grundy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50972,
  coordinates: [-88.4184245,41.285694500000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-grundy-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8163,
  coordinates: [-88.5385565,38.081728999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-hamilton-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-hancock-county`,
  locales: {
    en: `Hancock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17844,
  coordinates: [-91.2057425,40.4161445],
  polygon: RegionPolygons[`united-states-of-america-illinois-hancock-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-hardin-county`,
  locales: {
    en: `Hardin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3910,
  coordinates: [-88.2382205,37.5007875],
  polygon: RegionPolygons[`united-states-of-america-illinois-hardin-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-henderson-county`,
  locales: {
    en: `Henderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6709,
  coordinates: [-90.985311,40.852598],
  polygon: RegionPolygons[`united-states-of-america-illinois-henderson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-henry-county`,
  locales: {
    en: `Henry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49090,
  coordinates: [-90.147138,41.366804],
  polygon: RegionPolygons[`united-states-of-america-illinois-henry-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-iroquois-county`,
  locales: {
    en: `Iroquois County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27604,
  coordinates: [-87.8288605,40.7479615],
  polygon: RegionPolygons[`united-states-of-america-illinois-iroquois-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57419,
  coordinates: [-89.4158765,37.7586175],
  polygon: RegionPolygons[`united-states-of-america-illinois-jackson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-jasper-county`,
  locales: {
    en: `Jasper County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9611,
  coordinates: [-88.1538415,39.0112015],
  polygon: RegionPolygons[`united-states-of-america-illinois-jasper-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37820,
  coordinates: [-88.92435,38.300858],
  polygon: RegionPolygons[`united-states-of-america-illinois-jefferson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-jersey-county`,
  locales: {
    en: `Jersey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21847,
  coordinates: [-90.37477999999999,39.0926805],
  polygon: RegionPolygons[`united-states-of-america-illinois-jersey-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-jo-daviess-county`,
  locales: {
    en: `Jo Daviess County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21366,
  coordinates: [-90.288092,42.3509385],
  polygon: RegionPolygons[`united-states-of-america-illinois-jo-daviess-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-johnson-county`,
  locales: {
    en: `Johnson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12456,
  coordinates: [-88.8766665,37.447419999999994],
  polygon: RegionPolygons[`united-states-of-america-illinois-johnson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-kane-county`,
  locales: {
    en: `Kane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 534216,
  coordinates: [-88.419968,41.9369435],
  polygon: RegionPolygons[`united-states-of-america-illinois-kane-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-kankakee-county`,
  locales: {
    en: `Kankakee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 110024,
  coordinates: [-87.889151,41.146305999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-kankakee-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-kendall-county`,
  locales: {
    en: `Kendall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 127915,
  coordinates: [-88.42785900000001,41.590843],
  polygon: RegionPolygons[`united-states-of-america-illinois-kendall-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-knox-county`,
  locales: {
    en: `Knox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50112,
  coordinates: [-90.214451,40.9317725],
  polygon: RegionPolygons[`united-states-of-america-illinois-knox-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 700832,
  coordinates: [-87.9794555,42.324290500000004],
  polygon: RegionPolygons[`united-states-of-america-illinois-lake-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-lasalle-county`,
  locales: {
    en: `LaSalle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 109430,
  coordinates: [-88.87672,41.278569000000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-lasalle-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15765,
  coordinates: [-87.70438999999999,38.7103305],
  polygon: RegionPolygons[`united-states-of-america-illinois-lawrence-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34223,
  coordinates: [-89.285056,41.746],
  polygon: RegionPolygons[`united-states-of-america-illinois-lee-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-livingston-county`,
  locales: {
    en: `Livingston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35761,
  coordinates: [-88.5831695,40.8653895],
  polygon: RegionPolygons[`united-states-of-america-illinois-livingston-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-logan-county`,
  locales: {
    en: `Logan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28925,
  coordinates: [-89.37321800000001,40.121167],
  polygon: RegionPolygons[`united-states-of-america-illinois-logan-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-mcdonough-county`,
  locales: {
    en: `McDonough County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29955,
  coordinates: [-90.67763099999999,40.457768],
  polygon: RegionPolygons[`united-states-of-america-illinois-mcdonough-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-mchenry-county`,
  locales: {
    en: `McHenry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 308570,
  coordinates: [-88.45306400000001,42.3247895],
  polygon: RegionPolygons[`united-states-of-america-illinois-mchenry-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-mclean-county`,
  locales: {
    en: `McLean County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 172828,
  coordinates: [-88.86443249999999,40.519263499999994],
  polygon: RegionPolygons[`united-states-of-america-illinois-mclean-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-macon-county`,
  locales: {
    en: `Macon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 104712,
  coordinates: [-88.981505,39.854206500000004],
  polygon: RegionPolygons[`united-states-of-america-illinois-macon-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-macoupin-county`,
  locales: {
    en: `Macoupin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45313,
  coordinates: [-89.9261525,39.2609155],
  polygon: RegionPolygons[`united-states-of-america-illinois-macoupin-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 264461,
  coordinates: [-89.935464,38.827599],
  polygon: RegionPolygons[`united-states-of-america-illinois-madison-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37620,
  coordinates: [-88.91977650000001,38.650088499999995],
  polygon: RegionPolygons[`united-states-of-america-illinois-marion-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-marshall-county`,
  locales: {
    en: `Marshall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11534,
  coordinates: [-89.3432225,41.0348985],
  polygon: RegionPolygons[`united-states-of-america-illinois-marshall-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-mason-county`,
  locales: {
    en: `Mason County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13565,
  coordinates: [-89.97840099999999,40.244898500000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-mason-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-massac-county`,
  locales: {
    en: `Massac County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14080,
  coordinates: [-88.70970249999999,37.2011605],
  polygon: RegionPolygons[`united-states-of-america-illinois-massac-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-menard-county`,
  locales: {
    en: `Menard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12288,
  coordinates: [-89.7865065,40.031325499999994],
  polygon: RegionPolygons[`united-states-of-america-illinois-menard-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-mercer-county`,
  locales: {
    en: `Mercer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15601,
  coordinates: [-90.7739785,41.1986765],
  polygon: RegionPolygons[`united-states-of-america-illinois-mercer-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34335,
  coordinates: [-90.136495,38.304362],
  polygon: RegionPolygons[`united-states-of-america-illinois-monroe-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28601,
  coordinates: [-89.4217495,39.2617855],
  polygon: RegionPolygons[`united-states-of-america-illinois-montgomery-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33976,
  coordinates: [-90.26153,39.698471],
  polygon: RegionPolygons[`united-states-of-america-illinois-morgan-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-moultrie-county`,
  locales: {
    en: `Moultrie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14717,
  coordinates: [-88.641607,39.6195935],
  polygon: RegionPolygons[`united-states-of-america-illinois-moultrie-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-ogle-county`,
  locales: {
    en: `Ogle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50923,
  coordinates: [-89.313711,42.045208],
  polygon: RegionPolygons[`united-states-of-america-illinois-ogle-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-peoria-county`,
  locales: {
    en: `Peoria County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 180621,
  coordinates: [-89.7183555,40.744068999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-peoria-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21174,
  coordinates: [-89.356507,38.084790999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-perry-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-piatt-county`,
  locales: {
    en: `Piatt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16396,
  coordinates: [-88.6031875,40.0368775],
  polygon: RegionPolygons[`united-states-of-america-illinois-piatt-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-pike-county`,
  locales: {
    en: `Pike County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15611,
  coordinates: [-90.9684925,39.620425],
  polygon: RegionPolygons[`united-states-of-america-illinois-pike-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-pope-county`,
  locales: {
    en: `Pope County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4212,
  coordinates: [-88.561381,37.333512999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-pope-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-pulaski-county`,
  locales: {
    en: `Pulaski County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5463,
  coordinates: [-89.100825,37.2016465],
  polygon: RegionPolygons[`united-states-of-america-illinois-pulaski-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5740,
  coordinates: [-89.314386,41.213094999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-putnam-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-randolph-county`,
  locales: {
    en: `Randolph County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32106,
  coordinates: [-89.89974050000001,38.013057],
  polygon: RegionPolygons[`united-states-of-america-illinois-randolph-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-richland-county`,
  locales: {
    en: `Richland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15763,
  coordinates: [-88.102756,38.709597],
  polygon: RegionPolygons[`united-states-of-america-illinois-richland-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-rock-island-county`,
  locales: {
    en: `Rock Island County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 143477,
  coordinates: [-90.61659449999999,41.554974],
  polygon: RegionPolygons[`united-states-of-america-illinois-rock-island-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-st-clair-county`,
  locales: {
    en: `St. Clair County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 261059,
  coordinates: [-89.98348949999999,38.43997],
  polygon: RegionPolygons[`united-states-of-america-illinois-st-clair-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-saline-county`,
  locales: {
    en: `Saline County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23906,
  coordinates: [-88.541215,37.7534775],
  polygon: RegionPolygons[`united-states-of-america-illinois-saline-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-sangamon-county`,
  locales: {
    en: `Sangamon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 195348,
  coordinates: [-89.605988,39.749418500000004],
  polygon: RegionPolygons[`united-states-of-america-illinois-sangamon-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-schuyler-county`,
  locales: {
    en: `Schuyler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6907,
  coordinates: [-90.55658600000001,40.1323765],
  polygon: RegionPolygons[`united-states-of-america-illinois-schuyler-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-scott-county`,
  locales: {
    en: `Scott County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4926,
  coordinates: [-90.47332800000001,39.655125999999996],
  polygon: RegionPolygons[`united-states-of-america-illinois-scott-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21741,
  coordinates: [-88.8052905,39.434606],
  polygon: RegionPolygons[`united-states-of-america-illinois-shelby-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-stark-county`,
  locales: {
    en: `Stark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5427,
  coordinates: [-89.811954,41.104095],
  polygon: RegionPolygons[`united-states-of-america-illinois-stark-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-stephenson-county`,
  locales: {
    en: `Stephenson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44753,
  coordinates: [-89.661208,42.3510465],
  polygon: RegionPolygons[`united-states-of-america-illinois-stephenson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-tazewell-county`,
  locales: {
    en: `Tazewell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 132328,
  coordinates: [-89.59421,40.5337375],
  polygon: RegionPolygons[`united-states-of-america-illinois-tazewell-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16841,
  coordinates: [-89.281663,37.465157500000004],
  polygon: RegionPolygons[`united-states-of-america-illinois-union-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-vermilion-county`,
  locales: {
    en: `Vermilion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76806,
  coordinates: [-87.734241,40.179863],
  polygon: RegionPolygons[`united-states-of-america-illinois-vermilion-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-wabash-county`,
  locales: {
    en: `Wabash County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11549,
  coordinates: [-87.8207125,38.402574],
  polygon: RegionPolygons[`united-states-of-america-illinois-wabash-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17032,
  coordinates: [-90.61453750000001,40.848296],
  polygon: RegionPolygons[`united-states-of-america-illinois-warren-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13995,
  coordinates: [-89.4241575,38.363909],
  polygon: RegionPolygons[`united-states-of-america-illinois-washington-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16332,
  coordinates: [-88.42510250000001,38.4308585],
  polygon: RegionPolygons[`united-states-of-america-illinois-wayne-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-white-county`,
  locales: {
    en: `White County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13665,
  coordinates: [-88.1481,38.067642],
  polygon: RegionPolygons[`united-states-of-america-illinois-white-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-whiteside-county`,
  locales: {
    en: `Whiteside County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55626,
  coordinates: [-89.938412,41.7573565],
  polygon: RegionPolygons[`united-states-of-america-illinois-whiteside-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-will-county`,
  locales: {
    en: `Will County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 692310,
  coordinates: [-87.89340899999999,41.465238],
  polygon: RegionPolygons[`united-states-of-america-illinois-will-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-williamson-county`,
  locales: {
    en: `Williamson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 67056,
  coordinates: [-88.930214,37.729957],
  polygon: RegionPolygons[`united-states-of-america-illinois-williamson-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-winnebago-county`,
  locales: {
    en: `Winnebago County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 284081,
  coordinates: [-89.170574,42.325365000000005],
  polygon: RegionPolygons[`united-states-of-america-illinois-winnebago-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-illinois-woodford-county`,
  locales: {
    en: `Woodford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38463,
  coordinates: [-89.2466125,40.7610345],
  polygon: RegionPolygons[`united-states-of-america-illinois-woodford-county`],
  parentId: `united-states-of-america-illinois`,
  dataSource: `http://www.dph.illinois.gov/sites/default/files/COVID19/COVID19CountyResults.json`
}, {
  id: `united-states-of-america-indiana-dekalb-county`,
  locales: {
    en: `DeKalb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43226,
  coordinates: [-84.998833,41.397172],
  polygon: RegionPolygons[`united-states-of-america-indiana-dekalb-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-boone-county`,
  locales: {
    en: `Boone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 66999,
  coordinates: [-86.4677715,40.051773999999995],
  polygon: RegionPolygons[`united-states-of-america-indiana-boone-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-tippecanoe-county`,
  locales: {
    en: `Tippecanoe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 193048,
  coordinates: [-86.89501100000001,40.388631000000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-tippecanoe-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-johnson-county`,
  locales: {
    en: `Johnson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 156225,
  coordinates: [-86.101242,39.4900085],
  polygon: RegionPolygons[`united-states-of-america-indiana-johnson-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-elkhart-county`,
  locales: {
    en: `Elkhart County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 205560,
  coordinates: [-85.858041,41.598169999999996],
  polygon: RegionPolygons[`united-states-of-america-indiana-elkhart-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35636,
  coordinates: [-84.93797749999999,40.745404],
  polygon: RegionPolygons[`united-states-of-america-indiana-adams-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-noble-county`,
  locales: {
    en: `Noble County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47532,
  coordinates: [-85.42342049999999,41.3952975],
  polygon: RegionPolygons[`united-states-of-america-indiana-noble-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 129641,
  coordinates: [-85.7193405,40.1616875],
  polygon: RegionPolygons[`united-states-of-america-indiana-madison-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-st-joseph-county`,
  locales: {
    en: `St. Joseph County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 270771,
  coordinates: [-86.2930665,41.596739],
  polygon: RegionPolygons[`united-states-of-america-indiana-st-joseph-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44111,
  coordinates: [-86.056745,38.898375],
  polygon: RegionPolygons[`united-states-of-america-indiana-jackson-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-vanderburgh-county`,
  locales: {
    en: `Vanderburgh County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 180974,
  coordinates: [-87.575276,37.997158999999996],
  polygon: RegionPolygons[`united-states-of-america-indiana-vanderburgh-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-grant-county`,
  locales: {
    en: `Grant County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65936,
  coordinates: [-85.6545605,40.515986999999996],
  polygon: RegionPolygons[`united-states-of-america-indiana-grant-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-porter-county`,
  locales: {
    en: `Porter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 169594,
  coordinates: [-87.07600400000001,41.465349],
  polygon: RegionPolygons[`united-states-of-america-indiana-porter-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 954670,
  coordinates: [-86.13272599999999,39.779657],
  polygon: RegionPolygons[`united-states-of-america-indiana-marion-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 330086,
  coordinates: [-86.052323,40.0724955],
  polygon: RegionPolygons[`united-states-of-america-indiana-hamilton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 484411,
  coordinates: [-87.372815,41.4360915],
  polygon: RegionPolygons[`united-states-of-america-indiana-lake-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70116,
  coordinates: [-86.46872300000001,39.486663],
  polygon: RegionPolygons[`united-states-of-america-indiana-morgan-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-hendricks-county`,
  locales: {
    en: `Hendricks County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 167009,
  coordinates: [-86.510613,39.762399],
  polygon: RegionPolygons[`united-states-of-america-indiana-hendricks-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-laporte-county`,
  locales: {
    en: `LaPorte County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 110007,
  coordinates: [-86.70959,41.4985245],
  polygon: RegionPolygons[`united-states-of-america-indiana-laporte-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-floyd-county`,
  locales: {
    en: `Floyd County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 77781,
  coordinates: [-85.8968305,38.299344000000005],
  polygon: RegionPolygons[`united-states-of-america-indiana-floyd-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44593,
  coordinates: [-85.7912735,39.5229175],
  polygon: RegionPolygons[`united-states-of-america-indiana-shelby-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-allen-county`,
  locales: {
    en: `Allen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 375351,
  coordinates: [-85.070744,41.093929],
  polygon: RegionPolygons[`united-states-of-america-indiana-allen-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-tipton-county`,
  locales: {
    en: `Tipton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15128,
  coordinates: [-86.052076,40.311361500000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-tipton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-rush-county`,
  locales: {
    en: `Rush County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16663,
  coordinates: [-85.465533,39.6201645],
  polygon: RegionPolygons[`united-states-of-america-indiana-rush-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19489,
  coordinates: [-86.49588800000001,38.541362],
  polygon: RegionPolygons[`united-states-of-america-indiana-orange-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-crawford-county`,
  locales: {
    en: `Crawford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10558,
  coordinates: [-86.4664205,38.264135499999995],
  polygon: RegionPolygons[`united-states-of-america-indiana-crawford-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-owen-county`,
  locales: {
    en: `Owen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20845,
  coordinates: [-86.84269800000001,39.319545500000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-owen-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-fountain-county`,
  locales: {
    en: `Fountain County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16351,
  coordinates: [-87.2651005,40.159532],
  polygon: RegionPolygons[`united-states-of-america-indiana-fountain-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-decatur-county`,
  locales: {
    en: `Decatur County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26794,
  coordinates: [-85.4919175,39.292067],
  polygon: RegionPolygons[`united-states-of-america-indiana-decatur-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-fulton-county`,
  locales: {
    en: `Fulton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20092,
  coordinates: [-86.2069545,41.0412495],
  polygon: RegionPolygons[`united-states-of-america-indiana-fulton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-lagrange-county`,
  locales: {
    en: `LaGrange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39330,
  coordinates: [-85.426917,41.641722],
  polygon: RegionPolygons[`united-states-of-america-indiana-lagrange-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-knox-county`,
  locales: {
    en: `Knox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36895,
  coordinates: [-87.4215765,38.6611855],
  polygon: RegionPolygons[`united-states-of-america-indiana-knox-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 146917,
  coordinates: [-86.50153900000001,39.173286000000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-monroe-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-cass-county`,
  locales: {
    en: `Cass County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37955,
  coordinates: [-86.3733815,40.736143],
  polygon: RegionPolygons[`united-states-of-america-indiana-cass-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-randolph-county`,
  locales: {
    en: `Randolph County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24851,
  coordinates: [-85.011338,40.157236999999995],
  polygon: RegionPolygons[`united-states-of-america-indiana-randolph-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-martin-county`,
  locales: {
    en: `Martin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10217,
  coordinates: [-86.8032725,38.700171999999995],
  polygon: RegionPolygons[`united-states-of-america-indiana-martin-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27943,
  coordinates: [-86.078819,38.5984585],
  polygon: RegionPolygons[`united-states-of-america-indiana-washington-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-parke-county`,
  locales: {
    en: `Parke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16927,
  coordinates: [-87.2218005,39.779033],
  polygon: RegionPolygons[`united-states-of-america-indiana-parke-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-kosciusko-county`,
  locales: {
    en: `Kosciusko County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 79344,
  coordinates: [-85.8647395,41.239367],
  polygon: RegionPolygons[`united-states-of-america-indiana-kosciusko-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65936,
  coordinates: [-85.01602550000001,39.8599215],
  polygon: RegionPolygons[`united-states-of-america-indiana-wayne-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38346,
  coordinates: [-86.893817,40.039825500000006],
  polygon: RegionPolygons[`united-states-of-america-indiana-montgomery-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-hancock-county`,
  locales: {
    en: `Hancock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76351,
  coordinates: [-85.76510250000001,39.821446],
  polygon: RegionPolygons[`united-states-of-america-indiana-hancock-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-vigo-county`,
  locales: {
    en: `Vigo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 107386,
  coordinates: [-87.40453099999999,39.4335005],
  polygon: RegionPolygons[`united-states-of-america-indiana-vigo-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32208,
  coordinates: [-85.4428255,38.749990499999996],
  polygon: RegionPolygons[`united-states-of-america-indiana-jefferson-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-huntington-county`,
  locales: {
    en: `Huntington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36240,
  coordinates: [-85.48925399999999,40.8291895],
  polygon: RegionPolygons[`united-states-of-america-indiana-huntington-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-harrison-county`,
  locales: {
    en: `Harrison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40350,
  coordinates: [-86.114784,38.190351500000006],
  polygon: RegionPolygons[`united-states-of-america-indiana-harrison-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-wabash-county`,
  locales: {
    en: `Wabash County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31280,
  coordinates: [-85.7925115,40.848853500000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-wabash-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-delaware-county`,
  locales: {
    en: `Delaware County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 114772,
  coordinates: [-85.3964875,40.2282065],
  polygon: RegionPolygons[`united-states-of-america-indiana-delaware-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-posey-county`,
  locales: {
    en: `Posey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25540,
  coordinates: [-87.87335350000001,38.001000000000005],
  polygon: RegionPolygons[`united-states-of-america-indiana-posey-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-spencer-county`,
  locales: {
    en: `Spencer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20327,
  coordinates: [-87.0179535,37.993821],
  polygon: RegionPolygons[`united-states-of-america-indiana-spencer-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-ohio-county`,
  locales: {
    en: `Ohio County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5844,
  coordinates: [-84.9850845,38.9659135],
  polygon: RegionPolygons[`united-states-of-america-indiana-ohio-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20127,
  coordinates: [-86.5738755,40.5844765],
  polygon: RegionPolygons[`united-states-of-america-indiana-carroll-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8263,
  coordinates: [-87.311793,40.3021425],
  polygon: RegionPolygons[`united-states-of-america-indiana-warren-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22736,
  coordinates: [-85.056989,39.397251999999995],
  polygon: RegionPolygons[`united-states-of-america-indiana-franklin-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-pulaski-county`,
  locales: {
    en: `Pulaski County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12469,
  coordinates: [-86.6989025,41.0411035],
  polygon: RegionPolygons[`united-states-of-america-indiana-pulaski-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-jay-county`,
  locales: {
    en: `Jay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20764,
  coordinates: [-85.0111465,40.439459],
  polygon: RegionPolygons[`united-states-of-america-indiana-jay-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-wells-county`,
  locales: {
    en: `Wells County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28206,
  coordinates: [-85.258652,40.742376],
  polygon: RegionPolygons[`united-states-of-america-indiana-wells-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-marshall-county`,
  locales: {
    en: `Marshall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46248,
  coordinates: [-86.2605775,41.325298000000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-marshall-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-sullivan-county`,
  locales: {
    en: `Sullivan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20690,
  coordinates: [-87.4431845,39.080525],
  polygon: RegionPolygons[`united-states-of-america-indiana-sullivan-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-brown-county`,
  locales: {
    en: `Brown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15234,
  coordinates: [-86.23083349999999,39.196282],
  polygon: RegionPolygons[`united-states-of-america-indiana-brown-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-ripley-county`,
  locales: {
    en: `Ripley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28523,
  coordinates: [-85.2549985,39.1115335],
  polygon: RegionPolygons[`united-states-of-america-indiana-ripley-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-henry-county`,
  locales: {
    en: `Henry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48271,
  coordinates: [-85.3989305,39.931831],
  polygon: RegionPolygons[`united-states-of-america-indiana-henry-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-howard-county`,
  locales: {
    en: `Howard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 82366,
  coordinates: [-86.1189395,40.469593],
  polygon: RegionPolygons[`united-states-of-america-indiana-howard-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-whitley-county`,
  locales: {
    en: `Whitley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34074,
  coordinates: [-85.49717749999999,41.148574999999994],
  polygon: RegionPolygons[`united-states-of-america-indiana-whitley-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-dearborn-county`,
  locales: {
    en: `Dearborn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49568,
  coordinates: [-84.9759795,39.1234195],
  polygon: RegionPolygons[`united-states-of-america-indiana-dearborn-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-blackford-county`,
  locales: {
    en: `Blackford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11930,
  coordinates: [-85.32408,40.473138],
  polygon: RegionPolygons[`united-states-of-america-indiana-blackford-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-scott-county`,
  locales: {
    en: `Scott County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23878,
  coordinates: [-85.729157,38.6948615],
  polygon: RegionPolygons[`united-states-of-america-indiana-scott-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-bartholomew-county`,
  locales: {
    en: `Bartholomew County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 82753,
  coordinates: [-85.885058,39.192976],
  polygon: RegionPolygons[`united-states-of-america-indiana-bartholomew-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-jasper-county`,
  locales: {
    en: `Jasper County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33370,
  coordinates: [-87.1030475,41.011453],
  polygon: RegionPolygons[`united-states-of-america-indiana-jasper-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7037,
  coordinates: [-84.925108,39.6256065],
  polygon: RegionPolygons[`united-states-of-america-indiana-union-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-vermillion-county`,
  locales: {
    en: `Vermillion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15479,
  coordinates: [-87.443545,39.877864],
  polygon: RegionPolygons[`united-states-of-america-indiana-vermillion-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-benton-county`,
  locales: {
    en: `Benton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8653,
  coordinates: [-87.3100935,40.606315],
  polygon: RegionPolygons[`united-states-of-america-indiana-benton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26170,
  coordinates: [-87.090359,39.387551],
  polygon: RegionPolygons[`united-states-of-america-indiana-clay-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45668,
  coordinates: [-86.47919150000001,38.8394825],
  polygon: RegionPolygons[`united-states-of-america-indiana-lawrence-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-clark-county`,
  locales: {
    en: `Clark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 117360,
  coordinates: [-85.704951,38.436953],
  polygon: RegionPolygons[`united-states-of-america-indiana-clark-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-miami-county`,
  locales: {
    en: `Miami County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35567,
  coordinates: [-86.01632649999999,40.780922000000004],
  polygon: RegionPolygons[`united-states-of-america-indiana-miami-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23047,
  coordinates: [-85.1680795,39.6569625],
  polygon: RegionPolygons[`united-states-of-america-indiana-fayette-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-newton-county`,
  locales: {
    en: `Newton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14011,
  coordinates: [-87.3970095,40.977588499999996],
  polygon: RegionPolygons[`united-states-of-america-indiana-newton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19102,
  coordinates: [-86.6224235,38.0538765],
  polygon: RegionPolygons[`united-states-of-america-indiana-perry-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37779,
  coordinates: [-86.8280865,39.668384],
  polygon: RegionPolygons[`united-states-of-america-indiana-putnam-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-starke-county`,
  locales: {
    en: `Starke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22935,
  coordinates: [-86.6983865,41.302205],
  polygon: RegionPolygons[`united-states-of-america-indiana-starke-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32006,
  coordinates: [-86.961652,39.0371445],
  polygon: RegionPolygons[`united-states-of-america-indiana-greene-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-pike-county`,
  locales: {
    en: `Pike County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12410,
  coordinates: [-87.2676305,38.390486499999994],
  polygon: RegionPolygons[`united-states-of-america-indiana-pike-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-warrick-county`,
  locales: {
    en: `Warrick County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62567,
  coordinates: [-87.245218,38.062363000000005],
  polygon: RegionPolygons[`united-states-of-america-indiana-warrick-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-daviess-county`,
  locales: {
    en: `Daviess County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33147,
  coordinates: [-87.0858515,38.6973285],
  polygon: RegionPolygons[`united-states-of-america-indiana-daviess-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-dubois-county`,
  locales: {
    en: `Dubois County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42565,
  coordinates: [-86.87606650000001,38.365024000000005],
  polygon: RegionPolygons[`united-states-of-america-indiana-dubois-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-clinton-county`,
  locales: {
    en: `Clinton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32250,
  coordinates: [-86.46908450000001,40.304673],
  polygon: RegionPolygons[`united-states-of-america-indiana-clinton-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-white-county`,
  locales: {
    en: `White County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24133,
  coordinates: [-86.8406485,40.737271],
  polygon: RegionPolygons[`united-states-of-america-indiana-white-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-switzerland-county`,
  locales: {
    en: `Switzerland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10717,
  coordinates: [-84.9938725,38.8085935],
  polygon: RegionPolygons[`united-states-of-america-indiana-switzerland-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-steuben-county`,
  locales: {
    en: `Steuben County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34586,
  coordinates: [-85.0007515,41.6433265],
  polygon: RegionPolygons[`united-states-of-america-indiana-steuben-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-gibson-county`,
  locales: {
    en: `Gibson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33452,
  coordinates: [-87.64698250000001,38.349461],
  polygon: RegionPolygons[`united-states-of-america-indiana-gibson-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-indiana-jennings-county`,
  locales: {
    en: `Jennings County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27611,
  coordinates: [-85.619944,39.0015625],
  polygon: RegionPolygons[`united-states-of-america-indiana-jennings-county`],
  parentId: `united-states-of-america-indiana`,
  dataSource: `https://opendata.arcgis.com/datasets/d14de7e28b0448ab82eb36d6f25b1ea1_0.csv`
}, {
  id: `united-states-of-america-louisiana-orleans-parish`,
  locales: {
    en: `Orleans Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 391006,
  coordinates: [-89.88147699999999,30.033868],
  polygon: RegionPolygons[`united-states-of-america-louisiana-orleans-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-jefferson-parish`,
  locales: {
    en: `Jefferson Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 434051,
  coordinates: [-90.114832,29.696731],
  polygon: RegionPolygons[`united-states-of-america-louisiana-jefferson-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-james-parish`,
  locales: {
    en: `St. James Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21037,
  coordinates: [-90.8028455,30.027838],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-james-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-caddo-parish`,
  locales: {
    en: `Caddo Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 242922,
  coordinates: [-93.757198,32.6074585],
  polygon: RegionPolygons[`united-states-of-america-louisiana-caddo-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-tammany-parish`,
  locales: {
    en: `St. Tammany Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 258111,
  coordinates: [-89.891049,30.43073],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-tammany-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-east-baton-rouge-parish`,
  locales: {
    en: `East Baton Rouge Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 440956,
  coordinates: [-91.0821615,30.516002],
  polygon: RegionPolygons[`united-states-of-america-louisiana-east-baton-rouge-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-bossier-parish`,
  locales: {
    en: `Bossier Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 127185,
  coordinates: [-93.5978795,32.627677000000006],
  polygon: RegionPolygons[`united-states-of-america-louisiana-bossier-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-lafourche-parish`,
  locales: {
    en: `Lafourche Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 98115,
  coordinates: [-90.50821049999999,29.4895455],
  polygon: RegionPolygons[`united-states-of-america-louisiana-lafourche-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-bernard-parish`,
  locales: {
    en: `St. Bernard Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46721,
  coordinates: [-89.4145595,29.8500655],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-bernard-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-charles-parish`,
  locales: {
    en: `St. Charles Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 52879,
  coordinates: [-90.3585315,29.961458],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-charles-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-terrebonne-parish`,
  locales: {
    en: `Terrebonne Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 111021,
  coordinates: [-90.8557755,29.406244],
  polygon: RegionPolygons[`united-states-of-america-louisiana-terrebonne-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-lafayette-parish`,
  locales: {
    en: `Lafayette Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 242782,
  coordinates: [-92.0951095,30.2075775],
  polygon: RegionPolygons[`united-states-of-america-louisiana-lafayette-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-john-the-baptist-parish`,
  locales: {
    en: `St. John the Baptist Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43184,
  coordinates: [-90.4833525,30.0930385],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-john-the-baptist-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-ascension-parish`,
  locales: {
    en: `Ascension Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 124672,
  coordinates: [-90.869644,30.204696499999997],
  polygon: RegionPolygons[`united-states-of-america-louisiana-ascension-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-landry-parish`,
  locales: {
    en: `St. Landry Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 82764,
  coordinates: [-92.08607749999999,30.573712],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-landry-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-washington-parish`,
  locales: {
    en: `Washington Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46582,
  coordinates: [-90.03715650000001,30.835068999999997],
  polygon: RegionPolygons[`united-states-of-america-louisiana-washington-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-west-baton-rouge-parish`,
  locales: {
    en: `West Baton Rouge Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26427,
  coordinates: [-91.313597,30.490574000000002],
  polygon: RegionPolygons[`united-states-of-america-louisiana-west-baton-rouge-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-acadia-parish`,
  locales: {
    en: `Acadia Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62190,
  coordinates: [-92.38683499999999,30.2652335],
  polygon: RegionPolygons[`united-states-of-america-louisiana-acadia-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-assumption-parish`,
  locales: {
    en: `Assumption Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22300,
  coordinates: [-91.0722915,29.8539995],
  polygon: RegionPolygons[`united-states-of-america-louisiana-assumption-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-calcasieu-parish`,
  locales: {
    en: `Calcasieu Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 203112,
  coordinates: [-93.326522,30.2639165],
  polygon: RegionPolygons[`united-states-of-america-louisiana-calcasieu-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-iberia-parish`,
  locales: {
    en: `Iberia Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70941,
  coordinates: [-91.632762,29.7982045],
  polygon: RegionPolygons[`united-states-of-america-louisiana-iberia-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-iberville-parish`,
  locales: {
    en: `Iberville Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32721,
  coordinates: [-91.3600815,30.2613845],
  polygon: RegionPolygons[`united-states-of-america-louisiana-iberville-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-livingston-parish`,
  locales: {
    en: `Livingston Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 139567,
  coordinates: [-90.696248,30.412879],
  polygon: RegionPolygons[`united-states-of-america-louisiana-livingston-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-plaquemines-parish`,
  locales: {
    en: `Plaquemines Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23410,
  coordinates: [-89.5381785,29.4150075],
  polygon: RegionPolygons[`united-states-of-america-louisiana-plaquemines-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-rapides-parish`,
  locales: {
    en: `Rapides Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 130562,
  coordinates: [-92.5286315,31.203797],
  polygon: RegionPolygons[`united-states-of-america-louisiana-rapides-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-webster-parish`,
  locales: {
    en: `Webster Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38798,
  coordinates: [-93.3384255,32.7143435],
  polygon: RegionPolygons[`united-states-of-america-louisiana-webster-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-allen-parish`,
  locales: {
    en: `Allen Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25605,
  coordinates: [-92.856948,30.661153],
  polygon: RegionPolygons[`united-states-of-america-louisiana-allen-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-avoyelles-parish`,
  locales: {
    en: `Avoyelles Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40462,
  coordinates: [-91.97901999999999,31.095483],
  polygon: RegionPolygons[`united-states-of-america-louisiana-avoyelles-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-beauregard-parish`,
  locales: {
    en: `Beauregard Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37253,
  coordinates: [-93.35856949999999,30.6430015],
  polygon: RegionPolygons[`united-states-of-america-louisiana-beauregard-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-bienville-parish`,
  locales: {
    en: `Bienville Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13308,
  coordinates: [-93.10068150000001,32.366091999999995],
  polygon: RegionPolygons[`united-states-of-america-louisiana-bienville-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-caldwell-parish`,
  locales: {
    en: `Caldwell Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9960,
  coordinates: [-92.09278499999999,32.102264500000004],
  polygon: RegionPolygons[`united-states-of-america-louisiana-caldwell-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-cameron-parish`,
  locales: {
    en: `Cameron Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6968,
  coordinates: [-93.27240900000001,29.8158395],
  polygon: RegionPolygons[`united-states-of-america-louisiana-cameron-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-catahoula-parish`,
  locales: {
    en: `Catahoula Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9608,
  coordinates: [-91.776279,31.5993165],
  polygon: RegionPolygons[`united-states-of-america-louisiana-catahoula-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-claiborne-parish`,
  locales: {
    en: `Claiborne Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15944,
  coordinates: [-92.981675,32.8016545],
  polygon: RegionPolygons[`united-states-of-america-louisiana-claiborne-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-concordia-parish`,
  locales: {
    en: `Concordia Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19572,
  coordinates: [-91.622707,31.366113],
  polygon: RegionPolygons[`united-states-of-america-louisiana-concordia-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-de-soto-parish`,
  locales: {
    en: `De Soto Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27436,
  coordinates: [-93.699102,32.0948115],
  polygon: RegionPolygons[`united-states-of-america-louisiana-de-soto-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-east-carroll-parish`,
  locales: {
    en: `East Carroll Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7037,
  coordinates: [-91.2303025,32.7714455],
  polygon: RegionPolygons[`united-states-of-america-louisiana-east-carroll-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-east-feliciana-parish`,
  locales: {
    en: `East Feliciana Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19305,
  coordinates: [-91.0732675,30.824589],
  polygon: RegionPolygons[`united-states-of-america-louisiana-east-feliciana-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-evangeline-parish`,
  locales: {
    en: `Evangeline Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33443,
  coordinates: [-92.40312349999999,30.7409765],
  polygon: RegionPolygons[`united-states-of-america-louisiana-evangeline-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-franklin-parish`,
  locales: {
    en: `Franklin Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20156,
  coordinates: [-91.6867355,32.1420035],
  polygon: RegionPolygons[`united-states-of-america-louisiana-franklin-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-grant-parish`,
  locales: {
    en: `Grant Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22482,
  coordinates: [-92.58483,31.5926135],
  polygon: RegionPolygons[`united-states-of-america-louisiana-grant-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-jackson-parish`,
  locales: {
    en: `Jackson Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15902,
  coordinates: [-92.56701000000001,32.3212645],
  polygon: RegionPolygons[`united-states-of-america-louisiana-jackson-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-jefferson-davis-parish`,
  locales: {
    en: `Jefferson Davis Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31582,
  coordinates: [-92.857122,30.2628035],
  polygon: RegionPolygons[`united-states-of-america-louisiana-jefferson-davis-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-lasalle-parish`,
  locales: {
    en: `LaSalle Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14917,
  coordinates: [-92.186641,31.6257625],
  polygon: RegionPolygons[`united-states-of-america-louisiana-lasalle-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-lincoln-parish`,
  locales: {
    en: `Lincoln Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47196,
  coordinates: [-92.64820449999999,32.606269499999996],
  polygon: RegionPolygons[`united-states-of-america-louisiana-lincoln-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-madison-parish`,
  locales: {
    en: `Madison Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11161,
  coordinates: [-91.216415,32.341573],
  polygon: RegionPolygons[`united-states-of-america-louisiana-madison-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-morehouse-parish`,
  locales: {
    en: `Morehouse Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25398,
  coordinates: [-91.76029249999999,32.7570325],
  polygon: RegionPolygons[`united-states-of-america-louisiana-morehouse-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-natchitoches-parish`,
  locales: {
    en: `Natchitoches Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38659,
  coordinates: [-93.080363,31.747528000000003],
  polygon: RegionPolygons[`united-states-of-america-louisiana-natchitoches-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-ouachita-parish`,
  locales: {
    en: `Ouachita Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 154475,
  coordinates: [-92.159829,32.4907775],
  polygon: RegionPolygons[`united-states-of-america-louisiana-ouachita-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-pointe-coupee-parish`,
  locales: {
    en: `Pointe Coupee Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21940,
  coordinates: [-91.5623665,30.750701999999997],
  polygon: RegionPolygons[`united-states-of-america-louisiana-pointe-coupee-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-red-river-parish`,
  locales: {
    en: `Red River Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8477,
  coordinates: [-93.367939,32.062484],
  polygon: RegionPolygons[`united-states-of-america-louisiana-red-river-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-richland-parish`,
  locales: {
    en: `Richland Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20192,
  coordinates: [-91.732693,32.409445500000004],
  polygon: RegionPolygons[`united-states-of-america-louisiana-richland-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-sabine-parish`,
  locales: {
    en: `Sabine Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24032,
  coordinates: [-93.557699,31.505406999999998],
  polygon: RegionPolygons[`united-states-of-america-louisiana-sabine-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-helena-parish`,
  locales: {
    en: `St. Helena Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10262,
  coordinates: [-90.738279,30.824559],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-helena-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-martin-parish`,
  locales: {
    en: `St. Martin Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53621,
  coordinates: [-91.53909150000001,30.09857],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-martin-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-st-mary-parish`,
  locales: {
    en: `St. Mary Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49774,
  coordinates: [-91.48180049999999,29.7141755],
  polygon: RegionPolygons[`united-states-of-america-louisiana-st-mary-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-tangipahoa-parish`,
  locales: {
    en: `Tangipahoa Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 133777,
  coordinates: [-90.405269,30.612403],
  polygon: RegionPolygons[`united-states-of-america-louisiana-tangipahoa-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-tensas-parish`,
  locales: {
    en: `Tensas Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4462,
  coordinates: [-91.3045835,31.991290499999998],
  polygon: RegionPolygons[`united-states-of-america-louisiana-tensas-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-union-parish`,
  locales: {
    en: `Union Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22330,
  coordinates: [-92.394117,32.7976865],
  polygon: RegionPolygons[`united-states-of-america-louisiana-union-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-vermilion-parish`,
  locales: {
    en: `Vermilion Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59830,
  coordinates: [-92.351531,29.8402345],
  polygon: RegionPolygons[`united-states-of-america-louisiana-vermilion-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-vernon-parish`,
  locales: {
    en: `Vernon Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48860,
  coordinates: [-93.19772900000001,31.1119345],
  polygon: RegionPolygons[`united-states-of-america-louisiana-vernon-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-west-carroll-parish`,
  locales: {
    en: `West Carroll Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10982,
  coordinates: [-91.45007849999999,32.7940275],
  polygon: RegionPolygons[`united-states-of-america-louisiana-west-carroll-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-west-feliciana-parish`,
  locales: {
    en: `West Feliciana Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15460,
  coordinates: [-91.46312950000001,30.8493775],
  polygon: RegionPolygons[`united-states-of-america-louisiana-west-feliciana-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-winn-parish`,
  locales: {
    en: `Winn Parish`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14134,
  coordinates: [-92.64287350000001,31.928432],
  polygon: RegionPolygons[`united-states-of-america-louisiana-winn-parish`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-louisiana-(unassigned)`,
  locales: {
    en: `(unassigned)`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-louisiana-(unassigned)`],
  parentId: `united-states-of-america-louisiana`,
  dataSource: `https://services5.arcgis.com/O5K6bb5dZVZcTo5M/arcgis/rest/services/Cases_by_Parish_2/FeatureServer/0/query?f=json&where=PFIPS%20%3C%3E%2099999&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc%2CCases%20desc%2CParish%20asc&resultOffset=0&resultRecordCount=65&cacheHint=true`
}, {
  id: `united-states-of-america-maryland-allegany-county`,
  locales: {
    en: `Allegany County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70975,
  coordinates: [-78.6931075,39.580749],
  polygon: RegionPolygons[`united-states-of-america-maryland-allegany-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-anne-arundel-county`,
  locales: {
    en: `Anne Arundel County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 576031,
  coordinates: [-76.617221,38.9754795],
  polygon: RegionPolygons[`united-states-of-america-maryland-anne-arundel-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-baltimore-county`,
  locales: {
    en: `Baltimore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 828431,
  coordinates: [-76.60774,39.4583055],
  polygon: RegionPolygons[`united-states-of-america-maryland-baltimore-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-baltimore-city`,
  locales: {
    en: `Baltimore City`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-maryland-baltimore-city`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-calvert-county`,
  locales: {
    en: `Calvert County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92003,
  coordinates: [-76.5440945,38.537166],
  polygon: RegionPolygons[`united-states-of-america-maryland-calvert-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-caroline-county`,
  locales: {
    en: `Caroline County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33304,
  coordinates: [-75.85111599999999,38.889352],
  polygon: RegionPolygons[`united-states-of-america-maryland-caroline-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 168429,
  coordinates: [-77.04930300000001,39.534766000000005],
  polygon: RegionPolygons[`united-states-of-america-maryland-carroll-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-cecil-county`,
  locales: {
    en: `Cecil County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102826,
  coordinates: [-75.999976,39.5413585],
  polygon: RegionPolygons[`united-states-of-america-maryland-cecil-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-charles-county`,
  locales: {
    en: `Charles County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 161503,
  coordinates: [-76.96860749999999,38.480309500000004],
  polygon: RegionPolygons[`united-states-of-america-maryland-charles-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-dorchester-county`,
  locales: {
    en: `Dorchester County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31998,
  coordinates: [-76.0189625,38.409225],
  polygon: RegionPolygons[`united-states-of-america-maryland-dorchester-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-frederick-county`,
  locales: {
    en: `Frederick County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 255648,
  coordinates: [-77.392417,39.47017700000001],
  polygon: RegionPolygons[`united-states-of-america-maryland-frederick-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-garrett-county`,
  locales: {
    en: `Garrett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29163,
  coordinates: [-79.209413,39.463305500000004],
  polygon: RegionPolygons[`united-states-of-america-maryland-garrett-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-harford-county`,
  locales: {
    en: `Harford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 253956,
  coordinates: [-76.315203,39.5117065],
  polygon: RegionPolygons[`united-states-of-america-maryland-harford-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-howard-county`,
  locales: {
    en: `Howard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 323196,
  coordinates: [-76.9419445,39.236219],
  polygon: RegionPolygons[`united-states-of-america-maryland-howard-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-kent-county`,
  locales: {
    en: `Kent County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19383,
  coordinates: [-76.0172445,39.196154500000006],
  polygon: RegionPolygons[`united-states-of-america-maryland-kent-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1052567,
  coordinates: [-77.2078935,39.1439065],
  polygon: RegionPolygons[`united-states-of-america-maryland-montgomery-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-prince-george's-county`,
  locales: {
    en: `Prince George's County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 909308,
  coordinates: [-76.87822,38.8331695],
  polygon: RegionPolygons[`united-states-of-america-maryland-prince-george's-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-queen-anne's-county`,
  locales: {
    en: `Queen Anne's County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50251,
  coordinates: [-76.0619365,39.047804],
  polygon: RegionPolygons[`united-states-of-america-maryland-queen-anne's-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-somerset-county`,
  locales: {
    en: `Somerset County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25675,
  coordinates: [-75.800611,38.105281000000005],
  polygon: RegionPolygons[`united-states-of-america-maryland-somerset-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-st-mary's-county`,
  locales: {
    en: `St. Mary's County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 112664,
  coordinates: [-76.595653,38.2745585],
  polygon: RegionPolygons[`united-states-of-america-maryland-st-mary's-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-talbot-county`,
  locales: {
    en: `Talbot County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36968,
  coordinates: [-76.122386,38.7587675],
  polygon: RegionPolygons[`united-states-of-america-maryland-talbot-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 150926,
  coordinates: [-77.91450950000001,39.5205695],
  polygon: RegionPolygons[`united-states-of-america-maryland-washington-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-wicomico-county`,
  locales: {
    en: `Wicomico County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 103195,
  coordinates: [-75.61925600000001,38.3943725],
  polygon: RegionPolygons[`united-states-of-america-maryland-wicomico-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-maryland-worcester-county`,
  locales: {
    en: `Worcester County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51823,
  coordinates: [-75.3490465,38.2230905],
  polygon: RegionPolygons[`united-states-of-america-maryland-worcester-county`],
  parentId: `united-states-of-america-maryland`,
  dataSource: `https://opendata.arcgis.com/datasets/3d9ca88970dd4689a701354d7fa6830b_0.csv`
}, {
  id: `united-states-of-america-mississippi-bolivar-county`,
  locales: {
    en: `Bolivar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31333,
  coordinates: [-90.9447695,33.8247305],
  polygon: RegionPolygons[`united-states-of-america-mississippi-bolivar-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-coahoma-county`,
  locales: {
    en: `Coahoma County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22628,
  coordinates: [-90.6784215,34.255278000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-coahoma-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-copiah-county`,
  locales: {
    en: `Copiah County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28543,
  coordinates: [-90.42352199999999,31.867576],
  polygon: RegionPolygons[`united-states-of-america-mississippi-copiah-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-desoto-county`,
  locales: {
    en: `DeSoto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 182001,
  coordinates: [-90.0184165,34.851822],
  polygon: RegionPolygons[`united-states-of-america-mississippi-desoto-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-forrest-county`,
  locales: {
    en: `Forrest County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75036,
  coordinates: [-89.2947915,31.1719645],
  polygon: RegionPolygons[`united-states-of-america-mississippi-forrest-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-hancock-county`,
  locales: {
    en: `Hancock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47334,
  coordinates: [-89.506062,30.4111555],
  polygon: RegionPolygons[`united-states-of-america-mississippi-hancock-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-harrison-county`,
  locales: {
    en: `Harrison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 206650,
  coordinates: [-89.0935275,30.439798500000002],
  polygon: RegionPolygons[`united-states-of-america-mississippi-harrison-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-hinds-county`,
  locales: {
    en: `Hinds County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 237085,
  coordinates: [-90.3971595,32.3110675],
  polygon: RegionPolygons[`united-states-of-america-mississippi-hinds-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-holmes-county`,
  locales: {
    en: `Holmes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17622,
  coordinates: [-90.09048050000001,33.127347],
  polygon: RegionPolygons[`united-states-of-america-mississippi-holmes-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 143277,
  coordinates: [-88.639257,30.466091],
  polygon: RegionPolygons[`united-states-of-america-mississippi-jackson-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-jones-county`,
  locales: {
    en: `Jones County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 68461,
  coordinates: [-89.172291,31.6290115],
  polygon: RegionPolygons[`united-states-of-america-mississippi-jones-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-leflore-county`,
  locales: {
    en: `Leflore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28919,
  coordinates: [-90.277601,33.523355],
  polygon: RegionPolygons[`united-states-of-america-mississippi-leflore-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 105630,
  coordinates: [-90.0900265,32.6424515],
  polygon: RegionPolygons[`united-states-of-america-mississippi-madison-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35564,
  coordinates: [-88.4618815,33.8697745],
  polygon: RegionPolygons[`united-states-of-america-mississippi-monroe-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-pearl-river-county`,
  locales: {
    en: `Pearl River County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55387,
  coordinates: [-89.596482,30.7364495],
  polygon: RegionPolygons[`united-states-of-america-mississippi-pearl-river-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11931,
  coordinates: [-88.9902575,31.1719645],
  polygon: RegionPolygons[`united-states-of-america-mississippi-perry-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-smith-county`,
  locales: {
    en: `Smith County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16002,
  coordinates: [-89.5238095,32.002205000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-smith-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-walthall-county`,
  locales: {
    en: `Walthall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14465,
  coordinates: [-90.0483265,31.175763],
  polygon: RegionPolygons[`united-states-of-america-mississippi-walthall-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-wilkinson-county`,
  locales: {
    en: `Wilkinson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8792,
  coordinates: [-91.3482055,31.185154],
  polygon: RegionPolygons[`united-states-of-america-mississippi-wilkinson-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-winston-county`,
  locales: {
    en: `Winston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18165,
  coordinates: [-89.0659725,33.1027655],
  polygon: RegionPolygons[`united-states-of-america-mississippi-winston-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-yazoo-county`,
  locales: {
    en: `Yazoo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28248,
  coordinates: [-90.3628175,32.764664499999995],
  polygon: RegionPolygons[`united-states-of-america-mississippi-yazoo-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-total-county`,
  locales: {
    en: `Total County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-mississippi-total-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31192,
  coordinates: [-91.404425,31.470572500000003],
  polygon: RegionPolygons[`united-states-of-america-mississippi-adams-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-alcorn-county`,
  locales: {
    en: `Alcorn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36925,
  coordinates: [-88.593502,34.875828],
  polygon: RegionPolygons[`united-states-of-america-mississippi-alcorn-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-amite-county`,
  locales: {
    en: `Amite County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12326,
  coordinates: [-90.8215065,31.174263500000002],
  polygon: RegionPolygons[`united-states-of-america-mississippi-amite-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-attala-county`,
  locales: {
    en: `Attala County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18365,
  coordinates: [-89.641145,33.0827575],
  polygon: RegionPolygons[`united-states-of-america-mississippi-attala-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-benton-county`,
  locales: {
    en: `Benton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8271,
  coordinates: [-89.184916,34.788941],
  polygon: RegionPolygons[`united-states-of-america-mississippi-benton-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-calhoun-county`,
  locales: {
    en: `Calhoun County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14436,
  coordinates: [-89.323812,33.941950500000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-calhoun-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9911,
  coordinates: [-89.91001800000001,33.445717],
  polygon: RegionPolygons[`united-states-of-america-mississippi-carroll-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-chickasaw-county`,
  locales: {
    en: `Chickasaw County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17171,
  coordinates: [-88.95537250000001,33.906774999999996],
  polygon: RegionPolygons[`united-states-of-america-mississippi-chickasaw-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-choctaw-county`,
  locales: {
    en: `Choctaw County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8278,
  coordinates: [-89.27103149999999,33.321036500000005],
  polygon: RegionPolygons[`united-states-of-america-mississippi-choctaw-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-claiborne-county`,
  locales: {
    en: `Claiborne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9002,
  coordinates: [-90.9812745,32.0054585],
  polygon: RegionPolygons[`united-states-of-america-mississippi-claiborne-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-clarke-county`,
  locales: {
    en: `Clarke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15604,
  coordinates: [-88.6725705,32.027152],
  polygon: RegionPolygons[`united-states-of-america-mississippi-clarke-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19386,
  coordinates: [-88.75751,33.659271000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-clay-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-covington-county`,
  locales: {
    en: `Covington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18853,
  coordinates: [-89.577396,31.6152755],
  polygon: RegionPolygons[`united-states-of-america-mississippi-covington-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7788,
  coordinates: [-90.89538250000001,31.465789],
  polygon: RegionPolygons[`united-states-of-america-mississippi-franklin-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-george-county`,
  locales: {
    en: `George County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24250,
  coordinates: [-88.64874449999999,30.8662685],
  polygon: RegionPolygons[`united-states-of-america-mississippi-george-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13586,
  coordinates: [-88.63367149999999,31.216909],
  polygon: RegionPolygons[`united-states-of-america-mississippi-greene-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-grenada-county`,
  locales: {
    en: `Grenada County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21055,
  coordinates: [-89.82194150000001,33.787341999999995],
  polygon: RegionPolygons[`united-states-of-america-mississippi-grenada-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-humphreys-county`,
  locales: {
    en: `Humphreys County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8257,
  coordinates: [-90.53176400000001,33.125997],
  polygon: RegionPolygons[`united-states-of-america-mississippi-humphreys-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-issaquena-county`,
  locales: {
    en: `Issaquena County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1308,
  coordinates: [-90.953519,32.711258],
  polygon: RegionPolygons[`united-states-of-america-mississippi-issaquena-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-itawamba-county`,
  locales: {
    en: `Itawamba County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23517,
  coordinates: [-88.3504885,34.275915],
  polygon: RegionPolygons[`united-states-of-america-mississippi-itawamba-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-jasper-county`,
  locales: {
    en: `Jasper County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16428,
  coordinates: [-89.11657550000001,32.013138],
  polygon: RegionPolygons[`united-states-of-america-mississippi-jasper-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7106,
  coordinates: [-91.0509055,31.739958],
  polygon: RegionPolygons[`united-states-of-america-mississippi-jefferson-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-jefferson-davis-county`,
  locales: {
    en: `Jefferson Davis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11234,
  coordinates: [-89.7814355,31.5823375],
  polygon: RegionPolygons[`united-states-of-america-mississippi-jefferson-davis-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-kemper-county`,
  locales: {
    en: `Kemper County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10027,
  coordinates: [-88.631183,32.7530165],
  polygon: RegionPolygons[`united-states-of-america-mississippi-kemper-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lafayette-county`,
  locales: {
    en: `Lafayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54793,
  coordinates: [-89.483825,34.3576945],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lafayette-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lamar-county`,
  locales: {
    en: `Lamar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62447,
  coordinates: [-89.5010375,31.2082405],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lamar-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lauderdale-county`,
  locales: {
    en: `Lauderdale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75317,
  coordinates: [-88.652225,32.401154500000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lauderdale-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12455,
  coordinates: [-90.10206550000001,31.545216500000002],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lawrence-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-leake-county`,
  locales: {
    en: `Leake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22763,
  coordinates: [-89.523946,32.7540435],
  polygon: RegionPolygons[`united-states-of-america-mississippi-leake-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 85202,
  coordinates: [-88.6834375,34.291856499999994],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lee-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34205,
  coordinates: [-90.49061,31.533414999999998],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lincoln-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-lowndes-county`,
  locales: {
    en: `Lowndes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58930,
  coordinates: [-88.4600935,33.515947999999995],
  polygon: RegionPolygons[`united-states-of-america-mississippi-lowndes-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24715,
  coordinates: [-89.8472615,31.216824000000003],
  polygon: RegionPolygons[`united-states-of-america-mississippi-marion-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-marshall-county`,
  locales: {
    en: `Marshall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35451,
  coordinates: [-89.4849845,34.745463],
  polygon: RegionPolygons[`united-states-of-america-mississippi-marshall-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10023,
  coordinates: [-89.583991,33.48156],
  polygon: RegionPolygons[`united-states-of-america-mississippi-montgomery-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-neshoba-county`,
  locales: {
    en: `Neshoba County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29125,
  coordinates: [-89.116788,32.754056000000006],
  polygon: RegionPolygons[`united-states-of-america-mississippi-neshoba-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-newton-county`,
  locales: {
    en: `Newton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21443,
  coordinates: [-89.1182695,32.4002135],
  polygon: RegionPolygons[`united-states-of-america-mississippi-newton-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-noxubee-county`,
  locales: {
    en: `Noxubee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10535,
  coordinates: [-88.558735,33.1071455],
  polygon: RegionPolygons[`united-states-of-america-mississippi-noxubee-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-oktibbeha-county`,
  locales: {
    en: `Oktibbeha County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49599,
  coordinates: [-88.878761,33.425596],
  polygon: RegionPolygons[`united-states-of-america-mississippi-oktibbeha-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-panola-county`,
  locales: {
    en: `Panola County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34178,
  coordinates: [-89.9590485,34.3569895],
  polygon: RegionPolygons[`united-states-of-america-mississippi-panola-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-pike-county`,
  locales: {
    en: `Pike County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39563,
  coordinates: [-90.403877,31.1749835],
  polygon: RegionPolygons[`united-states-of-america-mississippi-pike-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-pontotoc-county`,
  locales: {
    en: `Pontotoc County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31833,
  coordinates: [-89.035431,34.2266515],
  polygon: RegionPolygons[`united-states-of-america-mississippi-pontotoc-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-prentiss-county`,
  locales: {
    en: `Prentiss County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25315,
  coordinates: [-88.53282899999999,34.610175999999996],
  polygon: RegionPolygons[`united-states-of-america-mississippi-prentiss-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-quitman-county`,
  locales: {
    en: `Quitman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7051,
  coordinates: [-90.292731,34.2916515],
  polygon: RegionPolygons[`united-states-of-america-mississippi-quitman-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-rankin-county`,
  locales: {
    en: `Rankin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 153902,
  coordinates: [-89.99076,32.3184555],
  polygon: RegionPolygons[`united-states-of-america-mississippi-rankin-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-scott-county`,
  locales: {
    en: `Scott County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28287,
  coordinates: [-89.5533605,32.4281335],
  polygon: RegionPolygons[`united-states-of-america-mississippi-scott-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-sharkey-county`,
  locales: {
    en: `Sharkey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4377,
  coordinates: [-90.810748,32.8798235],
  polygon: RegionPolygons[`united-states-of-america-mississippi-sharkey-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-simpson-county`,
  locales: {
    en: `Simpson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26758,
  coordinates: [-89.949292,31.901204],
  polygon: RegionPolygons[`united-states-of-america-mississippi-simpson-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-stone-county`,
  locales: {
    en: `Stone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18717,
  coordinates: [-89.1129895,30.779048500000002],
  polygon: RegionPolygons[`united-states-of-america-mississippi-stone-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-sunflower-county`,
  locales: {
    en: `Sunflower County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25735,
  coordinates: [-90.60738649999999,33.628809000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-sunflower-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-tallahatchie-county`,
  locales: {
    en: `Tallahatchie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13987,
  coordinates: [-90.18857,33.930755500000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-tallahatchie-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-tate-county`,
  locales: {
    en: `Tate County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28759,
  coordinates: [-89.955738,34.66339],
  polygon: RegionPolygons[`united-states-of-america-mississippi-tate-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-tippah-county`,
  locales: {
    en: `Tippah County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21995,
  coordinates: [-88.903141,34.796170000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-tippah-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-tishomingo-county`,
  locales: {
    en: `Tishomingo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19454,
  coordinates: [-88.23168,34.729424],
  polygon: RegionPolygons[`united-states-of-america-mississippi-tishomingo-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-tunica-county`,
  locales: {
    en: `Tunica County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9944,
  coordinates: [-90.39353600000001,34.6578765],
  polygon: RegionPolygons[`united-states-of-america-mississippi-tunica-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28606,
  coordinates: [-88.99088950000001,34.481503000000004],
  polygon: RegionPolygons[`united-states-of-america-mississippi-union-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46176,
  coordinates: [-90.8641865,32.3500925],
  polygon: RegionPolygons[`united-states-of-america-mississippi-warren-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45063,
  coordinates: [-90.9574655,33.269039],
  polygon: RegionPolygons[`united-states-of-america-mississippi-washington-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20298,
  coordinates: [-88.696519,31.663657],
  polygon: RegionPolygons[`united-states-of-america-mississippi-wayne-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-webster-county`,
  locales: {
    en: `Webster County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9788,
  coordinates: [-89.2628375,33.599618],
  polygon: RegionPolygons[`united-states-of-america-mississippi-webster-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-mississippi-yalobusha-county`,
  locales: {
    en: `Yalobusha County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12392,
  coordinates: [-89.71941899999999,34.0299395],
  polygon: RegionPolygons[`united-states-of-america-mississippi-yalobusha-county`],
  parentId: `united-states-of-america-mississippi`,
  dataSource: `https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
}, {
  id: `united-states-of-america-north-carolina-rockingham-county`,
  locales: {
    en: `Rockingham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 90690,
  coordinates: [-79.77325049999999,36.39209],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-rockingham-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-guilford-county`,
  locales: {
    en: `Guilford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 533670,
  coordinates: [-79.789537,36.078567],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-guilford-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-alamance-county`,
  locales: {
    en: `Alamance County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 166436,
  coordinates: [-79.389903,36.046625],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-alamance-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-alexander-county`,
  locales: {
    en: `Alexander County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37353,
  coordinates: [-81.173576,35.9112],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-alexander-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-randolph-county`,
  locales: {
    en: `Randolph County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 143351,
  coordinates: [-79.80440999999999,35.713162],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-randolph-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 123248,
  coordinates: [-78.0523115,35.372187],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-wayne-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-ashe-county`,
  locales: {
    en: `Ashe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27109,
  coordinates: [-81.4925705,36.414194499999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-ashe-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-alleghany-county`,
  locales: {
    en: `Alleghany County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11161,
  coordinates: [-81.128388,36.470187499999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-alleghany-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-currituck-county`,
  locales: {
    en: `Currituck County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27072,
  coordinates: [-76.0432625,36.311232000000004],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-currituck-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-camden-county`,
  locales: {
    en: `Camden County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10710,
  coordinates: [-76.2231965,36.357271],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-camden-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-surry-county`,
  locales: {
    en: `Surry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 71948,
  coordinates: [-80.7073595,36.399366],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-surry-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-gates-county`,
  locales: {
    en: `Gates County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11573,
  coordinates: [-76.70138,36.424152],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-gates-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-hertford-county`,
  locales: {
    en: `Hertford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23659,
  coordinates: [-76.94985,36.392281999999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-hertford-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-northampton-county`,
  locales: {
    en: `Northampton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19676,
  coordinates: [-77.48302000000001,36.356129499999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-northampton-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-stokes-county`,
  locales: {
    en: `Stokes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45467,
  coordinates: [-80.2396115,36.4039905],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-stokes-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19807,
  coordinates: [-78.110931,36.373663],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-warren-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-vance-county`,
  locales: {
    en: `Vance County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44582,
  coordinates: [-78.394374,36.3539845],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-vance-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-granville-county`,
  locales: {
    en: `Granville County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 60115,
  coordinates: [-78.6309765,36.282139],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-granville-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-caswell-county`,
  locales: {
    en: `Caswell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22698,
  coordinates: [-79.335016,36.391928],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-caswell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-person-county`,
  locales: {
    en: `Person County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39507,
  coordinates: [-78.974278,36.389045499999995],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-person-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-pasquotank-county`,
  locales: {
    en: `Pasquotank County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39639,
  coordinates: [-76.2753735,36.31698],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-pasquotank-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-halifax-county`,
  locales: {
    en: `Halifax County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50574,
  coordinates: [-77.618624,36.255891000000005],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-halifax-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-wilkes-county`,
  locales: {
    en: `Wilkes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 68557,
  coordinates: [-81.20716300000001,36.217608],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-wilkes-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-watauga-county`,
  locales: {
    en: `Watauga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55945,
  coordinates: [-81.686846,36.2509755],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-watauga-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-perquimans-county`,
  locales: {
    en: `Perquimans County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13422,
  coordinates: [-76.390806,36.226709],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-perquimans-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-chowan-county`,
  locales: {
    en: `Chowan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14029,
  coordinates: [-76.5666445,36.178765999999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-chowan-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-avery-county`,
  locales: {
    en: `Avery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17505,
  coordinates: [-81.9081385,36.099315000000004],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-avery-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-yadkin-county`,
  locales: {
    en: `Yadkin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37543,
  coordinates: [-80.657182,36.165891],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-yadkin-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-dare-county`,
  locales: {
    en: `Dare County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36501,
  coordinates: [-75.7362335,35.708368],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-dare-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-forsyth-county`,
  locales: {
    en: `Forsyth County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 379099,
  coordinates: [-80.2759705,36.1174225],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-forsyth-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 67560,
  coordinates: [-78.27652549999999,36.0419445],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-franklin-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-bertie-county`,
  locales: {
    en: `Bertie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19026,
  coordinates: [-77.0036715,36.0338355],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-bertie-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 146027,
  coordinates: [-79.107692,36.052271],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-orange-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-durham-county`,
  locales: {
    en: `Durham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 316739,
  coordinates: [-78.8573145,36.051317999999995],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-durham-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-nash-county`,
  locales: {
    en: `Nash County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 94016,
  coordinates: [-77.976391,35.966553000000005],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-nash-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-mitchell-county`,
  locales: {
    en: `Mitchell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15000,
  coordinates: [-82.198442,35.991779],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-mitchell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-edgecombe-county`,
  locales: {
    en: `Edgecombe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 52005,
  coordinates: [-77.585453,35.915150999999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-edgecombe-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-caldwell-county`,
  locales: {
    en: `Caldwell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 82029,
  coordinates: [-81.5699525,35.939887],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-caldwell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-tyrrell-county`,
  locales: {
    en: `Tyrrell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4131,
  coordinates: [-76.210059,35.7957445],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-tyrrell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-yancey-county`,
  locales: {
    en: `Yancey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17903,
  coordinates: [-82.31928300000001,35.888507000000004],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-yancey-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21763,
  coordinates: [-82.685785,35.8719975],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-madison-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-martin-county`,
  locales: {
    en: `Martin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22671,
  coordinates: [-77.084982,35.8664985],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-martin-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-wake-county`,
  locales: {
    en: `Wake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1092305,
  coordinates: [-78.6249785,35.796786499999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-wake-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-davie-county`,
  locales: {
    en: `Davie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42733,
  coordinates: [-80.5364645,35.9026525],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-davie-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11859,
  coordinates: [-76.6003345,35.840892999999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-washington-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-burke-county`,
  locales: {
    en: `Burke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 90382,
  coordinates: [-81.675545,35.7791955],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-burke-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-davidson-county`,
  locales: {
    en: `Davidson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 166614,
  coordinates: [-80.2652875,35.765553499999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-davidson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-mcdowell-county`,
  locales: {
    en: `McDowell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45507,
  coordinates: [-82.0594425,35.738724500000004],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-mcdowell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-chatham-county`,
  locales: {
    en: `Chatham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 73139,
  coordinates: [-79.231033,35.6959365],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-chatham-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-wilson-county`,
  locales: {
    en: `Wilson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 81455,
  coordinates: [-77.926691,35.7253325],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-wilson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-buncombe-county`,
  locales: {
    en: `Buncombe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 259103,
  coordinates: [-82.5263415,35.620303],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-buncombe-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-haywood-county`,
  locales: {
    en: `Haywood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61971,
  coordinates: [-83.000247,35.5418605],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-haywood-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-catawba-county`,
  locales: {
    en: `Catawba County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 158652,
  coordinates: [-81.22916649999999,35.6878485],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-catawba-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-pitt-county`,
  locales: {
    en: `Pitt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 179914,
  coordinates: [-77.392609,35.580454],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-pitt-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-johnston-county`,
  locales: {
    en: `Johnston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 202675,
  coordinates: [-78.386616,35.537085],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-johnston-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-swain-county`,
  locales: {
    en: `Swain County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14245,
  coordinates: [-83.554631,35.4877375],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-swain-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-beaufort-county`,
  locales: {
    en: `Beaufort County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47079,
  coordinates: [-76.83147650000001,35.477776000000006],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-beaufort-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-hyde-county`,
  locales: {
    en: `Hyde County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5230,
  coordinates: [-76.19371849999999,35.383544],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-hyde-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21012,
  coordinates: [-77.6507765,35.500008],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-greene-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-rutherford-county`,
  locales: {
    en: `Rutherford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 66826,
  coordinates: [-81.985972,35.395423],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-rutherford-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61452,
  coordinates: [-79.16466,35.467607],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-lee-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-cleveland-county`,
  locales: {
    en: `Cleveland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 97645,
  coordinates: [-81.54468800000001,35.371596499999995],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-cleveland-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43327,
  coordinates: [-83.1417865,35.26292],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-jackson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-harnett-county`,
  locales: {
    en: `Harnett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 134214,
  coordinates: [-78.87648899999999,35.3876225],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-harnett-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-graham-county`,
  locales: {
    en: `Graham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8484,
  coordinates: [-83.810297,35.342066],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-graham-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-henderson-county`,
  locales: {
    en: `Henderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 116748,
  coordinates: [-82.5033325,35.322029],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-henderson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-moore-county`,
  locales: {
    en: `Moore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 98682,
  coordinates: [-79.43270749999999,35.2805435],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-moore-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27271,
  coordinates: [-79.898494,35.324289],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-montgomery-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-stanly-county`,
  locales: {
    en: `Stanly County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62075,
  coordinates: [-80.278733,35.323707999999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-stanly-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-transylvania-county`,
  locales: {
    en: `Transylvania County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34215,
  coordinates: [-82.815485,35.2252595],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-transylvania-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20611,
  coordinates: [-82.1603345,35.296185],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-polk-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-lenoir-county`,
  locales: {
    en: `Lenoir County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55976,
  coordinates: [-77.6126075,35.2174715],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-lenoir-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-craven-county`,
  locales: {
    en: `Craven County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102912,
  coordinates: [-77.063318,35.110855],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-craven-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-macon-county`,
  locales: {
    en: `Macon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35285,
  coordinates: [-83.42341,35.162244],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-macon-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-cherokee-county`,
  locales: {
    en: `Cherokee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28383,
  coordinates: [-84.0097475,35.139748499999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-cherokee-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-pamlico-county`,
  locales: {
    en: `Pamlico County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12670,
  coordinates: [-76.72772499999999,35.1507535],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-pamlico-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-sampson-county`,
  locales: {
    en: `Sampson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 63626,
  coordinates: [-78.3926405,34.9345395],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-sampson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-cumberland-county`,
  locales: {
    en: `Cumberland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 332330,
  coordinates: [-78.8038205,35.0502155],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-cumberland-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11139,
  coordinates: [-83.7441825,35.0712515],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-clay-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-jones-county`,
  locales: {
    en: `Jones County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9637,
  coordinates: [-77.39021650000001,35.014189],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-jones-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-carteret-county`,
  locales: {
    en: `Carteret County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 69524,
  coordinates: [-76.60086799999999,34.832848999999996],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-carteret-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 235908,
  coordinates: [-80.5587175,35.0112285],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-union-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-anson-county`,
  locales: {
    en: `Anson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24877,
  coordinates: [-80.0844735,35.008912],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-anson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-hoke-county`,
  locales: {
    en: `Hoke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54764,
  coordinates: [-79.24694550000001,35.02319],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-hoke-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-duplin-county`,
  locales: {
    en: `Duplin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58856,
  coordinates: [-77.9257305,34.9501105],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-duplin-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-richmond-county`,
  locales: {
    en: `Richmond County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44887,
  coordinates: [-79.76728299999999,34.99408],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-richmond-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-scotland-county`,
  locales: {
    en: `Scotland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34810,
  coordinates: [-79.5119535,34.836764],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-scotland-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-onslow-county`,
  locales: {
    en: `Onslow County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 197683,
  coordinates: [-77.3899735,34.712451],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-onslow-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-robeson-county`,
  locales: {
    en: `Robeson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 131831,
  coordinates: [-79.133749,34.626412],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-robeson-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-bladen-county`,
  locales: {
    en: `Bladen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33190,
  coordinates: [-78.5427315,34.611776500000005],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-bladen-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-pender-county`,
  locales: {
    en: `Pender County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62162,
  coordinates: [-77.894035,34.512526],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-pender-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-columbus-county`,
  locales: {
    en: `Columbus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55655,
  coordinates: [-78.6167595,34.2134885],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-columbus-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-new-hanover-county`,
  locales: {
    en: `New Hanover County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 232274,
  coordinates: [-77.872919,34.15828500000001],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-new-hanover-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-brunswick-county`,
  locales: {
    en: `Brunswick County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 136744,
  coordinates: [-78.292874,34.1056615],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-brunswick-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-iredell-county`,
  locales: {
    en: `Iredell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 178435,
  coordinates: [-80.901307,35.7732565],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-iredell-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-rowan-county`,
  locales: {
    en: `Rowan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 141262,
  coordinates: [-80.47710000000001,35.6830585],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-rowan-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 83770,
  coordinates: [-81.24025,35.484821999999994],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-lincoln-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-mecklenburg-county`,
  locales: {
    en: `Mecklenburg County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1093901,
  coordinates: [-80.804163,35.2583695],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-mecklenburg-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-cabarrus-county`,
  locales: {
    en: `Cabarrus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 211342,
  coordinates: [-80.541589,35.3456055],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-cabarrus-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-north-carolina-gaston-county`,
  locales: {
    en: `Gaston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 222846,
  coordinates: [-81.1896935,35.284431999999995],
  polygon: RegionPolygons[`united-states-of-america-north-carolina-gaston-county`],
  parentId: `united-states-of-america-north-carolina`,
  dataSource: `https://opendata.arcgis.com/datasets/969678bce431494a8f64d7faade6e5b8_0.csv`
}, {
  id: `united-states-of-america-new-jersey-atlantic-county`,
  locales: {
    en: `Atlantic County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 265429,
  coordinates: [-74.6437035,39.509258],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-atlantic-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-bergen-county`,
  locales: {
    en: `Bergen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 936692,
  coordinates: [-74.08225,40.952146],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-bergen-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-burlington-county`,
  locales: {
    en: `Burlington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 445384,
  coordinates: [-74.72494950000001,39.8658955],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-burlington-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-camden-county`,
  locales: {
    en: `Camden County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 507078,
  coordinates: [-74.9381575,39.800549000000004],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-camden-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-cape-may-county`,
  locales: {
    en: `Cape May County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92560,
  coordinates: [-74.756719,39.1261435],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-cape-may-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-essex-county`,
  locales: {
    en: `Essex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 799767,
  coordinates: [-74.24515199999999,40.7914715],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-essex-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-gloucester-county`,
  locales: {
    en: `Gloucester County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 291408,
  coordinates: [-75.15904900000001,39.7016335],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-gloucester-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-hudson-county`,
  locales: {
    en: `Hudson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 676061,
  coordinates: [-74.07540449999999,40.732721999999995],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-hudson-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-hunterdon-county`,
  locales: {
    en: `Hunterdon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 124714,
  coordinates: [-74.9494015,40.5647375],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-hunterdon-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-mercer-county`,
  locales: {
    en: `Mercer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 369811,
  coordinates: [-74.7122715,40.280848500000005],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-mercer-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-monmouth-county`,
  locales: {
    en: `Monmouth County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 621354,
  coordinates: [-74.2928135,40.2778005],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-monmouth-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-ocean-county`,
  locales: {
    en: `Ocean County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 601651,
  coordinates: [-74.29221150000001,39.835446000000005],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-ocean-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-passaic-county`,
  locales: {
    en: `Passaic County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 503310,
  coordinates: [-74.304839,41.0114805],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-passaic-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-somerset-county`,
  locales: {
    en: `Somerset County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 331164,
  coordinates: [-74.5998835,40.566201],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-somerset-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-sussex-county`,
  locales: {
    en: `Sussex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 140799,
  coordinates: [-74.678832,41.128282],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-sussex-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 558067,
  coordinates: [-74.300027,40.665566],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-union-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 105779,
  coordinates: [-74.985897,40.8430415],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-warren-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-morris-county`,
  locales: {
    en: `Morris County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 494228,
  coordinates: [-74.5802275,40.867802999999995],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-morris-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-middlesex-county`,
  locales: {
    en: `Middlesex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 829685,
  coordinates: [-74.41841600000001,40.430130500000004],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-middlesex-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-cumberland-county`,
  locales: {
    en: `Cumberland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 150972,
  coordinates: [-75.135421,39.373098],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-cumberland-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-jersey-salem-county`,
  locales: {
    en: `Salem County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 62607,
  coordinates: [-75.31079349999999,39.5848515],
  polygon: RegionPolygons[`united-states-of-america-new-jersey-salem-county`],
  parentId: `united-states-of-america-new-jersey`,
  dataSource: `https://opendata.arcgis.com/datasets/84737ef7f760486293b6afa536f028e0_0.csv`
}, {
  id: `united-states-of-america-new-york-albany-county`,
  locales: {
    en: `Albany County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 307117,
  coordinates: [-73.9708125,42.613902],
  polygon: RegionPolygons[`united-states-of-america-new-york-albany-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-allegany-county`,
  locales: {
    en: `Allegany County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46430,
  coordinates: [-78.0160695,42.260023000000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-allegany-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-broome-county`,
  locales: {
    en: `Broome County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 191659,
  coordinates: [-75.74488,42.206783],
  polygon: RegionPolygons[`united-states-of-america-new-york-broome-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-chenango-county`,
  locales: {
    en: `Chenango County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47536,
  coordinates: [-75.5928545,42.470226499999995],
  polygon: RegionPolygons[`united-states-of-america-new-york-chenango-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-clinton-county`,
  locales: {
    en: `Clinton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 80695,
  coordinates: [-73.680273,44.7202695],
  polygon: RegionPolygons[`united-states-of-america-new-york-clinton-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-delaware-county`,
  locales: {
    en: `Delaware County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44527,
  coordinates: [-74.92498599999999,42.183063],
  polygon: RegionPolygons[`united-states-of-america-new-york-delaware-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-dutchess-county`,
  locales: {
    en: `Dutchess County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 293718,
  coordinates: [-73.74371099999999,41.7599055],
  polygon: RegionPolygons[`united-states-of-america-new-york-dutchess-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-erie-county`,
  locales: {
    en: `Erie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 919719,
  coordinates: [-78.79997900000001,42.768297000000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-erie-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-essex-county`,
  locales: {
    en: `Essex County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37300,
  coordinates: [-73.8152195,44.1456775],
  polygon: RegionPolygons[`united-states-of-america-new-york-essex-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-fulton-county`,
  locales: {
    en: `Fulton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53591,
  coordinates: [-74.43560049999999,43.135968500000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-fulton-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-genesee-county`,
  locales: {
    en: `Genesee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57511,
  coordinates: [-78.18481299999999,42.998157500000005],
  polygon: RegionPolygons[`united-states-of-america-new-york-genesee-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47491,
  coordinates: [-74.1565635,42.28041],
  polygon: RegionPolygons[`united-states-of-america-new-york-greene-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4434,
  coordinates: [-74.457387,43.667618000000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-hamilton-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-herkimer-county`,
  locales: {
    en: `Herkimer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61833,
  coordinates: [-74.957551,43.460950999999994],
  polygon: RegionPolygons[`united-states-of-america-new-york-herkimer-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 111755,
  coordinates: [-75.906548,44.0357125],
  polygon: RegionPolygons[`united-states-of-america-new-york-jefferson-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 742474,
  coordinates: [-77.684384,43.154810499999996],
  polygon: RegionPolygons[`united-states-of-america-new-york-monroe-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49455,
  coordinates: [-74.4234035,42.910201],
  polygon: RegionPolygons[`united-states-of-america-new-york-montgomery-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-nassau-county`,
  locales: {
    en: `Nassau County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1358343,
  coordinates: [-73.5961185,40.7528025],
  polygon: RegionPolygons[`united-states-of-america-new-york-nassau-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-niagara-county`,
  locales: {
    en: `Niagara County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 210433,
  coordinates: [-78.76754700000001,43.197108],
  polygon: RegionPolygons[`united-states-of-america-new-york-niagara-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-new-york-county`,
  locales: {
    en: `New York County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1628701,
  coordinates: [-73.9771565,40.7808115],
  polygon: RegionPolygons[`united-states-of-america-new-york-new-york-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-oneida-county`,
  locales: {
    en: `Oneida County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 229577,
  coordinates: [-75.4779605,43.239273999999995],
  polygon: RegionPolygons[`united-states-of-america-new-york-oneida-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-onondaga-county`,
  locales: {
    en: `Onondaga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 461809,
  coordinates: [-76.19769550000001,43.021398],
  polygon: RegionPolygons[`united-states-of-america-new-york-onondaga-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-ontario-county`,
  locales: {
    en: `Ontario County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 109864,
  coordinates: [-77.28751,42.808147000000005],
  polygon: RegionPolygons[`united-states-of-america-new-york-ontario-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 381951,
  coordinates: [-74.354217,41.3878105],
  polygon: RegionPolygons[`united-states-of-america-new-york-orange-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 98892,
  coordinates: [-73.7563255,41.4244435],
  polygon: RegionPolygons[`united-states-of-america-new-york-putnam-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-rensselaer-county`,
  locales: {
    en: `Rensselaer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 159442,
  coordinates: [-73.5247755,42.711440499999995],
  polygon: RegionPolygons[`united-states-of-america-new-york-rensselaer-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-rockland-county`,
  locales: {
    en: `Rockland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 325695,
  coordinates: [-74.06082649999999,41.160945],
  polygon: RegionPolygons[`united-states-of-america-new-york-rockland-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-saratoga-county`,
  locales: {
    en: `Saratoga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 230163,
  coordinates: [-73.866721,43.0867325],
  polygon: RegionPolygons[`united-states-of-america-new-york-saratoga-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-schenectady-county`,
  locales: {
    en: `Schenectady County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 155350,
  coordinates: [-74.0573495,42.834184],
  polygon: RegionPolygons[`united-states-of-america-new-york-schenectady-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-schoharie-county`,
  locales: {
    en: `Schoharie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31097,
  coordinates: [-74.438129,42.5922875],
  polygon: RegionPolygons[`united-states-of-america-new-york-schoharie-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-suffolk-county`,
  locales: {
    en: `Suffolk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1481093,
  coordinates: [-72.6766375,40.9499955],
  polygon: RegionPolygons[`united-states-of-america-new-york-suffolk-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-sullivan-county`,
  locales: {
    en: `Sullivan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75498,
  coordinates: [-74.7567505,41.7190175],
  polygon: RegionPolygons[`united-states-of-america-new-york-sullivan-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-tioga-county`,
  locales: {
    en: `Tioga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48560,
  coordinates: [-76.322135,42.2043415],
  polygon: RegionPolygons[`united-states-of-america-new-york-tioga-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-tompkins-county`,
  locales: {
    en: `Tompkins County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102793,
  coordinates: [-76.4683765,42.445197500000006],
  polygon: RegionPolygons[`united-states-of-america-new-york-tompkins-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-ulster-county`,
  locales: {
    en: `Ulster County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 178599,
  coordinates: [-74.345684,41.878800999999996],
  polygon: RegionPolygons[`united-states-of-america-new-york-ulster-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64265,
  coordinates: [-73.82637249999999,43.512905],
  polygon: RegionPolygons[`united-states-of-america-new-york-warren-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61197,
  coordinates: [-73.4390205,43.374883],
  polygon: RegionPolygons[`united-states-of-america-new-york-washington-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 90064,
  coordinates: [-77.0391815,43.178074499999994],
  polygon: RegionPolygons[`united-states-of-america-new-york-wayne-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-westchester-county`,
  locales: {
    en: `Westchester County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 967612,
  coordinates: [-73.7326465,41.122837000000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-westchester-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-wyoming-county`,
  locales: {
    en: `Wyoming County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40085,
  coordinates: [-78.2215535,42.694677],
  polygon: RegionPolygons[`united-states-of-america-new-york-wyoming-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-total-number-of-positive-cases-county`,
  locales: {
    en: `Total Number of Positive Cases County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-new-york-total-number-of-positive-cases-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-bronx-county`,
  locales: {
    en: `Bronx County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1432132,
  coordinates: [-73.849268,40.852098999999995],
  polygon: RegionPolygons[`united-states-of-america-new-york-bronx-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-cattaraugus-county`,
  locales: {
    en: `Cattaraugus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76840,
  coordinates: [-78.6846965,42.268868],
  polygon: RegionPolygons[`united-states-of-america-new-york-cattaraugus-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-cayuga-county`,
  locales: {
    en: `Cayuga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 77145,
  coordinates: [-76.50282200000001,43.0188725],
  polygon: RegionPolygons[`united-states-of-america-new-york-cayuga-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-chautauqua-county`,
  locales: {
    en: `Chautauqua County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 127939,
  coordinates: [-79.4114645,42.283974],
  polygon: RegionPolygons[`united-states-of-america-new-york-chautauqua-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-chemung-county`,
  locales: {
    en: `Chemung County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 84254,
  coordinates: [-76.75111749999999,42.1469525],
  polygon: RegionPolygons[`united-states-of-america-new-york-chemung-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-columbia-county`,
  locales: {
    en: `Columbia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59916,
  coordinates: [-73.6410765,42.243991],
  polygon: RegionPolygons[`united-states-of-america-new-york-columbia-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-cortland-county`,
  locales: {
    en: `Cortland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47823,
  coordinates: [-76.0693465,42.599266],
  polygon: RegionPolygons[`united-states-of-america-new-york-cortland-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50293,
  coordinates: [-74.3179575,44.551286],
  polygon: RegionPolygons[`united-states-of-america-new-york-franklin-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-kings-county`,
  locales: {
    en: `Kings County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2582830,
  coordinates: [-73.9378885,40.6527265],
  polygon: RegionPolygons[`united-states-of-america-new-york-kings-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-lewis-county`,
  locales: {
    en: `Lewis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26447,
  coordinates: [-75.480347,43.8187055],
  polygon: RegionPolygons[`united-states-of-america-new-york-lewis-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-livingston-county`,
  locales: {
    en: `Livingston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 63227,
  coordinates: [-77.77374599999999,42.729794],
  polygon: RegionPolygons[`united-states-of-america-new-york-livingston-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70795,
  coordinates: [-75.61647049999999,42.954504],
  polygon: RegionPolygons[`united-states-of-america-new-york-madison-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-orleans-county`,
  locales: {
    en: `Orleans County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40612,
  coordinates: [-78.23101,43.252562],
  polygon: RegionPolygons[`united-states-of-america-new-york-orleans-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-oswego-county`,
  locales: {
    en: `Oswego County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 117898,
  coordinates: [-76.186661,43.431290000000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-oswego-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-otsego-county`,
  locales: {
    en: `Otsego County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59749,
  coordinates: [-75.022975,42.611257],
  polygon: RegionPolygons[`united-states-of-america-new-york-otsego-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-queens-county`,
  locales: {
    en: `Queens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2278906,
  coordinates: [-73.8316885,40.6741685],
  polygon: RegionPolygons[`united-states-of-america-new-york-queens-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-richmond-county`,
  locales: {
    en: `Richmond County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 476179,
  coordinates: [-74.1546065,40.572351999999995],
  polygon: RegionPolygons[`united-states-of-america-new-york-richmond-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-st-lawrence-county`,
  locales: {
    en: `St. Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 108047,
  coordinates: [-75.1928715,44.533125],
  polygon: RegionPolygons[`united-states-of-america-new-york-st-lawrence-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-schuyler-county`,
  locales: {
    en: `Schuyler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17912,
  coordinates: [-76.863253,42.3902555],
  polygon: RegionPolygons[`united-states-of-america-new-york-schuyler-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-seneca-county`,
  locales: {
    en: `Seneca County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34300,
  coordinates: [-76.7822575,42.782786],
  polygon: RegionPolygons[`united-states-of-america-new-york-seneca-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-steuben-county`,
  locales: {
    en: `Steuben County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 95796,
  coordinates: [-77.35747950000001,42.289595500000004],
  polygon: RegionPolygons[`united-states-of-america-new-york-steuben-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-new-york-yates-county`,
  locales: {
    en: `Yates County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24841,
  coordinates: [-77.1284555,42.611807999999996],
  polygon: RegionPolygons[`united-states-of-america-new-york-yates-county`],
  parentId: `united-states-of-america-new-york`,
  dataSource: `https://coronavirus.health.ny.gov/county-county-breakdown-positive-cases`
}, {
  id: `united-states-of-america-ohio-ashland-county`,
  locales: {
    en: `Ashland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53745,
  coordinates: [-82.280962,40.810381],
  polygon: RegionPolygons[`united-states-of-america-ohio-ashland-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-belmont-county`,
  locales: {
    en: `Belmont County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 67505,
  coordinates: [-80.970149,40.011337999999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-belmont-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-butler-county`,
  locales: {
    en: `Butler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 382378,
  coordinates: [-84.5757445,39.441655499999996],
  polygon: RegionPolygons[`united-states-of-america-ohio-butler-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-clark-county`,
  locales: {
    en: `Clark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 134585,
  coordinates: [-83.7818345,39.90448],
  polygon: RegionPolygons[`united-states-of-america-ohio-clark-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-coshocton-county`,
  locales: {
    en: `Coshocton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36629,
  coordinates: [-81.9059705,40.303628],
  polygon: RegionPolygons[`united-states-of-america-ohio-coshocton-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-cuyahoga-county`,
  locales: {
    en: `Cuyahoga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1243857,
  coordinates: [-81.67301699999999,41.453196000000005],
  polygon: RegionPolygons[`united-states-of-america-ohio-cuyahoga-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-darke-county`,
  locales: {
    en: `Darke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51323,
  coordinates: [-84.6191565,40.135587],
  polygon: RegionPolygons[`united-states-of-america-ohio-darke-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-delaware-county`,
  locales: {
    en: `Delaware County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 204826,
  coordinates: [-82.99676299999999,40.284922],
  polygon: RegionPolygons[`united-states-of-america-ohio-delaware-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1310300,
  coordinates: [-83.010875,39.9690415],
  polygon: RegionPolygons[`united-states-of-america-ohio-franklin-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-geauga-county`,
  locales: {
    en: `Geauga County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 94031,
  coordinates: [-81.19737699999999,41.5314985],
  polygon: RegionPolygons[`united-states-of-america-ohio-geauga-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 816684,
  coordinates: [-84.539795,39.1670115],
  polygon: RegionPolygons[`united-states-of-america-ohio-hamilton-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-huron-county`,
  locales: {
    en: `Huron County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58504,
  coordinates: [-82.5889855,41.1414835],
  polygon: RegionPolygons[`united-states-of-america-ohio-huron-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 230514,
  coordinates: [-81.2455255,41.712312],
  polygon: RegionPolygons[`united-states-of-america-ohio-lake-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-lorain-county`,
  locales: {
    en: `Lorain County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 309461,
  coordinates: [-82.112518,41.289587999999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-lorain-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-lucas-county`,
  locales: {
    en: `Lucas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 429899,
  coordinates: [-83.5244735,41.573549],
  polygon: RegionPolygons[`united-states-of-america-ohio-lucas-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-mahoning-county`,
  locales: {
    en: `Mahoning County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 229642,
  coordinates: [-80.80287200000001,41.0170235],
  polygon: RegionPolygons[`united-states-of-america-ohio-mahoning-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-medina-county`,
  locales: {
    en: `Medina County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 179146,
  coordinates: [-81.92915450000001,41.132868],
  polygon: RegionPolygons[`united-states-of-america-ohio-medina-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-miami-county`,
  locales: {
    en: `Miami County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 106222,
  coordinates: [-84.2296255,40.0399055],
  polygon: RegionPolygons[`united-states-of-america-ohio-miami-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 532331,
  coordinates: [-84.268203,39.750476500000005],
  polygon: RegionPolygons[`united-states-of-america-ohio-montgomery-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-richland-county`,
  locales: {
    en: `Richland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 121099,
  coordinates: [-82.532063,40.772758499999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-richland-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-stark-county`,
  locales: {
    en: `Stark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 371574,
  coordinates: [-81.3683635,40.811817000000005],
  polygon: RegionPolygons[`united-states-of-america-ohio-stark-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-summit-county`,
  locales: {
    en: `Summit County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 541918,
  coordinates: [-81.5400925,41.1288115],
  polygon: RegionPolygons[`united-states-of-america-ohio-summit-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-trumbull-county`,
  locales: {
    en: `Trumbull County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 198627,
  coordinates: [-80.76100600000001,41.3175365],
  polygon: RegionPolygons[`united-states-of-america-ohio-trumbull-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-tuscarawas-county`,
  locales: {
    en: `Tuscarawas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92176,
  coordinates: [-81.488516,40.440586499999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-tuscarawas-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27724,
  coordinates: [-83.48643200000001,38.825892499999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-adams-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-allen-county`,
  locales: {
    en: `Allen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102663,
  coordinates: [-84.13871850000001,40.781749],
  polygon: RegionPolygons[`united-states-of-america-ohio-allen-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-ashtabula-county`,
  locales: {
    en: `Ashtabula County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 97493,
  coordinates: [-80.76196,41.7387235],
  polygon: RegionPolygons[`united-states-of-america-ohio-ashtabula-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-athens-county`,
  locales: {
    en: `Athens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65818,
  coordinates: [-82.010142,39.368549],
  polygon: RegionPolygons[`united-states-of-america-ohio-athens-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-auglaize-county`,
  locales: {
    en: `Auglaize County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45804,
  coordinates: [-84.168056,40.5202455],
  polygon: RegionPolygons[`united-states-of-america-ohio-auglaize-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-brown-county`,
  locales: {
    en: `Brown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43602,
  coordinates: [-83.8628515,38.946998],
  polygon: RegionPolygons[`united-states-of-america-ohio-brown-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27081,
  coordinates: [-81.0912405,40.576936],
  polygon: RegionPolygons[`united-states-of-america-ohio-carroll-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-champaign-county`,
  locales: {
    en: `Champaign County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38754,
  coordinates: [-83.7652835,40.1418235],
  polygon: RegionPolygons[`united-states-of-america-ohio-champaign-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-clermont-county`,
  locales: {
    en: `Clermont County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 205466,
  coordinates: [-84.15652800000001,39.0206355],
  polygon: RegionPolygons[`united-states-of-america-ohio-clermont-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-clinton-county`,
  locales: {
    en: `Clinton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42057,
  coordinates: [-83.791534,39.3961065],
  polygon: RegionPolygons[`united-states-of-america-ohio-clinton-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-columbiana-county`,
  locales: {
    en: `Columbiana County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 102665,
  coordinates: [-80.80314,40.756341],
  polygon: RegionPolygons[`united-states-of-america-ohio-columbiana-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-crawford-county`,
  locales: {
    en: `Crawford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41550,
  coordinates: [-82.9187645,40.849769499999994],
  polygon: RegionPolygons[`united-states-of-america-ohio-crawford-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-defiance-county`,
  locales: {
    en: `Defiance County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38165,
  coordinates: [-84.5161775,41.296667],
  polygon: RegionPolygons[`united-states-of-america-ohio-defiance-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-erie-county`,
  locales: {
    en: `Erie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 74615,
  coordinates: [-82.647625,41.451591500000006],
  polygon: RegionPolygons[`united-states-of-america-ohio-erie-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-fairfield-county`,
  locales: {
    en: `Fairfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 155782,
  coordinates: [-82.604502,39.7478035],
  polygon: RegionPolygons[`united-states-of-america-ohio-fairfield-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28666,
  coordinates: [-83.46131550000001,39.547146],
  polygon: RegionPolygons[`united-states-of-america-ohio-fayette-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-fulton-county`,
  locales: {
    en: `Fulton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42276,
  coordinates: [-84.1384575,41.602804],
  polygon: RegionPolygons[`united-states-of-america-ohio-fulton-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-gallia-county`,
  locales: {
    en: `Gallia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29979,
  coordinates: [-82.33907400000001,38.808833500000006],
  polygon: RegionPolygons[`united-states-of-america-ohio-gallia-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 167995,
  coordinates: [-83.8804025,39.700356],
  polygon: RegionPolygons[`united-states-of-america-ohio-greene-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-guernsey-county`,
  locales: {
    en: `Guernsey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39022,
  coordinates: [-81.47726750000001,40.030786],
  polygon: RegionPolygons[`united-states-of-america-ohio-guernsey-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-hancock-county`,
  locales: {
    en: `Hancock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75930,
  coordinates: [-83.650734,40.9933325],
  polygon: RegionPolygons[`united-states-of-america-ohio-hancock-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-hardin-county`,
  locales: {
    en: `Hardin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31480,
  coordinates: [-83.6477485,40.661998],
  polygon: RegionPolygons[`united-states-of-america-ohio-hardin-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-harrison-county`,
  locales: {
    en: `Harrison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15174,
  coordinates: [-81.10253449999999,40.296490500000004],
  polygon: RegionPolygons[`united-states-of-america-ohio-harrison-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-henry-county`,
  locales: {
    en: `Henry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27086,
  coordinates: [-84.1115255,41.326702499999996],
  polygon: RegionPolygons[`united-states-of-america-ohio-henry-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-highland-county`,
  locales: {
    en: `Highland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43058,
  coordinates: [-83.60897750000001,39.198813],
  polygon: RegionPolygons[`united-states-of-america-ohio-highland-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-hocking-county`,
  locales: {
    en: `Hocking County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28385,
  coordinates: [-82.45387600000001,39.511635],
  polygon: RegionPolygons[`united-states-of-america-ohio-hocking-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-holmes-county`,
  locales: {
    en: `Holmes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43892,
  coordinates: [-81.934932,40.5560475],
  polygon: RegionPolygons[`united-states-of-america-ohio-holmes-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32384,
  coordinates: [-82.6158835,39.0262225],
  polygon: RegionPolygons[`united-states-of-america-ohio-jackson-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65767,
  coordinates: [-80.76835249999999,40.3772575],
  polygon: RegionPolygons[`united-states-of-america-ohio-jefferson-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-knox-county`,
  locales: {
    en: `Knox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61893,
  coordinates: [-82.46490800000001,40.4060915],
  polygon: RegionPolygons[`united-states-of-america-ohio-knox-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59866,
  coordinates: [-82.551557,38.6261375],
  polygon: RegionPolygons[`united-states-of-america-ohio-lawrence-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-licking-county`,
  locales: {
    en: `Licking County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 175769,
  coordinates: [-82.482659,40.095128],
  polygon: RegionPolygons[`united-states-of-america-ohio-licking-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-logan-county`,
  locales: {
    en: `Logan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45358,
  coordinates: [-83.76739950000001,40.384039],
  polygon: RegionPolygons[`united-states-of-america-ohio-logan-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 44413,
  coordinates: [-83.4298015,39.903453],
  polygon: RegionPolygons[`united-states-of-america-ohio-madison-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65256,
  coordinates: [-83.139069,40.569407],
  polygon: RegionPolygons[`united-states-of-america-ohio-marion-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-meigs-county`,
  locales: {
    en: `Meigs County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23106,
  coordinates: [-82.0330235,39.0396815],
  polygon: RegionPolygons[`united-states-of-america-ohio-meigs-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-mercer-county`,
  locales: {
    en: `Mercer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40959,
  coordinates: [-84.618068,40.540035],
  polygon: RegionPolygons[`united-states-of-america-ohio-mercer-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13790,
  coordinates: [-81.070202,39.704759499999994],
  polygon: RegionPolygons[`united-states-of-america-ohio-monroe-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14604,
  coordinates: [-81.833178,39.610066],
  polygon: RegionPolygons[`united-states-of-america-ohio-morgan-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-morrow-county`,
  locales: {
    en: `Morrow County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35112,
  coordinates: [-82.822844,40.5287485],
  polygon: RegionPolygons[`united-states-of-america-ohio-morrow-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-muskingum-county`,
  locales: {
    en: `Muskingum County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 86183,
  coordinates: [-81.96253899999999,39.961225999999996],
  polygon: RegionPolygons[`united-states-of-america-ohio-muskingum-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-noble-county`,
  locales: {
    en: `Noble County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14354,
  coordinates: [-81.46574749999999,39.767294],
  polygon: RegionPolygons[`united-states-of-america-ohio-noble-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-ottawa-county`,
  locales: {
    en: `Ottawa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40769,
  coordinates: [-83.0553205,41.5910285],
  polygon: RegionPolygons[`united-states-of-america-ohio-ottawa-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-paulding-county`,
  locales: {
    en: `Paulding County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18760,
  coordinates: [-84.57269099999999,41.1214295],
  polygon: RegionPolygons[`united-states-of-america-ohio-paulding-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36033,
  coordinates: [-82.2483105,39.7402985],
  polygon: RegionPolygons[`united-states-of-america-ohio-perry-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-pickaway-county`,
  locales: {
    en: `Pickaway County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58086,
  coordinates: [-82.9991275,39.640426500000004],
  polygon: RegionPolygons[`united-states-of-america-ohio-pickaway-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-pike-county`,
  locales: {
    en: `Pike County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28067,
  coordinates: [-83.08576400000001,39.072829],
  polygon: RegionPolygons[`united-states-of-america-ohio-pike-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-portage-county`,
  locales: {
    en: `Portage County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 162927,
  coordinates: [-81.197562,41.1680275],
  polygon: RegionPolygons[`united-states-of-america-ohio-portage-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-preble-county`,
  locales: {
    en: `Preble County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40997,
  coordinates: [-84.6470415,39.7425475],
  polygon: RegionPolygons[`united-states-of-america-ohio-preble-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33780,
  coordinates: [-84.13995449999999,41.013461500000005],
  polygon: RegionPolygons[`united-states-of-america-ohio-putnam-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-ross-county`,
  locales: {
    en: `Ross County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76931,
  coordinates: [-83.0672615,39.342008500000006],
  polygon: RegionPolygons[`united-states-of-america-ohio-ross-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-sandusky-county`,
  locales: {
    en: `Sandusky County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58799,
  coordinates: [-83.129965,41.3771395],
  polygon: RegionPolygons[`united-states-of-america-ohio-sandusky-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-scioto-county`,
  locales: {
    en: `Scioto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 75502,
  coordinates: [-82.96042800000001,38.793262],
  polygon: RegionPolygons[`united-states-of-america-ohio-scioto-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-seneca-county`,
  locales: {
    en: `Seneca County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55207,
  coordinates: [-83.125283,41.124142500000005],
  polygon: RegionPolygons[`united-states-of-america-ohio-seneca-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 48627,
  coordinates: [-84.2185015,40.333529999999996],
  polygon: RegionPolygons[`united-states-of-america-ohio-shelby-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57835,
  coordinates: [-83.3606595,40.306980499999995],
  polygon: RegionPolygons[`united-states-of-america-ohio-union-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-van-wert-county`,
  locales: {
    en: `Van Wert County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28281,
  coordinates: [-84.571707,40.8375885],
  polygon: RegionPolygons[`united-states-of-america-ohio-van-wert-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-vinton-county`,
  locales: {
    en: `Vinton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13139,
  coordinates: [-82.5115675,39.2117205],
  polygon: RegionPolygons[`united-states-of-america-ohio-vinton-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 232173,
  coordinates: [-84.1711185,39.4222805],
  polygon: RegionPolygons[`united-states-of-america-ohio-warren-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 60155,
  coordinates: [-81.4452295,39.430905499999994],
  polygon: RegionPolygons[`united-states-of-america-ohio-washington-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 115967,
  coordinates: [-81.88851149999999,40.829962],
  polygon: RegionPolygons[`united-states-of-america-ohio-wayne-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-williams-county`,
  locales: {
    en: `Williams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36804,
  coordinates: [-84.573937,41.565951999999996],
  polygon: RegionPolygons[`united-states-of-america-ohio-williams-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-wood-county`,
  locales: {
    en: `Wood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 130696,
  coordinates: [-83.64893000000001,41.3923445],
  polygon: RegionPolygons[`united-states-of-america-ohio-wood-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-ohio-wyandot-county`,
  locales: {
    en: `Wyandot County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21935,
  coordinates: [-83.31362150000001,40.840135000000004],
  polygon: RegionPolygons[`united-states-of-america-ohio-wyandot-county`],
  parentId: `united-states-of-america-ohio`,
  dataSource: `https://coronavirus.ohio.gov/wps/portal/gov/covid-19/`
}, {
  id: `united-states-of-america-oregon-benton-county`,
  locales: {
    en: `Benton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92101,
  coordinates: [-123.44528700000001,44.498886],
  polygon: RegionPolygons[`united-states-of-america-oregon-benton-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-clackamas-county`,
  locales: {
    en: `Clackamas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 416075,
  coordinates: [-122.26009400000001,45.1737],
  polygon: RegionPolygons[`united-states-of-america-oregon-clackamas-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-deschutes-county`,
  locales: {
    en: `Deschutes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 191996,
  coordinates: [-120.94952,44.001645499999995],
  polygon: RegionPolygons[`united-states-of-america-oregon-deschutes-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-douglas-county`,
  locales: {
    en: `Douglas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 110283,
  coordinates: [-123.0963585,43.3222345],
  polygon: RegionPolygons[`united-states-of-america-oregon-douglas-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 219564,
  coordinates: [-122.756742,42.4995805],
  polygon: RegionPolygons[`united-states-of-america-oregon-jackson-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-klamath-county`,
  locales: {
    en: `Klamath County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 67653,
  coordinates: [-121.58491599999999,42.804975999999996],
  polygon: RegionPolygons[`united-states-of-america-oregon-klamath-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-lane-county`,
  locales: {
    en: `Lane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 379611,
  coordinates: [-122.963617,43.863845],
  polygon: RegionPolygons[`united-states-of-america-oregon-lane-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-linn-county`,
  locales: {
    en: `Linn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 127335,
  coordinates: [-122.5272075,44.496468],
  polygon: RegionPolygons[`united-states-of-america-oregon-linn-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 346868,
  coordinates: [-122.4575375,44.984239],
  polygon: RegionPolygons[`united-states-of-america-oregon-marion-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-multnomah-county`,
  locales: {
    en: `Multnomah County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 811880,
  coordinates: [-122.374808,45.580658],
  polygon: RegionPolygons[`united-states-of-america-oregon-multnomah-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 85234,
  coordinates: [-123.38289850000001,44.8977695],
  polygon: RegionPolygons[`united-states-of-america-oregon-polk-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-umatilla-county`,
  locales: {
    en: `Umatilla County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 77516,
  coordinates: [-118.7037805,45.4984405],
  polygon: RegionPolygons[`united-states-of-america-oregon-umatilla-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 597695,
  coordinates: [-123.114875,45.5483985],
  polygon: RegionPolygons[`united-states-of-america-oregon-washington-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-yamhill-county`,
  locales: {
    en: `Yamhill County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 107002,
  coordinates: [-123.31725850000001,45.254474],
  polygon: RegionPolygons[`united-states-of-america-oregon-yamhill-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-baker-county`,
  locales: {
    en: `Baker County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16006,
  coordinates: [-117.6514835,44.6679445],
  polygon: RegionPolygons[`united-states-of-america-oregon-baker-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-clatsop-county`,
  locales: {
    en: `Clatsop County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39764,
  coordinates: [-123.69131949999999,46.022076999999996],
  polygon: RegionPolygons[`united-states-of-america-oregon-clatsop-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-columbia-county`,
  locales: {
    en: `Columbia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 52377,
  coordinates: [-123.06307100000001,45.955202],
  polygon: RegionPolygons[`united-states-of-america-oregon-columbia-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-coos-county`,
  locales: {
    en: `Coos County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64389,
  coordinates: [-124.0906665,43.1387565],
  polygon: RegionPolygons[`united-states-of-america-oregon-coos-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-crook-county`,
  locales: {
    en: `Crook County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23867,
  coordinates: [-120.381763,44.130719],
  polygon: RegionPolygons[`united-states-of-america-oregon-crook-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-curry-county`,
  locales: {
    en: `Curry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22813,
  coordinates: [-124.1343155,42.4752215],
  polygon: RegionPolygons[`united-states-of-america-oregon-curry-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-gilliam-county`,
  locales: {
    en: `Gilliam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1894,
  coordinates: [-120.206842,45.4390695],
  polygon: RegionPolygons[`united-states-of-america-oregon-gilliam-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-grant-county`,
  locales: {
    en: `Grant County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7176,
  coordinates: [-118.94781950000001,44.477098],
  polygon: RegionPolygons[`united-states-of-america-oregon-grant-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-harney-county`,
  locales: {
    en: `Harney County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7329,
  coordinates: [-119.0696245,43.019735999999995],
  polygon: RegionPolygons[`united-states-of-america-oregon-harney-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-hood-river-county`,
  locales: {
    en: `Hood River County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23428,
  coordinates: [-121.68142399999999,45.492278999999996],
  polygon: RegionPolygons[`united-states-of-america-oregon-hood-river-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24192,
  coordinates: [-121.110097,44.607842500000004],
  polygon: RegionPolygons[`united-states-of-america-oregon-jefferson-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-josephine-county`,
  locales: {
    en: `Josephine County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 87393,
  coordinates: [-123.63368449999999,42.389664999999994],
  polygon: RegionPolygons[`united-states-of-america-oregon-josephine-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7879,
  coordinates: [-120.3546415,42.8053175],
  polygon: RegionPolygons[`united-states-of-america-oregon-lake-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49388,
  coordinates: [-123.85653049999999,44.660618],
  polygon: RegionPolygons[`united-states-of-america-oregon-lincoln-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-malheur-county`,
  locales: {
    en: `Malheur County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30725,
  coordinates: [-117.56311149999999,43.220727999999994],
  polygon: RegionPolygons[`united-states-of-america-oregon-malheur-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-morrow-county`,
  locales: {
    en: `Morrow County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11372,
  coordinates: [-119.576055,45.45994],
  polygon: RegionPolygons[`united-states-of-america-oregon-morrow-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-sherman-county`,
  locales: {
    en: `Sherman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1708,
  coordinates: [-120.69385299999999,45.4100935],
  polygon: RegionPolygons[`united-states-of-america-oregon-sherman-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-tillamook-county`,
  locales: {
    en: `Tillamook County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26787,
  coordinates: [-123.658578,45.4136565],
  polygon: RegionPolygons[`united-states-of-america-oregon-tillamook-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26461,
  coordinates: [-117.98212799999999,45.409634],
  polygon: RegionPolygons[`united-states-of-america-oregon-union-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-wallowa-county`,
  locales: {
    en: `Wallowa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7081,
  coordinates: [-117.2206355,45.539874999999995],
  polygon: RegionPolygons[`united-states-of-america-oregon-wallowa-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-wasco-county`,
  locales: {
    en: `Wasco County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26505,
  coordinates: [-121.0882365,45.2632585],
  polygon: RegionPolygons[`united-states-of-america-oregon-wasco-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-oregon-wheeler-county`,
  locales: {
    en: `Wheeler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1366,
  coordinates: [-120.0736875,44.687605500000004],
  polygon: RegionPolygons[`united-states-of-america-oregon-wheeler-county`],
  parentId: `united-states-of-america-oregon`,
  dataSource: `https://www.oregon.gov/oha/PH/DISEASESCONDITIONS/DISEASESAZ/Pages/emerging-respiratory-infections.aspx`
}, {
  id: `united-states-of-america-pennsylvania-adams`,
  locales: {
    en: `Adams`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-adams`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-allegheny`,
  locales: {
    en: `Allegheny`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-allegheny`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-beaver`,
  locales: {
    en: `Beaver`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-beaver`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-berks`,
  locales: {
    en: `Berks`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-berks`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-bucks`,
  locales: {
    en: `Bucks`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-bucks`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-chester`,
  locales: {
    en: `Chester`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-chester`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-cumberland`,
  locales: {
    en: `Cumberland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-cumberland`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-delaware`,
  locales: {
    en: `Delaware`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-delaware`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-lackawanna`,
  locales: {
    en: `Lackawanna`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-lackawanna`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-lancaster`,
  locales: {
    en: `Lancaster`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-lancaster`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-lebanon`,
  locales: {
    en: `Lebanon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-lebanon`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-lehigh`,
  locales: {
    en: `Lehigh`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-lehigh`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-luzerne`,
  locales: {
    en: `Luzerne`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-luzerne`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-monroe`,
  locales: {
    en: `Monroe`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-monroe`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-montgomery`,
  locales: {
    en: `Montgomery`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-montgomery`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-northampton`,
  locales: {
    en: `Northampton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-northampton`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-philadelphia`,
  locales: {
    en: `Philadelphia`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-philadelphia`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-pike`,
  locales: {
    en: `Pike`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-pike`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-washington`,
  locales: {
    en: `Washington`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-washington`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-wayne`,
  locales: {
    en: `Wayne`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-wayne`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-westmoreland`,
  locales: {
    en: `Westmoreland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-westmoreland`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-york`,
  locales: {
    en: `York`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-york`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-tennessee-campbell-county`,
  locales: {
    en: `Campbell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39583,
  coordinates: [-84.138375,36.3848795],
  polygon: RegionPolygons[`united-states-of-america-tennessee-campbell-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-cheatham-county`,
  locales: {
    en: `Cheatham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40439,
  coordinates: [-87.0963775,36.248385999999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-cheatham-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-cumberland-county`,
  locales: {
    en: `Cumberland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 59673,
  coordinates: [-84.974996,35.9586935],
  polygon: RegionPolygons[`united-states-of-america-tennessee-cumberland-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-davidson-county`,
  locales: {
    en: `Davidson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 692587,
  coordinates: [-86.7851325,36.186859999999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-davidson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-dyer-county`,
  locales: {
    en: `Dyer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37320,
  coordinates: [-89.4437795,36.0468635],
  polygon: RegionPolygons[`united-states-of-america-tennessee-dyer-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 364286,
  coordinates: [-85.20821749999999,35.2208105],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hamilton-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54012,
  coordinates: [-83.47225449999999,36.039116],
  polygon: RegionPolygons[`united-states-of-america-tennessee-jefferson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-knox-county`,
  locales: {
    en: `Knox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 465289,
  coordinates: [-83.96127200000001,35.9910705],
  polygon: RegionPolygons[`united-states-of-america-tennessee-knox-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 205950,
  coordinates: [-87.3780645,36.477428],
  polygon: RegionPolygons[`united-states-of-america-tennessee-montgomery-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-robertson-county`,
  locales: {
    en: `Robertson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 71012,
  coordinates: [-86.8573125,36.501744],
  polygon: RegionPolygons[`united-states-of-america-tennessee-robertson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-rutherford-county`,
  locales: {
    en: `Rutherford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 324890,
  coordinates: [-86.4205235,35.8595905],
  polygon: RegionPolygons[`united-states-of-america-tennessee-rutherford-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-sevier-county`,
  locales: {
    en: `Sevier County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 97892,
  coordinates: [-83.5242525,35.8029015],
  polygon: RegionPolygons[`united-states-of-america-tennessee-sevier-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 935764,
  coordinates: [-89.97153700000001,35.2013885],
  polygon: RegionPolygons[`united-states-of-america-tennessee-shelby-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-sullivan-county`,
  locales: {
    en: `Sullivan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 157668,
  coordinates: [-82.2645105,36.5043],
  polygon: RegionPolygons[`united-states-of-america-tennessee-sullivan-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-sumner-county`,
  locales: {
    en: `Sumner County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 187149,
  coordinates: [-86.4801315,36.448775],
  polygon: RegionPolygons[`united-states-of-america-tennessee-sumner-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-williamson-county`,
  locales: {
    en: `Williamson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 231729,
  coordinates: [-86.90776349999999,35.875785500000006],
  polygon: RegionPolygons[`united-states-of-america-tennessee-williamson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-wilson-county`,
  locales: {
    en: `Wilson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 140625,
  coordinates: [-86.30456749999999,36.156231000000005],
  polygon: RegionPolygons[`united-states-of-america-tennessee-wilson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-residents-of-other-states/countries-county`,
  locales: {
    en: `Residents of Other States/Countries County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-tennessee-residents-of-other-states/countries-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-unknown-county`,
  locales: {
    en: `Unknown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-tennessee-unknown-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-grand-total-county`,
  locales: {
    en: `Grand Total County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-tennessee-grand-total-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-anderson-county`,
  locales: {
    en: `Anderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76482,
  coordinates: [-84.19537249999999,36.105972],
  polygon: RegionPolygons[`united-states-of-america-tennessee-anderson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-bedford-county`,
  locales: {
    en: `Bedford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49038,
  coordinates: [-86.450065,35.510414],
  polygon: RegionPolygons[`united-states-of-america-tennessee-bedford-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-benton-county`,
  locales: {
    en: `Benton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16184,
  coordinates: [-88.070504,36.085577],
  polygon: RegionPolygons[`united-states-of-america-tennessee-benton-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-bledsoe-county`,
  locales: {
    en: `Bledsoe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14755,
  coordinates: [-85.176131,35.563023],
  polygon: RegionPolygons[`united-states-of-america-tennessee-bledsoe-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-blount-county`,
  locales: {
    en: `Blount County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 131349,
  coordinates: [-83.9255665,35.67388],
  polygon: RegionPolygons[`united-states-of-america-tennessee-blount-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-bradley-county`,
  locales: {
    en: `Bradley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 106727,
  coordinates: [-84.861838,35.1688215],
  polygon: RegionPolygons[`united-states-of-america-tennessee-bradley-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-cannon-county`,
  locales: {
    en: `Cannon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14462,
  coordinates: [-86.046538,35.805896000000004],
  polygon: RegionPolygons[`united-states-of-america-tennessee-cannon-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-carroll-county`,
  locales: {
    en: `Carroll County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28020,
  coordinates: [-88.442335,35.9704635],
  polygon: RegionPolygons[`united-states-of-america-tennessee-carroll-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-carter-county`,
  locales: {
    en: `Carter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 56351,
  coordinates: [-82.136727,36.307515499999994],
  polygon: RegionPolygons[`united-states-of-america-tennessee-carter-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-chester-county`,
  locales: {
    en: `Chester County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17276,
  coordinates: [-88.5969005,35.41781949999999],
  polygon: RegionPolygons[`united-states-of-america-tennessee-chester-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-claiborne-county`,
  locales: {
    en: `Claiborne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31756,
  coordinates: [-83.678506,36.467748],
  polygon: RegionPolygons[`united-states-of-america-tennessee-claiborne-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7717,
  coordinates: [-85.540471,36.5147925],
  polygon: RegionPolygons[`united-states-of-america-tennessee-clay-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-cocke-county`,
  locales: {
    en: `Cocke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35774,
  coordinates: [-83.10464400000001,35.9472425],
  polygon: RegionPolygons[`united-states-of-america-tennessee-cocke-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-coffee-county`,
  locales: {
    en: `Coffee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 55700,
  coordinates: [-86.0748085,35.496489499999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-coffee-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-crockett-county`,
  locales: {
    en: `Crockett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14328,
  coordinates: [-89.12448549999999,35.8355555],
  polygon: RegionPolygons[`united-states-of-america-tennessee-crockett-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-decatur-county`,
  locales: {
    en: `Decatur County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11706,
  coordinates: [-88.109362,35.6147395],
  polygon: RegionPolygons[`united-states-of-america-tennessee-decatur-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-dekalb-county`,
  locales: {
    en: `DeKalb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20138,
  coordinates: [-85.8460775,35.9797435],
  polygon: RegionPolygons[`united-states-of-america-tennessee-dekalb-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-dickson-county`,
  locales: {
    en: `Dickson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53446,
  coordinates: [-87.353065,36.146949500000005],
  polygon: RegionPolygons[`united-states-of-america-tennessee-dickson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40507,
  coordinates: [-89.414113,35.1992625],
  polygon: RegionPolygons[`united-states-of-america-tennessee-fayette-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-fentress-county`,
  locales: {
    en: `Fentress County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18217,
  coordinates: [-84.8906635,36.356210000000004],
  polygon: RegionPolygons[`united-states-of-america-tennessee-fentress-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41890,
  coordinates: [-86.09834000000001,35.175493],
  polygon: RegionPolygons[`united-states-of-america-tennessee-franklin-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-gibson-county`,
  locales: {
    en: `Gibson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49045,
  coordinates: [-88.949476,36.0069545],
  polygon: RegionPolygons[`united-states-of-america-tennessee-gibson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-giles-county`,
  locales: {
    en: `Giles County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29503,
  coordinates: [-87.03017750000001,35.2238915],
  polygon: RegionPolygons[`united-states-of-america-tennessee-giles-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-grainger-county`,
  locales: {
    en: `Grainger County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23145,
  coordinates: [-83.493998,36.250454500000004],
  polygon: RegionPolygons[`united-states-of-america-tennessee-grainger-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-greene-county`,
  locales: {
    en: `Greene County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 69087,
  coordinates: [-82.8748425,36.1703105],
  polygon: RegionPolygons[`united-states-of-america-tennessee-greene-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-grundy-county`,
  locales: {
    en: `Grundy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13346,
  coordinates: [-85.69960750000001,35.373473],
  polygon: RegionPolygons[`united-states-of-america-tennessee-grundy-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hamblen-county`,
  locales: {
    en: `Hamblen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64569,
  coordinates: [-83.2747045,36.215193],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hamblen-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hancock-county`,
  locales: {
    en: `Hancock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6549,
  coordinates: [-83.15127050000001,36.496438],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hancock-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hardeman-county`,
  locales: {
    en: `Hardeman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25220,
  coordinates: [-88.990028,35.213371],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hardeman-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hardin-county`,
  locales: {
    en: `Hardin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25776,
  coordinates: [-88.18104650000001,35.209362999999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hardin-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hawkins-county`,
  locales: {
    en: `Hawkins County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 56530,
  coordinates: [-82.9444425,36.418015499999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hawkins-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-haywood-county`,
  locales: {
    en: `Haywood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17335,
  coordinates: [-89.285831,35.6098915],
  polygon: RegionPolygons[`united-states-of-america-tennessee-haywood-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-henderson-county`,
  locales: {
    en: `Henderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27847,
  coordinates: [-88.396394,35.620664500000004],
  polygon: RegionPolygons[`united-states-of-america-tennessee-henderson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-henry-county`,
  locales: {
    en: `Henry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32358,
  coordinates: [-88.260633,36.310897999999995],
  polygon: RegionPolygons[`united-states-of-america-tennessee-henry-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-hickman-county`,
  locales: {
    en: `Hickman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25063,
  coordinates: [-87.472921,35.8012115],
  polygon: RegionPolygons[`united-states-of-america-tennessee-hickman-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-houston-county`,
  locales: {
    en: `Houston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8263,
  coordinates: [-87.7471365,36.2730485],
  polygon: RegionPolygons[`united-states-of-america-tennessee-houston-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-humphreys-county`,
  locales: {
    en: `Humphreys County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18486,
  coordinates: [-87.77744150000001,36.0242765],
  polygon: RegionPolygons[`united-states-of-america-tennessee-humphreys-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11758,
  coordinates: [-85.6702415,36.362216000000004],
  polygon: RegionPolygons[`united-states-of-america-tennessee-jackson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-johnson-county`,
  locales: {
    en: `Johnson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17778,
  coordinates: [-81.8506225,36.439548],
  polygon: RegionPolygons[`united-states-of-america-tennessee-johnson-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-lake-county`,
  locales: {
    en: `Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7411,
  coordinates: [-89.5228515,36.344296],
  polygon: RegionPolygons[`united-states-of-america-tennessee-lake-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-lauderdale-county`,
  locales: {
    en: `Lauderdale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25825,
  coordinates: [-89.6508555,35.742849500000005],
  polygon: RegionPolygons[`united-states-of-america-tennessee-lauderdale-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-lawrence-county`,
  locales: {
    en: `Lawrence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43734,
  coordinates: [-87.404642,35.2285855],
  polygon: RegionPolygons[`united-states-of-america-tennessee-lawrence-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-lewis-county`,
  locales: {
    en: `Lewis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12086,
  coordinates: [-87.4934955,35.528649],
  polygon: RegionPolygons[`united-states-of-america-tennessee-lewis-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34117,
  coordinates: [-86.577237,35.18083],
  polygon: RegionPolygons[`united-states-of-america-tennessee-lincoln-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-loudon-county`,
  locales: {
    en: `Loudon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53054,
  coordinates: [-84.358772,35.756434],
  polygon: RegionPolygons[`united-states-of-america-tennessee-loudon-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-macon-county`,
  locales: {
    en: `Macon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24265,
  coordinates: [-86.0086685,36.5258095],
  polygon: RegionPolygons[`united-states-of-america-tennessee-macon-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 97605,
  coordinates: [-88.84286900000001,35.612393499999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-madison-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28575,
  coordinates: [-85.61749549999999,35.1511775],
  polygon: RegionPolygons[`united-states-of-america-tennessee-marion-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-marshall-county`,
  locales: {
    en: `Marshall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33683,
  coordinates: [-86.780141,35.4814645],
  polygon: RegionPolygons[`united-states-of-america-tennessee-marshall-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-maury-county`,
  locales: {
    en: `Maury County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 94340,
  coordinates: [-87.067635,35.629413],
  polygon: RegionPolygons[`united-states-of-america-tennessee-maury-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-mcminn-county`,
  locales: {
    en: `McMinn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53285,
  coordinates: [-84.6305945,35.442847],
  polygon: RegionPolygons[`united-states-of-america-tennessee-mcminn-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-mcnairy-county`,
  locales: {
    en: `McNairy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25832,
  coordinates: [-88.57465049999999,35.1887635],
  polygon: RegionPolygons[`united-states-of-america-tennessee-mcnairy-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-meigs-county`,
  locales: {
    en: `Meigs County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12306,
  coordinates: [-84.82517250000001,35.520342],
  polygon: RegionPolygons[`united-states-of-america-tennessee-meigs-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46357,
  coordinates: [-84.232195,35.4381405],
  polygon: RegionPolygons[`united-states-of-america-tennessee-monroe-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-moore-county`,
  locales: {
    en: `Moore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6411,
  coordinates: [-86.39240000000001,35.267753],
  polygon: RegionPolygons[`united-states-of-america-tennessee-moore-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-morgan-county`,
  locales: {
    en: `Morgan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21579,
  coordinates: [-84.6279835,36.1424255],
  polygon: RegionPolygons[`united-states-of-america-tennessee-morgan-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-obion-county`,
  locales: {
    en: `Obion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30267,
  coordinates: [-89.14991699999999,36.35439100000001],
  polygon: RegionPolygons[`united-states-of-america-tennessee-obion-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-overton-county`,
  locales: {
    en: `Overton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22068,
  coordinates: [-85.290042,36.342492],
  polygon: RegionPolygons[`united-states-of-america-tennessee-overton-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-perry-county`,
  locales: {
    en: `Perry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8064,
  coordinates: [-87.84543099999999,35.632151],
  polygon: RegionPolygons[`united-states-of-america-tennessee-perry-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-pickett-county`,
  locales: {
    en: `Pickett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5082,
  coordinates: [-85.0083585,36.516751],
  polygon: RegionPolygons[`united-states-of-america-tennessee-pickett-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16898,
  coordinates: [-84.5340865,35.136635999999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-polk-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-putnam-county`,
  locales: {
    en: `Putnam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 78843,
  coordinates: [-85.453814,36.141239],
  polygon: RegionPolygons[`united-states-of-america-tennessee-putnam-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-rhea-county`,
  locales: {
    en: `Rhea County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33044,
  coordinates: [-84.92913250000001,35.6172195],
  polygon: RegionPolygons[`united-states-of-america-tennessee-rhea-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-roane-county`,
  locales: {
    en: `Roane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53140,
  coordinates: [-84.525952,35.8467005],
  polygon: RegionPolygons[`united-states-of-america-tennessee-roane-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-scott-county`,
  locales: {
    en: `Scott County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22039,
  coordinates: [-84.518716,36.3834265],
  polygon: RegionPolygons[`united-states-of-america-tennessee-scott-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-sequatchie-county`,
  locales: {
    en: `Sequatchie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14876,
  coordinates: [-85.4166015,35.3572955],
  polygon: RegionPolygons[`united-states-of-america-tennessee-sequatchie-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-smith-county`,
  locales: {
    en: `Smith County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19942,
  coordinates: [-85.95847549999999,36.2547125],
  polygon: RegionPolygons[`united-states-of-america-tennessee-smith-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-stewart-county`,
  locales: {
    en: `Stewart County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13561,
  coordinates: [-87.831445,36.503421],
  polygon: RegionPolygons[`united-states-of-america-tennessee-stewart-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-tipton-county`,
  locales: {
    en: `Tipton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 61581,
  coordinates: [-89.82456350000001,35.5108285],
  polygon: RegionPolygons[`united-states-of-america-tennessee-tipton-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-trousdale-county`,
  locales: {
    en: `Trousdale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11012,
  coordinates: [-86.1310745,36.390778999999995],
  polygon: RegionPolygons[`united-states-of-america-tennessee-trousdale-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-unicoi-county`,
  locales: {
    en: `Unicoi County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17761,
  coordinates: [-82.41855699999999,36.107254],
  polygon: RegionPolygons[`united-states-of-america-tennessee-unicoi-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-union-county`,
  locales: {
    en: `Union County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19688,
  coordinates: [-83.83586249999999,36.300131],
  polygon: RegionPolygons[`united-states-of-america-tennessee-union-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-van-buren-county`,
  locales: {
    en: `Van Buren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5765,
  coordinates: [-85.431474,35.677816500000006],
  polygon: RegionPolygons[`united-states-of-america-tennessee-van-buren-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-warren-county`,
  locales: {
    en: `Warren County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40878,
  coordinates: [-85.7774805,35.678287499999996],
  polygon: RegionPolygons[`united-states-of-america-tennessee-warren-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 128607,
  coordinates: [-82.50121250000001,36.2717035],
  polygon: RegionPolygons[`united-states-of-america-tennessee-washington-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-wayne-county`,
  locales: {
    en: `Wayne County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16558,
  coordinates: [-87.7987455,35.247607],
  polygon: RegionPolygons[`united-states-of-america-tennessee-wayne-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-weakley-county`,
  locales: {
    en: `Weakley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33415,
  coordinates: [-88.7380925,36.282799],
  polygon: RegionPolygons[`united-states-of-america-tennessee-weakley-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee-white-county`,
  locales: {
    en: `White County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27107,
  coordinates: [-85.44760500000001,35.9370645],
  polygon: RegionPolygons[`united-states-of-america-tennessee-white-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-texas-bell-county`,
  locales: {
    en: `Bell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 355642,
  coordinates: [-97.4920175,31.0362865],
  polygon: RegionPolygons[`united-states-of-america-texas-bell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bexar-county`,
  locales: {
    en: `Bexar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1986049,
  coordinates: [-98.4636305,29.4374885],
  polygon: RegionPolygons[`united-states-of-america-texas-bexar-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bowie-county`,
  locales: {
    en: `Bowie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 94324,
  coordinates: [-94.394897,33.474644999999995],
  polygon: RegionPolygons[`united-states-of-america-texas-bowie-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-brazoria-county`,
  locales: {
    en: `Brazoria County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 370200,
  coordinates: [-95.46632349999999,29.2119295],
  polygon: RegionPolygons[`united-states-of-america-texas-brazoria-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-brazos-county`,
  locales: {
    en: `Brazos County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 226758,
  coordinates: [-96.3408385,30.652012499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-brazos-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-collin-county`,
  locales: {
    en: `Collin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1005146,
  coordinates: [-96.569696,33.193628000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-collin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dallas-county`,
  locales: {
    en: `Dallas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2637772,
  coordinates: [-96.7776255,32.767269],
  polygon: RegionPolygons[`united-states-of-america-texas-dallas-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-denton-county`,
  locales: {
    en: `Denton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 859064,
  coordinates: [-97.116242,33.209002],
  polygon: RegionPolygons[`united-states-of-america-texas-denton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dewitt-county`,
  locales: {
    en: `DeWitt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20187,
  coordinates: [-97.365744,29.098894],
  polygon: RegionPolygons[`united-states-of-america-texas-dewitt-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-el-paso-county`,
  locales: {
    en: `El Paso County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 840758,
  coordinates: [-106.299987,31.6946625],
  polygon: RegionPolygons[`united-states-of-america-texas-el-paso-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-fort-bend-county`,
  locales: {
    en: `Fort Bend County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 787858,
  coordinates: [-95.75651500000001,29.525435],
  polygon: RegionPolygons[`united-states-of-america-texas-fort-bend-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-galveston-county`,
  locales: {
    en: `Galveston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 337890,
  coordinates: [-94.8019735,29.3376555],
  polygon: RegionPolygons[`united-states-of-america-texas-galveston-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-gregg-county`,
  locales: {
    en: `Gregg County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 123707,
  coordinates: [-94.78307699999999,32.5138005],
  polygon: RegionPolygons[`united-states-of-america-texas-gregg-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-harris-county`,
  locales: {
    en: `Harris County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4698619,
  coordinates: [-95.43486150000001,29.833973999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-harris-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hays-county`,
  locales: {
    en: `Hays County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 222631,
  coordinates: [-98.0039075,30.054378],
  polygon: RegionPolygons[`united-states-of-america-texas-hays-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-johnson-county`,
  locales: {
    en: `Johnson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 171361,
  coordinates: [-97.3516285,32.3445445],
  polygon: RegionPolygons[`united-states-of-america-texas-johnson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lavaca-county`,
  locales: {
    en: `Lavaca County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20110,
  coordinates: [-96.9003315,29.347974999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-lavaca-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-matagorda-county`,
  locales: {
    en: `Matagorda County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36552,
  coordinates: [-95.943229,28.8068055],
  polygon: RegionPolygons[`united-states-of-america-texas-matagorda-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mclennan-county`,
  locales: {
    en: `McLennan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 254607,
  coordinates: [-97.20317650000001,31.553646999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-mclennan-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-medina-county`,
  locales: {
    en: `Medina County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50921,
  coordinates: [-99.1093215,29.3905715],
  polygon: RegionPolygons[`united-states-of-america-texas-medina-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-montgomery-county`,
  locales: {
    en: `Montgomery County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 590925,
  coordinates: [-95.463474,30.3290225],
  polygon: RegionPolygons[`united-states-of-america-texas-montgomery-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-rusk-county`,
  locales: {
    en: `Rusk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 54450,
  coordinates: [-94.719045,32.124975],
  polygon: RegionPolygons[`united-states-of-america-texas-rusk-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-smith-county`,
  locales: {
    en: `Smith County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 230221,
  coordinates: [-95.2899065,32.4112925],
  polygon: RegionPolygons[`united-states-of-america-texas-smith-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-tarrant-county`,
  locales: {
    en: `Tarrant County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2084931,
  coordinates: [-97.29143450000001,32.7714195],
  polygon: RegionPolygons[`united-states-of-america-texas-tarrant-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-travis-county`,
  locales: {
    en: `Travis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1248743,
  coordinates: [-97.771258,30.326374],
  polygon: RegionPolygons[`united-states-of-america-texas-travis-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-webb-county`,
  locales: {
    en: `Webb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 275910,
  coordinates: [-99.505112,27.732308],
  polygon: RegionPolygons[`united-states-of-america-texas-webb-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-williamson-county`,
  locales: {
    en: `Williamson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 566719,
  coordinates: [-97.6025525,30.654515500000002],
  polygon: RegionPolygons[`united-states-of-america-texas-williamson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-anderson-county`,
  locales: {
    en: `Anderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58057,
  coordinates: [-95.656497,31.794265499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-anderson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-andrews-county`,
  locales: {
    en: `Andrews County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18128,
  coordinates: [-102.6378665,32.3045195],
  polygon: RegionPolygons[`united-states-of-america-texas-andrews-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-angelina-county`,
  locales: {
    en: `Angelina County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 87092,
  coordinates: [-94.56648849999999,31.276519999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-angelina-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-aransas-county`,
  locales: {
    en: `Aransas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23792,
  coordinates: [-97.0259885,28.0782735],
  polygon: RegionPolygons[`united-states-of-america-texas-aransas-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-archer-county`,
  locales: {
    en: `Archer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8786,
  coordinates: [-98.68730199999999,33.616121],
  polygon: RegionPolygons[`united-states-of-america-texas-archer-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-armstrong-county`,
  locales: {
    en: `Armstrong County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1892,
  coordinates: [-101.35776899999999,34.9652895],
  polygon: RegionPolygons[`united-states-of-america-texas-armstrong-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-atascosa-county`,
  locales: {
    en: `Atascosa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50310,
  coordinates: [-98.451776,28.931675499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-atascosa-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-austin-county`,
  locales: {
    en: `Austin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29989,
  coordinates: [-96.3140715,29.849221],
  polygon: RegionPolygons[`united-states-of-america-texas-austin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bailey-county`,
  locales: {
    en: `Bailey County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7027,
  coordinates: [-102.831248,34.068782999999996],
  polygon: RegionPolygons[`united-states-of-america-texas-bailey-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bandera-county`,
  locales: {
    en: `Bandera County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22824,
  coordinates: [-99.190956,29.729751999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-bandera-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bastrop-county`,
  locales: {
    en: `Bastrop County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 86976,
  coordinates: [-97.336955,30.103051999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-bastrop-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-baylor-county`,
  locales: {
    en: `Baylor County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3582,
  coordinates: [-99.214369,33.6157695],
  polygon: RegionPolygons[`united-states-of-america-texas-baylor-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bee-county`,
  locales: {
    en: `Bee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 32587,
  coordinates: [-97.73267150000001,28.4246655],
  polygon: RegionPolygons[`united-states-of-america-texas-bee-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-blanco-county`,
  locales: {
    en: `Blanco County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11702,
  coordinates: [-98.35861299999999,30.219826],
  polygon: RegionPolygons[`united-states-of-america-texas-blanco-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-borden-county`,
  locales: {
    en: `Borden County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 648,
  coordinates: [-101.432331,32.7438545],
  polygon: RegionPolygons[`united-states-of-america-texas-borden-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-bosque-county`,
  locales: {
    en: `Bosque County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18691,
  coordinates: [-97.6413635,31.8975825],
  polygon: RegionPolygons[`united-states-of-america-texas-bosque-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-brewster-county`,
  locales: {
    en: `Brewster County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9267,
  coordinates: [-103.0606865,29.819019],
  polygon: RegionPolygons[`united-states-of-america-texas-brewster-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-briscoe-county`,
  locales: {
    en: `Briscoe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1516,
  coordinates: [-101.2082595,34.5302855],
  polygon: RegionPolygons[`united-states-of-america-texas-briscoe-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-brooks-county`,
  locales: {
    en: `Brooks County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7114,
  coordinates: [-98.26107,27.0230565],
  polygon: RegionPolygons[`united-states-of-america-texas-brooks-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-brown-county`,
  locales: {
    en: `Brown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37924,
  coordinates: [-98.93560450000001,31.7638855],
  polygon: RegionPolygons[`united-states-of-america-texas-brown-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-burleson-county`,
  locales: {
    en: `Burleson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18389,
  coordinates: [-96.62142349999999,30.513277000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-burleson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-burnet-county`,
  locales: {
    en: `Burnet County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47542,
  coordinates: [-98.14387350000001,30.7305525],
  polygon: RegionPolygons[`united-states-of-america-texas-burnet-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-caldwell-county`,
  locales: {
    en: `Caldwell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43247,
  coordinates: [-97.6075305,29.8518125],
  polygon: RegionPolygons[`united-states-of-america-texas-caldwell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-calhoun-county`,
  locales: {
    en: `Calhoun County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21561,
  coordinates: [-96.626644,28.3958115],
  polygon: RegionPolygons[`united-states-of-america-texas-calhoun-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-callahan-county`,
  locales: {
    en: `Callahan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13994,
  coordinates: [-99.37285299999999,32.297022999999996],
  polygon: RegionPolygons[`united-states-of-america-texas-callahan-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cameron-county`,
  locales: {
    en: `Cameron County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 423908,
  coordinates: [-97.506901,26.1244405],
  polygon: RegionPolygons[`united-states-of-america-texas-cameron-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-camp-county`,
  locales: {
    en: `Camp County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13033,
  coordinates: [-94.936074,32.989183],
  polygon: RegionPolygons[`united-states-of-america-texas-camp-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-carson-county`,
  locales: {
    en: `Carson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6005,
  coordinates: [-101.354438,35.4037035],
  polygon: RegionPolygons[`united-states-of-america-texas-carson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cass-county`,
  locales: {
    en: `Cass County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30119,
  coordinates: [-94.3483565,33.0953735],
  polygon: RegionPolygons[`united-states-of-america-texas-cass-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-castro-county`,
  locales: {
    en: `Castro County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7665,
  coordinates: [-102.2618255,34.530612000000005],
  polygon: RegionPolygons[`united-states-of-america-texas-castro-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-chambers-county`,
  locales: {
    en: `Chambers County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42454,
  coordinates: [-94.66742149999999,29.7070775],
  polygon: RegionPolygons[`united-states-of-america-texas-chambers-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cherokee-county`,
  locales: {
    en: `Cherokee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 52592,
  coordinates: [-95.1628825,31.7818495],
  polygon: RegionPolygons[`united-states-of-america-texas-cherokee-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-childress-county`,
  locales: {
    en: `Childress County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7291,
  coordinates: [-100.20764199999999,34.52967700000001],
  polygon: RegionPolygons[`united-states-of-america-texas-childress-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-clay-county`,
  locales: {
    en: `Clay County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10456,
  coordinates: [-98.1846535,33.811953],
  polygon: RegionPolygons[`united-states-of-america-texas-clay-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cochran-county`,
  locales: {
    en: `Cochran County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2836,
  coordinates: [-102.82574550000001,33.6067685],
  polygon: RegionPolygons[`united-states-of-america-texas-cochran-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-coke-county`,
  locales: {
    en: `Coke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3370,
  coordinates: [-100.5302535,31.889789999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-coke-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-coleman-county`,
  locales: {
    en: `Coleman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8397,
  coordinates: [-99.458967,31.7459335],
  polygon: RegionPolygons[`united-states-of-america-texas-coleman-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-collingsworth-county`,
  locales: {
    en: `Collingsworth County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2962,
  coordinates: [-100.270542,34.964751],
  polygon: RegionPolygons[`united-states-of-america-texas-collingsworth-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-colorado-county`,
  locales: {
    en: `Colorado County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21217,
  coordinates: [-96.524822,29.60466],
  polygon: RegionPolygons[`united-states-of-america-texas-colorado-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-comal-county`,
  locales: {
    en: `Comal County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 148373,
  coordinates: [-98.3226975,29.816233500000003],
  polygon: RegionPolygons[`united-states-of-america-texas-comal-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-comanche-county`,
  locales: {
    en: `Comanche County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13534,
  coordinates: [-98.54048449999999,31.9727125],
  polygon: RegionPolygons[`united-states-of-america-texas-comanche-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-concho-county`,
  locales: {
    en: `Concho County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4276,
  coordinates: [-99.858533,31.3337815],
  polygon: RegionPolygons[`united-states-of-america-texas-concho-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cooke-county`,
  locales: {
    en: `Cooke County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40574,
  coordinates: [-97.2154625,33.686394],
  polygon: RegionPolygons[`united-states-of-america-texas-cooke-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-coryell-county`,
  locales: {
    en: `Coryell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 74808,
  coordinates: [-97.799306,31.390196500000002],
  polygon: RegionPolygons[`united-states-of-america-texas-coryell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-cottle-county`,
  locales: {
    en: `Cottle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1389,
  coordinates: [-100.258156,34.074876],
  polygon: RegionPolygons[`united-states-of-america-texas-cottle-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-crane-county`,
  locales: {
    en: `Crane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4794,
  coordinates: [-102.534163,31.368963],
  polygon: RegionPolygons[`united-states-of-america-texas-crane-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-crockett-county`,
  locales: {
    en: `Crockett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3499,
  coordinates: [-101.6746955,30.6872445],
  polygon: RegionPolygons[`united-states-of-america-texas-crockett-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-crosby-county`,
  locales: {
    en: `Crosby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5779,
  coordinates: [-101.301184,33.6141925],
  polygon: RegionPolygons[`united-states-of-america-texas-crosby-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-culberson-county`,
  locales: {
    en: `Culberson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2204,
  coordinates: [-104.47139849999999,31.332061],
  polygon: RegionPolygons[`united-states-of-america-texas-culberson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dallam-county`,
  locales: {
    en: `Dallam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7200,
  coordinates: [-102.6021935,36.2779675],
  polygon: RegionPolygons[`united-states-of-america-texas-dallam-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dawson-county`,
  locales: {
    en: `Dawson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12619,
  coordinates: [-101.94863,32.7425545],
  polygon: RegionPolygons[`united-states-of-america-texas-dawson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-deaf-smith-county`,
  locales: {
    en: `Deaf Smith County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18760,
  coordinates: [-102.605366,34.964931],
  polygon: RegionPolygons[`united-states-of-america-texas-deaf-smith-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-delta-county`,
  locales: {
    en: `Delta County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5349,
  coordinates: [-95.584209,33.357214],
  polygon: RegionPolygons[`united-states-of-america-texas-delta-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dickens-county`,
  locales: {
    en: `Dickens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2249,
  coordinates: [-100.7793035,33.616432],
  polygon: RegionPolygons[`united-states-of-america-texas-dickens-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-dimmit-county`,
  locales: {
    en: `Dimmit County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10308,
  coordinates: [-99.7542565,28.422970499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-dimmit-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-donley-county`,
  locales: {
    en: `Donley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3319,
  coordinates: [-100.8148635,34.9654335],
  polygon: RegionPolygons[`united-states-of-america-texas-donley-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-duval-county`,
  locales: {
    en: `Duval County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11212,
  coordinates: [-98.5178945,27.6602265],
  polygon: RegionPolygons[`united-states-of-america-texas-duval-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-eastland-county`,
  locales: {
    en: `Eastland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18322,
  coordinates: [-98.796899,32.2966395],
  polygon: RegionPolygons[`united-states-of-america-texas-eastland-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-ector-county`,
  locales: {
    en: `Ector County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 162124,
  coordinates: [-102.54306700000001,31.869133499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-ector-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-edwards-county`,
  locales: {
    en: `Edwards County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1928,
  coordinates: [-100.22726750000001,29.9569805],
  polygon: RegionPolygons[`united-states-of-america-texas-edwards-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-ellis-county`,
  locales: {
    en: `Ellis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 179436,
  coordinates: [-96.734958,32.3007575],
  polygon: RegionPolygons[`united-states-of-america-texas-ellis-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-erath-county`,
  locales: {
    en: `Erath County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42446,
  coordinates: [-98.208011,32.215275],
  polygon: RegionPolygons[`united-states-of-america-texas-erath-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-falls-county`,
  locales: {
    en: `Falls County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17335,
  coordinates: [-96.9374875,31.2542445],
  polygon: RegionPolygons[`united-states-of-america-texas-falls-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-fannin-county`,
  locales: {
    en: `Fannin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35286,
  coordinates: [-96.115115,33.61411],
  polygon: RegionPolygons[`united-states-of-america-texas-fannin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-fayette-county`,
  locales: {
    en: `Fayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25349,
  coordinates: [-96.94386850000001,29.8962255],
  polygon: RegionPolygons[`united-states-of-america-texas-fayette-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-fisher-county`,
  locales: {
    en: `Fisher County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3839,
  coordinates: [-100.402425,32.743131000000005],
  polygon: RegionPolygons[`united-states-of-america-texas-fisher-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-floyd-county`,
  locales: {
    en: `Floyd County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5837,
  coordinates: [-101.30300700000001,34.071472],
  polygon: RegionPolygons[`united-states-of-america-texas-floyd-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-foard-county`,
  locales: {
    en: `Foard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1200,
  coordinates: [-99.761489,33.987902],
  polygon: RegionPolygons[`united-states-of-america-texas-foard-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10766,
  coordinates: [-95.21720400000001,33.1756415],
  polygon: RegionPolygons[`united-states-of-america-texas-franklin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-freestone-county`,
  locales: {
    en: `Freestone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19808,
  coordinates: [-96.14200650000001,31.712959],
  polygon: RegionPolygons[`united-states-of-america-texas-freestone-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-frio-county`,
  locales: {
    en: `Frio County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19816,
  coordinates: [-99.1073605,28.8659505],
  polygon: RegionPolygons[`united-states-of-america-texas-frio-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-gaines-county`,
  locales: {
    en: `Gaines County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20901,
  coordinates: [-102.6338095,32.740645],
  polygon: RegionPolygons[`united-states-of-america-texas-gaines-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-garza-county`,
  locales: {
    en: `Garza County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6578,
  coordinates: [-101.298047,33.1791195],
  polygon: RegionPolygons[`united-states-of-america-texas-garza-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-gillespie-county`,
  locales: {
    en: `Gillespie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26804,
  coordinates: [-98.94594649999999,30.317086500000002],
  polygon: RegionPolygons[`united-states-of-america-texas-gillespie-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-glasscock-county`,
  locales: {
    en: `Glasscock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1388,
  coordinates: [-101.5201505,31.869193000000003],
  polygon: RegionPolygons[`united-states-of-america-texas-glasscock-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-goliad-county`,
  locales: {
    en: `Goliad County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7584,
  coordinates: [-97.4683565,28.656956],
  polygon: RegionPolygons[`united-states-of-america-texas-goliad-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-gonzales-county`,
  locales: {
    en: `Gonzales County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20826,
  coordinates: [-97.49464950000001,29.4472115],
  polygon: RegionPolygons[`united-states-of-america-texas-gonzales-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-gray-county`,
  locales: {
    en: `Gray County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21895,
  coordinates: [-100.8126295,35.400718],
  polygon: RegionPolygons[`united-states-of-america-texas-gray-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-grayson-county`,
  locales: {
    en: `Grayson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 133991,
  coordinates: [-96.66200749999999,33.6787025],
  polygon: RegionPolygons[`united-states-of-america-texas-grayson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-grimes-county`,
  locales: {
    en: `Grimes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28360,
  coordinates: [-95.9963055,30.544656],
  polygon: RegionPolygons[`united-states-of-america-texas-grimes-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-guadalupe-county`,
  locales: {
    en: `Guadalupe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 163694,
  coordinates: [-97.971935,29.611769000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-guadalupe-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hale-county`,
  locales: {
    en: `Hale County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33830,
  coordinates: [-101.8269975,34.068903500000005],
  polygon: RegionPolygons[`united-states-of-america-texas-hale-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hall-county`,
  locales: {
    en: `Hall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3028,
  coordinates: [-100.6810135,34.530519999999996],
  polygon: RegionPolygons[`united-states-of-america-texas-hall-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hamilton-county`,
  locales: {
    en: `Hamilton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8484,
  coordinates: [-98.1150835,31.7171475],
  polygon: RegionPolygons[`united-states-of-america-texas-hamilton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hansford-county`,
  locales: {
    en: `Hansford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5463,
  coordinates: [-101.3545355,36.277401999999995],
  polygon: RegionPolygons[`united-states-of-america-texas-hansford-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hardeman-county`,
  locales: {
    en: `Hardeman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3922,
  coordinates: [-99.7364215,34.3175235],
  polygon: RegionPolygons[`united-states-of-america-texas-hardeman-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hardin-county`,
  locales: {
    en: `Hardin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57207,
  coordinates: [-94.4022105,30.31219],
  polygon: RegionPolygons[`united-states-of-america-texas-hardin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-harrison-county`,
  locales: {
    en: `Harrison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 66726,
  coordinates: [-94.37245999999999,32.5598355],
  polygon: RegionPolygons[`united-states-of-america-texas-harrison-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hartley-county`,
  locales: {
    en: `Hartley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5619,
  coordinates: [-102.6024975,35.838868000000005],
  polygon: RegionPolygons[`united-states-of-america-texas-hartley-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-haskell-county`,
  locales: {
    en: `Haskell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5813,
  coordinates: [-99.731119,33.1779925],
  polygon: RegionPolygons[`united-states-of-america-texas-haskell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hemphill-county`,
  locales: {
    en: `Hemphill County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3825,
  coordinates: [-100.2703065,35.837803],
  polygon: RegionPolygons[`united-states-of-america-texas-hemphill-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-henderson-county`,
  locales: {
    en: `Henderson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 82299,
  coordinates: [-95.940325,32.1823055],
  polygon: RegionPolygons[`united-states-of-america-texas-henderson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hidalgo-county`,
  locales: {
    en: `Hidalgo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 865939,
  coordinates: [-98.224568,26.412177999999997],
  polygon: RegionPolygons[`united-states-of-america-texas-hidalgo-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hill-county`,
  locales: {
    en: `Hill County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36354,
  coordinates: [-97.107482,31.987169],
  polygon: RegionPolygons[`united-states-of-america-texas-hill-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hockley-county`,
  locales: {
    en: `Hockley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22980,
  coordinates: [-102.345688,33.606805],
  polygon: RegionPolygons[`united-states-of-america-texas-hockley-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hood-county`,
  locales: {
    en: `Hood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 60537,
  coordinates: [-97.8419155,32.396145000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-hood-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hopkins-county`,
  locales: {
    en: `Hopkins County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36810,
  coordinates: [-95.58594450000001,33.168812],
  polygon: RegionPolygons[`united-states-of-america-texas-hopkins-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-houston-county`,
  locales: {
    en: `Houston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23169,
  coordinates: [-95.363106,31.259551000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-houston-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-howard-county`,
  locales: {
    en: `Howard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36459,
  coordinates: [-101.43479099999999,32.306179],
  polygon: RegionPolygons[`united-states-of-america-texas-howard-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hudspeth-county`,
  locales: {
    en: `Hudspeth County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4795,
  coordinates: [-105.4527975,31.3154775],
  polygon: RegionPolygons[`united-states-of-america-texas-hudspeth-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hunt-county`,
  locales: {
    en: `Hunt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 96493,
  coordinates: [-96.0780225,33.1233735],
  polygon: RegionPolygons[`united-states-of-america-texas-hunt-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-hutchinson-county`,
  locales: {
    en: `Hutchinson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21198,
  coordinates: [-101.3546005,35.839731],
  polygon: RegionPolygons[`united-states-of-america-texas-hutchinson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-irion-county`,
  locales: {
    en: `Irion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1522,
  coordinates: [-100.98178150000001,31.304707],
  polygon: RegionPolygons[`united-states-of-america-texas-irion-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jack-county`,
  locales: {
    en: `Jack County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8843,
  coordinates: [-98.172371,33.2342065],
  polygon: RegionPolygons[`united-states-of-america-texas-jack-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14874,
  coordinates: [-96.62388250000001,28.9691425],
  polygon: RegionPolygons[`united-states-of-america-texas-jackson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jasper-county`,
  locales: {
    en: `Jasper County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35872,
  coordinates: [-94.1617655,30.699868000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-jasper-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jeff-davis-county`,
  locales: {
    en: `Jeff Davis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2252,
  coordinates: [-104.21105349999999,30.7586965],
  polygon: RegionPolygons[`united-states-of-america-texas-jeff-davis-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 255001,
  coordinates: [-94.14153350000001,29.8746995],
  polygon: RegionPolygons[`united-states-of-america-texas-jefferson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jim-hogg-county`,
  locales: {
    en: `Jim Hogg County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5248,
  coordinates: [-98.68627599999999,27.071317999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-jim-hogg-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jim-wells-county`,
  locales: {
    en: `Jim Wells County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40822,
  coordinates: [-98.0133265,27.6594735],
  polygon: RegionPolygons[`united-states-of-america-texas-jim-wells-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-jones-county`,
  locales: {
    en: `Jones County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19817,
  coordinates: [-99.879272,32.7373875],
  polygon: RegionPolygons[`united-states-of-america-texas-jones-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-karnes-county`,
  locales: {
    en: `Karnes County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15650,
  coordinates: [-97.882815,28.9448875],
  polygon: RegionPolygons[`united-states-of-america-texas-karnes-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kaufman-county`,
  locales: {
    en: `Kaufman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 128622,
  coordinates: [-96.302943,32.5982425],
  polygon: RegionPolygons[`united-states-of-america-texas-kaufman-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kendall-county`,
  locales: {
    en: `Kendall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45641,
  coordinates: [-98.66708249999999,29.928221999999998],
  polygon: RegionPolygons[`united-states-of-america-texas-kendall-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kenedy-county`,
  locales: {
    en: `Kenedy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 442,
  coordinates: [-97.636886,26.9407415],
  polygon: RegionPolygons[`united-states-of-america-texas-kenedy-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kent-county`,
  locales: {
    en: `Kent County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 726,
  coordinates: [-100.7781185,33.180396],
  polygon: RegionPolygons[`united-states-of-america-texas-kent-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kerr-county`,
  locales: {
    en: `Kerr County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 52405,
  coordinates: [-99.337673,30.036048],
  polygon: RegionPolygons[`united-states-of-america-texas-kerr-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kimble-county`,
  locales: {
    en: `Kimble County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4362,
  coordinates: [-99.7090895,30.498836],
  polygon: RegionPolygons[`united-states-of-america-texas-kimble-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-king-county`,
  locales: {
    en: `King County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 277,
  coordinates: [-100.2548355,33.616689],
  polygon: RegionPolygons[`united-states-of-america-texas-king-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kinney-county`,
  locales: {
    en: `Kinney County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3767,
  coordinates: [-100.454226,29.3539335],
  polygon: RegionPolygons[`united-states-of-america-texas-kinney-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-kleberg-county`,
  locales: {
    en: `Kleberg County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31129,
  coordinates: [-97.640856,27.422620000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-kleberg-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-knox-county`,
  locales: {
    en: `Knox County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3653,
  coordinates: [-99.734439,33.616742],
  polygon: RegionPolygons[`united-states-of-america-texas-knox-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lamar-county`,
  locales: {
    en: `Lamar County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49728,
  coordinates: [-95.58318750000001,33.657571000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-lamar-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lamb-county`,
  locales: {
    en: `Lamb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13158,
  coordinates: [-102.35059000000001,34.068903500000005],
  polygon: RegionPolygons[`united-states-of-america-texas-lamb-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lampasas-county`,
  locales: {
    en: `Lampasas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21229,
  coordinates: [-98.23805200000001,31.246627],
  polygon: RegionPolygons[`united-states-of-america-texas-lampasas-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-la-salle-county`,
  locales: {
    en: `La Salle County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7531,
  coordinates: [-99.0982885,28.338953],
  polygon: RegionPolygons[`united-states-of-america-texas-la-salle-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lee-county`,
  locales: {
    en: `Lee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17144,
  coordinates: [-96.987673,30.2945845],
  polygon: RegionPolygons[`united-states-of-america-texas-lee-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-leon-county`,
  locales: {
    en: `Leon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17270,
  coordinates: [-95.9992715,31.3138465],
  polygon: RegionPolygons[`united-states-of-america-texas-leon-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-liberty-county`,
  locales: {
    en: `Liberty County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 86323,
  coordinates: [-94.804066,30.1889145],
  polygon: RegionPolygons[`united-states-of-america-texas-liberty-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-limestone-county`,
  locales: {
    en: `Limestone County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23519,
  coordinates: [-96.58442199999999,31.5178935],
  polygon: RegionPolygons[`united-states-of-america-texas-limestone-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lipscomb-county`,
  locales: {
    en: `Lipscomb County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3355,
  coordinates: [-100.2735615,36.2776895],
  polygon: RegionPolygons[`united-states-of-america-texas-lipscomb-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-live-oak-county`,
  locales: {
    en: `Live Oak County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12166,
  coordinates: [-98.0719025,28.4219245],
  polygon: RegionPolygons[`united-states-of-america-texas-live-oak-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-llano-county`,
  locales: {
    en: `Llano County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21646,
  coordinates: [-98.6578265,30.703767499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-llano-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-loving-county`,
  locales: {
    en: `Loving County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 152,
  coordinates: [-103.6548195,31.825987],
  polygon: RegionPolygons[`united-states-of-america-texas-loving-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lubbock-county`,
  locales: {
    en: `Lubbock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 307412,
  coordinates: [-101.8213085,33.610018499999995],
  polygon: RegionPolygons[`united-states-of-america-texas-lubbock-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-lynn-county`,
  locales: {
    en: `Lynn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5877,
  coordinates: [-101.816549,33.177231],
  polygon: RegionPolygons[`united-states-of-america-texas-lynn-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mcculloch-county`,
  locales: {
    en: `McCulloch County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7987,
  coordinates: [-99.347166,31.2171275],
  polygon: RegionPolygons[`united-states-of-america-texas-mcculloch-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mcmullen-county`,
  locales: {
    en: `McMullen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 749,
  coordinates: [-98.568824,28.3528775],
  polygon: RegionPolygons[`united-states-of-america-texas-mcmullen-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-madison-county`,
  locales: {
    en: `Madison County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14422,
  coordinates: [-95.92862650000001,30.958604],
  polygon: RegionPolygons[`united-states-of-america-texas-madison-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-marion-county`,
  locales: {
    en: `Marion County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9928,
  coordinates: [-94.3743125,32.784619000000006],
  polygon: RegionPolygons[`united-states-of-america-texas-marion-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-martin-county`,
  locales: {
    en: `Martin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5753,
  coordinates: [-101.9499945,32.306011],
  polygon: RegionPolygons[`united-states-of-america-texas-martin-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mason-county`,
  locales: {
    en: `Mason County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4280,
  coordinates: [-99.2244935,30.719742],
  polygon: RegionPolygons[`united-states-of-america-texas-mason-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-maverick-county`,
  locales: {
    en: `Maverick County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 58485,
  coordinates: [-100.389881,28.641577499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-maverick-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-menard-county`,
  locales: {
    en: `Menard County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2139,
  coordinates: [-99.8000515,30.89918],
  polygon: RegionPolygons[`united-states-of-america-texas-menard-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-midland-county`,
  locales: {
    en: `Midland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 172578,
  coordinates: [-102.03157350000001,31.869133499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-midland-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-milam-county`,
  locales: {
    en: `Milam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25131,
  coordinates: [-96.964016,30.783944499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-milam-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mills-county`,
  locales: {
    en: `Mills County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4921,
  coordinates: [-98.629201,31.477095],
  polygon: RegionPolygons[`united-states-of-america-texas-mills-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-mitchell-county`,
  locales: {
    en: `Mitchell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8145,
  coordinates: [-100.9223115,32.306555],
  polygon: RegionPolygons[`united-states-of-america-texas-mitchell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-montague-county`,
  locales: {
    en: `Montague County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19596,
  coordinates: [-97.731502,33.7125255],
  polygon: RegionPolygons[`united-states-of-america-texas-montague-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-moore-county`,
  locales: {
    en: `Moore County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21485,
  coordinates: [-101.8929075,35.837720000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-moore-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-morris-county`,
  locales: {
    en: `Morris County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12339,
  coordinates: [-94.73604399999999,33.1219335],
  polygon: RegionPolygons[`united-states-of-america-texas-morris-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-motley-county`,
  locales: {
    en: `Motley County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1234,
  coordinates: [-100.77941200000001,34.073908],
  polygon: RegionPolygons[`united-states-of-america-texas-motley-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-nacogdoches-county`,
  locales: {
    en: `Nacogdoches County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65711,
  coordinates: [-94.640989,31.5351545],
  polygon: RegionPolygons[`united-states-of-america-texas-nacogdoches-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-navarro-county`,
  locales: {
    en: `Navarro County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49565,
  coordinates: [-96.4748245,32.062521000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-navarro-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-newton-county`,
  locales: {
    en: `Newton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13746,
  coordinates: [-93.71376649999999,30.714636499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-newton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-nolan-county`,
  locales: {
    en: `Nolan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14751,
  coordinates: [-100.405948,32.303842],
  polygon: RegionPolygons[`united-states-of-america-texas-nolan-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-nueces-county`,
  locales: {
    en: `Nueces County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 362265,
  coordinates: [-97.4937775,27.7770085],
  polygon: RegionPolygons[`united-states-of-america-texas-nueces-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-ochiltree-county`,
  locales: {
    en: `Ochiltree County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9947,
  coordinates: [-100.81593050000001,36.278118],
  polygon: RegionPolygons[`united-states-of-america-texas-ochiltree-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-oldham-county`,
  locales: {
    en: `Oldham County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2131,
  coordinates: [-102.60276350000001,35.405273],
  polygon: RegionPolygons[`united-states-of-america-texas-oldham-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-orange-county`,
  locales: {
    en: `Orange County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 83572,
  coordinates: [-93.902908,30.054588000000003],
  polygon: RegionPolygons[`united-states-of-america-texas-orange-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-palo-pinto-county`,
  locales: {
    en: `Palo Pinto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28875,
  coordinates: [-98.316175,32.759769500000004],
  polygon: RegionPolygons[`united-states-of-america-texas-palo-pinto-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-panola-county`,
  locales: {
    en: `Panola County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23148,
  coordinates: [-94.307178,32.183665],
  polygon: RegionPolygons[`united-states-of-america-texas-panola-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-parker-county`,
  locales: {
    en: `Parker County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 138371,
  coordinates: [-97.8055085,32.7793615],
  polygon: RegionPolygons[`united-states-of-america-texas-parker-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-parmer-county`,
  locales: {
    en: `Parmer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9864,
  coordinates: [-102.7845815,34.530055],
  polygon: RegionPolygons[`united-states-of-america-texas-parmer-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-pecos-county`,
  locales: {
    en: `Pecos County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15673,
  coordinates: [-102.67673049999999,30.712057],
  polygon: RegionPolygons[`united-states-of-america-texas-pecos-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50031,
  coordinates: [-94.86905300000001,30.817790000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-polk-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-potter-county`,
  locales: {
    en: `Potter County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 119648,
  coordinates: [-101.89513550000001,35.4016565],
  polygon: RegionPolygons[`united-states-of-america-texas-potter-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-presidio-county`,
  locales: {
    en: `Presidio County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6948,
  coordinates: [-104.387417,29.944573499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-presidio-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-rains-county`,
  locales: {
    en: `Rains County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12159,
  coordinates: [-95.8111875,32.845659],
  polygon: RegionPolygons[`united-states-of-america-texas-rains-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-randall-county`,
  locales: {
    en: `Randall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 136271,
  coordinates: [-101.89589000000001,34.965325],
  polygon: RegionPolygons[`united-states-of-america-texas-randall-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-reagan-county`,
  locales: {
    en: `Reagan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3741,
  coordinates: [-101.5216565,31.365349000000002],
  polygon: RegionPolygons[`united-states-of-america-texas-reagan-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-real-county`,
  locales: {
    en: `Real County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3478,
  coordinates: [-99.8323015,29.852925499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-real-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-red-river-county`,
  locales: {
    en: `Red River County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12175,
  coordinates: [-95.023469,33.6402115],
  polygon: RegionPolygons[`united-states-of-america-texas-red-river-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-reeves-county`,
  locales: {
    en: `Reeves County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15695,
  coordinates: [-103.55669549999999,31.383297499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-reeves-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-refugio-county`,
  locales: {
    en: `Refugio County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7032,
  coordinates: [-97.152698,28.3076185],
  polygon: RegionPolygons[`united-states-of-america-texas-refugio-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-roberts-county`,
  locales: {
    en: `Roberts County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 903,
  coordinates: [-100.813113,35.838336999999996],
  polygon: RegionPolygons[`united-states-of-america-texas-roberts-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-robertson-county`,
  locales: {
    en: `Robertson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17284,
  coordinates: [-96.5337035,31.0263995],
  polygon: RegionPolygons[`united-states-of-america-texas-robertson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-rockwall-county`,
  locales: {
    en: `Rockwall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 100657,
  coordinates: [-96.4080985,32.89796200000001],
  polygon: RegionPolygons[`united-states-of-america-texas-rockwall-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-runnels-county`,
  locales: {
    en: `Runnels County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10234,
  coordinates: [-99.97486599999999,31.8296985],
  polygon: RegionPolygons[`united-states-of-america-texas-runnels-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-sabine-county`,
  locales: {
    en: `Sabine County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10589,
  coordinates: [-93.824496,31.373053499999997],
  polygon: RegionPolygons[`united-states-of-america-texas-sabine-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-san-augustine-county`,
  locales: {
    en: `San Augustine County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8232,
  coordinates: [-94.191165,31.376438],
  polygon: RegionPolygons[`united-states-of-america-texas-san-augustine-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-san-jacinto-county`,
  locales: {
    en: `San Jacinto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 28719,
  coordinates: [-95.0987255,30.6131295],
  polygon: RegionPolygons[`united-states-of-america-texas-san-jacinto-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-san-patricio-county`,
  locales: {
    en: `San Patricio County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 66893,
  coordinates: [-97.52178749999999,27.9994695],
  polygon: RegionPolygons[`united-states-of-america-texas-san-patricio-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-san-saba-county`,
  locales: {
    en: `San Saba County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6054,
  coordinates: [-98.7534695,31.2059225],
  polygon: RegionPolygons[`united-states-of-america-texas-san-saba-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-schleicher-county`,
  locales: {
    en: `Schleicher County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2895,
  coordinates: [-100.538696,30.897402],
  polygon: RegionPolygons[`united-states-of-america-texas-schleicher-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-scurry-county`,
  locales: {
    en: `Scurry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16866,
  coordinates: [-100.91521599999999,32.7477685],
  polygon: RegionPolygons[`united-states-of-america-texas-scurry-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-shackelford-county`,
  locales: {
    en: `Shackelford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3253,
  coordinates: [-99.354021,32.7358775],
  polygon: RegionPolygons[`united-states-of-america-texas-shackelford-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-shelby-county`,
  locales: {
    en: `Shelby County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 25418,
  coordinates: [-94.1569415,31.775543499999998],
  polygon: RegionPolygons[`united-states-of-america-texas-shelby-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-sherman-county`,
  locales: {
    en: `Sherman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3079,
  coordinates: [-101.89324049999999,36.277966500000005],
  polygon: RegionPolygons[`united-states-of-america-texas-sherman-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-somervell-county`,
  locales: {
    en: `Somervell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9016,
  coordinates: [-97.78034,32.202973],
  polygon: RegionPolygons[`united-states-of-america-texas-somervell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-starr-county`,
  locales: {
    en: `Starr County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64525,
  coordinates: [-98.746037,26.510827],
  polygon: RegionPolygons[`united-states-of-america-texas-starr-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-stephens-county`,
  locales: {
    en: `Stephens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9433,
  coordinates: [-98.83583300000001,32.735902499999995],
  polygon: RegionPolygons[`united-states-of-america-texas-stephens-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-sterling-county`,
  locales: {
    en: `Sterling County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1311,
  coordinates: [-101.044612,31.821835],
  polygon: RegionPolygons[`united-states-of-america-texas-sterling-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-stonewall-county`,
  locales: {
    en: `Stonewall County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1362,
  coordinates: [-100.2540175,33.178922],
  polygon: RegionPolygons[`united-states-of-america-texas-stonewall-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-sutton-county`,
  locales: {
    en: `Sutton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3758,
  coordinates: [-100.53843850000001,30.499071],
  polygon: RegionPolygons[`united-states-of-america-texas-sutton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-swisher-county`,
  locales: {
    en: `Swisher County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7462,
  coordinates: [-101.7350275,34.53024],
  polygon: RegionPolygons[`united-states-of-america-texas-swisher-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-taylor-county`,
  locales: {
    en: `Taylor County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 137640,
  coordinates: [-99.89074500000001,32.3020335],
  polygon: RegionPolygons[`united-states-of-america-texas-taylor-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-terrell-county`,
  locales: {
    en: `Terrell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 823,
  coordinates: [-102.106647,30.21922],
  polygon: RegionPolygons[`united-states-of-america-texas-terrell-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-terry-county`,
  locales: {
    en: `Terry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12287,
  coordinates: [-102.335476,33.1741315],
  polygon: RegionPolygons[`united-states-of-america-texas-terry-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-throckmorton-county`,
  locales: {
    en: `Throckmorton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1515,
  coordinates: [-99.2116595,33.177718999999996],
  polygon: RegionPolygons[`united-states-of-america-texas-throckmorton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-titus-county`,
  locales: {
    en: `Titus County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 33033,
  coordinates: [-94.9674565,33.1902285],
  polygon: RegionPolygons[`united-states-of-america-texas-titus-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-tom-green-county`,
  locales: {
    en: `Tom Green County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 118189,
  coordinates: [-100.68959050000001,31.3958185],
  polygon: RegionPolygons[`united-states-of-america-texas-tom-green-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-trinity-county`,
  locales: {
    en: `Trinity County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14740,
  coordinates: [-95.138864,31.105748],
  polygon: RegionPolygons[`united-states-of-america-texas-trinity-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-tyler-county`,
  locales: {
    en: `Tyler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21696,
  coordinates: [-94.358245,30.7924925],
  polygon: RegionPolygons[`united-states-of-america-texas-tyler-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-upshur-county`,
  locales: {
    en: `Upshur County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41260,
  coordinates: [-94.9128805,32.7123795],
  polygon: RegionPolygons[`united-states-of-america-texas-upshur-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-upton-county`,
  locales: {
    en: `Upton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 3671,
  coordinates: [-102.046926,31.3655555],
  polygon: RegionPolygons[`united-states-of-america-texas-upton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-uvalde-county`,
  locales: {
    en: `Uvalde County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26846,
  coordinates: [-99.7619575,29.356916],
  polygon: RegionPolygons[`united-states-of-america-texas-uvalde-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-val-verde-county`,
  locales: {
    en: `Val Verde County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49208,
  coordinates: [-101.2300305,29.7633005],
  polygon: RegionPolygons[`united-states-of-america-texas-val-verde-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-van-zandt-county`,
  locales: {
    en: `Van Zandt County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 56019,
  coordinates: [-95.762947,32.596861000000004],
  polygon: RegionPolygons[`united-states-of-america-texas-van-zandt-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-victoria-county`,
  locales: {
    en: `Victoria County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 92035,
  coordinates: [-96.97589149999999,28.7959645],
  polygon: RegionPolygons[`united-states-of-america-texas-victoria-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-walker-county`,
  locales: {
    en: `Walker County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 72480,
  coordinates: [-95.5952705,30.7812335],
  polygon: RegionPolygons[`united-states-of-america-texas-walker-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-waller-county`,
  locales: {
    en: `Waller County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 53126,
  coordinates: [-95.995436,29.986794500000002],
  polygon: RegionPolygons[`united-states-of-america-texas-waller-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-ward-county`,
  locales: {
    en: `Ward County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11720,
  coordinates: [-103.1890665,31.459402],
  polygon: RegionPolygons[`united-states-of-america-texas-ward-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35108,
  coordinates: [-96.43956499999999,30.221964],
  polygon: RegionPolygons[`united-states-of-america-texas-washington-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wharton-county`,
  locales: {
    en: `Wharton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 41619,
  coordinates: [-96.2411315,29.298548500000003],
  polygon: RegionPolygons[`united-states-of-america-texas-wharton-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wheeler-county`,
  locales: {
    en: `Wheeler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5191,
  coordinates: [-100.2702715,35.400999],
  polygon: RegionPolygons[`united-states-of-america-texas-wheeler-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wichita-county`,
  locales: {
    en: `Wichita County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 132064,
  coordinates: [-98.68810199999999,34.023289500000004],
  polygon: RegionPolygons[`united-states-of-america-texas-wichita-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wilbarger-county`,
  locales: {
    en: `Wilbarger County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 12820,
  coordinates: [-99.214004,34.1464225],
  polygon: RegionPolygons[`united-states-of-america-texas-wilbarger-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-willacy-county`,
  locales: {
    en: `Willacy County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21515,
  coordinates: [-97.6139585,26.4555365],
  polygon: RegionPolygons[`united-states-of-america-texas-willacy-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wilson-county`,
  locales: {
    en: `Wilson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50224,
  coordinates: [-98.0678895,29.162042],
  polygon: RegionPolygons[`united-states-of-america-texas-wilson-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-winkler-county`,
  locales: {
    en: `Winkler County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7720,
  coordinates: [-103.06323850000001,31.8692865],
  polygon: RegionPolygons[`united-states-of-america-texas-winkler-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wise-county`,
  locales: {
    en: `Wise County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 68305,
  coordinates: [-97.65232850000001,33.212448],
  polygon: RegionPolygons[`united-states-of-america-texas-wise-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-wood-county`,
  locales: {
    en: `Wood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45129,
  coordinates: [-95.4087495,32.778699],
  polygon: RegionPolygons[`united-states-of-america-texas-wood-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-yoakum-county`,
  locales: {
    en: `Yoakum County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8591,
  coordinates: [-102.8297575,33.17366],
  polygon: RegionPolygons[`united-states-of-america-texas-yoakum-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-young-county`,
  locales: {
    en: `Young County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18045,
  coordinates: [-98.68730199999999,33.174917],
  polygon: RegionPolygons[`united-states-of-america-texas-young-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-zapata-county`,
  locales: {
    en: `Zapata County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14190,
  coordinates: [-99.2040895,26.945424000000003],
  polygon: RegionPolygons[`united-states-of-america-texas-zapata-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-texas-zavala-county`,
  locales: {
    en: `Zavala County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11983,
  coordinates: [-99.76167849999999,28.8659505],
  polygon: RegionPolygons[`united-states-of-america-texas-zavala-county`],
  parentId: `united-states-of-america-texas`,
  dataSource: `https://www.dshs.state.tx.us/news/updates.shtm`
}, {
  id: `united-states-of-america-washington-chelan-county`,
  locales: {
    en: `Chelan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 77036,
  coordinates: [-120.52038999999999,47.905806999999996],
  polygon: RegionPolygons[`united-states-of-america-washington-chelan-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-clallam-county`,
  locales: {
    en: `Clallam County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 76737,
  coordinates: [-123.825558,48.12876],
  polygon: RegionPolygons[`united-states-of-america-washington-clallam-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-clark-county`,
  locales: {
    en: `Clark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 481857,
  coordinates: [-122.5203415,45.80125099999999],
  polygon: RegionPolygons[`united-states-of-america-washington-clark-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-columbia-county`,
  locales: {
    en: `Columbia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4059,
  coordinates: [-117.92289099999999,46.3118295],
  polygon: RegionPolygons[`united-states-of-america-washington-columbia-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-franklin-county`,
  locales: {
    en: `Franklin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 94347,
  coordinates: [-118.8288585,46.465897],
  polygon: RegionPolygons[`united-states-of-america-washington-franklin-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-grant-county`,
  locales: {
    en: `Grant County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 97331,
  coordinates: [-119.508134,47.293631],
  polygon: RegionPolygons[`united-states-of-america-washington-grant-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-grays-harbor-county`,
  locales: {
    en: `Grays Harbor County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 73901,
  coordinates: [-123.756045,47.162482],
  polygon: RegionPolygons[`united-states-of-america-washington-grays-harbor-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-island-county`,
  locales: {
    en: `Island County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 84460,
  coordinates: [-122.559821,48.157794],
  polygon: RegionPolygons[`united-states-of-america-washington-island-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 31729,
  coordinates: [-123.61055200000001,47.8304245],
  polygon: RegionPolygons[`united-states-of-america-washington-jefferson-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-king-county`,
  locales: {
    en: `King County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2233163,
  coordinates: [-121.7969185,47.4324805],
  polygon: RegionPolygons[`united-states-of-america-washington-king-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-kitsap-county`,
  locales: {
    en: `Kitsap County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 269805,
  coordinates: [-122.7433825,47.6719585],
  polygon: RegionPolygons[`united-states-of-america-washington-kitsap-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-kittitas-county`,
  locales: {
    en: `Kittitas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 47364,
  coordinates: [-120.688514,47.167153],
  polygon: RegionPolygons[`united-states-of-america-washington-kittitas-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-klickitat-county`,
  locales: {
    en: `Klickitat County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22107,
  coordinates: [-120.739452,45.825073],
  polygon: RegionPolygons[`united-states-of-america-washington-klickitat-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-lewis-county`,
  locales: {
    en: `Lewis County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 79604,
  coordinates: [-122.3615475,46.5893095],
  polygon: RegionPolygons[`united-states-of-america-washington-lewis-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 10740,
  coordinates: [-118.399462,47.609032],
  polygon: RegionPolygons[`united-states-of-america-washington-lincoln-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-mason-county`,
  locales: {
    en: `Mason County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 65507,
  coordinates: [-123.153076,47.344863000000004],
  polygon: RegionPolygons[`united-states-of-america-washington-mason-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-pierce-county`,
  locales: {
    en: `Pierce County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 891299,
  coordinates: [-122.10319799999999,47.066154],
  polygon: RegionPolygons[`united-states-of-america-washington-pierce-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-skagit-county`,
  locales: {
    en: `Skagit County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 128206,
  coordinates: [-121.712645,48.476543],
  polygon: RegionPolygons[`united-states-of-america-washington-skagit-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-snohomish-county`,
  locales: {
    en: `Snohomish County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 814901,
  coordinates: [-121.65598399999999,48.037258],
  polygon: RegionPolygons[`united-states-of-america-washington-snohomish-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-spokane-county`,
  locales: {
    en: `Spokane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 514631,
  coordinates: [-117.431769,47.653568500000006],
  polygon: RegionPolygons[`united-states-of-america-washington-spokane-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-thurston-county`,
  locales: {
    en: `Thurston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 286419,
  coordinates: [-122.7023935,46.9761355],
  polygon: RegionPolygons[`united-states-of-america-washington-thurston-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-whatcom-county`,
  locales: {
    en: `Whatcom County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 225685,
  coordinates: [-121.884438,48.821715499999996],
  polygon: RegionPolygons[`united-states-of-america-washington-whatcom-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-yakima-county`,
  locales: {
    en: `Yakima County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 251446,
  coordinates: [-120.69510149999999,46.564808],
  polygon: RegionPolygons[`united-states-of-america-washington-yakima-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-(unassigned)`,
  locales: {
    en: `(unassigned)`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-washington-(unassigned)`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-skamania-county`,
  locales: {
    en: `Skamania County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11924,
  coordinates: [-121.881879,45.967983000000004],
  polygon: RegionPolygons[`united-states-of-america-washington-skamania-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-wahkiakum-county`,
  locales: {
    en: `Wahkiakum County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4426,
  coordinates: [-123.4704835,46.265129],
  polygon: RegionPolygons[`united-states-of-america-washington-wahkiakum-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-garfield-county`,
  locales: {
    en: `Garfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2247,
  coordinates: [-117.5460095,46.350524],
  polygon: RegionPolygons[`united-states-of-america-washington-garfield-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-stevens-county`,
  locales: {
    en: `Stevens County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45260,
  coordinates: [-117.91595799999999,48.396499000000006],
  polygon: RegionPolygons[`united-states-of-america-washington-stevens-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-walla-walla-county`,
  locales: {
    en: `Walla Walla County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 60922,
  coordinates: [-118.516355,46.303333499999994],
  polygon: RegionPolygons[`united-states-of-america-washington-walla-walla-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-whitman-county`,
  locales: {
    en: `Whitman County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 49791,
  coordinates: [-117.64426,46.838819],
  polygon: RegionPolygons[`united-states-of-america-washington-whitman-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19759,
  coordinates: [-118.6641215,46.999704],
  polygon: RegionPolygons[`united-states-of-america-washington-adams-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-asotin-county`,
  locales: {
    en: `Asotin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22610,
  coordinates: [-117.1980595,46.2288635],
  polygon: RegionPolygons[`united-states-of-america-washington-asotin-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-benton-county`,
  locales: {
    en: `Benton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 201877,
  coordinates: [-119.40769,46.281031],
  polygon: RegionPolygons[`united-states-of-america-washington-benton-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-cowlitz-county`,
  locales: {
    en: `Cowlitz County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 108987,
  coordinates: [-122.7288965,46.117914],
  polygon: RegionPolygons[`united-states-of-america-washington-cowlitz-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-douglas-county`,
  locales: {
    en: `Douglas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42907,
  coordinates: [-119.6344735,47.6852815],
  polygon: RegionPolygons[`united-states-of-america-washington-douglas-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-ferry-county`,
  locales: {
    en: `Ferry County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7649,
  coordinates: [-118.48731599999999,48.4155455],
  polygon: RegionPolygons[`united-states-of-america-washington-ferry-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-okanogan-county`,
  locales: {
    en: `Okanogan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42132,
  coordinates: [-119.85787099999999,48.470757000000006],
  polygon: RegionPolygons[`united-states-of-america-washington-okanogan-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-pacific-county`,
  locales: {
    en: `Pacific County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 22036,
  coordinates: [-123.72830300000001,46.517013500000004],
  polygon: RegionPolygons[`united-states-of-america-washington-pacific-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-pend-oreille-county`,
  locales: {
    en: `Pend Oreille County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13602,
  coordinates: [-117.3308095,48.5229615],
  polygon: RegionPolygons[`united-states-of-america-washington-pend-oreille-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-washington-san-juan-county`,
  locales: {
    en: `San Juan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17128,
  coordinates: [-122.989615,48.570243500000004],
  polygon: RegionPolygons[`united-states-of-america-washington-san-juan-county`],
  parentId: `united-states-of-america-washington`,
  dataSource: `https://www.doh.wa.gov/Emergencies/Coronavirus`
}, {
  id: `united-states-of-america-wisconsin-bayfield-county`,
  locales: {
    en: `Bayfield County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15042,
  coordinates: [-91.1523555,46.5779685],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-bayfield-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-brown-county`,
  locales: {
    en: `Brown County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 263378,
  coordinates: [-88.00379000000001,44.460046000000006],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-brown-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-calumet-county`,
  locales: {
    en: `Calumet County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 50159,
  coordinates: [-88.22310949999999,44.0678065],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-calumet-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-columbia-county`,
  locales: {
    en: `Columbia County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 57358,
  coordinates: [-89.39524750000001,43.46226849999999],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-columbia-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-dane-county`,
  locales: {
    en: `Dane County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 542364,
  coordinates: [-89.4235435,43.069541],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-dane-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-eau-claire-county`,
  locales: {
    en: `Eau Claire County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 104534,
  coordinates: [-91.286351,44.726778499999995],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-eau-claire-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-fond-du-lac-county`,
  locales: {
    en: `Fond du Lac County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 103066,
  coordinates: [-88.5234625,43.7405715],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-fond-du-lac-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-kenosha-county`,
  locales: {
    en: `Kenosha County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 169290,
  coordinates: [-88.053184,42.5808145],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-kenosha-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-la-crosse-county`,
  locales: {
    en: `La Crosse County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 118230,
  coordinates: [-91.1678275,43.90481],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-la-crosse-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-milwaukee-county`,
  locales: {
    en: `Milwaukee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 948201,
  coordinates: [-87.94847250000001,43.017386],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-milwaukee-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-outagamie-county`,
  locales: {
    en: `Outagamie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 187365,
  coordinates: [-88.46518649999999,44.416275999999996],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-outagamie-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-ozaukee-county`,
  locales: {
    en: `Ozaukee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 89147,
  coordinates: [-87.928296,43.367539],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-ozaukee-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-pierce-county`,
  locales: {
    en: `Pierce County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 42555,
  coordinates: [-92.47159500000001,44.7007885],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-pierce-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-racine-county`,
  locales: {
    en: `Racine County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 196584,
  coordinates: [-88.0365295,42.72707],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-racine-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-sauk-county`,
  locales: {
    en: `Sauk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64249,
  coordinates: [-89.9558805,43.39317],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-sauk-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-sheboygan-county`,
  locales: {
    en: `Sheboygan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 115456,
  coordinates: [-87.9311795,43.7172725],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-sheboygan-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-walworth-county`,
  locales: {
    en: `Walworth County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 103718,
  coordinates: [-88.5409145,42.66751],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-walworth-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-washington-county`,
  locales: {
    en: `Washington County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 135693,
  coordinates: [-88.2293215,43.3678245],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-washington-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-waukesha-county`,
  locales: {
    en: `Waukesha County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 403072,
  coordinates: [-88.30268950000001,43.018702],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-waukesha-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-winnebago-county`,
  locales: {
    en: `Winnebago County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 171020,
  coordinates: [-88.644934,44.0685395],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-winnebago-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-wood-county`,
  locales: {
    en: `Wood County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 73055,
  coordinates: [-90.02142649999999,44.466415999999995],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-wood-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-adams-county`,
  locales: {
    en: `Adams County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20348,
  coordinates: [-89.8114625,43.945259500000006],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-adams-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-ashland-county`,
  locales: {
    en: `Ashland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15600,
  coordinates: [-90.6148065,46.5293125],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-ashland-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-barron-county`,
  locales: {
    en: `Barron County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45164,
  coordinates: [-91.8483795,45.423232999999996],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-barron-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-buffalo-county`,
  locales: {
    en: `Buffalo County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13125,
  coordinates: [-91.8063705,44.311074500000004],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-buffalo-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-burnett-county`,
  locales: {
    en: `Burnett County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15392,
  coordinates: [-92.459242,45.8986695],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-burnett-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-chippewa-county`,
  locales: {
    en: `Chippewa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 64135,
  coordinates: [-91.2943245,45.073983],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-chippewa-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-clark-county`,
  locales: {
    en: `Clark County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 34709,
  coordinates: [-90.6192,44.728065],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-clark-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-crawford-county`,
  locales: {
    en: `Crawford County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16291,
  coordinates: [-90.940501,43.206361],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-crawford-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-dodge-county`,
  locales: {
    en: `Dodge County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 87847,
  coordinates: [-88.7047825,43.4141185],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-dodge-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-door-county`,
  locales: {
    en: `Door County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27610,
  coordinates: [-87.2707365,45.052065999999996],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-door-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-douglas-county`,
  locales: {
    en: `Douglas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43208,
  coordinates: [-91.92256950000001,46.4572665],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-douglas-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-dunn-county`,
  locales: {
    en: `Dunn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 45131,
  coordinates: [-91.9037165,44.9465935],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-dunn-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-florence-county`,
  locales: {
    en: `Florence County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4321,
  coordinates: [-88.371228,45.8671375],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-florence-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-forest-county`,
  locales: {
    en: `Forest County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8991,
  coordinates: [-88.73643200000001,45.7253055],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-forest-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-grant-county`,
  locales: {
    en: `Grant County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51554,
  coordinates: [-90.7915955,42.859257],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-grant-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-green-county`,
  locales: {
    en: `Green County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 36929,
  coordinates: [-89.6022205,42.6788355],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-green-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-green-lake-county`,
  locales: {
    en: `Green Lake County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 18918,
  coordinates: [-89.06556699999999,43.8074785],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-green-lake-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-iowa-county`,
  locales: {
    en: `Iowa County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23771,
  coordinates: [-90.13398,43.011221000000006],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-iowa-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-iron-county`,
  locales: {
    en: `Iron County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 5676,
  coordinates: [-90.2405085,46.2854815],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-iron-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-jackson-county`,
  locales: {
    en: `Jackson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20478,
  coordinates: [-90.7389105,44.333881],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-jackson-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-jefferson-county`,
  locales: {
    en: `Jefferson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 85129,
  coordinates: [-88.774666,43.020219],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-jefferson-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-juneau-county`,
  locales: {
    en: `Juneau County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 26617,
  coordinates: [-90.049192,43.9452],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-juneau-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-kewaunee-county`,
  locales: {
    en: `Kewaunee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20383,
  coordinates: [-87.569711,44.502105],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-kewaunee-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-lafayette-county`,
  locales: {
    en: `Lafayette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16665,
  coordinates: [-90.1322445,42.659671],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-lafayette-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-langlade-county`,
  locales: {
    en: `Langlade County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19268,
  coordinates: [-89.0320725,45.249466],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-langlade-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 27689,
  coordinates: [-89.735818,45.3372255],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-lincoln-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-manitowoc-county`,
  locales: {
    en: `Manitowoc County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 79074,
  coordinates: [-87.7753295,44.1096405],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-manitowoc-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-marathon-county`,
  locales: {
    en: `Marathon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 135428,
  coordinates: [-89.769999,44.9009845],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-marathon-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-marinette-county`,
  locales: {
    en: `Marinette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40434,
  coordinates: [-88.00762449999999,45.3806155],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-marinette-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-marquette-county`,
  locales: {
    en: `Marquette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15434,
  coordinates: [-89.383781,43.812715],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-marquette-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-menominee-county`,
  locales: {
    en: `Menominee County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4658,
  coordinates: [-88.732954,44.986731500000005],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-menominee-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-monroe-county`,
  locales: {
    en: `Monroe County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46051,
  coordinates: [-90.644889,43.9431965],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-monroe-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-oconto-county`,
  locales: {
    en: `Oconto County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 37830,
  coordinates: [-88.2200685,45.025521499999996],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-oconto-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-oneida-county`,
  locales: {
    en: `Oneida County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 35470,
  coordinates: [-89.5453365,45.683113],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-oneida-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-pepin-county`,
  locales: {
    en: `Pepin County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7289,
  coordinates: [-91.983238,44.545776000000004],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-pepin-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-polk-county`,
  locales: {
    en: `Polk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43598,
  coordinates: [-92.5212785,45.469117],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-polk-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-portage-county`,
  locales: {
    en: `Portage County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 70942,
  coordinates: [-89.53433799999999,44.464245500000004],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-portage-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-price-county`,
  locales: {
    en: `Price County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13397,
  coordinates: [-90.3610415,45.679584000000006],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-price-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-richland-county`,
  locales: {
    en: `Richland County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 17377,
  coordinates: [-90.431809,43.35973],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-richland-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-rock-county`,
  locales: {
    en: `Rock County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 163129,
  coordinates: [-89.07281,42.669664999999995],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-rock-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-rusk-county`,
  locales: {
    en: `Rusk County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14147,
  coordinates: [-91.1100305,45.4651145],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-rusk-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-sawyer-county`,
  locales: {
    en: `Sawyer County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 16489,
  coordinates: [-91.1143865,45.8974295],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-sawyer-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-shawano-county`,
  locales: {
    en: `Shawano County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 40796,
  coordinates: [-88.7332505,44.807122500000006],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-shawano-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-st-croix-county`,
  locales: {
    en: `St. Croix County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 89694,
  coordinates: [-92.469596,45.033633],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-st-croix-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-taylor-county`,
  locales: {
    en: `Taylor County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20412,
  coordinates: [-90.484035,45.206809],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-taylor-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-trempealeau-county`,
  locales: {
    en: `Trempealeau County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29442,
  coordinates: [-91.382407,44.290606999999994],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-trempealeau-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-vernon-county`,
  locales: {
    en: `Vernon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30785,
  coordinates: [-90.7921605,43.5767915],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-vernon-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-vilas-county`,
  locales: {
    en: `Vilas County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 21938,
  coordinates: [-89.488258,46.0781645],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-vilas-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-washburn-county`,
  locales: {
    en: `Washburn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 15878,
  coordinates: [-91.7954705,45.897601],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-washburn-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-waupaca-county`,
  locales: {
    en: `Waupaca County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 51128,
  coordinates: [-88.9150255,44.4619935],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-waupaca-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wisconsin-waushara-county`,
  locales: {
    en: `Waushara County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 24263,
  coordinates: [-89.2420865,44.1139125],
  polygon: RegionPolygons[`united-states-of-america-wisconsin-waushara-county`],
  parentId: `united-states-of-america-wisconsin`,
  dataSource: `https://services1.arcgis.com/ISZ89Z51ft1G16OK/arcgis/rest/services/COVID19_WI/FeatureServer/0//query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=NAME%2CPOSITIVE%2CDATE%2CCMNTY_SPRD&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=NAME+ASC&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`
}, {
  id: `united-states-of-america-wyoming-albany-county`,
  locales: {
    en: `Albany County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38601,
  coordinates: [-105.797347,41.715061000000006],
  polygon: RegionPolygons[`united-states-of-america-wyoming-albany-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-big-horn-county`,
  locales: {
    en: `Big Horn County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 11881,
  coordinates: [-107.883157,44.5836155],
  polygon: RegionPolygons[`united-states-of-america-wyoming-big-horn-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-campbell-county`,
  locales: {
    en: `Campbell County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 46140,
  coordinates: [-105.54976,44.247955],
  polygon: RegionPolygons[`united-states-of-america-wyoming-campbell-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-carbon-county`,
  locales: {
    en: `Carbon County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 14971,
  coordinates: [-106.999143,41.7167395],
  polygon: RegionPolygons[`united-states-of-america-wyoming-carbon-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-converse-county`,
  locales: {
    en: `Converse County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13640,
  coordinates: [-105.4853365,42.8942495],
  polygon: RegionPolygons[`united-states-of-america-wyoming-converse-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-crook-county`,
  locales: {
    en: `Crook County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7450,
  coordinates: [-104.570319,44.588306],
  polygon: RegionPolygons[`united-states-of-america-wyoming-crook-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-fremont-county`,
  locales: {
    en: `Fremont County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 39531,
  coordinates: [-108.777531,43.134889],
  polygon: RegionPolygons[`united-states-of-america-wyoming-fremont-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-goshen-county`,
  locales: {
    en: `Goshen County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 13376,
  coordinates: [-104.35408949999999,42.08802],
  polygon: RegionPolygons[`united-states-of-america-wyoming-goshen-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-hot-springs-county`,
  locales: {
    en: `Hot Springs County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 4555,
  coordinates: [-108.454027,43.7696855],
  polygon: RegionPolygons[`united-states-of-america-wyoming-hot-springs-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-johnson-county`,
  locales: {
    en: `Johnson County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8460,
  coordinates: [-106.689049,44.0277255],
  polygon: RegionPolygons[`united-states-of-america-wyoming-johnson-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-laramie-county`,
  locales: {
    en: `Laramie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 98976,
  coordinates: [-104.66629549999999,41.3273515],
  polygon: RegionPolygons[`united-states-of-america-wyoming-laramie-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-lincoln-county`,
  locales: {
    en: `Lincoln County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 19434,
  coordinates: [-110.54675850000001,42.446712500000004],
  polygon: RegionPolygons[`united-states-of-america-wyoming-lincoln-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-natrona-county`,
  locales: {
    en: `Natrona County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 79115,
  coordinates: [-106.8070975,42.965925],
  polygon: RegionPolygons[`united-states-of-america-wyoming-natrona-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-niobrara-county`,
  locales: {
    en: `Niobrara County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 2388,
  coordinates: [-104.47626199999999,43.0561335],
  polygon: RegionPolygons[`united-states-of-america-wyoming-niobrara-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-park-county`,
  locales: {
    en: `Park County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 29324,
  coordinates: [-109.803725,44.4095985],
  polygon: RegionPolygons[`united-states-of-america-wyoming-park-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-platte-county`,
  locales: {
    en: `Platte County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 8566,
  coordinates: [-104.9699245,42.1312375],
  polygon: RegionPolygons[`united-states-of-america-wyoming-platte-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-sheridan-county`,
  locales: {
    en: `Sheridan County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 30233,
  coordinates: [-106.96070950000001,44.7791285],
  polygon: RegionPolygons[`united-states-of-america-wyoming-sheridan-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-sublette-county`,
  locales: {
    en: `Sublette County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 9813,
  coordinates: [-109.833639,42.8640505],
  polygon: RegionPolygons[`united-states-of-america-wyoming-sublette-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-sweetwater-county`,
  locales: {
    en: `Sweetwater County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 43051,
  coordinates: [-108.779115,41.634037],
  polygon: RegionPolygons[`united-states-of-america-wyoming-sweetwater-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-teton-county`,
  locales: {
    en: `Teton County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 23081,
  coordinates: [-110.553385,43.950812],
  polygon: RegionPolygons[`united-states-of-america-wyoming-teton-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-uinta-county`,
  locales: {
    en: `Uinta County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 20299,
  coordinates: [-110.5473615,41.2872955],
  polygon: RegionPolygons[`united-states-of-america-wyoming-uinta-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-washakie-county`,
  locales: {
    en: `Washakie County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 7885,
  coordinates: [-107.830746,43.834370500000006],
  polygon: RegionPolygons[`united-states-of-america-wyoming-washakie-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-states-of-america-wyoming-weston-county`,
  locales: {
    en: `Weston County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 6967,
  coordinates: [-104.567947,43.8400335],
  polygon: RegionPolygons[`united-states-of-america-wyoming-weston-county`],
  parentId: `united-states-of-america-wyoming`,
  dataSource: `https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/`
}, {
  id: `united-kingdom-barking-and-dagenham`,
  locales: {
    en: `Barking and Dagenham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.12030826146707341,51.54832672819592],
  polygon: RegionPolygons[`united-kingdom-barking-and-dagenham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-barnet`,
  locales: {
    en: `Barnet`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.21207455134947395,51.61140902605567],
  polygon: RegionPolygons[`united-kingdom-barnet`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-barnsley`,
  locales: {
    en: `Barnsley`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.5707457753972278,53.49588354104256],
  polygon: RegionPolygons[`united-kingdom-barnsley`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bath-and-north-east-somerset`,
  locales: {
    en: `Bath and North East Somerset`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.49667670271765,51.34663361320065],
  polygon: RegionPolygons[`united-kingdom-bath-and-north-east-somerset`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bedford`,
  locales: {
    en: `Bedford`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.4537910627573467,52.18762872368663],
  polygon: RegionPolygons[`united-kingdom-bedford`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bexley`,
  locales: {
    en: `Bexley`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.15247684063368183,51.45065827116227],
  polygon: RegionPolygons[`united-kingdom-bexley`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-birmingham`,
  locales: {
    en: `Birmingham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.8858483547677736,52.476461290855866],
  polygon: RegionPolygons[`united-kingdom-birmingham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-blackburn-with-darwen`,
  locales: {
    en: `Blackburn with Darwen`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.441111619305815,53.69625763613098],
  polygon: RegionPolygons[`united-kingdom-blackburn-with-darwen`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-blackpool`,
  locales: {
    en: `Blackpool`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-3.00525353831452,53.83887360262369],
  polygon: RegionPolygons[`united-kingdom-blackpool`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bolton`,
  locales: {
    en: `Bolton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.4471864488955077,53.58462916755201],
  polygon: RegionPolygons[`united-kingdom-bolton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bournemouth-christchurch-and-poole`,
  locales: {
    en: `Bournemouth, Christchurch and Poole`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-bournemouth-christchurch-and-poole`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bracknell-forest`,
  locales: {
    en: `Bracknell Forest`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.7675701597850377,51.400511862532426],
  polygon: RegionPolygons[`united-kingdom-bracknell-forest`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bradford`,
  locales: {
    en: `Bradford`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.812523939378309,53.84824612590796],
  polygon: RegionPolygons[`united-kingdom-bradford`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-brent`,
  locales: {
    en: `Brent`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.2522658957045394,51.56151713725606],
  polygon: RegionPolygons[`united-kingdom-brent`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-brighton-and-hove`,
  locales: {
    en: `Brighton and Hove`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.0956836538794903,50.83370545060512],
  polygon: RegionPolygons[`united-kingdom-brighton-and-hove`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bristol-city-of`,
  locales: {
    en: `Bristol, City of`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-bristol-city-of`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bromley`,
  locales: {
    en: `Bromley`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.044925265988212004,51.36398397443085],
  polygon: RegionPolygons[`united-kingdom-bromley`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-buckinghamshire`,
  locales: {
    en: `Buckinghamshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 781167,
  coordinates: [-0.8048032292356311,51.77382975993544],
  polygon: RegionPolygons[`united-kingdom-buckinghamshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-bury`,
  locales: {
    en: `Bury`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.313881069755581,53.584358023753765],
  polygon: RegionPolygons[`united-kingdom-bury`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-calderdale`,
  locales: {
    en: `Calderdale`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.9539011830931372,53.754367784295795],
  polygon: RegionPolygons[`united-kingdom-calderdale`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-cambridgeshire`,
  locales: {
    en: `Cambridgeshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 830279,
  coordinates: [0.02921563059686605,52.3633803375825],
  polygon: RegionPolygons[`united-kingdom-cambridgeshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-camden`,
  locales: {
    en: `Camden`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.15101884604291627,51.534399929962774],
  polygon: RegionPolygons[`united-kingdom-camden`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-central-bedfordshire`,
  locales: {
    en: `Central Bedfordshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.40933641209576876,52.005637315759486],
  polygon: RegionPolygons[`united-kingdom-central-bedfordshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-cheshire-east`,
  locales: {
    en: `Cheshire East`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.3151145353575373,53.16374492069153],
  polygon: RegionPolygons[`united-kingdom-cheshire-east`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-cheshire-west-and-chester`,
  locales: {
    en: `Cheshire West and Chester`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.753126456920455,53.1486968423354],
  polygon: RegionPolygons[`united-kingdom-cheshire-west-and-chester`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-cornwall-and-isles-of-scilly`,
  locales: {
    en: `Cornwall and Isles of Scilly`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-cornwall-and-isles-of-scilly`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-county-durham`,
  locales: {
    en: `County Durham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.799640245530711,54.67953095184194],
  polygon: RegionPolygons[`united-kingdom-county-durham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-coventry`,
  locales: {
    en: `Coventry`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.547535670934451,52.397590135426384],
  polygon: RegionPolygons[`united-kingdom-coventry`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-croydon`,
  locales: {
    en: `Croydon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.07526119659695496,51.366968289205175],
  polygon: RegionPolygons[`united-kingdom-croydon`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-cumbria`,
  locales: {
    en: `Cumbria`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 497874,
  coordinates: [-2.894685635497069,54.65147772950007],
  polygon: RegionPolygons[`united-kingdom-cumbria`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-darlington`,
  locales: {
    en: `Darlington`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.5471868553890715,54.5325890167197],
  polygon: RegionPolygons[`united-kingdom-darlington`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-derby`,
  locales: {
    en: `Derby`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.473741726249699,52.889821072034806],
  polygon: RegionPolygons[`united-kingdom-derby`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-derbyshire`,
  locales: {
    en: `Derbyshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1032267,
  coordinates: [-1.596395738322684,53.10898082160762],
  polygon: RegionPolygons[`united-kingdom-derbyshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-devon`,
  locales: {
    en: `Devon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1159832,
  coordinates: [-3.7468521474031253,50.73217421134865],
  polygon: RegionPolygons[`united-kingdom-devon`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-doncaster`,
  locales: {
    en: `Doncaster`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.1025886705806727,53.51311636043167],
  polygon: RegionPolygons[`united-kingdom-doncaster`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-dorset`,
  locales: {
    en: `Dorset`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 759768,
  coordinates: [-2.3107224188537714,50.83684499757297],
  polygon: RegionPolygons[`united-kingdom-dorset`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-dudley`,
  locales: {
    en: `Dudley`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.089965285219762,52.49018902145616],
  polygon: RegionPolygons[`united-kingdom-dudley`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-ealing`,
  locales: {
    en: `Ealing`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.31465226938672686,51.52145498321087],
  polygon: RegionPolygons[`united-kingdom-ealing`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-east-riding-of-yorkshire`,
  locales: {
    en: `East Riding of Yorkshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 594825,
  coordinates: [-0.4702299669435206,53.88757670754899],
  polygon: RegionPolygons[`united-kingdom-east-riding-of-yorkshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-east-sussex`,
  locales: {
    en: `East Sussex`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 820842,
  coordinates: [0.3705739670149626,50.94161367390575],
  polygon: RegionPolygons[`united-kingdom-east-sussex`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-enfield`,
  locales: {
    en: `Enfield`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.08400660437129659,51.6391351386757],
  polygon: RegionPolygons[`united-kingdom-enfield`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-essex`,
  locales: {
    en: `Essex`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1773154,
  coordinates: [0.6384996882008807,51.801330145419854],
  polygon: RegionPolygons[`united-kingdom-essex`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-gateshead`,
  locales: {
    en: `Gateshead`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.6728933342100163,54.94435801006409],
  polygon: RegionPolygons[`united-kingdom-gateshead`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-gloucestershire`,
  locales: {
    en: `Gloucestershire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 882888,
  coordinates: [-2.1589416167073807,51.84146129050612],
  polygon: RegionPolygons[`united-kingdom-gloucestershire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-greenwich`,
  locales: {
    en: `Greenwich`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.04868472621913611,51.467168891331255],
  polygon: RegionPolygons[`united-kingdom-greenwich`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hackney-and-city-of-london`,
  locales: {
    en: `Hackney and City of London`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-hackney-and-city-of-london`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-halton`,
  locales: {
    en: `Halton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-3.055812369847803,53.360951641505125],
  polygon: RegionPolygons[`united-kingdom-halton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hammersmith-and-fulham`,
  locales: {
    en: `Hammersmith and Fulham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.2078500022258254,51.49955709528368],
  polygon: RegionPolygons[`united-kingdom-hammersmith-and-fulham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hampshire`,
  locales: {
    en: `Hampshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1800511,
  coordinates: [-1.3405973986010906,51.05528290387548],
  polygon: RegionPolygons[`united-kingdom-hampshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-haringey`,
  locales: {
    en: `Haringey`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.09633226132478967,51.583918870809214],
  polygon: RegionPolygons[`united-kingdom-haringey`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-harrow`,
  locales: {
    en: `Harrow`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.3332945418096642,51.593362738849294],
  polygon: RegionPolygons[`united-kingdom-harrow`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hartlepool`,
  locales: {
    en: `Hartlepool`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.290542151179023,54.666020093800526],
  polygon: RegionPolygons[`united-kingdom-hartlepool`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-havering`,
  locales: {
    en: `Havering`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.23417727985756187,51.55322306998866],
  polygon: RegionPolygons[`united-kingdom-havering`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-herefordshire-county-of`,
  locales: {
    en: `Herefordshire, County of`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-herefordshire-county-of`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hertfordshire`,
  locales: {
    en: `Hertfordshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1154766,
  coordinates: [-0.25780819354329765,51.83029918091245],
  polygon: RegionPolygons[`united-kingdom-hertfordshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hillingdon`,
  locales: {
    en: `Hillingdon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.43250037279398157,51.5343224151473],
  polygon: RegionPolygons[`united-kingdom-hillingdon`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-hounslow`,
  locales: {
    en: `Hounslow`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.3390693831954934,51.454017239454004],
  polygon: RegionPolygons[`united-kingdom-hounslow`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-isle-of-wight`,
  locales: {
    en: `Isle of Wight`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 139105,
  coordinates: [-1.2943416004999335,50.68117910350006],
  polygon: RegionPolygons[`united-kingdom-isle-of-wight`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-islington`,
  locales: {
    en: `Islington`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.1091867740503858,51.54380504037027],
  polygon: RegionPolygons[`united-kingdom-islington`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-kensington-and-chelsea`,
  locales: {
    en: `Kensington and Chelsea`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.17697333470164267,51.49734792776462],
  polygon: RegionPolygons[`united-kingdom-kensington-and-chelsea`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-kent`,
  locales: {
    en: `Kent`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1784369,
  coordinates: [0.7391297744358951,51.20639796273913],
  polygon: RegionPolygons[`united-kingdom-kent`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-kingston-upon-hull-city-of`,
  locales: {
    en: `Kingston upon Hull, City of`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-kingston-upon-hull-city-of`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-kingston-upon-thames`,
  locales: {
    en: `Kingston upon Thames`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.2657405251551097,51.403012600601016],
  polygon: RegionPolygons[`united-kingdom-kingston-upon-thames`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-kirklees`,
  locales: {
    en: `Kirklees`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.8024297176073958,53.64010463801861],
  polygon: RegionPolygons[`united-kingdom-kirklees`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-knowsley`,
  locales: {
    en: `Knowsley`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.8437495108312874,53.42208175625544],
  polygon: RegionPolygons[`united-kingdom-knowsley`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-lambeth`,
  locales: {
    en: `Lambeth`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.10314063148496189,51.45665273733394],
  polygon: RegionPolygons[`united-kingdom-lambeth`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-lancashire`,
  locales: {
    en: `Lancashire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1471979,
  coordinates: [-2.5321267362598974,53.86064036695933],
  polygon: RegionPolygons[`united-kingdom-lancashire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-leeds`,
  locales: {
    en: `Leeds`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.5114138447231653,53.80972938979946],
  polygon: RegionPolygons[`united-kingdom-leeds`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-leicester`,
  locales: {
    en: `Leicester`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.1258430644059274,52.60678925257193],
  polygon: RegionPolygons[`united-kingdom-leicester`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-leicestershire`,
  locales: {
    en: `Leicestershire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1005558,
  coordinates: [-1.1170709903839224,52.67122976369262],
  polygon: RegionPolygons[`united-kingdom-leicestershire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-lewisham`,
  locales: {
    en: `Lewisham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.020626288272609372,51.45485698096485],
  polygon: RegionPolygons[`united-kingdom-lewisham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-lincolnshire`,
  locales: {
    en: `Lincolnshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1060567,
  coordinates: [-0.22751105405745875,53.12138316510095],
  polygon: RegionPolygons[`united-kingdom-lincolnshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-liverpool`,
  locales: {
    en: `Liverpool`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.9620655980152155,53.412221738037374],
  polygon: RegionPolygons[`united-kingdom-liverpool`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-luton`,
  locales: {
    en: `Luton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.3940014311211826,51.88424937600786],
  polygon: RegionPolygons[`united-kingdom-luton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-manchester`,
  locales: {
    en: `Manchester`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.2513235753227434,53.44718915755354],
  polygon: RegionPolygons[`united-kingdom-manchester`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-medway`,
  locales: {
    en: `Medway`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.5708690730683657,51.41229721683642],
  polygon: RegionPolygons[`united-kingdom-medway`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-merton`,
  locales: {
    en: `Merton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.18562913672528225,51.40890371353552],
  polygon: RegionPolygons[`united-kingdom-merton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-middlesbrough`,
  locales: {
    en: `Middlesbrough`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.2151916162001442,54.531012885136505],
  polygon: RegionPolygons[`united-kingdom-middlesbrough`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-milton-keynes`,
  locales: {
    en: `Milton Keynes`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.7260095895209417,52.070181179218025],
  polygon: RegionPolygons[`united-kingdom-milton-keynes`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-newcastle-upon-tyne`,
  locales: {
    en: `Newcastle upon Tyne`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.6197237394090394,55.01077984411447],
  polygon: RegionPolygons[`united-kingdom-newcastle-upon-tyne`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-newham`,
  locales: {
    en: `Newham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.042922804493827016,51.52600250990787],
  polygon: RegionPolygons[`united-kingdom-newham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-norfolk`,
  locales: {
    en: `Norfolk`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 877710,
  coordinates: [0.9523097061513965,52.66413290015265],
  polygon: RegionPolygons[`united-kingdom-norfolk`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-north-east-lincolnshire`,
  locales: {
    en: `North East Lincolnshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.1301505615609193,53.553496852445065],
  polygon: RegionPolygons[`united-kingdom-north-east-lincolnshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-north-lincolnshire`,
  locales: {
    en: `North Lincolnshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.558919283936299,53.58327667878578],
  polygon: RegionPolygons[`united-kingdom-north-lincolnshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-north-somerset`,
  locales: {
    en: `North Somerset`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.8128399318404718,51.40801629048416],
  polygon: RegionPolygons[`united-kingdom-north-somerset`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-north-tyneside`,
  locales: {
    en: `North Tyneside`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.5311261769496696,55.026428262859],
  polygon: RegionPolygons[`united-kingdom-north-tyneside`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-north-yorkshire`,
  locales: {
    en: `North Yorkshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1080136,
  coordinates: [-1.3737297140511806,54.08903304402421],
  polygon: RegionPolygons[`united-kingdom-north-yorkshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-northamptonshire`,
  locales: {
    en: `Northamptonshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 714392,
  coordinates: [-0.8284193587164452,52.30807363568971],
  polygon: RegionPolygons[`united-kingdom-northamptonshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-northumberland`,
  locales: {
    en: `Northumberland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 315987,
  coordinates: [-2.0702957224004597,55.2943535425097],
  polygon: RegionPolygons[`united-kingdom-northumberland`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-nottingham`,
  locales: {
    en: `Nottingham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.1664349024987644,52.93211823202077],
  polygon: RegionPolygons[`united-kingdom-nottingham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-nottinghamshire`,
  locales: {
    en: `Nottinghamshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1115658,
  coordinates: [-1.0091835185045852,53.12984518121013],
  polygon: RegionPolygons[`united-kingdom-nottinghamshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-oldham`,
  locales: {
    en: `Oldham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.0505382180143386,53.54174510415322],
  polygon: RegionPolygons[`united-kingdom-oldham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-oxfordshire`,
  locales: {
    en: `Oxfordshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 672516,
  coordinates: [-1.2839083519388907,51.808104153383965],
  polygon: RegionPolygons[`united-kingdom-oxfordshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-peterborough`,
  locales: {
    en: `Peterborough`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.27010718424918423,52.58384491665956],
  polygon: RegionPolygons[`united-kingdom-peterborough`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-plymouth`,
  locales: {
    en: `Plymouth`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-4.114404709437087,50.386921002852894],
  polygon: RegionPolygons[`united-kingdom-plymouth`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-portsmouth`,
  locales: {
    en: `Portsmouth`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.0414932934999115,50.81639231950007],
  polygon: RegionPolygons[`united-kingdom-portsmouth`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-reading`,
  locales: {
    en: `Reading`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.0228260967969334,51.45051852416054],
  polygon: RegionPolygons[`united-kingdom-reading`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-redbridge`,
  locales: {
    en: `Redbridge`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.08813968275015327,51.58426768725394],
  polygon: RegionPolygons[`united-kingdom-redbridge`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-redcar-and-cleveland`,
  locales: {
    en: `Redcar and Cleveland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.9987577985335747,54.56022797297001],
  polygon: RegionPolygons[`united-kingdom-redcar-and-cleveland`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-richmond-upon-thames`,
  locales: {
    en: `Richmond upon Thames`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.2985421411569007,51.43577545852057],
  polygon: RegionPolygons[`united-kingdom-richmond-upon-thames`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-rochdale`,
  locales: {
    en: `Rochdale`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.1230948556430747,53.611113383875534],
  polygon: RegionPolygons[`united-kingdom-rochdale`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-rotherham`,
  locales: {
    en: `Rotherham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.2620607199262963,53.38535818403295],
  polygon: RegionPolygons[`united-kingdom-rotherham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-rutland`,
  locales: {
    en: `Rutland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 38022,
  coordinates: [-0.6102156235521932,52.62709809060436],
  polygon: RegionPolygons[`united-kingdom-rutland`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-salford`,
  locales: {
    en: `Salford`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.4083187582041603,53.478487549560725],
  polygon: RegionPolygons[`united-kingdom-salford`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-sandwell`,
  locales: {
    en: `Sandwell`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.990508552377804,52.51594821064137],
  polygon: RegionPolygons[`united-kingdom-sandwell`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-sefton`,
  locales: {
    en: `Sefton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.9978000018707007,53.59523329742909],
  polygon: RegionPolygons[`united-kingdom-sefton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-sheffield`,
  locales: {
    en: `Sheffield`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.604896511165066,53.40286469230168],
  polygon: RegionPolygons[`united-kingdom-sheffield`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-shropshire`,
  locales: {
    en: `Shropshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 479561,
  coordinates: [-2.7153846879136267,52.660881557637765],
  polygon: RegionPolygons[`united-kingdom-shropshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-slough`,
  locales: {
    en: `Slough`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.5744942897296994,51.469675198001966],
  polygon: RegionPolygons[`united-kingdom-slough`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-solihull`,
  locales: {
    en: `Solihull`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.7274030960260518,52.42412598362722],
  polygon: RegionPolygons[`united-kingdom-solihull`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-somerset`,
  locales: {
    en: `Somerset`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 931784,
  coordinates: [-2.975872259896903,51.07369161647489],
  polygon: RegionPolygons[`united-kingdom-somerset`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-south-gloucestershire`,
  locales: {
    en: `South Gloucestershire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.475195048114843,51.54588758329207],
  polygon: RegionPolygons[`united-kingdom-south-gloucestershire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-south-tyneside`,
  locales: {
    en: `South Tyneside`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.4462816066733524,54.958685614000075],
  polygon: RegionPolygons[`united-kingdom-south-tyneside`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-southampton`,
  locales: {
    en: `Southampton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.3789863545366359,50.88910228093991],
  polygon: RegionPolygons[`united-kingdom-southampton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-southend-on-sea`,
  locales: {
    en: `Southend-on-Sea`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.7374681475586442,51.55627981216796],
  polygon: RegionPolygons[`united-kingdom-southend-on-sea`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-southwark`,
  locales: {
    en: `Southwark`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.06552018850590002,51.464455878635846],
  polygon: RegionPolygons[`united-kingdom-southwark`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-st-helens`,
  locales: {
    en: `St. Helens`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-st-helens`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-staffordshire`,
  locales: {
    en: `Staffordshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1111192,
  coordinates: [-2.014742295320673,52.81512278888559],
  polygon: RegionPolygons[`united-kingdom-staffordshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-stockport`,
  locales: {
    en: `Stockport`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.1360268822847956,53.39109497375401],
  polygon: RegionPolygons[`united-kingdom-stockport`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-stockton-on-tees`,
  locales: {
    en: `Stockton-on-Tees`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.3218388537300996,54.55390554510478],
  polygon: RegionPolygons[`united-kingdom-stockton-on-tees`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-stoke-on-trent`,
  locales: {
    en: `Stoke-on-Trent`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.1709084745964162,53.03867503507479],
  polygon: RegionPolygons[`united-kingdom-stoke-on-trent`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-suffolk`,
  locales: {
    en: `Suffolk`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 738512,
  coordinates: [1.0804205660576542,52.236436265000066],
  polygon: RegionPolygons[`united-kingdom-suffolk`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-sunderland`,
  locales: {
    en: `Sunderland`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.459068324274273,54.86062788461916],
  polygon: RegionPolygons[`united-kingdom-sunderland`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-surrey`,
  locales: {
    en: `Surrey`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 1161256,
  coordinates: [-0.38864000088534567,51.27844656061026],
  polygon: RegionPolygons[`united-kingdom-surrey`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-sutton`,
  locales: {
    en: `Sutton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.1872181866200151,51.35340322572827],
  polygon: RegionPolygons[`united-kingdom-sutton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-swindon`,
  locales: {
    en: `Swindon`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.7075775824394839,51.56933319821849],
  polygon: RegionPolygons[`united-kingdom-swindon`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-tameside`,
  locales: {
    en: `Tameside`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.1016202588178885,53.46045083518786],
  polygon: RegionPolygons[`united-kingdom-tameside`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-telford-and-wrekin`,
  locales: {
    en: `Telford and Wrekin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.4850753440019275,52.71430206958482],
  polygon: RegionPolygons[`united-kingdom-telford-and-wrekin`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-thurrock`,
  locales: {
    en: `Thurrock`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [0.3850030914694855,51.505512803373136],
  polygon: RegionPolygons[`united-kingdom-thurrock`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-torbay`,
  locales: {
    en: `Torbay`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-3.5739260030656315,50.44218552834638],
  polygon: RegionPolygons[`united-kingdom-torbay`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-tower-hamlets`,
  locales: {
    en: `Tower Hamlets`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.02629777642127351,51.516080633764204],
  polygon: RegionPolygons[`united-kingdom-tower-hamlets`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-trafford`,
  locales: {
    en: `Trafford`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.3816966416367222,53.40615211592737],
  polygon: RegionPolygons[`united-kingdom-trafford`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wakefield`,
  locales: {
    en: `Wakefield`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.4101797147220907,53.6560275336937],
  polygon: RegionPolygons[`united-kingdom-wakefield`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-walsall`,
  locales: {
    en: `Walsall`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.955641203978388,52.598079007839914],
  polygon: RegionPolygons[`united-kingdom-walsall`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-waltham-forest`,
  locales: {
    en: `Waltham Forest`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.012551846240711484,51.599512234202194],
  polygon: RegionPolygons[`united-kingdom-waltham-forest`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wandsworth`,
  locales: {
    en: `Wandsworth`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.1861200631404074,51.45489573859743],
  polygon: RegionPolygons[`united-kingdom-wandsworth`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-warrington`,
  locales: {
    en: `Warrington`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.5546834985446196,53.387232571276115],
  polygon: RegionPolygons[`united-kingdom-warrington`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-warwickshire`,
  locales: {
    en: `Warwickshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 551594,
  coordinates: [-1.5655449083208737,52.33041077363828],
  polygon: RegionPolygons[`united-kingdom-warwickshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-west-berkshire`,
  locales: {
    en: `West Berkshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.3082479518315324,51.44120148436099],
  polygon: RegionPolygons[`united-kingdom-west-berkshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-west-sussex`,
  locales: {
    en: `West Sussex`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 828398,
  coordinates: [-0.4655862087365392,50.94804494863297],
  polygon: RegionPolygons[`united-kingdom-west-sussex`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-westminster`,
  locales: {
    en: `Westminster`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.16165127203859697,51.50601664944878],
  polygon: RegionPolygons[`united-kingdom-westminster`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wigan`,
  locales: {
    en: `Wigan`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.6185297304627113,53.51763804825728],
  polygon: RegionPolygons[`united-kingdom-wigan`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wiltshire`,
  locales: {
    en: `Wiltshire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 698942,
  coordinates: [-1.9179652566412813,51.309930426547936],
  polygon: RegionPolygons[`united-kingdom-wiltshire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-windsor-and-maidenhead`,
  locales: {
    en: `Windsor and Maidenhead`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.7110234240917634,51.464455878186186],
  polygon: RegionPolygons[`united-kingdom-windsor-and-maidenhead`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wirral`,
  locales: {
    en: `Wirral`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-kingdom-wirral`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wokingham`,
  locales: {
    en: `Wokingham`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-0.9407575803480484,51.44908526202519],
  polygon: RegionPolygons[`united-kingdom-wokingham`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-wolverhampton`,
  locales: {
    en: `Wolverhampton`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-2.088510402932741,52.58091227872865],
  polygon: RegionPolygons[`united-kingdom-wolverhampton`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-worcestershire`,
  locales: {
    en: `Worcestershire`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 575421,
  coordinates: [-2.1993563498157016,52.20434611687975],
  polygon: RegionPolygons[`united-kingdom-worcestershire`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `united-kingdom-york`,
  locales: {
    en: `York`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: [-1.0799931502137383,53.94391693776643],
  polygon: RegionPolygons[`united-kingdom-york`],
  parentId: `united-kingdom`,
  dataSource: `https://www.arcgis.com/sharing/rest/content/items/b684319181f94875a6879bbc833ca3a6/data`
}, {
  id: `canada-total`,
  locales: {
    en: `Total`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`canada-total`],
  parentId: `canada`,
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `united-states-of-america-connecticut-new-london-county`,
  locales: {
    en: `New London County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: 266784,
  coordinates: [-72.1271835,41.4959865],
  polygon: RegionPolygons[`united-states-of-america-connecticut-new-london-county`],
  parentId: `united-states-of-america-connecticut`,
  dataSource: `https://portal.ct.gov/Coronavirus`
}, {
  id: `united-states-of-america-tennessee-out-of-tn-county`,
  locales: {
    en: `Out of TN County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-tennessee-out-of-tn-county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-tennessee--county`,
  locales: {
    en: ` County`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-tennessee--county`],
  parentId: `united-states-of-america-tennessee`,
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `united-states-of-america-pennsylvania-centre`,
  locales: {
    en: `Centre`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-centre`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-erie`,
  locales: {
    en: `Erie`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-erie`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-franklin`,
  locales: {
    en: `Franklin`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-franklin`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}, {
  id: `united-states-of-america-pennsylvania-potter`,
  locales: {
    en: `Potter`
  },
  alternativeNames: undefined,
  phoneCode: undefined,
  alpha2code: undefined,
  alpha3code: undefined,
  population: undefined,
  coordinates: undefined,
  polygon: RegionPolygons[`united-states-of-america-pennsylvania-potter`],
  parentId: `united-states-of-america-pennsylvania`,
  dataSource: `https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx`
}]
