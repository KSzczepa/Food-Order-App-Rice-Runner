import styles from './SubmitForm.module.css';
import useInput from '../../hooks/use-input';
import React, {useState} from "react";


const SubmitForm = (props) => {

    const codeRe = new RegExp("^\\d{5}|^\\d{2}-\\d{3}$");
	const phoneRe = new RegExp("^\\d{9}|^\\d{3}-\\d{3}-\\d{3}|^\\+\\d{11}|^\\+\\d{2}-\\d{3}-\\d{3}-\\d{3}|^\\+\\d{2}\\s\\d{3}-\\d{3}-\\d{3}$");

    // const [formInputValidity, setFormInputValidity] = useState({
    //     name: false,
    //     street: false,
    //     code: false,
    //     city: false,
    //     phone: false
    // });

    const { 
		value: enteredName, 
		isValid: enteredNameIsValid,
		hasError: nameInputHasError, 
		valueChangeHandler: nameChangeHandler, 
		inputBlurHander: nameBlurHandler,
		reset: resetInputName
	} = useInput(value => value.trim() !== '');

	const { 
		value: enteredStreet, 
		isValid: enteredStreetIsValid,
		hasError: streetInputHasError, 
		valueChangeHandler: streetChangeHandler, 
		inputBlurHander: streetBlurHandler,
		reset: resetInputStreet
	} = useInput(value => value.trim() !== '');
	
	const { 
		value: enteredCode, 
		isValid: enteredCodeIsValid,
		hasError: codeInputHasError, 
		valueChangeHandler: codeChangeHandler, 
		inputBlurHander: codeBlurHandler,
		reset: resetInputCode
	} = useInput(value => codeRe.test(value));

	console.log('code', parseInt(enteredCode));

	const { 
		value: enteredCity, 
		isValid: enteredCityIsValid,
		hasError: cityInputHasError, 
		valueChangeHandler: cityChangeHandler, 
		inputBlurHander: cityBlurHandler,
		reset: resetInputCity
	} = useInput(value => value.trim() !== '');

	const { 
		value: enteredPhone, 
		isValid: enteredPhoneIsValid,
		hasError: phoneInputHasError, 
		valueChangeHandler: phoneChangeHandler, 
		inputBlurHander: phoneBlurHandler,
		reset: resetInputPhone
	} = useInput(value => phoneRe.test(value));


    // const formValidityHandler = () => {
    //     setFormInputValidity({
    //         name: enteredNameIsValid,
    //         street: enteredStreetIsValid,
    //         code: enteredCodeIsValid,
    //         city: enteredCityIsValid,
    //         phone: enteredPhoneIsValid
    //     });
    // };

    // formValidityHandler();
    // console.log(formInputValidity);
	let formIsValid = false;
	
	if (enteredNameIsValid && enteredStreetIsValid && enteredCodeIsValid && enteredCityIsValid && enteredPhoneIsValid && 
		!nameInputHasError && !streetInputHasError && !codeInputHasError && !cityInputHasError && !phoneInputHasError) {
		formIsValid = true;
	}
	else if (nameInputHasError || streetInputHasError || codeInputHasError || cityInputHasError || phoneInputHasError) {
		formIsValid = false;
	}

    const submitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
			return;
		}

		// resetInputName();
		// resetInputStreet();
		// resetInputCode();
		// resetInputCity();
		// resetInputPhone();

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredCode,
            phoneNumber: enteredPhone
        });
    };

    



    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <div className={`${nameInputHasError ? styles.invalid : styles.control}`}>
                    <label htmlFor='name'>Yout Name</label>
                    <input 
                        type='text' 
                        id='name'
                        onChange={nameChangeHandler} 
						onBlur={nameBlurHandler}
						value={enteredName}/>
					{nameInputHasError && <p className={styles['error-text']}>Name must not be empty.</p>}
                </div>
                <div className={`${streetInputHasError ? styles.invalid : styles.control}`}>
                    <label htmlFor='street'>Street</label>
                    <input 
                        type='text' 
                        id='street'
                        onChange={streetChangeHandler} 
						onBlur={streetBlurHandler}
						value={enteredStreet}/>
					{streetInputHasError && <p className={styles['error-text']}>Enter a valid street.</p>}
                </div>
                <div className={`${codeInputHasError ? styles.invalid : styles.control}`}>
                    <label htmlFor='code'>Postal Code</label>
                    <input 
                        type='text' 
                        id='code'
                        onChange={codeChangeHandler} 
						onBlur={codeBlurHandler}
						value={enteredCode}/>
					{codeInputHasError && <p className={styles['error-text']}>Enter a valid code.</p>}
                </div>
                <div className={`${cityInputHasError ? styles.invalid : styles.control}`}>
                    <label htmlFor='city'>City</label>
                    <input 
                        type='text' 
                        id='city'
                        onChange={cityChangeHandler} 
						onBlur={cityBlurHandler}
						value={enteredCity}/>
					{cityInputHasError && <p className={styles['error-text']}>Enter a valid city.</p>}
                </div>
                <div className={`${phoneInputHasError ? styles.invalid : styles.control}`}>
					<label htmlFor='phone'>Phone number</label>
					<input 
						type='text' 
						id='phone'
						onChange={phoneChangeHandler} 
						onBlur={phoneBlurHandler}
						value={enteredPhone}/>
					{phoneInputHasError && <p className={styles['error-text']}>Number must have 9 digits.</p>}
				</div>
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button> 
                <button className={styles.submit} disabled={!formIsValid}>Confirm</button>
            </div>
        </form>
    );
};

export default SubmitForm;