import React, {useContext, useState} from "react";

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import CartContext from "../../store/CartContext";
import SubmitForm from "./SubmitForm";

const Cart = (props) => {

    const cartCTX = useContext(CartContext);
    const totalAmount = `€${cartCTX.totalAmount.toFixed(2)}`;
    const hasItems = cartCTX.items.length > 0;
    const [orderFormVisible, setOrderFormVisible] = useState(false);

    const cartItemRemoveHandler = (id) => {
        cartCTX.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCTX.addItem({...item, amount:1});
    };

    const orderFormVisibleHandler = () => {
        setOrderFormVisible(true);
    };

    let orderID = Math.random().toString(36).substr(2, 16); 
    console.log(orderID);
    const adr = 'http://localhost:4000/orders/'+orderID;
    console.log(adr);

    const submitOrderHandler = (userData) => {
        console.log(JSON.stringify({
            user: userData,
            orderedItems: cartCTX.items
        }));
        fetch(adr, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCTX.items
            }),
            contentType:"application/json",
            dataType:"json",
        });
    };


    const cartItems = (
    <ul className={`${!orderFormVisible ? styles['cart-items'] : styles['cart-items-hide']}`}>
        {
            cartCTX.items.map((item) => (
            <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            />
            ))
        }
    </ul>);

    const modalAction = <div className={styles.actions}>
                        <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                        {hasItems && <button className={styles.button} onClick={orderFormVisibleHandler}>Order</button>}
                        </div>;


    return (<Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>            
            {orderFormVisible ? <SubmitForm onConfirm={submitOrderHandler} onCancel={props.onCloseCart}/> : modalAction}             
        </Modal>
    );
};

export default Cart;