import React from "react";
import styles from './Card.module.css';

import Button from "./Button";

const Meal = () => {
    return (
        <React.Fragment>
            <div className={`${styles['meal-item']}`}></div>
            <Button></Button>
        </React.Fragment>
    );
};

export default Meal;