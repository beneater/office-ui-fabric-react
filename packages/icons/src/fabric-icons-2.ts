// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-2"`,
      src: `url('${baseUrl}fabric-icons-2-b9379dbc.woff') format('woff')`
    },
    icons: {
      Group: '\uE902',
      World: '\uE909',
      Comment: '\uE90A',
      DockLeft: '\uE90C',
      DockRight: '\uE90D',
      Repair: '\uE90F',
      Accounts: '\uE910',
      RadioBullet: '\uE915',
      Stopwatch: '\uE916',
      Clock: '\uE917',
      WorldClock: '\uE918',
      AlarmClock: '\uE919',
      Photo: '\uE91B',
      Hospital: '\uE91D',
      Timer: '\uE91E',
      FullCircleMask: '\uE91F',
      LocationFill: '\uE920',
      ChromeMinimize: '\uE921',
      Annotation: '\uE924',
      Fingerprint: '\uE928',
      Handwriting: '\uE929',
      Completed: '\uE930',
      Label: '\uE932',
      FlickDown: '\uE935',
      FlickUp: '\uE936',
      FlickLeft: '\uE937',
      FlickRight: '\uE938',
      MiniExpand: '\uE93A',
      MiniContract: '\uE93B',
      Streaming: '\uE93E',
      MusicInCollection: '\uE940',
      OneDriveLogo: '\uE941',
      CompassNW: '\uE942',
      Code: '\uE943',
      LightningBolt: '\uE945',
      CalculatorMultiply: '\uE947',
      CalculatorAddition: '\uE948',
      CalculatorSubtract: '\uE949',
      CalculatorEqualTo: '\uE94E',
      PrintfaxPrinterFile: '\uE956',
      Communications: '\uE95A',
      Headset: '\uE95B',
      Health: '\uE95E',
      ChevronUpSmall: '\uE96D',
      ChevronDownSmall: '\uE96E',
      ChevronLeftSmall: '\uE96F',
      ChevronRightSmall: '\uE970',
      ChevronUpMed: '\uE971',
      ChevronDownMed: '\uE972',
      ChevronLeftMed: '\uE973',
      ChevronRightMed: '\uE974',
      PC1: '\uE977',
      PresenceChickletVideo: '\uE979',
      Reply: '\uE97A',
      HalfAlpha: '\uE97E',
      ConstructionCone: '\uE98F',
      DoubleChevronLeftMed: '\uE991',
      Volume0: '\uE992',
      Volume1: '\uE993',
      Volume2: '\uE994',
      Volume3: '\uE995',
      Chart: '\uE999',
      Robot: '\uE99A',
      Manufacturing: '\uE99C',
      LockSolid: '\uE9A2',
      BidiLtr: '\uE9AA',
      BidiRtl: '\uE9AB',
      RightDoubleQuote: '\uE9B1',
      Sunny: '\uE9BD',
      CloudWeather: '\uE9BE',
      Cloudy: '\uE9BF',
      PartlyCloudyDay: '\uE9C0',
      PartlyCloudyNight: '\uE9C1',
      ClearNight: '\uE9C2',
      RainShowersDay: '\uE9C3',
      Rain: '\uE9C4',
      Thunderstorms: '\uE9C6',
      RainSnow: '\uE9C7',
      Snow: '\uE9C8',
      BlowingSnow: '\uE9C9',
      Frigid: '\uE9CA',
      Fog: '\uE9CB',
      Squalls: '\uE9CC',
      Duststorm: '\uE9CD',
      Unknown: '\uE9CE',
      Precipitation: '\uE9CF',
      Ribbon: '\uE9D1',
      AreaChart: '\uE9D2',
      Assign: '\uE9D3',
      CheckList: '\uE9D5',
      Diagnostic: '\uE9D9',
      Generate: '\uE9DA',
      LineChart: '\uE9E6',
      Equalizer: '\uE9E9',
      BarChartHorizontal: '\uE9EB',
      BarChartVertical: '\uE9EC',
      Freezing: '\uE9EF',
      Processing: '\uE9F5',
      SnowShowerDay: '\uE9FD',
      HailDay: '\uEA00'
    }
  };

  registerIcons(subset, options);
}
