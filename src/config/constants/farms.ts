import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'NN',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x18f0e5CF6050C989F5efD39cdCbe702c7d789d3c', /* 0x30B8274C3b452d6D5af4dedC3464C18E65dDeC64 */
    },
    token: tokens.nn,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'NN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x96a6241e527cb04c39DF2D3f95f410999B897021',
    },
    token: tokens.nn,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'NN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x18f0e5CF6050C989F5efD39cdCbe702c7d789d3c',
    },
    token: tokens.nn,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'TWT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
    },
    token: tokens.twt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF',
    },
    token: tokens.ada,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC7b4B32A3be2cB6572a1c9959401F832Ce47a6d2',
    },
    token: tokens.xrp,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'SAFEMOON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9adc6Fb78CEFA07E13E9294F150C1E8C1Dd566c0',
    },
    token: tokens.safemoon,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4adB22473E8dBf5EFd0Bf554Ae35d7f3C5178fC5',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: 10,
  //   lpSymbol: 'SAFEMOON-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xfB7DEb2236815222113D949d935cCA4901531677',
  //   },
  //   token: tokens.safemoon,
  //   quoteToken: tokens.usdt,
  // },
  {
    pid: 11,
    lpSymbol: 'CAKE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x0Ed8E0A2D99643e1e65CCA22Ed4424090B8B7458', /* 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82 */
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'ETH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd9A0d1F5e02dE2403f68Bb71a15F8847A854b494', /* 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 */
    },
    token: tokens.eth,
    quoteToken: tokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'SAFEMOON',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xCC6b11DE64DCE6e5052a84b67cbbfd210ED530f7', /* 0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3 */
    },
    token: tokens.safemoon,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'DOGE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x1Efcb446bFa553A2EB2fff99c9F76962be6ECAC3', /* 0xbA2aE424d960c26247Dd6c32edC70B295c744C43 */
    },
    token: tokens.doge,
    quoteToken: tokens.busd,
  },
]

export default farms
