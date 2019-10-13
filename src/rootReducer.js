
const initialState = { transactionsList: [{ title: 'title', bank: 'bank', }] };

const addTransactionToList = (transactionsList, newTransaction) => {
    return [...transactionsList, { title: newTransaction.title, bank: newTransaction.bank }]
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

