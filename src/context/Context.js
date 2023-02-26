import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';
import images from '../assets/images';

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map((curr, i) => ({
        id: i,
        name: 'Product name',
        price: 2,
        image: images.onion,
        inStock: 100,
    }));

    const cart = [...Array(10)].map((curr, i) => ({
        id: i,
        name: 'Product name',
        price: i + 10,
        image: images.onion,
        qty: i + 2,
        inStock: 100,
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [...cart],
    });

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;
