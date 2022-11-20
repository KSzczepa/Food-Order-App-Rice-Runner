import React, {useEffect, useState} from 'react';
import styles from './AvailableMeals.module.css';

import Meal from './MealItem';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isMealListLoaded, setIsMealListLoaded] = useState(false);

    const mealListLoadedHandler = (isLoaded) => {
        setIsMealListLoaded(isLoaded);
    };

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
                        mealListLoadedHandler(true);
                    }            
                    else {
                        console.log('HTTP-Error ' + response.status);
                        mealListLoadedHandler(false);
                    };
                }            
                catch (e) {
                    console.log(e);
                    mealListLoadedHandler(false);
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
        {isMealListLoaded ? 
        <ul>
            {mealList}
        </ul>
        :
        <p className={`${styles.data}`}>Loading...</p>}
        
    </section>
};

export default AvailableMeals;