import { useContext, useEffect, useState } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../../store/CartContext';
import '../../Fontello-Fonts/fontello/css/fontello.css';

const CartButton = (props) => {
    const cartCTX = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const {items} = cartCTX;

    const numOfCartItems = cartCTX.items.reduce((currNum, item) => {return currNum + item.amount;}, 0);

    const btnClasses = `${classes['cart-button']} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <div className={`${classes['font-basket']}`}>
                <i className="icon-basket" style={{ fontSize: '20px' , marginRight: '10px'}} />
            </div>
            <span>Your Cart</span>
            <div className={`${classes['cart-button']} ${classes['items-number']}`}>
                <label>{numOfCartItems}</label>
            </div>
        </button>
    );
};

export default CartButton;