import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-content')}>
                <div className={cx('footer-section')}>
                    <div className={cx('section-heading')}>
                        <img src={images.logo} alt=""></img>
                    </div>
                    <ul className={cx('section-desc-list')}>
                        <li className={cx('section-desc-item')}>
                            20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK
                            <br />
                            69QJ+2F Alexandria, United Kingdom
                        </li>
                        <li className={cx('section-desc-item')}>
                            PHONE -{' '}
                            <span className={cx('active')}>
                                +91 123 456 789 0 , +91 123 456 789 0
                            </span>
                        </li>
                        <li className={cx('section-desc-item')}>
                            EMAIL -{' '}
                            <span className={cx('active')}>
                                support@pizzon.com
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <div className={cx('section-heading')}>
                        <h2>Opening hours</h2>
                    </div>
                    <ul className={cx('section-desc-list')}>
                        <li className={cx('section-desc-item')}>
                            <span>Mon - Tues :</span>
                            <span>6.00 am - 10.00 pm</span>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <span>Wednes - Thurs :</span>
                            <span>6.00 am - 10.00 pm</span>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <span>Launch :</span>
                            <span>Everyday</span>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <span>Sunday :</span>
                            <span className={cx('')}>Closed</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('footer-section')}>
                    <div className={cx('section-heading')}>
                        <h2>Useful links</h2>
                    </div>
                    <ul className={cx('section-desc-list')}>
                        <li className={cx('section-desc-item')}>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <a href="/">Order Tracking</a>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <a href="/">About</a>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <a href="/">Contact Us</a>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <a href="/">Wishlist</a>
                        </li>
                        <li className={cx('section-desc-item')}>
                            <a href="/">Warranty and Services</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('footer-copyright')}>
                <div className={cx('copyright-info')}>
                    <p>
                        © Pizzon all Rights Reserved. Designed by{' '}
                        <a href="https://templatescoder.com/">TemplatesCoder</a>
                    </p>
                </div>
                <ul className={cx('copyright-social-list')}>
                    <li className={cx('copyright-social-item')}>
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </li>
                    <li className={cx('copyright-social-item')}>
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </li>
                    <li className={cx('copyright-social-item')}>
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </li>
                    <li className={cx('copyright-social-item')}>
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
