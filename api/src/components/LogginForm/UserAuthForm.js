import React, { useState, useEffect, useReducer, useContext, useRef, Fragment } from 'react';

import classes from './UserAuthForm.module.css';
import SubmitButton from '../UI/Buttons/SubmitButton';
import AuthContext from '../../store/AuthContext/auth-context';
import InputForm from '../UI/InputForm/InputForm.js';
// import passwordHash from 'password-hash';

const emailReducer = (prevstate, action) => {
	if (action.type === 'USER_INPUT') {
		return {value: action.val, isValid: action.val.trim() !== ''};
		// return {value: action.val, isValid: action.val.includes('@')};
	}

	if (action.type === 'INPUT_BLUR') {
		return {value: prevstate.value, isValid: prevstate.value.trim() !== ''};
		// return {value: prevstate.value, isValid: prevstate.value.includes('@')};
	}

	return { value: '', isValid: false };
};

const passwordReducer = (prevstate, action) => {
	if (action.type === 'USER_INPUT') {
		return {value: action.val, isValid: action.val.trim().length > 4};
	}

	if (action.type === 'INPUT_BLUR') {
		return {value: prevstate.value, isValid: prevstate.value.trim().length > 4};
	}

	return { value: '', isValid: false };
};

const UserAuthForm = (props) => {
	const authCtx = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null,});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null,});

	const {isValid: emailIsValid} = emailState;
	const {isValid: passwordisValid} = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordisValid);
		}, 500);
		
		return () => {clearTimeout(identifier);};
	}, [emailIsValid, passwordisValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({type: 'USER_INPUT', val: event.target.value});
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({type: 'USER_INPUT', val: event.target.value});
	};

	const validateEmailHandler = () => {
		dispatchEmail({type: 'INPUT_BLUR'});
	};

	const validatePasswordHandler = () => {
		dispatchPassword({type: 'INPUT_BLUR'});
	};

	const defaultUserData = {
		ID: '',
		login: '',
		password: '',
		name: '',
		email: '',
		city: '',
		street: '',
		postalCode: '',
		phoneNumber: ''
	};

	const [activeUserData, setActiveUserData] = useState(defaultUserData);
	const [isUserActive, setIsUserActive] = useState(false);

	const userDataValidation = (login, password) => {
		// let hashedPassword = passwordHash.generate(password);
		// console.log(hashedPassword);
		// console.log(passwordHash.verify('password123', hashedPassword));
		const userData = {
			login: login,
			password: password
		};

		submitOrderHandler(userData);
		
	};

	// useEffect(() => {
	// 	authCtx.onLogIn(emailState.value, passwordState.value);
	// 	console.log('Logging in');
	// }, [activeUserData]);

	

	const submitOrderHandler = async (userData) => {
        const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

		
		if (response.ok) {
			const responseData = await response.json();
			if (responseData.isRegistered == true){	
				setIsUserActive(true);
				setActiveUserData({
					ID: responseData.data.ID,
					login: responseData.data.login,
					password: responseData.data.password,
					name: responseData.data.name,
					email: responseData.data.email,
					city: responseData.data.city,
					street: responseData.data.street,
					postalCode: responseData.data.postalCode,
					phoneNumber: responseData.data.phoneNumber
				});}
			else {
				setIsUserActive(false);
			}
			
		}
		
    };



	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			userDataValidation(emailState.value, passwordState.value);
			authCtx.onLogIn(emailState.value, passwordState.value);
		}
		else if (!emailIsValid) {
			emailInputRef.current.focus();
		}
		else {
			passwordInputRef.current.focus();
		}
		
	};

	return (
		// <Card className={classes.login}>
		<Fragment>
			<form onSubmit={submitHandler}>
				<InputForm
					ref={emailInputRef}
					id={"login"}
					type={"text"}
					label={'Login'}
					isValid={emailIsValid}					
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<InputForm 
					ref={passwordInputRef}
					id={"password"}
					type={"password"}
					label={'Password'}
					isValid={passwordisValid}					
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					{<SubmitButton type="submit" className={classes.btn} disabled={!emailIsValid || !passwordisValid}>
						Login
					</SubmitButton>}
				</div>
			</form>
		</Fragment>
	);
};

export default UserAuthForm;
