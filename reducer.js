export const initialState = {
    basket: [],
    user: null

};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {

    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let new_basket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                new_basket.filter((basketItem) => basketItem.id !== action.id);
            }
            else {
                console.warn("can't remove product (id: ${action.id})");
            }
            return { ...state, basket: new_basket }
            
        

        default:
            return state;

    }
}
export default reducer;