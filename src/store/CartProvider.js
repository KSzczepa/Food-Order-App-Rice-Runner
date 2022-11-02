import React, {useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cardReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        const updatedItems = prevState.items.concat(action.item);
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
        return ({
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        });
    }
    if (action.type === 'REMOVE') {
        return (prevState);
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;