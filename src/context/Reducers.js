export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let contains = false;
            state.cart = state.cart.map((prod) => {
                let { qty, ...prodWthoutQty } = prod;
                console.log('prev: ');
                console.log(prod);
                console.log('after: ');
                console.log(prodWthoutQty);
                if (prodWthoutQty.id === action.payload.id) {
                    console.log('duplicate!');
                    contains = true;
                    prod = { ...prodWthoutQty, qty: ++qty };
                    console.log('end: ');
                    console.log(prod);
                }
                return prod;
            });
            console.log('state cart: ');
            console.log(state.cart);
            if (contains) {
                return { ...state, cart: state.cart };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, qty: 1 }],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case 'CHANGE_CART_QTY':
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id
                        ? (c.qty = action.payload.qty)
                        : c.qty,
                ),
            };
        default:
            return state;
    }
};
