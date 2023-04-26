import React, {useEffect, useState} from 'react';
import styles from './AvailableMeals.module.css';

import Meal from './MealItem';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isMealListLoaded, setIsMealListLoaded] = useState(false);

    const mealListLoadedHandler = (isLoaded) => {
        setIsMealListLoaded(isLoaded);
    };

    const url = 'https://rice-runner-serv.onrender.com/menu';

    useEffect(() => {
        const fetchMeals = async (url, retryCount = 0) => {

            const maxRetries = 50;

            const controller = new AbortController();
            const timeout = 8000;
            const id = setTimeout(() => controller.abort(), timeout);

            try {
                    const response = await fetch(url, {
                        method: 'GET',
                        timeout: 8000,
                        signal: controller.signal
                    }); //returns a Promise
                    
                    if (response.ok) {
                        const responseData = await response.json();
            
                        const loadedMels = [];
                        for (const key in responseData) {
                            loadedMels.push({
                                key: responseData[key].id,
                                id: responseData[key].id,
                                name: responseData[key].name,
                                description: responseData[key].description, 
                                price: responseData[key].price
                            });
                        };
                        setMeals(loadedMels);
                        mealListLoadedHandler(true);
                    }            
                    else {
                        console.log('HTTP-Error ' + response.status);
                        mealListLoadedHandler(false);
                        if (retryCount < maxRetries) {
                            return fetchMeals(url, retryCount + 1);
                        }
                    };
                }            
                catch (e) {
                    console.log(e);
                    mealListLoadedHandler(false);
                    if (retryCount < maxRetries) {
                        return fetchMeals(url, retryCount + 1);
                    }
                };
        };

        fetchMeals(url);
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
        <div className={styles.loadingContainer}>
            {/* <div className={styles.data}>Loading</div> */}
            <div className={styles.ellipsis}>
            <div></div><div></div><div></div><div></div></div>
        </div>}
        
    </section>
};

export default AvailableMeals;