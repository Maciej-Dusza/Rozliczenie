import { TRANSACTION_HEADERS } from "./constans/TransactionHeaders";

const initialState = { transactionsList: [{ ...TRANSACTION_HEADERS }] };

const addTransactionToList = (transactionsList, newTransaction) => {
    return ([...transactionsList, newTransaction])
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactionsList: addTransactionToList(state.transactionsList, action.payload)
            }
        default: return state;
    };
}

