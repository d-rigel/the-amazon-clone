export const initialState =  {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0); 

function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            //we can still use filter here but this is the best way
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);

            if (index >= 0) {
                //item exists in basket
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.payload}) as its not in the basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            }      
        default:
            return state
    }
}

export default reducer