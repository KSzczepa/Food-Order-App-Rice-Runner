import styles from './CardAuth.module.css'

const Card = (props) => {
    return (
        <div className={`${styles['universal']}`}>{props.children}</div>
    );
};

export default Card;