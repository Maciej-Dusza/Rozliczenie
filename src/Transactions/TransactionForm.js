import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransactionAction } from '../actions';


const TransactionFormBase = (props) => {
    const [title, setTitle] = useState(0);
    const [bank, setBank] = useState(1);

    return (
        <div>
            <input value={title} onChange={(event) => { setTitle(event.target.value) }} />
            <input value={bank} onChange={(event) => { setBank(event.target.value) }} />
            <button onClick={() => props.addTransaction({ title, bank })}>
                Add transaction
            </button>



            {props.transactionsList.map((element, index) =>
                <div style={{ display: "flex" }} key={index}>
                    <div>{element.title}</div>
                    <div>{element.bank}</div>
                </div>
            )}
        </div>)
};


const mapStateToProps = (state) => {

    return {
        transactionsList: state.transactionsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (newTransaction) => dispatch(addTransactionAction(newTransaction))
    }
}

export const TransactionForm = connect(mapStateToProps, mapDispatchToProps)(TransactionFormBase)