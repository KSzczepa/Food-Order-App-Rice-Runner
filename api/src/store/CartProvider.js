import React, {useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cardReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = prevState.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = prevState.items.concat(action.item);
        }

        return ({
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        });
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.id);
        const existingCartItem = prevState.items[existingCartItemIndex];
        const updatedTotalAmount = prevState.totalAmount - existingCartItem.price;
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = prevState.items.filter((item) => item.id !== action.id);
        }
        else {
            const updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount - 1
            };
            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return ({
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        });
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
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

    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    };


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;