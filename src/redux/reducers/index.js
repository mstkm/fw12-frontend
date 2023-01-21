import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import transactions from './transactions'

const authConfig = {
  key: 'auth',
  storage
}
const transactionsConfig = {
  key: 'transactions',
  storage
}

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  transactions: persistReducer(transactionsConfig, transactions)
})

export default reducer
