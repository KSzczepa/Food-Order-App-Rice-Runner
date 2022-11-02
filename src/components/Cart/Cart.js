import React, {useContext} from "react";

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import CartContext from "../../store/CartContext";

const Cart = (props) => {

    const cartCTX = useContext(CartContext);
    const totalAmount = `€${cartCTX.totalAmount.toFixed(2)}`;
    const hasItems = cartCTX.items.length > 0;

    const cartItemRemoveHandler = () => {

    };

    const cartItemAddHandler = () => {

    };

    const cartItems = (
    <ul className={styles['cart-items']}>
        {
            cartCTX.items.map((item) => (
            <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item.id)}
            />
            ))
        }
    </ul>);

    return (<Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;