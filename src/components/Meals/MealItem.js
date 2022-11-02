import React from "react";
import styles from './MealItem.module.css';

import Card from "../UI/Card";
import AddMealForm from './AddMealForm';

const Meal = (props) => {
    const price = `€${props.price.toFixed(2)}`;

    return (
        <Card>
            <div className={`${styles.meal}`}>
                <h3>{props.name}</h3>
                <p className={`${styles.description}`}>{props.description}</p>
                <p className={`${styles.price}`}>{price}</p>   
            </div>
            <AddMealForm></AddMealForm>
        </Card>
    );
};

export default Meal;