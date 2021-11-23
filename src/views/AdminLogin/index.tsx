import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { useHistory } from 'react-router'
import { Image, Heading, RowType, Box, Text, Button, ArrowForwardIcon, Flex, useModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import useAdmin from 'hooks/useAdmin'
import useToast from 'hooks/useToast'
import LoginModal from '../../components/LoginModal/LoginModal'
import UserService from '../../service/userService'

export interface FarmsProps {
  tokenMode?: boolean
}

const AdminLogin: React.FC<FarmsProps> = () => {
  const { t } = useTranslation()

  const { loginAdmin } = useAdmin()
  const { push } = useHistory()
  const { toastError, clear } = useToast()

  const onLogin = useCallback(
    (email: string, password: string) => {
      UserService.isExist({ email, password })
        .then((response: any) => {
          const user = response.data;
          if (user !== [] && user !== null && user !== '') {
            loginAdmin(user)
            push(`/tokenView`)
          } else {
            clear()
            toastError(t('Error'), t('Sorry, Sign In Failed.'))
          }
        })
        .catch((e: Error) => {
          console.error(e);
        });
    },
    [loginAdmin, push, toastError, t, clear]
  )

  return (
    <>
      <Page style={{ textAlign: "center" }}>
        <LoginModal
          onLogin={onLogin}
        />
      </Page>
    </>
  )
}

export default AdminLogin
