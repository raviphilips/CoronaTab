
import { PlaceSeedData } from '../../places'
const CountryPolygons = require('./polygons.json')

export const CountryIds = [
  `afghanistan`,
  `albania`,
  `algeria`,
  `american-samoa`,
  `andorra`,
  `angola`,
  `anguilla`,
  `antigua-and-barbuda`,
  `argentina`,
  `armenia`,
  `aruba`,
  `australia`,
  `austria`,
  `azerbaijan`,
  `bahrain`,
  `bangladesh`,
  `barbados`,
  `belarus`,
  `belgium`,
  `belize`,
  `benin`,
  `bermuda`,
  `bhutan`,
  `bolivia`,
  `bonaire-sint-eustatius-and-saba`,
  `bosnia-and-herzegovina`,
  `botswana`,
  `brazil`,
  `brunei-darussalam`,
  `bulgaria`,
  `burkina-faso`,
  `myanmar`,
  `burundi`,
  `cambodia`,
  `cameroon`,
  `canada`,
  `cabo-verde`,
  `cayman-islands`,
  `central-african-republic`,
  `chad`,
  `chile`,
  `china`,
  `colombia`,
  `comoros`,
  `cook-islands`,
  `costa-rica`,
  `cote-d-ivoire`,
  `croatia`,
  `cuba`,
  `curacao`,
  `cyprus`,
  `czechia`,
  `denmark`,
  `djibouti`,
  `dominica`,
  `dominican-republic`,
  `ecuador`,
  `egypt`,
  `el-salvador`,
  `equatorial-guinea`,
  `eritrea`,
  `estonia`,
  `eswatini`,
  `ethiopia`,
  `falkland-islands`,
  `faroe-islands`,
  `federated-states-of-micronesia`,
  `fiji`,
  `finland`,
  `france`,
  `french-guiana`,
  `french-polynesia`,
  `gabon`,
  `georgia`,
  `germany`,
  `ghana`,
  `greece`,
  `greenland`,
  `grenada`,
  `guadeloupe`,
  `guam`,
  `guatemala`,
  `guinea`,
  `guinea-bissau`,
  `guyana`,
  `haiti`,
  `honduras`,
  `hong-kong`,
  `hungary`,
  `iceland`,
  `india`,
  `indonesia`,
  `iran`,
  `iraq`,
  `ireland`,
  `israel`,
  `italy`,
  `jamaica`,
  `japan`,
  `jordan`,
  `kazakhstan`,
  `kenya`,
  `kiribati`,
  `kosovo`,
  `kuwait`,
  `kyrgyzstan`,
  `laos`,
  `latvia`,
  `lebanon`,
  `lesotho`,
  `liberia`,
  `libya`,
  `liechtenstein`,
  `lithuania`,
  `luxembourg`,
  `macao`,
  `macedonia`,
  `madagascar`,
  `malawi`,
  `malaysia`,
  `maldives`,
  `mali`,
  `malta`,
  `marshall-islands`,
  `martinique`,
  `mauritania`,
  `mauritius`,
  `mayotte`,
  `mexico`,
  `moldova`,
  `monaco`,
  `mongolia`,
  `montenegro`,
  `montserrat`,
  `morocco`,
  `mozambique`,
  `namibia`,
  `nauru`,
  `nepal`,
  `netherlands`,
  `netherlands-antilles`,
  `new-caledonia`,
  `new-zealand`,
  `nicaragua`,
  `niger`,
  `nigeria`,
  `niue`,
  `norfolk-island`,
  `north-korea`,
  `northern-mariana-islands`,
  `norway`,
  `oman`,
  `pakistan`,
  `palau`,
  `palestine`,
  `panama`,
  `papua-new-guinea`,
  `paraguay`,
  `peru`,
  `philippines`,
  `poland`,
  `portugal`,
  `puerto-rico`,
  `qatar`,
  `democratic-republic-of-the-congo`,
  `republic-of-the-congo`,
  `romania`,
  `russia`,
  `rwanda`,
  `saint-barthelemy`,
  `saint-helena`,
  `saint-kitts-and-nevis`,
  `saint-martin`,
  `saint-pierre-and-miquelon`,
  `saint-vincent-and-the-grenadines`,
  `samoa`,
  `san-marino`,
  `sao-tome-and-principe`,
  `saudi-arabia`,
  `senegal`,
  `serbia`,
  `seychelles`,
  `sierra-leone`,
  `singapore`,
  `sint-maarten-(-dutch-part)`,
  `slovakia`,
  `slovenia`,
  `solomon-islands`,
  `somalia`,
  `south-africa`,
  `south-korea`,
  `south-sudan`,
  `spain`,
  `sri-lanka`,
  `saint-lucia`,
  `sudan`,
  `suriname`,
  `swaziland`,
  `sweden`,
  `switzerland`,
  `syrian-arab-republic`,
  `taiwan`,
  `tajikistan`,
  `tanzania`,
  `thailand`,
  `the-bahamas`,
  `the-gambia`,
  `timor-leste`,
  `togo`,
  `tokelau`,
  `tonga`,
  `trinidad-and-tobago`,
  `tunisia`,
  `turkey`,
  `turkmenistan`,
  `turks-and-caicos-islands`,
  `tuvalu`,
  `uganda`,
  `ukraine`,
  `united-arab-emirates`,
  `united-kingdom`,
  `united-states-of-america`,
  `uruguay`,
  `uzbekistan`,
  `vanuatu`,
  `vatican-city`,
  `venezuela`,
  `vietnam`,
  `wallis-and-futuna`,
  `yemen`,
  `zambia`,
  `zimbabwe`
] as const
export type CountryId = typeof CountryIds[number]

export const CountriesData: PlaceSeedData[] = [{
  id: `afghanistan`,
  locales: {
    en: `Afghanistan`
  },
  phoneCode: `+93`,
  alpha2code: `AF`,
  alpha3code: `AFG`,
  alternativeNames: undefined,
  population: 38928346,
  coordinates: [67.6895422770001,33.930139364000084],
  polygon: CountryPolygons[`AFG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `albania`,
  locales: {
    en: `Albania`
  },
  phoneCode: `+355`,
  alpha2code: `AL`,
  alpha3code: `ALB`,
  alternativeNames: undefined,
  population: 2877797,
  coordinates: [20.154355916000085,41.11245290150006],
  polygon: CountryPolygons[`ALB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `algeria`,
  locales: {
    en: `Algeria`
  },
  phoneCode: `+213`,
  alpha2code: `DZ`,
  alpha3code: `DZA`,
  alternativeNames: undefined,
  population: 43851044,
  coordinates: [1.6432377520000898,28.032339379000085],
  polygon: CountryPolygons[`DZA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `american-samoa`,
  locales: {
    en: `American Samoa`
  },
  phoneCode: `+1`,
  alpha2code: `AS`,
  alpha3code: `ASM`,
  alternativeNames: undefined,
  population: 55191,
  coordinates: undefined,
  polygon: CountryPolygons[`ASM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `andorra`,
  locales: {
    en: `Andorra`
  },
  phoneCode: `+376`,
  alpha2code: `AD`,
  alpha3code: `AND`,
  alternativeNames: undefined,
  population: 77265,
  coordinates: [1.5681518960000886,42.51501586950006],
  polygon: CountryPolygons[`AND`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `angola`,
  locales: {
    en: `Angola`
  },
  phoneCode: `+244`,
  alpha2code: `AO`,
  alpha3code: `AGO`,
  alternativeNames: undefined,
  population: 32866272,
  coordinates: undefined,
  polygon: CountryPolygons[`AGO`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `anguilla`,
  locales: {
    en: `Anguilla`
  },
  phoneCode: `+1`,
  alpha2code: `AI`,
  alpha3code: `AIA`,
  alternativeNames: undefined,
  population: 15003,
  coordinates: undefined,
  polygon: CountryPolygons[`AIA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `antigua-and-barbuda`,
  locales: {
    en: `Antigua and Barbuda`
  },
  phoneCode: `+1`,
  alpha2code: `AG`,
  alpha3code: `ATG`,
  alternativeNames: undefined,
  population: 97929,
  coordinates: [-61.78465735599994,17.098659572500083],
  polygon: CountryPolygons[`ATG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `argentina`,
  locales: {
    en: `Argentina`
  },
  phoneCode: `+54`,
  alpha2code: `AR`,
  alpha3code: `ARG`,
  alternativeNames: undefined,
  population: 45195774,
  coordinates: [-63.626654215499926,-38.42173074799991],
  polygon: CountryPolygons[`ARG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `armenia`,
  locales: {
    en: `Armenia`
  },
  phoneCode: `+374`,
  alpha2code: `AM`,
  alpha3code: `ARM`,
  alternativeNames: undefined,
  population: 2963243,
  coordinates: [45.01914310700013,40.077076823500036],
  polygon: CountryPolygons[`ARM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `aruba`,
  locales: {
    en: `Aruba`
  },
  phoneCode: `+297`,
  alpha2code: `AW`,
  alpha3code: `ABW`,
  alternativeNames: undefined,
  population: 106766,
  coordinates: [-69.9691462879999,12.497626043500048],
  polygon: CountryPolygons[`ABW`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `australia`,
  locales: {
    en: `Australia`
  },
  phoneCode: `+61`,
  alpha2code: `AU`,
  alpha3code: `AUS`,
  alternativeNames: undefined,
  population: 25499884,
  coordinates: [133.43764789150003,-27.17176685949994],
  polygon: CountryPolygons[`AUS`],
  parentId: 'earth',
  dataSource: `https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers`
}, {
  id: `austria`,
  locales: {
    en: `Austria`
  },
  phoneCode: `+43`,
  alpha2code: `AT`,
  alpha3code: `AUT`,
  alternativeNames: undefined,
  population: 9006398,
  coordinates: [13.334746337500093,47.71313527500007],
  polygon: CountryPolygons[`AUT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `azerbaijan`,
  locales: {
    en: `Azerbaijan`
  },
  phoneCode: `+994`,
  alpha2code: `AZ`,
  alpha3code: `AZE`,
  alternativeNames: undefined,
  population: 10139177,
  coordinates: [47.50227481750011,40.14320973750006],
  polygon: CountryPolygons[`AZE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bahrain`,
  locales: {
    en: `Bahrain`
  },
  phoneCode: `+973`,
  alpha2code: `BH`,
  alpha3code: `BHR`,
  alternativeNames: undefined,
  population: 1701575,
  coordinates: [50.53386477950008,26.024400132000068],
  polygon: CountryPolygons[`BHR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bangladesh`,
  locales: {
    en: `Bangladesh`
  },
  phoneCode: `+880`,
  alpha2code: `BD`,
  alpha3code: `BGD`,
  alternativeNames: undefined,
  population: 164689383,
  coordinates: [90.33232039450004,23.73811778050007],
  polygon: CountryPolygons[`BGD`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `barbados`,
  locales: {
    en: `Barbados`
  },
  phoneCode: `+1`,
  alpha2code: `BB`,
  alpha3code: `BRB`,
  alternativeNames: undefined,
  population: 287375,
  coordinates: [-59.54055742099993,13.189886786000045],
  polygon: CountryPolygons[`BRB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `belarus`,
  locales: {
    en: `Belarus`
  },
  phoneCode: `+375`,
  alpha2code: `BY`,
  alpha3code: `BLR`,
  alternativeNames: undefined,
  population: 9449323,
  coordinates: [27.942588541500044,53.72384073950006],
  polygon: CountryPolygons[`BLR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `belgium`,
  locales: {
    en: `Belgium`
  },
  phoneCode: `+32`,
  alpha2code: `BE`,
  alpha3code: `BEL`,
  alternativeNames: undefined,
  population: 11589623,
  coordinates: [4.4297657472728815,50.49042053300006],
  polygon: CountryPolygons[`BEL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `belize`,
  locales: {
    en: `Belize`
  },
  phoneCode: `+501`,
  alpha2code: `BZ`,
  alpha3code: `BLZ`,
  alternativeNames: undefined,
  population: 397628,
  coordinates: undefined,
  polygon: CountryPolygons[`BLZ`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `benin`,
  locales: {
    en: `Benin`
  },
  phoneCode: `+229`,
  alpha2code: `BJ`,
  alpha3code: `BEN`,
  alternativeNames: undefined,
  population: 12123200,
  coordinates: [2.3030941155000306,9.306569115000109],
  polygon: CountryPolygons[`BEN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bermuda`,
  locales: {
    en: `Bermuda`
  },
  phoneCode: `+1`,
  alpha2code: `BM`,
  alpha3code: `BMU`,
  alternativeNames: undefined,
  population: 62278,
  coordinates: undefined,
  polygon: CountryPolygons[`BMU`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `bhutan`,
  locales: {
    en: `Bhutan`
  },
  phoneCode: `+975`,
  alpha2code: `BT`,
  alpha3code: `BTN`,
  alternativeNames: undefined,
  population: 771608,
  coordinates: [90.40745792650009,27.518180482737833],
  polygon: CountryPolygons[`BTN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bolivia`,
  locales: {
    en: `Bolivia`
  },
  phoneCode: `+591`,
  alpha2code: `BO`,
  alpha3code: `BOL`,
  alternativeNames: undefined,
  population: 11673021,
  coordinates: [-63.58694087799992,-16.286937560999938],
  polygon: CountryPolygons[`BOL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bonaire-sint-eustatius-and-saba`,
  locales: {
    en: `Bonaire, Sint Eustatius and Saba`
  },
  phoneCode: `+599`,
  alpha2code: `BQ`,
  alpha3code: `BES`,
  alternativeNames: undefined,
  population: 25157,
  coordinates: undefined,
  polygon: CountryPolygons[`BES`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `bosnia-and-herzegovina`,
  locales: {
    en: `Bosnia and Herzegovina`
  },
  phoneCode: `+387`,
  alpha2code: `BA`,
  alpha3code: `BIH`,
  alternativeNames: undefined,
  population: 3280819,
  coordinates: [17.668099406000096,43.91899993950011],
  polygon: CountryPolygons[`BIH`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `botswana`,
  locales: {
    en: `Botswana`
  },
  phoneCode: `+267`,
  alpha2code: `BW`,
  alpha3code: `BWA`,
  alternativeNames: undefined,
  population: 2351627,
  coordinates: undefined,
  polygon: CountryPolygons[`BWA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `brazil`,
  locales: {
    en: `Brazil`
  },
  phoneCode: `+55`,
  alpha2code: `BR`,
  alpha3code: `BRA`,
  alternativeNames: undefined,
  population: 212559417,
  coordinates: [-54.38839290699988,-14.236725569657125],
  polygon: CountryPolygons[`BRA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `brunei-darussalam`,
  locales: {
    en: `Brunei Darussalam`
  },
  phoneCode: `+673`,
  alpha2code: `BN`,
  alpha3code: `BRN`,
  alternativeNames: undefined,
  population: 428697,
  coordinates: [114.66157535500005,4.510995486500057],
  polygon: CountryPolygons[`BRN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `bulgaria`,
  locales: {
    en: `Bulgaria`
  },
  phoneCode: `+359`,
  alpha2code: `BG`,
  alpha3code: `BGR`,
  alternativeNames: undefined,
  population: 6948445,
  coordinates: [25.47427473600007,42.73391529800004],
  polygon: CountryPolygons[`BGR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `burkina-faso`,
  locales: {
    en: `Burkina Faso`
  },
  phoneCode: `+226`,
  alpha2code: `BF`,
  alpha3code: `BFA`,
  alternativeNames: undefined,
  population: 20903273,
  coordinates: [-1.5662045904998934,12.230804951500069],
  polygon: CountryPolygons[`BFA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `myanmar`,
  locales: {
    en: `Myanmar`
  },
  phoneCode: `+95`,
  alpha2code: `MM`,
  alpha3code: `MMR`,
  alternativeNames: undefined,
  population: 54409800,
  coordinates: undefined,
  polygon: CountryPolygons[`MMR`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `burundi`,
  locales: {
    en: `Burundi`
  },
  phoneCode: `+257`,
  alpha2code: `BI`,
  alpha3code: `BDI`,
  alternativeNames: undefined,
  population: 11890784,
  coordinates: undefined,
  polygon: CountryPolygons[`BDI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `cambodia`,
  locales: {
    en: `Cambodia`
  },
  phoneCode: `+855`,
  alpha2code: `KH`,
  alpha3code: `KHM`,
  alternativeNames: undefined,
  population: 16718965,
  coordinates: [104.96757694500008,12.56212270450002],
  polygon: CountryPolygons[`KHM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `cameroon`,
  locales: {
    en: `Cameroon`
  },
  phoneCode: `+237`,
  alpha2code: `CM`,
  alpha3code: `CMR`,
  alternativeNames: undefined,
  population: 26545863,
  coordinates: [12.350860429500074,7.407972718000032],
  polygon: CountryPolygons[`CMR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `canada`,
  locales: {
    en: `Canada`
  },
  phoneCode: `+1`,
  alpha2code: `CA`,
  alpha3code: `CAN`,
  alternativeNames: undefined,
  population: 37742154,
  coordinates: [-126.56202337499991,54.15716767014678],
  polygon: CountryPolygons[`CAN`],
  parentId: 'earth',
  dataSource: `https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html`
}, {
  id: `cabo-verde`,
  locales: {
    en: `Cabo Verde`
  },
  phoneCode: `+238`,
  alpha2code: `CV`,
  alpha3code: `CPV`,
  alternativeNames: [`Cape Verde`],
  population: 555987,
  coordinates: undefined,
  polygon: CountryPolygons[`CPV`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `cayman-islands`,
  locales: {
    en: `Cayman Islands`
  },
  phoneCode: `+1`,
  alpha2code: `KY`,
  alpha3code: `CYM`,
  alternativeNames: undefined,
  population: 65722,
  coordinates: undefined,
  polygon: CountryPolygons[`CYM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `central-african-republic`,
  locales: {
    en: `Central African Republic`
  },
  phoneCode: `+236`,
  alpha2code: `CF`,
  alpha3code: `CAF`,
  alternativeNames: undefined,
  population: 4829767,
  coordinates: [20.91950301100013,6.61864105250006],
  polygon: CountryPolygons[`CAF`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `chad`,
  locales: {
    en: `Chad`
  },
  phoneCode: `+235`,
  alpha2code: `TD`,
  alpha3code: `TCD`,
  alternativeNames: undefined,
  population: 16425864,
  coordinates: [18.71679508450009,15.451357727500067],
  polygon: CountryPolygons[`TCD`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `chile`,
  locales: {
    en: `Chile`
  },
  phoneCode: `+56`,
  alpha2code: `CL`,
  alpha3code: `CHL`,
  alternativeNames: undefined,
  population: 19116201,
  coordinates: [-71.3604937374999,-36.567062457499944],
  polygon: CountryPolygons[`CHL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `china`,
  locales: {
    en: `China`
  },
  phoneCode: `+86`,
  alpha2code: `CN`,
  alpha3code: `CHN`,
  alternativeNames: undefined,
  population: 1439323776,
  coordinates: [112.26392825753302,31.166405443456426],
  polygon: CountryPolygons[`CHN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `colombia`,
  locales: {
    en: `Colombia`
  },
  phoneCode: `+57`,
  alpha2code: `CO`,
  alpha3code: `COL`,
  alternativeNames: undefined,
  population: 50882891,
  coordinates: [-72.93652033249992,4.114416812000066],
  polygon: CountryPolygons[`COL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `comoros`,
  locales: {
    en: `Comoros`
  },
  phoneCode: `+269`,
  alpha2code: `KM`,
  alpha3code: `COM`,
  alternativeNames: undefined,
  population: 869601,
  coordinates: undefined,
  polygon: CountryPolygons[`COM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `cook-islands`,
  locales: {
    en: `Cook Islands`
  },
  phoneCode: `+682`,
  alpha2code: `CK`,
  alpha3code: `COK`,
  alternativeNames: undefined,
  population: 17564,
  coordinates: undefined,
  polygon: CountryPolygons[`COK`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `costa-rica`,
  locales: {
    en: `Costa Rica`
  },
  phoneCode: `+506`,
  alpha2code: `CR`,
  alpha3code: `CRI`,
  alternativeNames: undefined,
  population: 5094118,
  coordinates: [-84.21760006449992,9.615482479500045],
  polygon: CountryPolygons[`CRI`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `cote-d-ivoire`,
  locales: {
    en: `Cote dIvoire`
  },
  phoneCode: `+225`,
  alpha2code: `CI`,
  alpha3code: `CIV`,
  alternativeNames: undefined,
  population: 26378274,
  coordinates: [-5.536220662499915,7.533667911000066],
  polygon: CountryPolygons[`CIV`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `croatia`,
  locales: {
    en: `Croatia`
  },
  phoneCode: `+385`,
  alpha2code: `HR`,
  alpha3code: `HRV`,
  alternativeNames: undefined,
  population: 4105267,
  coordinates: [16.33771101500008,44.48165314050009],
  polygon: CountryPolygons[`HRV`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `cuba`,
  locales: {
    en: `Cuba`
  },
  phoneCode: `+53`,
  alpha2code: `CU`,
  alpha3code: `CUB`,
  alternativeNames: undefined,
  population: 11326616,
  coordinates: [-79.28561357349994,21.528102931500058],
  polygon: CountryPolygons[`CUB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `curacao`,
  locales: {
    en: `Curacao`
  },
  phoneCode: `+599`,
  alpha2code: `CW`,
  alpha3code: `CUW`,
  alternativeNames: undefined,
  population: 164093,
  coordinates: undefined,
  polygon: CountryPolygons[`CUW`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `cyprus`,
  locales: {
    en: `Cyprus`
  },
  phoneCode: `+357`,
  alpha2code: `CY`,
  alpha3code: `CYP`,
  alternativeNames: undefined,
  population: 1207359,
  coordinates: [33.197142898000095,34.910753335500104],
  polygon: CountryPolygons[`CYP`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `czechia`,
  locales: {
    en: `Czechia`
  },
  phoneCode: `+420`,
  alpha2code: `CZ`,
  alpha3code: `CZE`,
  alternativeNames: undefined,
  population: 10708981,
  coordinates: [15.540038086000095,49.80312398300006],
  polygon: CountryPolygons[`CZE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `denmark`,
  locales: {
    en: `Denmark`
  },
  phoneCode: `+45`,
  alpha2code: `DK`,
  alpha3code: `DNK`,
  alternativeNames: undefined,
  population: 5792202,
  coordinates: [11.628916862500091,56.10986969600006],
  polygon: CountryPolygons[`DNK`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `djibouti`,
  locales: {
    en: `Djibouti`
  },
  phoneCode: `+253`,
  alpha2code: `DJ`,
  alpha3code: `DJI`,
  alternativeNames: undefined,
  population: 988000,
  coordinates: [42.58024885700007,11.839293826500068],
  polygon: CountryPolygons[`DJI`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `dominica`,
  locales: {
    en: `Dominica`
  },
  phoneCode: `+1`,
  alpha2code: `DM`,
  alpha3code: `DMA`,
  alternativeNames: undefined,
  population: 71986,
  coordinates: undefined,
  polygon: CountryPolygons[`DMA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `dominican-republic`,
  locales: {
    en: `Dominican Republic`
  },
  phoneCode: `+1`,
  alpha2code: `DO`,
  alpha3code: `DOM`,
  alternativeNames: undefined,
  population: 10847910,
  coordinates: [-70.13417985399988,18.771246649000062],
  polygon: CountryPolygons[`DOM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `ecuador`,
  locales: {
    en: `Ecuador`
  },
  phoneCode: `+593`,
  alpha2code: `EC`,
  alpha3code: `ECU`,
  alternativeNames: undefined,
  population: 17643054,
  coordinates: [-83.4578538649999,-1.7634670984999161],
  polygon: CountryPolygons[`ECU`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `egypt`,
  locales: {
    en: `Egypt`
  },
  phoneCode: `+20`,
  alpha2code: `EG`,
  alpha3code: `EGY`,
  alternativeNames: undefined,
  population: 102334404,
  coordinates: [30.791862752500094,26.825424706000064],
  polygon: CountryPolygons[`EGY`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `el-salvador`,
  locales: {
    en: `El Salvador`
  },
  phoneCode: `+503`,
  alpha2code: `SV`,
  alpha3code: `SLV`,
  alternativeNames: undefined,
  population: 6486205,
  coordinates: [-88.9058347174999,13.787057295000054],
  polygon: CountryPolygons[`SLV`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `equatorial-guinea`,
  locales: {
    en: `Equatorial Guinea`
  },
  phoneCode: `+240`,
  alpha2code: `GQ`,
  alpha3code: `GNQ`,
  alternativeNames: undefined,
  population: 1402985,
  coordinates: [9.89327355600011,2.3796428239493608],
  polygon: CountryPolygons[`GNQ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `eritrea`,
  locales: {
    en: `Eritrea`
  },
  phoneCode: `+291`,
  alpha2code: `ER`,
  alpha3code: `ERI`,
  alternativeNames: undefined,
  population: 3546421,
  coordinates: undefined,
  polygon: CountryPolygons[`ERI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `estonia`,
  locales: {
    en: `Estonia`
  },
  phoneCode: `+372`,
  alpha2code: `EE`,
  alpha3code: `EST`,
  alternativeNames: undefined,
  population: 1326535,
  coordinates: [24.943451368500064,58.572233381000025],
  polygon: CountryPolygons[`EST`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `eswatini`,
  locales: {
    en: `Eswatini`
  },
  phoneCode: `+268`,
  alpha2code: `SZ`,
  alpha3code: `SWZ`,
  alternativeNames: undefined,
  population: 1160164,
  coordinates: [31.451547485500043,-26.52995574899993],
  polygon: CountryPolygons[`SWZ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `ethiopia`,
  locales: {
    en: `Ethiopia`
  },
  phoneCode: `+251`,
  alpha2code: `ET`,
  alpha3code: `ETH`,
  alternativeNames: undefined,
  population: 114963588,
  coordinates: [40.484484497000125,9.170952962500039],
  polygon: CountryPolygons[`ETH`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `falkland-islands`,
  locales: {
    en: `Falkland Islands`
  },
  phoneCode: `+500`,
  alpha2code: `FK`,
  alpha3code: `FLK`,
  alternativeNames: undefined,
  population: 3480,
  coordinates: undefined,
  polygon: CountryPolygons[`FLK`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `faroe-islands`,
  locales: {
    en: `Faroe Islands`
  },
  phoneCode: `+298`,
  alpha2code: `FO`,
  alpha3code: `FRO`,
  alternativeNames: undefined,
  population: 48863,
  coordinates: [-6.9691055979999135,62.08268870650005],
  polygon: CountryPolygons[`FRO`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `federated-states-of-micronesia`,
  locales: {
    en: `Federated States of Micronesia`
  },
  phoneCode: `+691`,
  alpha2code: `FM`,
  alpha3code: `FSM`,
  alternativeNames: undefined,
  population: 115023,
  coordinates: undefined,
  polygon: CountryPolygons[`FSM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `fiji`,
  locales: {
    en: `Fiji`
  },
  phoneCode: `+679`,
  alpha2code: `FJ`,
  alpha3code: `FJI`,
  alternativeNames: undefined,
  population: 896445,
  coordinates: [178.62581910850002,-17.19878971549994],
  polygon: CountryPolygons[`FJI`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `finland`,
  locales: {
    en: `Finland`
  },
  phoneCode: `+358`,
  alpha2code: `FI`,
  alpha3code: `FIN`,
  alternativeNames: undefined,
  population: 5540720,
  coordinates: [26.09634464500006,64.9866635165001],
  polygon: CountryPolygons[`FIN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `france`,
  locales: {
    en: `France`
  },
  phoneCode: `+33`,
  alpha2code: `FR`,
  alpha3code: `FRA`,
  alternativeNames: undefined,
  population: 65273511,
  coordinates: [-2.9882706369999426,14.862000781359463],
  polygon: CountryPolygons[`FRA`],
  parentId: 'earth',
  dataSource: `https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.csv`
}, {
  id: `french-guiana`,
  locales: {
    en: `French Guiana`
  },
  phoneCode: `+594`,
  alpha2code: `GF`,
  alpha3code: `GUF`,
  alternativeNames: undefined,
  population: 298682,
  coordinates: [-53.1258,3.9339],
  polygon: CountryPolygons[`GUF`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `french-polynesia`,
  locales: {
    en: `French Polynesia`
  },
  phoneCode: `+689`,
  alpha2code: `PF`,
  alpha3code: `PYF`,
  alternativeNames: undefined,
  population: 280908,
  coordinates: undefined,
  polygon: CountryPolygons[`PYF`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `gabon`,
  locales: {
    en: `Gabon`
  },
  phoneCode: `+241`,
  alpha2code: `GA`,
  alpha3code: `GAB`,
  alternativeNames: undefined,
  population: 2225734,
  coordinates: [11.649647050500107,-0.8136401413979657],
  polygon: CountryPolygons[`GAB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `georgia`,
  locales: {
    en: `Georgia`
  },
  phoneCode: `+995`,
  alpha2code: `GE`,
  alpha3code: `GEO`,
  alternativeNames: undefined,
  population: 3989167,
  coordinates: [43.34038972821833,42.31029968300004],
  polygon: CountryPolygons[`GEO`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `germany`,
  locales: {
    en: `Germany`
  },
  phoneCode: `+49`,
  alpha2code: `DE`,
  alpha3code: `DEU`,
  alternativeNames: undefined,
  population: 83783942,
  coordinates: [10.473758178500105,51.09924480150008],
  polygon: CountryPolygons[`DEU`],
  parentId: 'earth',
  dataSource: `https://covid19-germany.appspot.com/now`
}, {
  id: `ghana`,
  locales: {
    en: `Ghana`
  },
  phoneCode: `+233`,
  alpha2code: `GH`,
  alpha3code: `GHA`,
  alternativeNames: undefined,
  population: 31072940,
  coordinates: [-1.038557295499956,7.936054182000099],
  polygon: CountryPolygons[`GHA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `greece`,
  locales: {
    en: `Greece`
  },
  phoneCode: `+30`,
  alpha2code: `GR`,
  alpha3code: `GRC`,
  alternativeNames: undefined,
  population: 10423054,
  coordinates: [24.119802279500078,38.322331546000065],
  polygon: CountryPolygons[`GRC`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `greenland`,
  locales: {
    en: `Greenland`
  },
  phoneCode: `+299`,
  alpha2code: `GL`,
  alpha3code: `GRL`,
  alternativeNames: undefined,
  population: 56770,
  coordinates: [-42.211435513499936,71.81159088750007],
  polygon: CountryPolygons[`GRL`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `grenada`,
  locales: {
    en: `Grenada`
  },
  phoneCode: `+1`,
  alpha2code: `GD`,
  alpha3code: `GRD`,
  alternativeNames: undefined,
  population: 112523,
  coordinates: undefined,
  polygon: CountryPolygons[`GRD`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `guadeloupe`,
  locales: {
    en: `Guadeloupe`
  },
  phoneCode: `+590`,
  alpha2code: `GP`,
  alpha3code: `GLP`,
  alternativeNames: undefined,
  population: 400124,
  coordinates: undefined,
  polygon: CountryPolygons[`GLP`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `guam`,
  locales: {
    en: `Guam`
  },
  phoneCode: `+1`,
  alpha2code: `GU`,
  alpha3code: `GUM`,
  alternativeNames: undefined,
  population: 168775,
  coordinates: undefined,
  polygon: CountryPolygons[`GUM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `guatemala`,
  locales: {
    en: `Guatemala`
  },
  phoneCode: `+502`,
  alpha2code: `GT`,
  alpha3code: `GTM`,
  alternativeNames: undefined,
  population: 17915568,
  coordinates: [-90.2335965784999,15.773375903990305],
  polygon: CountryPolygons[`GTM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `guinea`,
  locales: {
    en: `Guinea`
  },
  phoneCode: `+224`,
  alpha2code: `GN`,
  alpha3code: `GIN`,
  alternativeNames: undefined,
  population: 13132795,
  coordinates: [-11.356289228999898,9.955672506000056],
  polygon: CountryPolygons[`GIN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `guinea-bissau`,
  locales: {
    en: `Guinea-Bissau`
  },
  phoneCode: `+245`,
  alpha2code: `GW`,
  alpha3code: `GNB`,
  alternativeNames: undefined,
  population: 1968001,
  coordinates: undefined,
  polygon: CountryPolygons[`GNB`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `guyana`,
  locales: {
    en: `Guyana`
  },
  phoneCode: `+592`,
  alpha2code: `GY`,
  alpha3code: `GUY`,
  alternativeNames: undefined,
  population: 786552,
  coordinates: [-58.9307134609999,4.887909040000061],
  polygon: CountryPolygons[`GUY`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `haiti`,
  locales: {
    en: `Haiti`
  },
  phoneCode: `+509`,
  alpha2code: `HT`,
  alpha3code: `HTI`,
  alternativeNames: undefined,
  population: 11402528,
  coordinates: undefined,
  polygon: CountryPolygons[`HTI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `honduras`,
  locales: {
    en: `Honduras`
  },
  phoneCode: `+504`,
  alpha2code: `HN`,
  alpha3code: `HND`,
  alternativeNames: undefined,
  population: 9904607,
  coordinates: [-86.24603266122396,14.484747626000058],
  polygon: CountryPolygons[`HND`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `hong-kong`,
  locales: {
    en: `Hong Kong`
  },
  phoneCode: `+852`,
  alpha2code: `HK`,
  alpha3code: `HKG`,
  alternativeNames: undefined,
  population: 7496981,
  coordinates: [114.2,22.3],
  polygon: CountryPolygons[`HKG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `hungary`,
  locales: {
    en: `Hungary`
  },
  phoneCode: `+36`,
  alpha2code: `HU`,
  alpha3code: `HUN`,
  alternativeNames: undefined,
  population: 9660351,
  coordinates: [19.485817912000087,47.156127930000025],
  polygon: CountryPolygons[`HUN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `iceland`,
  locales: {
    en: `Iceland`
  },
  phoneCode: `+354`,
  alpha2code: `IS`,
  alpha3code: `ISL`,
  alternativeNames: undefined,
  population: 341243,
  coordinates: [-18.861826138499936,64.96666087450004],
  polygon: CountryPolygons[`ISL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `india`,
  locales: {
    en: `India`
  },
  phoneCode: `+91`,
  alpha2code: `IN`,
  alpha3code: `IND`,
  alternativeNames: undefined,
  population: 1380004385,
  coordinates: [82.74863427400004,21.151850284000083],
  polygon: CountryPolygons[`IND`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `indonesia`,
  locales: {
    en: `Indonesia`
  },
  phoneCode: `+62`,
  alpha2code: `ID`,
  alpha3code: `IDN`,
  alternativeNames: undefined,
  population: 273523615,
  coordinates: [118.08721907200007,-2.6357561174999375],
  polygon: CountryPolygons[`IDN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `iran`,
  locales: {
    en: `Iran`
  },
  phoneCode: `+98`,
  alpha2code: `IR`,
  alpha3code: `IRN`,
  alternativeNames: undefined,
  population: 83992949,
  coordinates: [53.6631116130001,32.412651216000036],
  polygon: CountryPolygons[`IRN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `iraq`,
  locales: {
    en: `Iraq`
  },
  phoneCode: `+964`,
  alpha2code: `IQ`,
  alpha3code: `IRQ`,
  alternativeNames: undefined,
  population: 40222493,
  coordinates: [43.65276391200004,33.21901997950006],
  polygon: CountryPolygons[`IRQ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `ireland`,
  locales: {
    en: `Ireland`
  },
  phoneCode: `+353`,
  alpha2code: `IE`,
  alpha3code: `IRL`,
  alternativeNames: undefined,
  population: 4937786,
  coordinates: [-8.136179165499925,53.46108633000006],
  polygon: CountryPolygons[`IRL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `israel`,
  locales: {
    en: `Israel`
  },
  phoneCode: `+972`,
  alpha2code: `IL`,
  alpha3code: `ISR`,
  alternativeNames: undefined,
  population: 8655535,
  coordinates: [35.06821170350008,31.448389692000035],
  polygon: CountryPolygons[`ISR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `italy`,
  locales: {
    en: `Italy`
  },
  phoneCode: `+39`,
  alpha2code: `IT`,
  alpha3code: `ITA`,
  alternativeNames: undefined,
  population: 60461826,
  coordinates: [12.56007714450007,41.826061709500074],
  polygon: CountryPolygons[`ITA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `jamaica`,
  locales: {
    en: `Jamaica`
  },
  phoneCode: `+1`,
  alpha2code: `JM`,
  alpha3code: `JAM`,
  alternativeNames: undefined,
  population: 2961167,
  coordinates: [-77.30223548049992,18.11774323150007],
  polygon: CountryPolygons[`JAM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `japan`,
  locales: {
    en: `Japan`
  },
  phoneCode: `+81`,
  alpha2code: `JP`,
  alpha3code: `JPN`,
  alternativeNames: undefined,
  population: 126476461,
  coordinates: [137.65978516150005,37.87307291750005],
  polygon: CountryPolygons[`JPN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `jordan`,
  locales: {
    en: `Jordan`
  },
  phoneCode: `+962`,
  alpha2code: `JO`,
  alpha3code: `JOR`,
  alternativeNames: undefined,
  population: 10203134,
  coordinates: [37.04788003839781,31.280817871500048],
  polygon: CountryPolygons[`JOR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `kazakhstan`,
  locales: {
    en: `Kazakhstan`
  },
  phoneCode: `+7`,
  alpha2code: `KZ`,
  alpha3code: `KAZ`,
  alternativeNames: undefined,
  population: 18776707,
  coordinates: [66.90155419950011,47.96872690850006],
  polygon: CountryPolygons[`KAZ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `kenya`,
  locales: {
    en: `Kenya`
  },
  phoneCode: `+254`,
  alpha2code: `KE`,
  alpha3code: `KEN`,
  alternativeNames: undefined,
  population: 53771296,
  coordinates: [37.889294067000066,0.1521078450765998],
  polygon: CountryPolygons[`KEN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `kiribati`,
  locales: {
    en: `Kiribati`
  },
  phoneCode: `+686`,
  alpha2code: `KI`,
  alpha3code: `KIR`,
  alternativeNames: undefined,
  population: 119449,
  coordinates: undefined,
  polygon: CountryPolygons[`KIR`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `kosovo`,
  locales: {
    en: `Kosovo`
  },
  phoneCode: `+383`,
  alpha2code: `XK`,
  alpha3code: `XKX`,
  alternativeNames: undefined,
  population: 1810463,
  coordinates: [20.90180383250008,42.521824239500006],
  polygon: CountryPolygons[`XKX`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `kuwait`,
  locales: {
    en: `Kuwait`
  },
  phoneCode: `+965`,
  alpha2code: `KW`,
  alpha3code: `KWT`,
  alternativeNames: undefined,
  population: 4270571,
  coordinates: [47.48260848850009,29.315860290500055],
  polygon: CountryPolygons[`KWT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `kyrgyzstan`,
  locales: {
    en: `Kyrgyzstan`
  },
  phoneCode: `+996`,
  alpha2code: `KG`,
  alpha3code: `KGZ`,
  alternativeNames: undefined,
  population: 6524195,
  coordinates: [74.71831221500008,41.250428976000094],
  polygon: CountryPolygons[`KGZ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `laos`,
  locales: {
    en: `Laos`
  },
  phoneCode: `+856`,
  alpha2code: `LA`,
  alpha3code: `LAO`,
  alternativeNames: undefined,
  population: 7275560,
  coordinates: undefined,
  polygon: CountryPolygons[`LAO`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `latvia`,
  locales: {
    en: `Latvia`
  },
  phoneCode: `+371`,
  alpha2code: `LV`,
  alpha3code: `LVA`,
  alternativeNames: undefined,
  population: 1886198,
  coordinates: [24.59194014100008,56.862861023500045],
  polygon: CountryPolygons[`LVA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `lebanon`,
  locales: {
    en: `Lebanon`
  },
  phoneCode: `+961`,
  alpha2code: `LB`,
  alpha3code: `LBN`,
  alternativeNames: undefined,
  population: 6825445,
  coordinates: [35.85466820900007,33.86861807120964],
  polygon: CountryPolygons[`LBN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `lesotho`,
  locales: {
    en: `Lesotho`
  },
  phoneCode: `+266`,
  alpha2code: `LS`,
  alpha3code: `LSO`,
  alternativeNames: undefined,
  population: 2142249,
  coordinates: undefined,
  polygon: CountryPolygons[`LSO`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `liberia`,
  locales: {
    en: `Liberia`
  },
  phoneCode: `+231`,
  alpha2code: `LR`,
  alpha3code: `LBR`,
  alternativeNames: undefined,
  population: 5057681,
  coordinates: [-9.434906172499936,6.419949359948774],
  polygon: CountryPolygons[`LBR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `libya`,
  locales: {
    en: `Libya`
  },
  phoneCode: `+218`,
  alpha2code: `LY`,
  alpha3code: `LBY`,
  alternativeNames: undefined,
  population: 6871292,
  coordinates: undefined,
  polygon: CountryPolygons[`LBY`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `liechtenstein`,
  locales: {
    en: `Liechtenstein`
  },
  phoneCode: `+423`,
  alpha2code: `LI`,
  alpha3code: `LIE`,
  alternativeNames: undefined,
  population: 38128,
  coordinates: [9.533092081500058,47.15983571400008],
  polygon: CountryPolygons[`LIE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `lithuania`,
  locales: {
    en: `Lithuania`
  },
  phoneCode: `+370`,
  alpha2code: `LT`,
  alpha3code: `LTU`,
  alternativeNames: undefined,
  population: 2722289,
  coordinates: [23.911012610500066,55.16278391600002],
  polygon: CountryPolygons[`LTU`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `luxembourg`,
  locales: {
    en: `Luxembourg`
  },
  phoneCode: `+352`,
  alpha2code: `LU`,
  alpha3code: `LUX`,
  alternativeNames: undefined,
  population: 625978,
  coordinates: [6.1075130615000575,49.80347279900003],
  polygon: CountryPolygons[`LUX`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `macao`,
  locales: {
    en: `Macao`
  },
  phoneCode: `+853`,
  alpha2code: `MO`,
  alpha3code: `MAC`,
  alternativeNames: undefined,
  population: 649335,
  coordinates: [113.55058841250002,22.13420237850005],
  polygon: CountryPolygons[`MAC`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `macedonia`,
  locales: {
    en: `Macedonia`
  },
  phoneCode: `+389`,
  alpha2code: `MK`,
  alpha3code: `MKD`,
  alternativeNames: undefined,
  population: 2077000,
  coordinates: [21.726869751000095,41.591247966000054],
  polygon: CountryPolygons[`MKD`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `madagascar`,
  locales: {
    en: `Madagascar`
  },
  phoneCode: `+261`,
  alpha2code: `MG`,
  alpha3code: `MDG`,
  alternativeNames: undefined,
  population: 27691018,
  coordinates: undefined,
  polygon: CountryPolygons[`MDG`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `malawi`,
  locales: {
    en: `Malawi`
  },
  phoneCode: `+265`,
  alpha2code: `MW`,
  alpha3code: `MWI`,
  alternativeNames: undefined,
  population: 19129952,
  coordinates: undefined,
  polygon: CountryPolygons[`MWI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `malaysia`,
  locales: {
    en: `Malaysia`
  },
  phoneCode: `+60`,
  alpha2code: `MY`,
  alpha3code: `MYS`,
  alternativeNames: undefined,
  population: 32365999,
  coordinates: [109.69719485800007,3.9309068840000734],
  polygon: CountryPolygons[`MYS`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `maldives`,
  locales: {
    en: `Maldives`
  },
  phoneCode: `+960`,
  alpha2code: `MV`,
  alpha3code: `MDV`,
  alternativeNames: undefined,
  population: 540544,
  coordinates: [73.52910604309824,4.213175576792927],
  polygon: CountryPolygons[`MDV`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mali`,
  locales: {
    en: `Mali`
  },
  phoneCode: `+223`,
  alpha2code: `ML`,
  alpha3code: `MLI`,
  alternativeNames: undefined,
  population: 20250833,
  coordinates: undefined,
  polygon: CountryPolygons[`MLI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `malta`,
  locales: {
    en: `Malta`
  },
  phoneCode: `+356`,
  alpha2code: `MT`,
  alpha3code: `MLT`,
  alternativeNames: undefined,
  population: 441543,
  coordinates: [14.445323113000057,35.88346995650005],
  polygon: CountryPolygons[`MLT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `marshall-islands`,
  locales: {
    en: `Marshall Islands`
  },
  phoneCode: `+692`,
  alpha2code: `MH`,
  alpha3code: `MHL`,
  alternativeNames: undefined,
  population: 59190,
  coordinates: undefined,
  polygon: CountryPolygons[`MHL`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `martinique`,
  locales: {
    en: `Martinique`
  },
  phoneCode: `+596`,
  alpha2code: `MQ`,
  alpha3code: `MTQ`,
  alternativeNames: undefined,
  population: 375265,
  coordinates: [-61.0242,14.6415],
  polygon: CountryPolygons[`MTQ`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mauritania`,
  locales: {
    en: `Mauritania`
  },
  phoneCode: `+222`,
  alpha2code: `MR`,
  alpha3code: `MRT`,
  alternativeNames: undefined,
  population: 4649658,
  coordinates: [8.053466634000088,17.606562093000058],
  polygon: CountryPolygons[`MRT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mauritius`,
  locales: {
    en: `Mauritius`
  },
  phoneCode: `+230`,
  alpha2code: `MU`,
  alpha3code: `MUS`,
  alternativeNames: undefined,
  population: 1271768,
  coordinates: [57.57675214950007,-20.255710544999943],
  polygon: CountryPolygons[`MUS`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mayotte`,
  locales: {
    en: `Mayotte`
  },
  phoneCode: `+262`,
  alpha2code: `YT`,
  alpha3code: `MYT`,
  alternativeNames: undefined,
  population: 272815,
  coordinates: undefined,
  polygon: CountryPolygons[`MYT`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `mexico`,
  locales: {
    en: `Mexico`
  },
  phoneCode: `+52`,
  alpha2code: `MX`,
  alpha3code: `MEX`,
  alternativeNames: undefined,
  population: 128932753,
  coordinates: [-101.93334401247205,23.629557940500092],
  polygon: CountryPolygons[`MEX`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `moldova`,
  locales: {
    en: `Moldova`
  },
  phoneCode: `+373`,
  alpha2code: `MD`,
  alpha3code: `MDA`,
  alternativeNames: undefined,
  population: 4033963,
  coordinates: [28.28525496400006,46.967069702500055],
  polygon: CountryPolygons[`MDA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `monaco`,
  locales: {
    en: `Monaco`
  },
  phoneCode: `+377`,
  alpha2code: `MC`,
  alpha3code: `MCO`,
  alternativeNames: undefined,
  population: 39242,
  coordinates: [7.401602119563048,43.743117918500026],
  polygon: CountryPolygons[`MCO`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mongolia`,
  locales: {
    en: `Mongolia`
  },
  phoneCode: `+976`,
  alpha2code: `MN`,
  alpha3code: `MNG`,
  alternativeNames: undefined,
  population: 3278290,
  coordinates: [103.85503503500007,46.85141784700008],
  polygon: CountryPolygons[`MNG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `montenegro`,
  locales: {
    en: `Montenegro`
  },
  phoneCode: `+382`,
  alpha2code: `ME`,
  alpha3code: `MNE`,
  alternativeNames: undefined,
  population: 628066,
  coordinates: [19.39135339350007,42.69257924700006],
  polygon: CountryPolygons[`MNE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `montserrat`,
  locales: {
    en: `Montserrat`
  },
  phoneCode: `+1`,
  alpha2code: `MS`,
  alpha3code: `MSR`,
  alternativeNames: undefined,
  population: 4992,
  coordinates: undefined,
  polygon: CountryPolygons[`MSR`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `morocco`,
  locales: {
    en: `Morocco`
  },
  phoneCode: `+212`,
  alpha2code: `MA`,
  alpha3code: `MAR`,
  alternativeNames: undefined,
  population: 36910560,
  coordinates: [-9.030622863196513,28.67223747529175],
  polygon: CountryPolygons[`MAR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `mozambique`,
  locales: {
    en: `Mozambique`
  },
  phoneCode: `+258`,
  alpha2code: `MZ`,
  alpha3code: `MOZ`,
  alternativeNames: undefined,
  population: 31255435,
  coordinates: undefined,
  polygon: CountryPolygons[`MOZ`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `namibia`,
  locales: {
    en: `Namibia`
  },
  phoneCode: `+264`,
  alpha2code: `NA`,
  alpha3code: `NAM`,
  alternativeNames: undefined,
  population: 2540905,
  coordinates: [18.48870100550009,-22.95521270749991],
  polygon: CountryPolygons[`NAM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `nauru`,
  locales: {
    en: `Nauru`
  },
  phoneCode: `+674`,
  alpha2code: `NR`,
  alpha3code: `NRU`,
  alternativeNames: undefined,
  population: 10824,
  coordinates: undefined,
  polygon: CountryPolygons[`NRU`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `nepal`,
  locales: {
    en: `Nepal`
  },
  phoneCode: `+977`,
  alpha2code: `NP`,
  alpha3code: `NPL`,
  alternativeNames: undefined,
  population: 29136808,
  coordinates: [84.1027264815001,28.38379831950006],
  polygon: CountryPolygons[`NPL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `netherlands`,
  locales: {
    en: `Netherlands`
  },
  phoneCode: `+31`,
  alpha2code: `NL`,
  alpha3code: `NLD`,
  alternativeNames: undefined,
  population: 17134872,
  coordinates: [5.272002682500101,52.105282697500066],
  polygon: CountryPolygons[`NLD`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `netherlands-antilles`,
  locales: {
    en: `Netherlands Antilles`
  },
  phoneCode: `+599`,
  alpha2code: `AN`,
  alpha3code: `ANT`,
  alternativeNames: undefined,
  population: 227049,
  coordinates: undefined,
  polygon: CountryPolygons[`ANT`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `new-caledonia`,
  locales: {
    en: `New Caledonia`
  },
  phoneCode: `+687`,
  alpha2code: `NC`,
  alpha3code: `NCL`,
  alternativeNames: undefined,
  population: 285498,
  coordinates: undefined,
  polygon: CountryPolygons[`NCL`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `new-zealand`,
  locales: {
    en: `New Zealand`
  },
  phoneCode: `+64`,
  alpha2code: `NZ`,
  alpha3code: `NZL`,
  alternativeNames: undefined,
  population: 4822233,
  coordinates: [172.51685631600003,-40.878065687999936],
  polygon: CountryPolygons[`NZL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `nicaragua`,
  locales: {
    en: `Nicaragua`
  },
  phoneCode: `+505`,
  alpha2code: `NI`,
  alpha3code: `NIC`,
  alternativeNames: undefined,
  population: 6624554,
  coordinates: [-85.38847946222393,12.874512430500076],
  polygon: CountryPolygons[`NIC`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `niger`,
  locales: {
    en: `Niger`
  },
  phoneCode: `+227`,
  alpha2code: `NE`,
  alpha3code: `NER`,
  alternativeNames: undefined,
  population: 24206644,
  coordinates: undefined,
  polygon: CountryPolygons[`NER`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `nigeria`,
  locales: {
    en: `Nigeria`
  },
  phoneCode: `+234`,
  alpha2code: `NG`,
  alpha3code: `NGA`,
  alternativeNames: undefined,
  population: 206139589,
  coordinates: [8.671077514500098,9.07578074450008],
  polygon: CountryPolygons[`NGA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `niue`,
  locales: {
    en: `Niue`
  },
  phoneCode: `+683`,
  alpha2code: `NU`,
  alpha3code: `NIU`,
  alternativeNames: undefined,
  population: 1626,
  coordinates: undefined,
  polygon: CountryPolygons[`NIU`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `norfolk-island`,
  locales: {
    en: `Norfolk Island`
  },
  phoneCode: `+672`,
  alpha2code: `NF`,
  alpha3code: `NFK`,
  alternativeNames: undefined,
  population: 2169,
  coordinates: undefined,
  polygon: CountryPolygons[`NFK`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `north-korea`,
  locales: {
    en: `North Korea`
  },
  phoneCode: `+850`,
  alpha2code: `KP`,
  alpha3code: `PRK`,
  alternativeNames: undefined,
  population: 25778816,
  coordinates: undefined,
  polygon: CountryPolygons[`PRK`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `northern-mariana-islands`,
  locales: {
    en: `Northern Mariana Islands`
  },
  phoneCode: `+1`,
  alpha2code: `MP`,
  alpha3code: `MNP`,
  alternativeNames: undefined,
  population: 57559,
  coordinates: undefined,
  polygon: CountryPolygons[`MNP`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `norway`,
  locales: {
    en: `Norway`
  },
  phoneCode: `+47`,
  alpha2code: `NO`,
  alpha3code: `NOR`,
  alternativeNames: undefined,
  population: 5421241,
  coordinates: [18.013723178000077,69.25525543850006],
  polygon: CountryPolygons[`NOR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `oman`,
  locales: {
    en: `Oman`
  },
  phoneCode: `+968`,
  alpha2code: `OM`,
  alpha3code: `OMN`,
  alternativeNames: undefined,
  population: 5106626,
  coordinates: [55.911594682500095,21.444199937000064],
  polygon: CountryPolygons[`OMN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `pakistan`,
  locales: {
    en: `Pakistan`
  },
  phoneCode: `+92`,
  alpha2code: `PK`,
  alpha3code: `PAK`,
  alternativeNames: undefined,
  population: 220892340,
  coordinates: [68.94667484550007,30.377750552000087],
  polygon: CountryPolygons[`PAK`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `palau`,
  locales: {
    en: `Palau`
  },
  phoneCode: `+680`,
  alpha2code: `PW`,
  alpha3code: `PLW`,
  alternativeNames: undefined,
  population: 18094,
  coordinates: undefined,
  polygon: CountryPolygons[`PLW`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `palestine`,
  locales: {
    en: `Palestine`
  },
  phoneCode: `+970`,
  alpha2code: `PS`,
  alpha3code: `PSE`,
  alternativeNames: undefined,
  population: 5051953,
  coordinates: undefined,
  polygon: CountryPolygons[`PSE`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `panama`,
  locales: {
    en: `Panama`
  },
  phoneCode: `+507`,
  alpha2code: `PA`,
  alpha3code: `PAN`,
  alternativeNames: undefined,
  population: 4314767,
  coordinates: [-80.07274338849989,8.420921827000058],
  polygon: CountryPolygons[`PAN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `papua-new-guinea`,
  locales: {
    en: `Papua New Guinea`
  },
  phoneCode: `+675`,
  alpha2code: `PG`,
  alpha3code: `PNG`,
  alternativeNames: undefined,
  population: 8947024,
  coordinates: undefined,
  polygon: CountryPolygons[`PNG`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `paraguay`,
  locales: {
    en: `Paraguay`
  },
  phoneCode: `+595`,
  alpha2code: `PY`,
  alpha3code: `PRY`,
  alternativeNames: undefined,
  population: 7132538,
  coordinates: [-58.44782303899994,-23.43368479399996],
  polygon: CountryPolygons[`PRY`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `peru`,
  locales: {
    en: `Peru`
  },
  phoneCode: `+51`,
  alpha2code: `PE`,
  alpha3code: `PER`,
  alternativeNames: undefined,
  population: 32971854,
  coordinates: [-75.01090500599992,-9.190602483184005],
  polygon: CountryPolygons[`PER`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `philippines`,
  locales: {
    en: `Philippines`
  },
  phoneCode: `+63`,
  alpha2code: `PH`,
  alpha3code: `PHL`,
  alternativeNames: undefined,
  population: 109581078,
  coordinates: [121.93718509200005,12.108262437000064],
  polygon: CountryPolygons[`PHL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `poland`,
  locales: {
    en: `Poland`
  },
  phoneCode: `+48`,
  alpha2code: `PL`,
  alpha3code: `POL`,
  alternativeNames: undefined,
  population: 37846611,
  coordinates: [19.125478149000088,51.93482900350006],
  polygon: CountryPolygons[`POL`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `portugal`,
  locales: {
    en: `Portugal`
  },
  phoneCode: `+351`,
  alpha2code: `PT`,
  alpha3code: `PRT`,
  alternativeNames: undefined,
  population: 10196709,
  coordinates: [-15.94334102749994,37.400416263500055],
  polygon: CountryPolygons[`PRT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `puerto-rico`,
  locales: {
    en: `Puerto Rico`
  },
  phoneCode: `+1`,
  alpha2code: `PR`,
  alpha3code: `PRI`,
  alternativeNames: undefined,
  population: 2860853,
  coordinates: undefined,
  polygon: CountryPolygons[`PRI`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `qatar`,
  locales: {
    en: `Qatar`
  },
  phoneCode: `+974`,
  alpha2code: `QA`,
  alpha3code: `QAT`,
  alternativeNames: undefined,
  population: 2881053,
  coordinates: [51.18376712300005,25.363913984500023],
  polygon: CountryPolygons[`QAT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `democratic-republic-of-the-congo`,
  locales: {
    en: `Democratic Republic of the Congo`
  },
  phoneCode: `+243`,
  alpha2code: `CD`,
  alpha3code: `COD`,
  alternativeNames: undefined,
  population: 91931000,
  coordinates: [21.726683794000053,-4.029468688999948],
  polygon: CountryPolygons[`COD`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `republic-of-the-congo`,
  locales: {
    en: `Republic of the Congo`
  },
  phoneCode: `+242`,
  alpha2code: `CG`,
  alpha3code: `COG`,
  alternativeNames: undefined,
  population: 5244359,
  coordinates: [14.870201735054954,-0.6556773869999333],
  polygon: CountryPolygons[`COG`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `romania`,
  locales: {
    en: `Romania`
  },
  phoneCode: `+40`,
  alpha2code: `RO`,
  alpha3code: `ROU`,
  alternativeNames: undefined,
  population: 19237691,
  coordinates: [24.950926754500074,45.95662750300005],
  polygon: CountryPolygons[`ROU`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `russia`,
  locales: {
    en: `Russia`
  },
  phoneCode: `+7`,
  alpha2code: `RU`,
  alpha3code: `RUS`,
  alternativeNames: undefined,
  population: 145934462,
  coordinates: [4.263256414560601e-14,61.240742495500065],
  polygon: CountryPolygons[`RUS`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `rwanda`,
  locales: {
    en: `Rwanda`
  },
  phoneCode: `+250`,
  alpha2code: `RW`,
  alpha3code: `RWA`,
  alternativeNames: undefined,
  population: 12952218,
  coordinates: [29.873323404500084,-1.943601175999916],
  polygon: CountryPolygons[`RWA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `saint-barthelemy`,
  locales: {
    en: `Saint Barthelemy`
  },
  phoneCode: `+590`,
  alpha2code: `BL`,
  alpha3code: `BLM`,
  alternativeNames: undefined,
  population: 9877,
  coordinates: undefined,
  polygon: CountryPolygons[`BLM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saint-helena`,
  locales: {
    en: `Saint Helena`
  },
  phoneCode: `+290`,
  alpha2code: `SH`,
  alpha3code: `SHN`,
  alternativeNames: undefined,
  population: 6077,
  coordinates: undefined,
  polygon: CountryPolygons[`SHN`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saint-kitts-and-nevis`,
  locales: {
    en: `Saint Kitts and Nevis`
  },
  phoneCode: `+1`,
  alpha2code: `KN`,
  alpha3code: `KNA`,
  alternativeNames: undefined,
  population: 52441,
  coordinates: undefined,
  polygon: CountryPolygons[`KNA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saint-martin`,
  locales: {
    en: `Saint Martin`
  },
  phoneCode: `+590`,
  alpha2code: `MF`,
  alpha3code: `MAF`,
  alternativeNames: undefined,
  population: 38666,
  coordinates: undefined,
  polygon: CountryPolygons[`MAF`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saint-pierre-and-miquelon`,
  locales: {
    en: `Saint Pierre and Miquelon`
  },
  phoneCode: `+508`,
  alpha2code: `PM`,
  alpha3code: `SPM`,
  alternativeNames: undefined,
  population: 6008,
  coordinates: undefined,
  polygon: CountryPolygons[`SPM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saint-vincent-and-the-grenadines`,
  locales: {
    en: `Saint Vincent and the Grenadines`
  },
  phoneCode: `+1`,
  alpha2code: `VC`,
  alpha3code: `VCT`,
  alternativeNames: undefined,
  population: 110211,
  coordinates: [-61.19764156799994,13.257473049000055],
  polygon: CountryPolygons[`VCT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `samoa`,
  locales: {
    en: `Samoa`
  },
  phoneCode: `+685`,
  alpha2code: `WS`,
  alpha3code: `WSM`,
  alternativeNames: undefined,
  population: 198414,
  coordinates: undefined,
  polygon: CountryPolygons[`WSM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `san-marino`,
  locales: {
    en: `San Marino`
  },
  phoneCode: `+378`,
  alpha2code: `SM`,
  alpha3code: `SMR`,
  alternativeNames: undefined,
  population: 33931,
  coordinates: [12.437976970500117,43.92963720000006],
  polygon: CountryPolygons[`SMR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `sao-tome-and-principe`,
  locales: {
    en: `Sao Tome and Principe`
  },
  phoneCode: `+239`,
  alpha2code: `ST`,
  alpha3code: `STP`,
  alternativeNames: undefined,
  population: 211028,
  coordinates: undefined,
  polygon: CountryPolygons[`STP`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `saudi-arabia`,
  locales: {
    en: `Saudi Arabia`
  },
  phoneCode: `+966`,
  alpha2code: `SA`,
  alpha3code: `SAU`,
  alternativeNames: undefined,
  population: 34813871,
  coordinates: [45.132142167500064,24.244550886000077],
  polygon: CountryPolygons[`SAU`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `senegal`,
  locales: {
    en: `Senegal`
  },
  phoneCode: `+221`,
  alpha2code: `SN`,
  alpha3code: `SEN`,
  alternativeNames: undefined,
  population: 16743927,
  coordinates: [-14.37969132899994,14.474492289500091],
  polygon: CountryPolygons[`SEN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `serbia`,
  locales: {
    en: `Serbia`
  },
  phoneCode: `+381`,
  alpha2code: `RS`,
  alpha3code: `SRB`,
  alternativeNames: undefined,
  population: 8737371,
  coordinates: [20.9182886145001,44.20522467850007],
  polygon: CountryPolygons[`SRB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `seychelles`,
  locales: {
    en: `Seychelles`
  },
  phoneCode: `+248`,
  alpha2code: `SC`,
  alpha3code: `SYC`,
  alternativeNames: undefined,
  population: 98347,
  coordinates: [55.46512857035178,-4.6842609996816105],
  polygon: CountryPolygons[`SYC`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `sierra-leone`,
  locales: {
    en: `Sierra Leone`
  },
  phoneCode: `+232`,
  alpha2code: `SL`,
  alpha3code: `SLE`,
  alternativeNames: undefined,
  population: 7976983,
  coordinates: undefined,
  polygon: CountryPolygons[`SLE`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `singapore`,
  locales: {
    en: `Singapore`
  },
  phoneCode: `+65`,
  alpha2code: `SG`,
  alpha3code: `SGP`,
  alternativeNames: undefined,
  population: 5850342,
  coordinates: [103.80420983150006,1.3585676125000532],
  polygon: CountryPolygons[`SGP`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `sint-maarten-(-dutch-part)`,
  locales: {
    en: `Sint Maarten (Dutch part)`
  },
  phoneCode: `+1`,
  alpha2code: `SX`,
  alpha3code: `SXM`,
  alternativeNames: undefined,
  population: 41486,
  coordinates: undefined,
  polygon: CountryPolygons[`SXM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `slovakia`,
  locales: {
    en: `Slovakia`
  },
  phoneCode: `+421`,
  alpha2code: `SK`,
  alpha3code: `SVK`,
  alternativeNames: undefined,
  population: 5459642,
  coordinates: [19.692058553000123,48.67589304650005],
  polygon: CountryPolygons[`SVK`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `slovenia`,
  locales: {
    en: `Slovenia`
  },
  phoneCode: `+386`,
  alpha2code: `SI`,
  alpha3code: `SVN`,
  alternativeNames: undefined,
  population: 2078938,
  coordinates: [14.940281412500084,46.14379954050001],
  polygon: CountryPolygons[`SVN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `solomon-islands`,
  locales: {
    en: `Solomon Islands`
  },
  phoneCode: `+677`,
  alpha2code: `SB`,
  alpha3code: `SLB`,
  alternativeNames: undefined,
  population: 686884,
  coordinates: undefined,
  polygon: CountryPolygons[`SLB`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `somalia`,
  locales: {
    en: `Somalia`
  },
  phoneCode: `+252`,
  alpha2code: `SO`,
  alpha3code: `SOM`,
  alternativeNames: undefined,
  population: 15893222,
  coordinates: [46.12904176900011,5.146407826500052],
  polygon: CountryPolygons[`SOM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `south-africa`,
  locales: {
    en: `South Africa`
  },
  phoneCode: `+27`,
  alpha2code: `ZA`,
  alpha3code: `ZAF`,
  alternativeNames: undefined,
  population: 59308690,
  coordinates: [24.690074089500087,-28.469792578999943],
  polygon: CountryPolygons[`ZAF`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `south-korea`,
  locales: {
    en: `South Korea`
  },
  phoneCode: `+82`,
  alpha2code: `KR`,
  alpha3code: `KOR`,
  alternativeNames: undefined,
  population: 51269185,
  coordinates: [127.85698489700007,35.91235993050006],
  polygon: CountryPolygons[`KOR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `south-sudan`,
  locales: {
    en: `South Sudan`
  },
  phoneCode: `+211`,
  alpha2code: `SS`,
  alpha3code: `SSD`,
  alternativeNames: undefined,
  population: 11193725,
  coordinates: undefined,
  polygon: CountryPolygons[`SSD`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `spain`,
  locales: {
    en: `Spain`
  },
  phoneCode: `+34`,
  alpha2code: `ES`,
  alpha3code: `ESP`,
  alternativeNames: undefined,
  population: 46754778,
  coordinates: [-6.849639452499929,35.73847077050007],
  polygon: CountryPolygons[`ESP`],
  parentId: 'earth',
  dataSource: `https://opendata.arcgis.com/datasets/48fac2d7de0f43f9af938852e3748845_0.csv`
}, {
  id: `sri-lanka`,
  locales: {
    en: `Sri Lanka`
  },
  phoneCode: `+94`,
  alpha2code: `LK`,
  alpha3code: `LKA`,
  alternativeNames: undefined,
  population: 21413249,
  coordinates: [80.82227623750006,7.8766543645000695],
  polygon: CountryPolygons[`LKA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `saint-lucia`,
  locales: {
    en: `Saint Lucia`
  },
  phoneCode: `+1`,
  alpha2code: `LC`,
  alpha3code: `LCA`,
  alternativeNames: undefined,
  population: 183627,
  coordinates: [-60.981353318999936,13.86609528200006],
  polygon: CountryPolygons[`LCA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `sudan`,
  locales: {
    en: `Sudan`
  },
  phoneCode: `+249`,
  alpha2code: `SD`,
  alpha3code: `SDN`,
  alternativeNames: undefined,
  population: 43849260,
  coordinates: [30.205510901500105,15.342520469500087],
  polygon: CountryPolygons[`SDN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `suriname`,
  locales: {
    en: `Suriname`
  },
  phoneCode: `+597`,
  alpha2code: `SR`,
  alpha3code: `SUR`,
  alternativeNames: undefined,
  population: 586632,
  coordinates: [-56.02702432849992,3.922540270500072],
  polygon: CountryPolygons[`SUR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `swaziland`,
  locales: {
    en: `Swaziland`
  },
  phoneCode: `+268`,
  alpha2code: `SZ`,
  alpha3code: `SWZ`,
  alternativeNames: undefined,
  population: 1136281,
  coordinates: [31.451547485500043,-26.52995574899993],
  polygon: CountryPolygons[`SWZ`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `sweden`,
  locales: {
    en: `Sweden`
  },
  phoneCode: `+46`,
  alpha2code: `SE`,
  alpha3code: `SWE`,
  alternativeNames: undefined,
  population: 10099265,
  coordinates: [17.635630730000088,62.191185204500094],
  polygon: CountryPolygons[`SWE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `switzerland`,
  locales: {
    en: `Switzerland`
  },
  phoneCode: `+41`,
  alpha2code: `CH`,
  alpha3code: `CHE`,
  alternativeNames: undefined,
  population: 8654622,
  coordinates: [8.258983805500094,46.840811259500086],
  polygon: CountryPolygons[`CHE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `syrian-arab-republic`,
  locales: {
    en: `Syrian Arab Republic`
  },
  phoneCode: `+963`,
  alpha2code: `SY`,
  alpha3code: `SYR`,
  alternativeNames: undefined,
  population: 17070135,
  coordinates: undefined,
  polygon: CountryPolygons[`SYR`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `taiwan`,
  locales: {
    en: `Taiwan`
  },
  phoneCode: `+886`,
  alpha2code: `TW`,
  alpha3code: `TWN`,
  alternativeNames: undefined,
  population: 23816775,
  coordinates: [120.98259524850005,23.598456122000044],
  polygon: CountryPolygons[`TWN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `tajikistan`,
  locales: {
    en: `Tajikistan`
  },
  phoneCode: `+992`,
  alpha2code: `TJ`,
  alpha3code: `TJK`,
  alternativeNames: undefined,
  population: 9537645,
  coordinates: undefined,
  polygon: CountryPolygons[`TJK`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `tanzania`,
  locales: {
    en: `Tanzania`
  },
  phoneCode: `+255`,
  alpha2code: `TZ`,
  alpha3code: `TZA`,
  alternativeNames: undefined,
  population: 59734218,
  coordinates: [34.87894555300008,-6.362582091999926],
  polygon: CountryPolygons[`TZA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `thailand`,
  locales: {
    en: `Thailand`
  },
  phoneCode: `+66`,
  alpha2code: `TH`,
  alpha3code: `THA`,
  alternativeNames: undefined,
  population: 69799978,
  coordinates: [101.54455590850003,13.04083302850006],
  polygon: CountryPolygons[`THA`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `the-bahamas`,
  locales: {
    en: `The Bahamas`
  },
  phoneCode: `+1`,
  alpha2code: `BS`,
  alpha3code: `BHS`,
  alternativeNames: [`Bahamas, The`, `Bahamas`],
  population: 393244,
  coordinates: [-73.30892915499993,21.243227533000066],
  polygon: CountryPolygons[`BHS`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `the-gambia`,
  locales: {
    en: `The Gambia`
  },
  phoneCode: `+220`,
  alpha2code: `GM`,
  alpha3code: `GMB`,
  alternativeNames: [`Gambia, The`, `Gambia`],
  population: 2416668,
  coordinates: [-15.340368716999905,13.442496646000073],
  polygon: CountryPolygons[`GMB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `timor-leste`,
  locales: {
    en: `Timor-Leste`
  },
  phoneCode: `+670`,
  alpha2code: `TL`,
  alpha3code: `TLS`,
  alternativeNames: [`East Timor`],
  population: 1318445,
  coordinates: undefined,
  polygon: CountryPolygons[`TLS`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `togo`,
  locales: {
    en: `Togo`
  },
  phoneCode: `+228`,
  alpha2code: `TG`,
  alpha3code: `TGO`,
  alternativeNames: undefined,
  population: 8278724,
  coordinates: [0.8081207685000891,8.61773549700009],
  polygon: CountryPolygons[`TGO`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `tokelau`,
  locales: {
    en: `Tokelau`
  },
  phoneCode: `+690`,
  alpha2code: `TK`,
  alpha3code: `TKL`,
  alternativeNames: undefined,
  population: 1357,
  coordinates: undefined,
  polygon: CountryPolygons[`TKL`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `tonga`,
  locales: {
    en: `Tonga`
  },
  phoneCode: `+676`,
  alpha2code: `TO`,
  alpha3code: `TON`,
  alternativeNames: undefined,
  population: 105695,
  coordinates: undefined,
  polygon: CountryPolygons[`TON`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `trinidad-and-tobago`,
  locales: {
    en: `Trinidad and Tobago`
  },
  phoneCode: `+1`,
  alpha2code: `TT`,
  alpha3code: `TTO`,
  alternativeNames: undefined,
  population: 1399488,
  coordinates: [-61.33045406799994,10.451544501000058],
  polygon: CountryPolygons[`TTO`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `tunisia`,
  locales: {
    en: `Tunisia`
  },
  phoneCode: `+216`,
  alpha2code: `TN`,
  alpha3code: `TUN`,
  alternativeNames: undefined,
  population: 11818619,
  coordinates: [9.521981649000097,33.78217031200008],
  polygon: CountryPolygons[`TUN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `turkey`,
  locales: {
    en: `Turkey`
  },
  phoneCode: `+90`,
  alpha2code: `TR`,
  alpha3code: `TUR`,
  alternativeNames: undefined,
  population: 84339067,
  coordinates: [35.425474377000086,38.95576283850008],
  polygon: CountryPolygons[`TUR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `turkmenistan`,
  locales: {
    en: `Turkmenistan`
  },
  phoneCode: `+993`,
  alpha2code: `TM`,
  alpha3code: `TKM`,
  alternativeNames: undefined,
  population: 6031200,
  coordinates: undefined,
  polygon: CountryPolygons[`TKM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `turks-and-caicos-islands`,
  locales: {
    en: `Turks and Caicos Islands`
  },
  phoneCode: `+1`,
  alpha2code: `TC`,
  alpha3code: `TCA`,
  alternativeNames: undefined,
  population: 31458,
  coordinates: undefined,
  polygon: CountryPolygons[`TCA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `tuvalu`,
  locales: {
    en: `Tuvalu`
  },
  phoneCode: `+688`,
  alpha2code: `TV`,
  alpha3code: `TUV`,
  alternativeNames: undefined,
  population: 11792,
  coordinates: undefined,
  polygon: CountryPolygons[`TUV`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `uganda`,
  locales: {
    en: `Uganda`
  },
  phoneCode: `+256`,
  alpha2code: `UG`,
  alpha3code: `UGA`,
  alternativeNames: undefined,
  population: 45741007,
  coordinates: undefined,
  polygon: CountryPolygons[`UGA`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `ukraine`,
  locales: {
    en: `Ukraine`
  },
  phoneCode: `+380`,
  alpha2code: `UA`,
  alpha3code: `UKR`,
  alternativeNames: undefined,
  population: 43733762,
  coordinates: [31.137251424000127,48.79241852100008],
  polygon: CountryPolygons[`UKR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-arab-emirates`,
  locales: {
    en: `United Arab Emirates`
  },
  phoneCode: `+971`,
  alpha2code: `AE`,
  alpha3code: `ARE`,
  alternativeNames: undefined,
  population: 9890402,
  coordinates: [53.97632897200003,24.340997059161296],
  polygon: CountryPolygons[`ARE`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-kingdom`,
  locales: {
    en: `United Kingdom`
  },
  phoneCode: `+44`,
  alpha2code: `GB`,
  alpha3code: `GBR`,
  alternativeNames: undefined,
  population: 67886011,
  coordinates: [-3.192432722499916,55.19161611550004],
  polygon: CountryPolygons[`GBR`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `united-states-of-america`,
  locales: {
    en: `United States of America`
  },
  phoneCode: `+1`,
  alpha2code: `US`,
  alpha3code: `USA`,
  alternativeNames: undefined,
  population: 331002651,
  coordinates: [-91.212524,39.9787775],
  polygon: CountryPolygons[`USA`],
  parentId: 'earth',
  dataSource: `https://www.tn.gov/health/cedep/ncov.html`
}, {
  id: `uruguay`,
  locales: {
    en: `Uruguay`
  },
  phoneCode: `+598`,
  alpha2code: `UY`,
  alpha3code: `URY`,
  alternativeNames: undefined,
  population: 3473730,
  coordinates: [-55.78074845749991,-32.535970353999936],
  polygon: CountryPolygons[`URY`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `uzbekistan`,
  locales: {
    en: `Uzbekistan`
  },
  phoneCode: `+998`,
  alpha2code: `UZ`,
  alpha3code: `UZB`,
  alternativeNames: undefined,
  population: 33469203,
  coordinates: [64.48963423650005,41.373793538500024],
  polygon: CountryPolygons[`UZB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `vanuatu`,
  locales: {
    en: `Vanuatu`
  },
  phoneCode: `+678`,
  alpha2code: `VU`,
  alpha3code: `VUT`,
  alternativeNames: undefined,
  population: 307145,
  coordinates: undefined,
  polygon: CountryPolygons[`VUT`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `vatican-city`,
  locales: {
    en: `Vatican City`
  },
  phoneCode: `+39`,
  alpha2code: `VA`,
  alpha3code: `VAT`,
  alternativeNames: undefined,
  population: 801,
  coordinates: [12.453533325000109,41.90333333950011],
  polygon: CountryPolygons[`VAT`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `venezuela`,
  locales: {
    en: `Venezuela`
  },
  phoneCode: `+58`,
  alpha2code: `VE`,
  alpha3code: `VEN`,
  alternativeNames: undefined,
  population: 28435940,
  coordinates: [-66.5967054854999,6.444529930500067],
  polygon: CountryPolygons[`VEN`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `vietnam`,
  locales: {
    en: `Vietnam`
  },
  phoneCode: `+84`,
  alpha2code: `VN`,
  alpha3code: `VNM`,
  alternativeNames: undefined,
  population: 97338579,
  coordinates: [105.79183617800007,15.941768090000089],
  polygon: CountryPolygons[`VNM`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `wallis-and-futuna`,
  locales: {
    en: `Wallis and Futuna`
  },
  phoneCode: `+681`,
  alpha2code: `WF`,
  alpha3code: `WLF`,
  alternativeNames: undefined,
  population: 11558,
  coordinates: undefined,
  polygon: CountryPolygons[`WLF`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `yemen`,
  locales: {
    en: `Yemen`
  },
  phoneCode: `+967`,
  alpha2code: `YE`,
  alpha3code: `YEM`,
  alternativeNames: undefined,
  population: 29825964,
  coordinates: undefined,
  polygon: CountryPolygons[`YEM`],
  parentId: 'earth',
  dataSource: undefined
}, {
  id: `zambia`,
  locales: {
    en: `Zambia`
  },
  phoneCode: `+260`,
  alpha2code: `ZM`,
  alpha3code: `ZMB`,
  alternativeNames: undefined,
  population: 18383955,
  coordinates: [27.827040039000053,-13.129972635499918],
  polygon: CountryPolygons[`ZMB`],
  parentId: 'earth',
  dataSource: `https://github.com/CSSEGISandData/COVID-19`
}, {
  id: `zimbabwe`,
  locales: {
    en: `Zimbabwe`
  },
  phoneCode: `+263`,
  alpha2code: `ZW`,
  alpha3code: `ZWE`,
  alternativeNames: undefined,
  population: 14862924,
  coordinates: undefined,
  polygon: CountryPolygons[`ZWE`],
  parentId: 'earth',
  dataSource: undefined
}]
