import React, {useContext} from 'react';
import classes from './Sticker.module.css';
import CartButton from './CartButton';
import '../../Fontello-Fonts/fontello-auth/css/fontello.css';
import UserLogButton from './UserLogButton';

const Sticker = (props) => {

    // const showUserLogginForm = () => {
    //     console.log('LogginFormActive?');
    //     authCtx.loginFormActive = true;
    //     console.log(authCtx.loginFormActive);
    // };

    return (
        <div className={`${classes.header}`}>
            <div className={`${classes.sticker}`}>                
                <div className={`${classes['font-basket']}`}>
                    {/* {!authCtx.isLoggedIn && */}
                    <UserLogButton onClick={props.onShowUserForm}></UserLogButton>
                </div>
                <h2>ReactMeals</h2>
                <CartButton onClick={props.onShowCart}></CartButton>
            </div>
            
        </div>
    );
};

export default Sticker;