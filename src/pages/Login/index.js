import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';





const cx = classNames.bind(styles);

function Login() {
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
    const handlePost = ()=>{        

        const loginInfo = {"username":username,"email":email,"password":password};
        const requestOptions = {
            method:'POST',
            credentials:'include',
            headers:{'Content-Type': 'application/json' ,
                'Accept': 'application/json, text/plain, */*'},
            
            
            body:JSON.stringify(loginInfo),
            
        }
        fetch('https://localhost:7072/Pizzon/Login',requestOptions).then(response => {                         
            if(!response.ok){
                alert("Incorrect sign-in credentials, or user doesn't exist!");                     
                navi("/login");
                
            }else {                                  
                alert("Successfully logged in!");                                                
                navi("/");
                
            }
            return response.json();                                                          
                              
        })
        .then(value => {console.log(value)})
        .catch(error => {
            this.setState({errorMessage:error.toString()});
            console.error('There was an error!',error);
        });

    }
    const buttonClick = () => {    
        handlePost();
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-content')}>
                <div className={cx('login-center')}>
                    <h2 className={cx('deco-heading')}>Need some Pizza, yo?</h2>
                    <p className={cx('deco-desc')}>
                        C'mon and order from nearby Pizza delivery and pickup
                        restaurants
                    </p>
                </div>
                <form className={cx('login-form')}>
                    <h2 className={cx('form-heading')}>Log in</h2>
                    <div className={cx('form-group')}>
                        <label className={cx('form-group-label')}>
                            Username
                        </label>
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
                        <label className={cx('form-group-label')}>
                            Password
                        </label>
                        <input
                            className={cx('form-group-input')}
                            type="password"
                            required
                            onChange={onPasswordChange}
                            value={password}
                        />
                    </div>
                    <button type="button" className={cx('form-group-button')} onClick={buttonClick}>Sign In</button>

                    <div className={cx('form-redirect')}>
                        <span>New here? </span>
                        <Link to="/register" className={cx('redirect-link')}>
                            Create one now!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
