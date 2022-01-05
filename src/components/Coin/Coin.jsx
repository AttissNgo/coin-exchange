import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CoinRow = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
    `

const CoinRowHidden = styled.td`
border: 1px solid #cccccc;
width: 25vh;
    display: none;
    `

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault() 
        this.props.handleRefresh(this.props.ticker)
    }

    render() {
        const coinBalance = this.props.showBalance ? <CoinRow>${this.props.balance}</CoinRow> : <CoinRowHidden>${this.props.balance}</CoinRowHidden>
        return (
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
                <CoinRow>${this.props.price}</CoinRow>
                {coinBalance}
                <CoinRow>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </CoinRow>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}