import classes from './Header.module.css'


const Header = () => {

    const num = 5;

    return (
        <div className={`${classes.header}`}>
            <h2>ReactMeals</h2>
            <button>
                <p>Your Cart</p>
                <div className={`${classes['items-number']}`}>
                    <p>{num}</p>
                </div>
            </button>
        </div>
    );
};

export default Header;