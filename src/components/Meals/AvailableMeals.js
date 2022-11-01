import styles from './AvailableMeals.module.css';

import Meal from './MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Sushi description',
        price: 25.50,
    },
    {
        id: 'm2',
        name: 'Won-Ton Soup',
        description: 'Just a soup',
        price: 10.00,
    },
    {
        id: 'm3',
        name: 'Ramen',
        description: 'Ramen description',
        price: 18.00,
    },
    {
        id: 'm4',
        name: 'Chicken Curry',
        description: 'Good chinese cousine',
        price: 27.50,
    },
];


const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map(meal => <li>
            <Meal 
                key={meal.id} 
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