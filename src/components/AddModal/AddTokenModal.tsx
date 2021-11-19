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
    selectedCurrency?: Currency | null
    onCurrencySelect: (currency: Currency) => void
    otherSelectedCurrency?: Currency | null
    showCommonBases?: boolean
}

export default function AddTokenModal({
    onDismiss = () => null,
    onCurrencySelect,
    selectedCurrency,
    otherSelectedCurrency,
    showCommonBases = false,
}: AddTokenModalProps) {

    const { t } = useTranslation()


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
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-symbol"
                            placeholder={t('Symbol')}
                            scale="lg"
                            autoComplete="off"
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-address"
                            placeholder={t('Contract Address')}
                            scale="lg"
                            autoComplete="off"
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-chainId"
                            placeholder={t('ChainID')}
                            scale="lg"
                            autoComplete="off"
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                        <Input
                            id="token-decimals"
                            placeholder={t('Decimals')}
                            scale="lg"
                            autoComplete="off"
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                    </Row>
                    <Row>
                        <Input
                            id="token-logouri"
                            placeholder={t('LogoURI')}
                            scale="lg"
                            autoComplete="off"
                            // value={searchQuery}
                            // ref={inputRef as RefObject<HTMLInputElement>}
                            // onChange={handleInput}
                            // onKeyDown={handleEnter}
                        />
                    </Row>
                </AutoColumn>
                <Footer>
                    <Button
                        scale="sm"
                        variant="text"
                        //   onClick={() => setModalView(CurrencyModalView.manage)}
                        className="list-token-manage-button"
                    >
                        {t('Add Token')}
                    </Button>
                </Footer>
            </StyledModalBody>
        </StyledModalContainer>
    )
}
