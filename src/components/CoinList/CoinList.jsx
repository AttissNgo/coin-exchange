import React, { Component } from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const CoinTable = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    `

export default class CoinList extends Component {

    render() {
      const balanceHeader = this.props.showBalance ? <th>Balance</th> : null

        return (
            <CoinTable>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {balanceHeader}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map( ({name, ticker, balance, price}) =>
                <Coin key={ticker} 
                    handleRefresh = {this.props.handleRefresh}
                    showBalance={this.props.showBalance}
                    name={name} 
                    ticker={ticker} 
                    balance={balance}
                    price={price} />
                )
              }
            </tbody>
          </CoinTable>
        )
    }
}
