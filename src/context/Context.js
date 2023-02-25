import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';

const Cart = createContext();
console.log(Cart);

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: 1,
        name: 'Product name',
        price: 2,
        image: '',
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;
