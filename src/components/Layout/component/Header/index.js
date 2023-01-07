import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <header className={cx('header')}>
                <div className={cx('header-brand')}>
                    <img src={images.logo} alt="DSC Pizza"></img>
                    <p className={cx('header-brand-name')}>DSC Pizza</p>
                </div>
                <nav className={cx('header-nav')}>
                    {/* -------------------------------------- Header Navbar ------------------------------------- */}
                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-item')}>
                            <span>Home</span>
                        </li>
                        {/* ----------------------------------- Navbar Menu ------------------------------------------ */}
                        <li className={`${cx('navbar-item')} ${cx('menu')}`}>
                            <span>Menu</span>
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
                            <span>Blog</span>
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
                            <span>Reservation</span>
                        </li>
                        {/* -------------------------------------- Navbar Pages ---------------------------------------------- */}
                        <li className={`${cx('navbar-item')} ${cx('pages')}`}>
                            <span>Pages</span>
                            {/* ----------------------------------- Pages Subnav --------------------------------------------- */}
                            <div
                                className={`${cx('subnav')} ${cx(
                                    'pages-subnav',
                                )}`}
                            >
                                <ul className={cx('subnav-list')}>
                                    <li className={cx('subnav-item')}>
                                        About Us
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        Contact
                                    </li>
                                    <li className={cx('subnav-item')}>
                                        Shop Grid
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className={cx('header-actions')}>
                    <div className={cx('header-phoneNum')}>
                        <FontAwesomeIcon
                            className={cx('header-icon')}
                            icon={faPhone}
                        />
                        +91 123 456 789
                    </div>
                    <div className={cx('header-cart')}>
                        <FontAwesomeIcon
                            className={cx('header-icon')}
                            icon={faBagShopping}
                        />
                        0 items - $0.00
                    </div>
                    <button
                        className={`${cx('header-order-btn')} ${cx('btn')} ${cx(
                            'btn-primary',
                        )}`}
                    >
                        ORDER ONLINE
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
