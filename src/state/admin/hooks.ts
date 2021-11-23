import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { State, AdminState } from '../types'
import { fetchAdmins } from '.'

export const useFetchAdmins = (name:string, password:string) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
      console.info('hook')
  }, [])
}

export const useAdminState = () => {
  const admin: AdminState['data'] = useSelector((state: State) => state.admin.data)
  return admin
}
