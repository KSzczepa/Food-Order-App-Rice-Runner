import React, {useEffect, useState} from 'react';
import styles from './AvailableMeals.module.css';

import Meal from './MealItem';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                    const response = await fetch('http://localhost:4000/products', {
                        method: 'GET',
                    }); //returns a Promise
                    
                    if (response.ok) {
                        const responseData = await response.json();
            
                        const loadedMels = [];
                        for (const key in responseData) {
                            loadedMels.push({
                                key: responseData[key].mealID,
                                id: responseData[key].mealID,
                                name: responseData[key].mealName,
                                description: responseData[key].mealDesc, 
                                price: responseData[key].mealPrice
                            });
                        };
                        setMeals(loadedMels);
                        // console.log(loadedMels);
                    }            
                    else {
                        console.log('HTTP-Error ' + response.status);
                    };
                }            
                catch (e) {
                    console.log(e);
                };
        };

        fetchMeals();
    }, []);

    const mealList = meals.map(meal => <li key={meal.id}> 
            <Meal 
                key={meal.id} 
                id={meal.id}
                name={meal.name} 
                description={meal.description} 
                price={meal.price}>
            </Meal>
        </li>);

    return <section className={`${styles.meals}`}>
        <ul>
            {mealList}
        </ul>
    </section>
};

export default AvailableMeals;