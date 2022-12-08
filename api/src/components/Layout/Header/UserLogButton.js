import classes from './UserLogButton.module.css';
import '../../fontello-auth/css/fontello.css';

const UserLogButton = (props) => {
    return (<button className={classes.btn} onClick={props.onClick}>
                <i className="icon-th-1" style={{ fontSize: '30px'}} />
            </button>)
};

export default UserLogButton;
