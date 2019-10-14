import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransactionAction } from '../actions';
import { TRANSACTION_HEADERS } from '../constans/TransactionHeaders';


const TransactionFormBase = (props) => {
    const [transaction, setTransaction] = useState(
        { ...TRANSACTION_HEADERS }
    );


    return (
        <div>
            {Object.keys(TRANSACTION_HEADERS).map((element) =>
                <input
                    key={element}
                    value={transaction[element]}
                    onChange={(event) => { setTransaction({ ...transaction, [element]: event.target.value }) }}
                />
            )}
            <button onClick={() => props.addTransaction(transaction)}>
                Add transaction
            </button>
            {console.log(props.transactionsList)}
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