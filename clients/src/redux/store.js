//https://redux.js.org/api/createstore >> taken from this site

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import { cartReducer } from "./reducers/cartReducers";


const reducer = combineReducers({
    cart: cartReducer

});

//handle multiple requests with thunk middleware
const middleware = [thunk];

//using compositeWithDevtools as an enhancer
const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
)

export default store;