import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Image, Heading, RowType, Box, Text, Button, ArrowForwardIcon, Flex, useModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import LoginModal from '../../components/LoginModal/LoginModal'
import UserService from '../../service/userService'
import UserType from '../../service/user.type'


export interface FarmsProps {
  tokenMode?: boolean
}

const AdminLogin: React.FC<FarmsProps> = () => {
  const { t } = useTranslation()

  const onLogin = useCallback(
    (email: string, password: string) => {
      UserService.isExist({ email, password })
        .then((response: any) => {
          const user = response.data;

        })
        .catch((e: Error) => {
          console.error(e);
        });
    },
    []
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
