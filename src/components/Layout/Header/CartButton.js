import { useContext } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../../store/CartContext';
import '../../fontello/css/fontello.css';

const CartButton = (props) => {
    const cartCTX = useContext(CartContext);

    const numOfCartItems = cartCTX.items.reduce((currNum, item) => {return currNum + item.amount;}, 0);

    return (
        <button className={`${classes['cart-button']}`} onClick={props.onClick}>
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