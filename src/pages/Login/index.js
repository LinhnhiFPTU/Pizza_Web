import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Login() {
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
            </div>
            <form className={cx('login-form')}>
                <h2 className={cx('form-heading')}>Log in</h2>
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
                <button className={cx('form-group-button')}>Sign In</button>
                <div className={cx('form-redirect')}>
                    <span>New here? </span>
                    <Link to="/register" className={cx('redirect-link')}>
                        Create one now!
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
