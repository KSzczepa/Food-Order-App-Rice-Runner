import classes from './CartButton.module.css'
import '../../fontello/css/fontello.css'

const CartButton = () => {

    const num = 5;

    return (
        <button className={`${classes['cart-button']}`}>
            <div className={`${classes['font-basket']}`}>
                <i className="icon-basket" style={{ fontSize: '20px' , marginRight: '10px'}} />
            </div>
            <span>Your Cart</span>
            <div className={`${classes['items-number']}`}>
                <label>{num}</label>
            </div>
        </button>
    );
};

export default CartButton;