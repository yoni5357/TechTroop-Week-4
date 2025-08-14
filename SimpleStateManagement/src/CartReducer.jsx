
export const initialState = {items:[]};

export function CartReducer(state, action){
    switch(action.type){
        case "ADD_ITEM":{
            const product = action.data;
            const newItem = { ...product, id: Date.now() };
            return {...state, items:[...state.items, newItem]};
        }

        case "REMOVE_ITEM": {
            const id = action.data;
            return {...state, items: state.items.filter(item => item.id !== id)};
        }

        case "CLEAR_CART": {
            return initialState;
        }

        default:
            return state;
    }
}