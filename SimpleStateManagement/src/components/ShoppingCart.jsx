import { useReducer } from "react";
import { CartReducer, initialState } from "../cartReducer";

export default function ShoppingCart() {

    const [state, dispach] = useReducer(CartReducer,initialState);

    const itemCount = state.items.length;
    const total = state.items.reduce((sum,item) => sum + Number(item.price || 0),0);

    const addItem = (item)=>{
        dispach({type:"ADD_ITEM", data:item});
    } 

    const removeItem = (id) => {
        dispach({type:"REMOVE_ITEM", data:id});
    }

    const clearCart = () => {
        dispach({type:"CLEAR_CART"});
    }
        

  return (
    <div>
        <h2>Shopping Cart ({itemCount} items) - Total: ${total}</h2>
        <button onClick={() => addItem({ name: 'Laptop', price: 999 })}>Add</button>
        <button onClick={clearCart} disabled={state.items.length === 0}>
            Clear Cart
        </button>
        <ul>
        {state.items.map(item => (
          <li key={item.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span>{item.name}</span>
            <span>${Number(item.price).toFixed(2)}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
