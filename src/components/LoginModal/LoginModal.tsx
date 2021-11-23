import React, { useCallback, useState, RefObject, useRef, useEffect } from 'react'
import { Currency, Token } from '@pancakeswap/sdk'
import {
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalBackButton,
    ModalCloseButton,
    ModalBody,
    InjectedModalProps,
    Heading,
    Button,
    Input
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import usePrevious from 'hooks/usePreviousValue'
import { TokenList } from '@uniswap/token-lists'
import Column, { AutoColumn } from '../Layout/Column'
import Row from '../Layout/Row'

const Footer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  text-align: center;
`

const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
`

const StyledModalBody = styled(ModalBody)`
  padding: 24px;
`

interface LoginModalProps extends InjectedModalProps {
    onLogin: (email: string, password: string) => void
}

export default function LoginModal({
    onDismiss = () => null,
    onLogin,
}: LoginModalProps) {

    const { t } = useTranslation()

    // manage focus on modal show
    const inputRef = useRef<HTMLInputElement>()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    
    const handleInputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [])
    const handleInputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [])
    
    const handleLogin = useCallback(
        () => {
            onLogin(email, password)
            onDismiss()
        },
        [email, password, onLogin, onDismiss]
    )

    return (
        <StyledModalContainer minWidth="320px">
            <ModalHeader>
                <ModalTitle>
                    <Heading>{t('Login')}</Heading>
                </ModalTitle>
                <ModalCloseButton onDismiss={onDismiss} />
            </ModalHeader>
            <StyledModalBody>
                <AutoColumn gap="16px">
                    <Row>
                        <Input
                            id="email"
                            placeholder={t('Email')}
                            scale="lg"
                            autoComplete="off"
                            ref={inputRef as RefObject<HTMLInputElement>}
                            value={email}
                            onChange={handleInputEmail}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="password"
                            type="password"
                            placeholder={t('Password')}
                            scale="lg"
                            autoComplete="off"
                            value={password}
                            onChange={handleInputPassword}
                        />
                    </Row>
                    
                </AutoColumn>
                <Footer>
                    <Button
                        scale="sm"
                        variant="text"
                        onClick={() => handleLogin()}
                        className="list-token-manage-button"
                    >
                        {t('Login')}
                    </Button>
                </Footer>
            </StyledModalBody>
        </StyledModalContainer>
    )
}
