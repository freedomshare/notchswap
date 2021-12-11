import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Explore'),
    icon: 'PredictionsIcon',
    items: [
      {
        label: t('Reward'),
        href: 'https://reward.notchswap.com/',
      },
      {
        label: t('Smart Link'),
        href: 'https://notchlink.com/NotchToken',
      },
      {
        label: t('Verify token request'),
        href: 'https://u25gaeklzah.typeform.com/to/f5K6podQ',
      },
    ],
  },
  {
    label: t('Trade'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Referral'),
    icon: 'TicketIcon',
    href: '/referral',
  },
  // {
  //   label: t('Lottery'),
  //   icon: 'GroupsIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Gaming'),
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  {
    label: t('Audits'),
    icon: 'NftIcon',
    href: '/audit',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('PooChart'),
        href: 'https://poocoin.app/tokens/0x30b8274c3b452d6d5af4dedc3464c18e65ddec64',
      },
      {
        label: t('CoinmarketCap'),
        href: '/coinmarket',
      },
      {
        label: t('Coingecko'),
        href: '/coingecko',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      // {
      //   label: t('Github'),
      //   href: 'https://github.com/notchswap',
      // },
      {
        label: t('Docs'),
        href: 'https://forms.gle/NwuWLWYzbXdZGuCy6',
      },
      {
        label: t('News'),
        href: 'https://medium.com/@notchtoken',
      },
    ],
  },
  // {
  //   label: t('Admin'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Token-Hub'),
  //       href: '/tokenView',
  //     },
  //   ]
  // },
]

export default config
