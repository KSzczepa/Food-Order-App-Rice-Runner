import React, {useContext} from "react";
import styles from './MealItem.module.css';

import Card from "../UI/Card";
import AddMealForm from './AddMealForm';
import CartContext from "../../store/CartContext";

const Meal = (props) => {
    const cartCTX = useContext(CartContext);

    const price = `€${props.price.toFixed(2)}`;

    const onAddToCartHandler = (amount) => {
        cartCTX.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <Card>
            <div className={`${styles.meal}`}>
                <h3>{props.name}</h3>
                <p className={`${styles.description}`}>{props.description}</p>
                <p className={`${styles.price}`}>{price}</p>   
            </div>
            <AddMealForm onAddToCart={onAddToCartHandler}></AddMealForm>
        </Card>
    );
};

export default Meal;