import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import transactions from './transactions'
import forgotPassword from './forgotPassword'

const authConfig = {
  key: 'auth',
  storage
}
const transactionsConfig = {
  key: 'transactions',
  storage
}
const forgotPasswordConfig = {
  key: 'forgotPassword',
  storage
}

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  transactions: persistReducer(transactionsConfig, transactions),
  forgotPassword: persistReducer(forgotPasswordConfig, forgotPassword)
})

export default reducer
