import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
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
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>E-mail</label>
                    <input
                        className={cx('form-group-input')}
                        type="text"
                        required
                    />
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('form-group-label')}>Password</label>
                    <input
                        className={cx('form-group-input')}
                        type="password"
                        required
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
                    />
                </div>
                <button className={cx('form-group-button')}>Sign In</button>
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
