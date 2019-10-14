export const UPDATE_NAME = 'UPDATE_NAME'

export const addTransactionAction = (newTransaction) => {
    return {
        type: 'ADD_TRANSACTION',
        payload: newTransaction
    }
}