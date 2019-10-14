import React from 'react';
import { TransactionForm } from './TransactionForm'
import styled from "@emotion/styled";
import { TransactionsList } from './TransactionsList';


const Title = styled.div`
padding-left: 10px;
display: flex;
height: 40px;
background-color: #fff;
margin-top: 20px;
align-items: center;
font-weight: bold;
font-size: 26px;
`;


export const Transactions = () => {

    return (
        <div>
            <Title>Add new transaction</Title>
            < TransactionForm />
            <Title>Transactions list</Title>
            <TransactionsList />
        </div>
    )
}