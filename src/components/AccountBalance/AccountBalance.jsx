import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './AccountBalance.css'
import styled from 'styled-components'

const AccountBalanceContainer = styled.div`
    display: inline-block;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 1rem;
    border: 1px solid #FFFFFF;
    `

const AccountBalanceText = styled.p`
    font-size: 1.5rem;
    color: #f2f7af;
    `

export default class AccountBalance extends Component {
    render() {
        return (
            <div>
                <AccountBalanceContainer>
                    
                        <AccountBalanceText>
                        Account Balance: ${this.props.amount}
                        </AccountBalanceText>
                    
                </AccountBalanceContainer>
            </div>
            
            
        )
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}