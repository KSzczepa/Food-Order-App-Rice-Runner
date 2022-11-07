import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={`${styles['meal-item']}`}>{props.children}</div>
    );
};

export default Card;