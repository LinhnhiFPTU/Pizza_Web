import classNames from 'classnames/bind';
import styles from './Custom.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Custom() {
    const chilliesIngr = useRef();
    const onionIngr = useRef();
    const mushroomIngr = useRef();
    const oliveIngr = useRef();
    const shrimpIngr = useRef();
    const hamsIngr = useRef();
    const pineappleIngr = useRef();
    const tomatoIngr = useRef();
    const basilIngr = useRef();

    const [sauce, setSauce] = useState();
    const [toppings, setToppings] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [cheeses, setCheeses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // console.log(selectionCheckboxs);
    useEffect(() => {
        let newToppings = toppings;
        newToppings = newToppings.map((tp) => tp.value);
        let newVegetables = vegetables;
        newVegetables = newVegetables.map((vg) => vg.value);
        let newCheeses = cheeses;
        newCheeses = newCheeses.map((cheese) => cheese.value);

        console.log('Sauce: ' + (sauce ? sauce.value : ''));
        console.log('Topping: ' + newToppings);
        console.log('Vegetable: ' + newVegetables);
        console.log('Cheese: ' + newCheeses);
    }, [sauce, toppings, vegetables, cheeses]);

    function handleSauceClick(obj) {
        if (sauce) {
            sauce.checked = false;
            calcTotal(sauce);
            if (sauce.value === obj.value) {
                setSauce();
            } else {
                setSauce(obj);
                calcTotal(obj);
            }
        } else {
            setSauce(obj);
            calcTotal(obj);
        }
    }

    function handleCheeseClick(obj) {
        if (!obj.checked) {
            let newCheeses = cheeses;
            newCheeses = newCheeses.filter((cheese) => cheese !== obj);
            setCheeses(newCheeses);
        } else {
            setCheeses([...cheeses, obj]);
        }
        calcTotal(obj);
    }

    function handleToppingClick(obj) {
        if (!obj.checked) {
            let newToppings = toppings;
            newToppings = newToppings.filter((topping) => topping !== obj);
            setToppings(newToppings);
        } else {
            setToppings([...toppings, obj]);
        }
        handleDisplayTopping(obj);
        calcTotal(obj);
    }

    function handleDisplayTopping(topping) {
        let toppingInf = topping.value.split('-');
        switch (toppingInf[0]) {
            case 'hams':
                hamsIngr.current.style.display = topping.checked
                    ? 'block'
                    : 'none';
                break;
            case 'shrimp':
                shrimpIngr.current.style.display = topping.checked
                    ? 'block'
                    : 'none';
                break;
            case 'pineapple':
                pineappleIngr.current.style.display = topping.checked
                    ? 'block'
                    : 'none';
                break;
            default:
                break;
        }
    }

    function handleVegetableClick(obj) {
        if (!obj.checked) {
            let newVegetables = vegetables;
            newVegetables = newVegetables.filter((vege) => vege !== obj);
            setVegetables(newVegetables);
        } else {
            setVegetables([...vegetables, obj]);
        }
        handleDisplayVegetable(obj);
        calcTotal(obj);
    }

    function handleDisplayVegetable(vegetable) {
        let vegetableInf = vegetable.value.split('-');
        console.log(vegetableInf[0] + ' ' + vegetableInf[1]);
        switch (vegetableInf[0]) {
            case 'tomato':
                tomatoIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            case 'onion':
                onionIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            case 'mushroom':
                mushroomIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            case 'olive':
                oliveIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            case 'basil':
                basilIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            case 'chillies':
                chilliesIngr.current.style.display = vegetable.checked
                    ? 'block'
                    : 'none';
                break;
            default:
                break;
        }
    }

    function calcTotal(obj) {
        let objInf = obj.value.split('-');
        setTotalPrice((prev) => {
            let newPrice = obj.checked
                ? prev + parseFloat(objInf[1])
                : prev - parseFloat(objInf[1]);
            newPrice = parseFloat(newPrice.toFixed(2));
            return newPrice;
        });
    }

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
                    <img src={images.pizzaBase} alt="" />
                    <div className={cx('pizza-topping')}>
                        {/* -------------------- Chillies Ingredients list ------------------ */}
                        <div
                            ref={chilliesIngr}
                            className={`${cx('chillies-list')} ${cx(
                                'ingr-list',
                            )}`}
                        >
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-1')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-2')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-3')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-4')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-5')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-6')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-7')}`}
                            />
                            <img
                                src={images.chilliesIngr}
                                alt=""
                                className={`${cx('chillies-slice')} ${cx(
                                    'normal-ingr',
                                )}  ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Onion Ingredients list ------------------ */}
                        <div
                            ref={onionIngr}
                            className={`${cx('onion-list')} ${cx('ingr-list')}`}
                        >
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.onionIngr}
                                alt=""
                                className={`${cx('onion-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Mushroom Ingredients list ------------------ */}
                        <div
                            ref={mushroomIngr}
                            className={`${cx('mushroom-list')} ${cx(
                                'ingr-list',
                            )}`}
                        >
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.mushroomIngr}
                                alt=""
                                className={`${cx('mushroom-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Basil Ingredients list ------------------ */}
                        <div
                            ref={basilIngr}
                            className={`${cx('basil-list')} ${cx('ingr-list')}`}
                        >
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.basilIngr}
                                alt=""
                                className={`${cx('basil-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Olive Ingredients list ------------------ */}
                        <div
                            ref={oliveIngr}
                            className={`${cx('olive-list')} ${cx('ingr-list')}`}
                        >
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.oliveIngr}
                                alt=""
                                className={`${cx('olive-slice')} ${cx(
                                    'small-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Shrimp Ingredients list ------------------ */}
                        <div
                            ref={shrimpIngr}
                            className={`${cx('shrimp-list')} ${cx(
                                'ingr-list',
                            )}`}
                        >
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.shrimpIngr}
                                alt=""
                                className={`${cx('shrimp-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Hams Ingredients list ------------------ */}
                        <div
                            ref={hamsIngr}
                            className={`${cx('hams-list')} ${cx('ingr-list')}`}
                        >
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.hamsIngr}
                                alt=""
                                className={`${cx('hams-slice')} ${cx(
                                    'normal-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Pineapple Ingredients list ------------------ */}
                        <div
                            ref={pineappleIngr}
                            className={`${cx('pineapple-list')} ${cx(
                                'ingr-list',
                            )}`}
                        >
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.pineappleIngr}
                                alt=""
                                className={`${cx('pineapple-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>

                        {/* -------------------- Tomato Ingredients list ------------------ */}
                        <div
                            ref={tomatoIngr}
                            className={`${cx('tomato-list')} ${cx(
                                'ingr-list',
                            )}`}
                        >
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-1')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-2')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-3')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-4')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-5')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-6')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-7')}`}
                            />
                            <img
                                src={images.tomatoIngr}
                                alt=""
                                className={`${cx('tomato-slice')} ${cx(
                                    'large-ingr',
                                )} ${cx('slice-8')}`}
                            />
                        </div>
                    </div>
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
                                        value="spicyRed-3.99"
                                        onClick={(e) =>
                                            handleSauceClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                        name="sauce"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Spicy Red Sauce
                                        </p>
                                        <p className={cx('item-price')}>
                                            3.99$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="pepperyRed-1.99"
                                        onClick={(e) =>
                                            handleSauceClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                        name="sauce"
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
                                        value="creamyAlfredo-1.99"
                                        onClick={(e) =>
                                            handleSauceClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                        name="sauce"
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
                                        value="spicyBlack-1.99"
                                        onClick={(e) =>
                                            handleSauceClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('sauce-checkbox')}`}
                                        type="checkbox"
                                        name="sauce"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Spicy Black Sauce
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
                                        value="cheddar-1.99"
                                        onClick={(e) =>
                                            handleCheeseClick(e.target)
                                        }
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
                                        value="mozzarella-1.99"
                                        onClick={(e) =>
                                            handleCheeseClick(e.target)
                                        }
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
                                        value="oaxaca-1.99"
                                        onClick={(e) =>
                                            handleCheeseClick(e.target)
                                        }
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
                                        value="jarlsberg-1.99"
                                        onClick={(e) =>
                                            handleCheeseClick(e.target)
                                        }
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
                                        value="hams-1.99"
                                        onClick={(e) =>
                                            handleToppingClick(e.target)
                                        }
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
                                        value="shrimp-1.99"
                                        onClick={(e) =>
                                            handleToppingClick(e.target)
                                        }
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
                                        value="pineapple-1.99"
                                        onClick={(e) =>
                                            handleToppingClick(e.target)
                                        }
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
                                        value="tomato-0.59"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
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
                                        value="onion-0.59"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
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
                                        value="mushroom-0.59"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
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
                                        value="olive-0.29"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
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
                                        value="basil-0.29"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>Basil</p>
                                        <p className={cx('item-price')}>
                                            0.29$
                                        </p>
                                    </div>
                                </li>
                                <li className={cx('selection-item')}>
                                    <input
                                        value="chillies-0.29"
                                        onClick={(e) =>
                                            handleVegetableClick(e.target)
                                        }
                                        className={`${cx(
                                            'selection-checkbox',
                                        )} ${cx('vegetable-checkbox')}`}
                                        type="checkbox"
                                    />
                                    <div className={cx('selection-item-desc')}>
                                        <p className={cx('item-name')}>
                                            Chillies
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
            <div className={cx('custom-order-info')}>
                <h2 className={cx('order-info-total')}>
                    Total cost: <span>{totalPrice}</span>$
                </h2>
                <button className={cx('order-info-button')}>Order now!</button>
            </div>
        </div>
    );
}

export default Custom;
