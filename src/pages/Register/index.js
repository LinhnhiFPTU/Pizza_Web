import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link,useNavigate } from 'react-router-dom';
import {useState} from 'react';


const cx = classNames.bind(styles);

function Register() {      
    const navi = useNavigate();
    const [username,setUserName] = useState("");
    const onUsernameChange = event => {
        setUserName(event.target.value);
    }
    const [email,setEmail] = useState("");
    const onEmailChange = event => {
        setEmail(event.target.value);
    }
    const [password,setPassword] = useState("");
    const onPasswordChange = event => {
        setPassword(event.target.value);
    }      
    const [confirmPass,setConfirmPass] = useState("");
    const onConfirmPass = event => {
        setConfirmPass(event.target.value);
    }
    const handleSignUp = () =>{
        const loginInfo = {"username":username,"email":email,"password":password};
        const requestOptions = {
            method:'POST',
            credentials:'include',
            headers:{'Content-Type': 'application/json' ,
                'Accept': 'application/json, text/plain, */*'},
            
            
            body:JSON.stringify(loginInfo),
            
        }
        fetch('https://localhost:7072/Pizzon/Signup',requestOptions).then(response => {                         
            if(!response.ok){
                alert("Unable to sign up!");                                     
                navi('/register');
            }else {                                  
                alert("Successfully signed up!");                                                
                navi('/login');
                
            }
            return response.json();                                                          
                              
        })
        .then(value => {console.log(value)})
        .catch(error => {
            this.setState({errorMessage:error.toString()});
            console.error('There was an error!',error);
        });           
    }
    const buttonClick = (e) => {    
        e.preventDefault();
        handleSignUp();
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-deco')}></div>
            <form className={cx('register-form')}>
                <h2 className={cx('form-heading')}>Register</h2>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>Username</label>
                    <input
                        className={cx('form-group-input')}
                        type="text"
                        required
                        onChange={onUsernameChange}
                        value={username}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>E-mail</label>
                    <input
                        className={cx('form-group-input')}
                        type="text"
                        required
                        onChange={onEmailChange}
                        value={email}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>Password</label>
                    <input
                        className={cx('form-group-input')}
                        type="password"
                        required
                        onChange={onPasswordChange}
                        value={password}
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>
                        Confirm password
                    </label>
                    <input
                        className={cx('form-group-input')}
                        type="password"
                        required
                        onChange={onConfirmPass}
                        value={confirmPass}
                    />
                </div>
                <button className={cx('form-group-button') } onClick={buttonClick}>Sign Up</button>
                <div className={cx('form-redirect')}>
                    <span>Already have one? </span>
                    <Link to="/login" className={cx('redirect-link')}>
                        Log in here!
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
