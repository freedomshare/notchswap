import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text, Button, ArrowForwardIcon, Flex, useModal } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import styled from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import { useFarms, usePollFarmsData, usePriceCakeBusd } from 'state/farms/hooks'
import usePersistState from 'hooks/usePersistState'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getFarmApr } from 'utils/apr'
import { orderBy } from 'lodash'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import { useUserFarmStakedOnly } from 'state/user/hooks'
import PageHeader from 'components/PageHeader'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Table from './components/TokenTable/TokenTable'
import { RowProps } from './components/FarmTable/Row'
import { DesktopColumnSchema, DesktopTokenColumnSchema, ViewMode } from './components/types'
import AddTokenModal from '../../components/AddModal/AddTokenModal'
import HubService from '../../service/hubService'
import TokenType from '../../service/token.type'

const NUMBER_OF_FARMS_VISIBLE = 50

const getDisplayApr = (cakeRewardsApr?: number, lpRewardsApr?: number) => {
  if (cakeRewardsApr) {
    return cakeRewardsApr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  return null
}

export interface FarmsProps {
  tokenMode?: boolean
}

const TokenView: React.FC<FarmsProps> = (farmsProps) => {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { data: farmsLP, userDataLoaded } = useFarms()
  const [viewMode, setViewMode] = usePersistState(ViewMode.TABLE, { localStorageKey: 'pancake_farm_view' })
  const { account } = useWeb3React()
  const isArchived = pathname.includes('archived')
  const [tokenList, setTokenList] = useState([]);

  usePollFarmsData(isArchived)

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded
  const userDataReady = !account || (!!account && userDataLoaded)

  const fetchTokenList = useCallback(() => {
    HubService.getAll()
      .then((response: any) => {
        // console.info(response.data)
        setTokenList(response.data);
      })
      .catch((e: Error) => {
        console.error(e);
      })
  },
    []
  )

  useEffect(() => {
    fetchTokenList()
  }, [tokenList, fetchTokenList])

  const renderContent = (): JSX.Element => {
    if (viewMode === ViewMode.TABLE && tokenList.length) {
      // const columnSchema = DesktopColumnSchema

      // const columns = columnSchema.map((column) => ({
      //   id: column.id,
      //   name: column.name,
      //   label: column.label,
      //   sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
      //     switch (column.name) {
      //       case 'farm':
      //         return b.id - a.id
      //       case 'apr':
      //         if (a.original.apr.value && b.original.apr.value) {
      //           return Number(a.original.apr.value) - Number(b.original.apr.value)
      //         }

      //         return 0
      //       case 'earned':
      //         return a.original.earned.earnings - b.original.earned.earnings
      //       default:
      //         return 1
      //     }
      //   },
      //   sortable: column.sortable,
      // }))
      const columnSchema = DesktopTokenColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sortable: column.sortable,
      }))

      return <Table data={tokenList} columns={columns} userDataReady={userDataReady} />
    }

    return (null)
    // return (
    //   <FlexLayout>
    //     <Route exact path={`${path}`}>
    //       {chosenFarmsMemoized.map((farm) => (
    //         <FarmCard
    //           key={farm.pid}
    //           farm={farm}
    //           displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
    //           cakePrice={cakePrice}
    //           account={account}
    //           removed={false}
    //         />
    //       ))}
    //     </Route>
    //     <Route exact path={`${path}/history`}>
    //       {chosenFarmsMemoized.map((farm) => (
    //         <FarmCard
    //           key={farm.pid}
    //           farm={farm}
    //           displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
    //           cakePrice={cakePrice}
    //           account={account}
    //           removed
    //         />
    //       ))}
    //     </Route>
    //     <Route exact path={`${path}/archived`}>
    //       {chosenFarmsMemoized.map((farm) => (
    //         <FarmCard
    //           key={farm.pid}
    //           farm={farm}
    //           displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
    //           cakePrice={cakePrice}
    //           account={account}
    //           removed
    //         />
    //       ))}
    //     </Route>
    //   </FlexLayout>
    // )
  }

  const onAdd = useCallback(
    (name: string, symbol: string, address: string, chainId: number, decimals: number, logoURI: string) => {
      const reqData: TokenType = {
        name,
        symbol,
        address,
        chainId,
        decimals,
        logoURI
      }
      HubService.create(reqData)
        .then((response: any) => {
          console.info(response.data)
        })
        .catch((e: Error) => {
          console.error(e);
        });
    },
    []
  )

  const [onPresentCurrencyModal] = useModal(
    <AddTokenModal
      onAdd={onAdd}
    />,
  )

  return (
    <>
      <PageHeader>
        <Flex flexDirection="column">
          <Flex flexDirection={['column', null, null, 'row']} alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
          >
            <Flex flexDirection="column" flex="1" alignSelf={['flex-start', null, null, 'center']}>
              <Heading as="h1" scale="xxl" color="#f5f800" mb="24px">
                {t('Token-Hub')}
              </Heading>
              <Heading scale="lg" color="text">
                {t('Verify your tokens.')}
              </Heading>
            </Flex>
            <Button
              style={{ color: account ? "black" : "#f5f800" }}
              variant={!account ? 'secondary' : 'primary'}
              onClick={() => { onPresentCurrencyModal() }}
            >{t('Add')}</Button>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        {renderContent()}
      </Page>
    </>
  )
}

export default TokenView
