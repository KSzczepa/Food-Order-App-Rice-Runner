import classes from './Sticker.module.css';
import CartButton from './CartButton';

const Sticker = () => {


    return (
        <div className={`${classes.header}`}>
            <div className={`${classes.sticker}`}>
                <h2>ReactMeals</h2>
                <CartButton></CartButton>
            </div>
            
        </div>
    );
};

export default Sticker;