import classes from './Sticker.module.css'
import '../../fontello/css/fontello.css'


const Sticker = () => {

    const num = 5;

    return (
        <div className={`${classes.header}`}>
            <h2>ReactMeals</h2>
            <button>
                <div className={`${classes['font-basket']}`}>
                    <i className="icon-basket" style={{ fontSize: '20px' , marginRight: '10px'}} />
                </div>
                <p>Your Cart</p>
                <div className={`${classes['items-number']}`}>
                    <label>{num}</label>
                </div>
            </button>
        </div>
    );
};

export default Sticker;