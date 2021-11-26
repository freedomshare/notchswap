import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { useFarmUser } from 'state/farms/hooks'

import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: flex-end;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  // border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const EarnedMobileCell = styled.td`
  padding-left: 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const StyledRow = styled.div`
  background: rgb(18, 24, 39);
  border-radius: 16px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
  position: relative;
`
const StyledUpRow = styled.div`
  cursor: pointer;
  display: flex;
  // justify-content: space-around;
`

const Div1 = styled.div`
  // width: 20%;
  // float: left;
  // margin: 0px !important;
`
const BlurDiv = styled.div`
  filter: blur(6px);
  background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;
  animation: 2s linear 0s infinite normal none running ilqnTz;
  border-radius: 16px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @keyframes ilqnTz {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const BlurDivMobile = styled.div`
  filter: blur(6px);
  background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;
  animation: 2s linear 0s infinite normal none running ilqnTz;
  border-radius: 16px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @keyframes ilqnTz {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const { details, userDataReady } = props
  const hasStakedAmount = !!useFarmUser(details.pid).stakedBalance.toNumber()
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])

  const { isDesktop, isMobile } = useMatchBreakpoints()

  const isSmallerScreen = !isDesktop
  const tableSchema = isSmallerScreen ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isMobile) {
      return (
        <StyledUpRow onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <div style={{ flex: 2 }}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </div>
                )
              case 'apr':
                return (
                  <div style={{ flex: 2 }}>
                    <CellInner>
                      <CellLayout label={t('APR')}>
                        <Apr {...props.apr} hideButton={isSmallerScreen} />
                      </CellLayout>
                    </CellInner>
                  </div>
                )
              default:
                return (
                  <div style={{ flex: 3 }}>
                    <CellInner>
                      <CellLayout label={t(tableSchema[columnIndex].label)}>
                        {React.createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </div>
                )
            }
          })}
        </StyledUpRow>
        // <StyledTr onClick={toggleActionPanel}>
        //   {Object.keys(props).map((key) => {
        //     const columnIndex = columnNames.indexOf(key)
        //     if (columnIndex === -1) {
        //       return null
        //     }

        //     switch (key) {
        //       case 'details':
        //         return (
        //           <td key={key}>
        //             <CellInner>
        //               <CellLayout>
        //                 <Details actionPanelToggled={actionPanelExpanded} />
        //               </CellLayout>
        //             </CellInner>
        //           </td>
        //         )
        //       case 'apr':
        //         return (
        //           <td key={key}>
        //             <CellInner>
        //               <CellLayout label={t('APR')}>
        //                 <Apr {...props.apr} hideButton={isSmallerScreen} />
        //               </CellLayout>
        //             </CellInner>
        //           </td>
        //         )
        //       default:
        //         return (
        //           <td key={key}>
        //             <CellInner>
        //               <CellLayout label={t(tableSchema[columnIndex].label)}>
        //                 {React.createElement(cells[key], { ...props[key], userDataReady })}
        //               </CellLayout>
        //             </CellInner>
        //           </td>
        //         )
        //     }
        //   })}
        // </StyledTr>
      )
    }

    return (
      <StyledUpRow onClick={toggleActionPanel}>
        <table style={{ width: '100%' }}>
          <tr>
            <td style={{ width: '50%' }}>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </td>
            <td style={{ width: '50%' }}>
              <CellInner>
                <CellLayout>
                  <Details actionPanelToggled={actionPanelExpanded} />
                </CellLayout>
              </CellInner>
            </td>
          </tr>
          <tr>
            <EarnedMobileCell>
              <CellLayout label={t('Earned')}>
                <Earned {...props.earned} userDataReady={userDataReady} />
              </CellLayout>
            </EarnedMobileCell>
            <td>
              <CellLayout label={t('APR')}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </td>
          </tr>
        </table>
      </StyledUpRow>
    )
  }

  return (
    <div style={{ marginBottom: '10px', marginTop: '10px', position: 'relative' }}>

      {!isMobile && <BlurDiv />}
      {isMobile && <BlurDivMobile />}
      <StyledRow>
        {handleRenderRow()}
        {shouldRenderChild && (
          <StyledUpRow>
            <ActionPanel {...props} expanded={actionPanelExpanded} />
          </StyledUpRow>
        )}
      </StyledRow>
    </div>
  )
}

export default Row
