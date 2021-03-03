import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItem: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            //in action.payload, we get item user would like to add
            const item = action.payload;
        // x is going through each product
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if(existItem) {
                return {
                    ...state, 
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)
                }
            }   else {
                return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
    
            }

//returning default if action is different than mentioned..
        default:
            return state;

    }
}