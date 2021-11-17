import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NotchSwap',
  description:
    'The most popular AMM on BSC by user count! Earn NN through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Infinity), NFTs, and more, on a platform you can trust.',
  image: 'https://notchswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('NotchSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('NotchSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('NotchSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('NotchSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('NotchSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('NotchSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('NotchSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('NotchSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('NotchSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('NotchSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('NotchSwap')}`,
      }
    default:
      return null
  }
}
