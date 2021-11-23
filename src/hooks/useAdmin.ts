import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { ConnectorNames, connectorLocalStorageKey } from '@pancakeswap/uikit'
import { connectorsByName } from 'utils/web3React'
import { setupNetwork } from 'utils/wallet'
import useToast from 'hooks/useToast'
import { fetchAdmins } from 'state/admin'
import { useAppDispatch } from 'state'
import { useTranslation } from 'contexts/Localization'

const useAuth = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { activate, deactivate } = useWeb3React()
  const { toastSuccess, clear } = useToast()

  const loginAdmin = useCallback(
    (user: any) => {
      dispatch(fetchAdmins(user))
      clear()
      toastSuccess(t('Success'), t('Now, you are the Admin'))

    },
    [t, dispatch, toastSuccess, clear],
  )


  return { loginAdmin }
}

export default useAuth
