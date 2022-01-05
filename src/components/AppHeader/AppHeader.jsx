import React, { Component } from 'react'
import logo from '../../logo.svg'
import styled from 'styled-components'

const AppHead = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 36px;
    color: white;
    `

const AppTitle = styled.h1`
    font-size: 4rem;
    `

const AppLogo = styled.img`
    height: 8rem;
    pointer-events: none;
    `

export default class AppHeader extends Component {
    render() {
        return (
            <AppHead>
            <AppLogo src={logo} alt="React logo" />
            <AppTitle>
                Coin Exchange       
            </AppTitle>
            </AppHead>
        )
    }
}
