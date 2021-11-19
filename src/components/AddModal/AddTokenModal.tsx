import React, { useCallback, useState } from 'react'
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

interface AddTokenModalProps extends InjectedModalProps {
    onAdd: (name: string, symbol: string, address: string, chainId: number, decimals: number, logoURI: string) => void
}

export default function AddTokenModal({
    onDismiss = () => null,
    onAdd,
}: AddTokenModalProps) {

    const { t } = useTranslation()

    const [name, setName] = useState<string | undefined>()
    const [symbol, setSymbol] = useState<string | undefined>()
    const [address, setAddress] = useState<string | undefined>()
    const [chainId, setChainId] = useState<number | 0>()
    const [decimals, setDecimals] = useState<number | 0>()
    const [logoURI, setLogoURI] = useState<string | undefined>()

    const handleInputName = useCallback((event) => {
        setName(event.target.value)
    }, [])
    const handleInputSymbol = useCallback((event) => {
        setSymbol(event.target.value)
    }, [])
    const handleInputAddress = useCallback((event) => {
        setAddress(event.target.value)
    }, [])
    const handleInputChainId = useCallback((event) => {
        setChainId(event.target.value)
    }, [])
    const handleInputDecimals = useCallback((event) => {
        setDecimals(event.target.value)
    }, [])
    const handleInputLogoURI = useCallback((event) => {
        setLogoURI(event.target.value)
    }, [])

    const handleAdd = useCallback(
        () => {
            onAdd(name, symbol, address, chainId, decimals, logoURI)
            onDismiss()
        },
        [name, symbol, address, chainId, decimals, logoURI, onAdd, onDismiss]
    )

    return (
        <StyledModalContainer minWidth="320px">
            <ModalHeader>
                <ModalTitle>
                    <Heading>{t('Add Token')}</Heading>
                </ModalTitle>
                <ModalCloseButton onDismiss={onDismiss} />
            </ModalHeader>
            <StyledModalBody>
                <AutoColumn gap="16px">
                    <Row>
                        <Input
                            id="token-name"
                            placeholder={t('Name')}
                            scale="lg"
                            autoComplete="off"
                            value={name}
                            onChange={handleInputName}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-symbol"
                            placeholder={t('Symbol')}
                            scale="lg"
                            autoComplete="off"
                            value={symbol}
                            onChange={handleInputSymbol}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-address"
                            placeholder={t('Contract Address')}
                            scale="lg"
                            autoComplete="off"
                            value={address}
                            onChange={handleInputAddress}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-chainId"
                            placeholder={t('ChainID')}
                            scale="lg"
                            autoComplete="off"
                            value={chainId}
                            onChange={handleInputChainId}
                        />
                        <Input
                            id="token-decimals"
                            placeholder={t('Decimals')}
                            scale="lg"
                            autoComplete="off"
                            value={decimals}
                            onChange={handleInputDecimals}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-logouri"
                            placeholder={t('LogoURI')}
                            scale="lg"
                            autoComplete="off"
                            value={logoURI}
                            onChange={handleInputLogoURI}
                        />
                    </Row>
                </AutoColumn>
                <Footer>
                    <Button
                        scale="sm"
                        variant="text"
                        onClick={() => handleAdd()}
                        className="list-token-manage-button"
                    >
                        {t('Add Token')}
                    </Button>
                </Footer>
            </StyledModalBody>
        </StyledModalContainer>
    )
}
