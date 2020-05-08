// create store
import GoodsReducer from '../reducers/GoodsReducer';
import {combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'; 
import { createStore } from 'redux'
import logger from 'redux-logger'
import CartReducer from '../reducers/CartReducer';
import UserReducer from '../reducers/UserReducer';
import ReviewsReducer from '../reducers/ReviewsReducer';
// combine reducer
const rootReducer = combineReducers({
  goods: GoodsReducer,
  cart: CartReducer,
  user: UserReducer,
  reviews: ReviewsReducer
})

export type RootState = ReturnType<typeof rootReducer>
// add midleware for thunk and logging
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;