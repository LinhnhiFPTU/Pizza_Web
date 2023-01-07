import classNames from 'classnames/bind';
import styles from './Custom.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Custom() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('center-content')}>
                <p className={cx('center-sub-heading')}>Only at DSC Pizza</p>
                <h1 className={cx('center-heading')}>Customize Your Pizza</h1>
            </div>
            <div className={cx('custom-suggest-menu')}>
                <h4 className={cx('suggest-menu-heading')}>
                    Try out our most famous recipe
                </h4>
                <ul className={cx('suggest-menu-list')}>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.hamAndCheese}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>
                                Ham & Cheese Pizza
                            </p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.margherita}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>
                                Margherita Pizza
                            </p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.onion}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>Onion Pizza</p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.pepparoni}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>
                                Pepparoni Pizza
                            </p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.vegetarian}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>
                                Vegetarian Pizza
                            </p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                    <li className={cx('suggest-menu-item')}>
                        <img
                            src={images.specialty}
                            alt=""
                            className={cx('menu-item-img')}
                        ></img>
                        <div className={cx('menu-item-desc')}>
                            <p className={cx('menu-item-name')}>
                                Specialty Pizza
                            </p>
                            <p className={cx('menu-item-price')}>12.99$</p>
                            <button
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                            >
                                Buy it!
                            </button>
                        </div>
                    </li>
                </ul>
                <FontAwesomeIcon
                    className={`${cx('navigation-icon')} ${cx('left')}`}
                    icon={faChevronLeft}
                />
                <FontAwesomeIcon
                    className={`${cx('navigation-icon')} ${cx('right')}`}
                    icon={faChevronRight}
                />
            </div>
            <div className={cx('custom-content')}>
                <div className={cx('custom-product-view')}>
                    <img src={images.pepparoni} alt=""></img>
                </div>
                <div className={cx('custom-option-view')}>
                    <div className={cx('custom-option-center')}>
                        <h2 className={cx('option-center-heading')}>
                            Customize your own pizza here!
                        </h2>
                        <p className={cx('option-center-sub-heading')}>
                            With more than 10 different toppings for you to
                            choose! Create your own unique pizza with us now!
                        </p>
                    </div>
                    {/* ------------------ Option Selection Part -------------------------- */}
                    <div className={cx('option-selection')}>
                        {/* ------------------------- Sauce Selection Section ------------------------- */}
                        <div className={cx('selection-section')}>
                            <h4
                                className={`${cx('selection-type')} ${cx(
                                    'selection-sauce',
                                )}`}
                            >
                                Sauces
                            </h4>
                            <ul className={cx('selection-list')}>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="sauce-1"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Spicy Red Sauce
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="sauce-2"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Peppery Red Sauce
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="sauce-3"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Creamy Alfredo Sauce
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="sauce-4"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Spicy Red Sauce
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* ------------------------- Cheese Selection Section ------------------------- */}
                        <div className={cx('selection-section')}>
                            <h4
                                className={`${cx('selection-type')} ${cx(
                                    'selection-cheese',
                                )}`}
                            >
                                Cheeses
                            </h4>
                            <ul className={cx('selection-list')}>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="cheese-1"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('cheese-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Cheddar curds
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="cheese-2"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('cheese-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Mozzarella
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="cheese-3"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('cheese-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Oaxaca
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="cheese-4"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('cheese-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Jarlsberg
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* ------------------------- Topping Selection Section ------------------------- */}
                        <div className={cx('selection-section')}>
                            <h4
                                className={`${cx('selection-type')} ${cx(
                                    'selection-topping',
                                )}`}
                            >
                                Topping
                            </h4>
                            <ul className={cx('selection-list')}>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="topping-1"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('topping-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>Hams</p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="topping-2"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('topping-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            shrimp
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="topping-3"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('topping-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Pineapple
                                        </p>
                                        <p className={cx('item-price')}>
                                            1.99$
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* ------------------------- Vegetable Selection Section ------------------------- */}
                        <div className={cx('selection-section')}>
                            <h4
                                className={`${cx('selection-type')} ${cx(
                                    'selection-vegetable',
                                )}`}
                            >
                                Vegetable
                            </h4>
                            <ul className={cx('selection-list')}>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-1"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Tomato
                                        </p>
                                        <p className={cx('item-price')}>
                                            0.59$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-2"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>Onion</p>
                                        <p className={cx('item-price')}>
                                            0.59$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-3"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Mushroom
                                        </p>
                                        <p className={cx('item-price')}>
                                            0.59$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-4"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Leaf 1
                                        </p>
                                        <p className={cx('item-price')}>
                                            0.29$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-5"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Leaf 2
                                        </p>
                                        <p className={cx('item-price')}>
                                            0.29$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-6"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>Olive</p>
                                        <p className={cx('item-price')}>
                                            0.29$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="vegetable-7"
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Leaf 2
                                        </p>
                                        <p className={cx('item-price')}>
                                            0.29$
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Custom;
