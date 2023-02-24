import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faBagShopping,
    faUser,
    faRightToBracket,
    faRightFromBracket,
    faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header', 'row')}>
                <div className={cx('header-brand')}>
                    <img src={images.logo} alt="DSC Pizza"></img>
                    <p className={cx('header-brand-name')}>DSC Pizza</p>
                </div>
                <nav className={cx('header-nav')}>
                    {/* -------------------------------------- Header Navbar ------------------------------------- */}
                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-item')}>
                            <Link to="/" className={cx('navbar-link')}>
                                Home
                            </Link>
                        </li>
                        {/* ----------------------------------- Navbar Menu ------------------------------------------ */}
                        <li className={`${cx('navbar-item')} ${cx('menu')}`}>
                            <Link to="/" className={cx('navbar-link')}>
                                Menu
                            </Link>
                            {/* ----------------------------- Menu Subnav ----------------------------------------- */}
                            <div
                                className={`${cx('subnav')} ${cx(
                                    'menu-subnav',
                                )}`}
                            >
                                {/* ------------------------- Menu Subnav Product List ---------------------------- */}
                                <ul className={cx('subnav-product-list')}>
                                    {/* --------------------------- Product 1 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.pepparoni}
                                            alt="pepparoni pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Pepperoni
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                    {/* --------------------------- Product 2 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.vegetarian}
                                            alt="vegetarian pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Vegetarian
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                    {/* --------------------------- Product 3 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.specialty}
                                            alt="specialty pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Specialty
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                    {/* --------------------------- Product 4 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.hamAndCheese}
                                            alt="Ham and cheese pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Ham & Cheese
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                    {/* --------------------------- Product 5 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.onion}
                                            alt="onion pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Onion
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                    {/* --------------------------- Product 6 -------------------------------------- */}
                                    <li className={cx('subnav-product-item')}>
                                        <img
                                            className={cx('subnav-product-img')}
                                            src={images.margherita}
                                            alt="margherita pizza"
                                        />
                                        <div
                                            className={cx(
                                                'subnav-product-desc',
                                            )}
                                        >
                                            <p
                                                className={cx(
                                                    'subnav-product-name',
                                                )}
                                            >
                                                Margherita
                                            </p>
                                            <p
                                                className={cx(
                                                    'subnav-product-price',
                                                )}
                                            >
                                                $12.99
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                {/* ---------------------------- Menu Subnav Nav List -------------------------------- */}
                                <ul className={cx('subnav-nav-list')}>
                                    <li className={cx('subnav-nav-item')}>
                                        Menu list
                                    </li>
                                    <li className={cx('subnav-nav-item')}>
                                        Menu grid
                                    </li>
                                    <li className={cx('subnav-nav-item')}>
                                        Special pizzas
                                    </li>
                                    <li className={cx('subnav-nav-item')}>
                                        All pizzas
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* ----------------------------------- Navbar Blog ------------------------------------------ */}
                        <li className={`${cx('navbar-item')} ${cx('blog')}`}>
                            <Link to="/" className={cx('navbar-link')}>
                                Blog
                            </Link>
                            {/* ---------------------------- Blog Subnav --------------------------------------------- */}
                            <div
                                className={`${cx('subnav')} ${cx(
                                    'blog-subnav',
                                )}`}
                            >
                                <ul className={cx('subnav-list')}>
                                    <li className={cx('subnav-item')}>
                                        Blog Leftside
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        Blog rightside
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        Blog detail
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* --------------------------------------- Navbar Reservation ---------------------------------------- */}
                        <li className={cx('navbar-item')}>
                            <Link to="/customize" className={cx('navbar-link')}>
                                Customize pizza
                            </Link>
                        </li>
                        {/* -------------------------------------- Navbar Pages ---------------------------------------------- */}
                        <li className={`${cx('navbar-item')} ${cx('pages')}`}>
                            <Link to="/" className={cx('navbar-link')}>
                                Pages
                            </Link>
                            {/* ----------------------------------- Pages Subnav --------------------------------------------- */}
                            <div
                                className={`${cx('subnav')} ${cx(
                                    'pages-subnav',
                                )}`}
                            >
                                <ul className={cx('subnav-list')}>
                                    <li className={cx('subnav-item')}>
                                        <Link
                                            className={cx('subnav-link')}
                                            to="/about-us"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        <Link
                                            className={cx('subnav-link')}
                                            to="/"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        <Link
                                            className={cx('subnav-link')}
                                            to="/"
                                        >
                                            Shop Grid
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className={cx('header-actions', 'action-list')}>
                    <Link
                        to="/"
                        className={cx('header-phoneNum', 'action-item')}
                    >
                        <FontAwesomeIcon
                            className={cx('header-icon')}
                            icon={faPhone}
                        />
                        <span>Contact</span>
                    </Link>
                    <Link
                        to="/cart"
                        className={cx('header-cart', 'action-item')}
                    >
                        <FontAwesomeIcon
                            className={cx('header-icon')}
                            icon={faBagShopping}
                        />
                        <span>Cart</span>
                    </Link>
                    <Link
                        to="/login"
                        className={cx('header-user', 'action-item', 'hidden')}
                    >
                        <FontAwesomeIcon
                            className={cx('header-icon')}
                            icon={faUser}
                        />
                        Log In
                    </Link>
                    <div
                        className={cx(
                            'header-user',
                            'user-action',
                            'action-item',
                        )}
                    >
                        <img src={images.about1} alt="avatar" className={cx('user-avt')} />
                        <p className={cx('user-username')}>Username</p>
                        <ul className={cx('action-subnav-list')}>
                            <li className={cx('action-subnav-item')}>
                                About me
                                <FontAwesomeIcon
                                    className={cx('user-info-icon')}
                                    icon={faAddressCard}
                                />
                            </li>
                            <li className={cx('action-subnav-item')}>
                                Settings
                                <FontAwesomeIcon
                                    className={cx('user-info-icon')}
                                    icon={faRightToBracket}
                                />
                            </li>
                            <li className={cx('action-subnav-item')}>
                                Log out
                                <FontAwesomeIcon
                                    className={cx('user-info-icon')}
                                    icon={faRightFromBracket}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
