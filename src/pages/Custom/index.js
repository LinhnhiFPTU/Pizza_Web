import classNames from 'classnames/bind';
import styles from './Custom.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import OptionList from './component/OptionList';
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
    const [sauceList, setSauceList] = useState([]);
    const [cheeseList, setCheeseList] = useState([]);
    const [toppingList, setToppingList] = useState([]);
    const [vegetableList, setVegetableList] = useState([]);

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

    useEffect(() => {
        Promise.all([
            fetch('https://localhost:7072/Pizzon/CustomPizza?option=1'),
            fetch('https://localhost:7072/Pizzon/CustomPizza?option=2'),
            fetch('https://localhost:7072/Pizzon/CustomPizza?option=3'),
            fetch('https://localhost:7072/Pizzon/CustomPizza?option=4'),
        ])
            .then(([sauceslist, cheeseslist, vegetableslist, toppingslist]) => {
                setSauceList(sauceslist.json());
                setCheeseList(cheeseslist.json());
                setVegetableList(vegetableslist.json());
                setToppingList(toppingslist.json());
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
        let toppingInf = topping.value;
        switch (toppingInf) {
            case '1':
                doSwitchDisplay(hamsIngr, topping.checked);
                break;
            case '2':
                doSwitchDisplay(shrimpIngr, topping.checked);
                break;
            case '3':
                doSwitchDisplay(pineappleIngr, topping.checked);
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
        let vegetableInf = vegetable.value;
        switch (vegetableInf) {
            case '1':
                doSwitchDisplay(tomatoIngr, vegetable.checked);
                break;
            case '2':
                doSwitchDisplay(onionIngr, vegetable.checked);
                break;
            case '3':
                doSwitchDisplay(mushroomIngr, vegetable.checked);
                break;
            case '4':
                doSwitchDisplay(oliveIngr, vegetable.checked);
                break;
            case '5':
                doSwitchDisplay(basilIngr, vegetable.checked);
                break;
            case '6':
                doSwitchDisplay(chilliesIngr, vegetable.checked);
                break;
            default:
                break;
        }
    }

    function calcTotal(obj) {
        let objPrice = obj.dataset.price;
        setTotalPrice((prev) => {
            let newPrice = obj.checked
                ? prev + parseFloat(objPrice)
                : prev - parseFloat(objPrice);
            newPrice = parseFloat(newPrice.toFixed(2));
            return newPrice;
        });
    }

    function doSwitchDisplay(obj, doDisplay) {
        if (doDisplay) {
            obj.current.classList.remove(cx('visual-hidden'));
            obj.current.classList.remove(cx('hidden'));
        } else {
            obj.current.classList.add(cx('visual-hidden'));
            setTimeout(() => {
                obj.current.classList.add(cx('hidden'));
            }, 600);
        }
    }

    const [activeMenu, setActiveMenu] = useState(1);
    const radio1 = useRef();
    const radio2 = useRef();
    useEffect(() => {
        if (activeMenu === 1) radio1.current.checked = true;
        else radio2.current.checked = true;
        let ret = setInterval(() => {
            if (activeMenu === 1) radio1.current.checked = false;

            if (activeMenu === 2) setActiveMenu(1);
            else setActiveMenu(activeMenu + 1);
        }, 6000);
        return () => {
            clearInterval(ret);
        };
    }, [activeMenu]);

    function handleMenuLeftIconClick() {
        if (activeMenu === 1) {
            radio2.current.checked = true;
            setActiveMenu(2);
        } else {
            radio1.current.checked = true;
            setActiveMenu(1);
        }
    }
    function handleMenuRightIconClick() {
        if (activeMenu === 2) {
            radio1.current.checked = true;
            setActiveMenu(1);
        } else {
            radio2.current.checked = true;
            setActiveMenu(2);
        }
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
                <input
                    ref={radio1}
                    name="navi-radio"
                    type="radio"
                    id={`${cx('radio1')}`}
                ></input>
                <input
                    ref={radio2}
                    name="navi-radio"
                    type="radio"
                    id={`${cx('radio2')}`}
                ></input>

                <div className={cx('suggest-menu-list')}>
                    <ul className={cx('menu-list-1')}>
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
                                <p className={cx('menu-item-name')}>
                                    Onion Pizza
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
                    <ul className={cx('menu-list-2')}>
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
                </div>
                <FontAwesomeIcon
                    onClick={handleMenuLeftIconClick}
                    className={`${cx('navigation-icon')} ${cx('left')}`}
                    icon={faChevronLeft}
                />
                <FontAwesomeIcon
                    onClick={handleMenuRightIconClick}
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
                            )} ${cx('hidden')}`}
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
                            className={`${cx('onion-list')} ${cx(
                                'ingr-list',
                            )} ${cx('hidden')}`}
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
                            )} ${cx('hidden')}`}
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
                            className={`${cx('basil-list')} ${cx(
                                'ingr-list',
                            )} ${cx('hidden')}`}
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
                            className={`${cx('olive-list')} ${cx(
                                'ingr-list',
                            )} ${cx('hidden')}`}
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
                            )} ${cx('hidden')}`}
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
                            className={`${cx('hams-list')} ${cx(
                                'ingr-list',
                            )} ${cx('hidden')}`}
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
                            )} ${cx('hidden')}`}
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
                            )} ${cx('hidden')}`}
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
                        <OptionList
                            optionList={sauceList}
                            type="Sauce"
                            handleClick={handleSauceClick}
                        />
                        {/* ------------------------- Cheese Selection Section ------------------------- */}
                        <OptionList
                            type="Cheese"
                            optionList={cheeseList}
                            handleClick={handleCheeseClick}
                        />
                        {/* ------------------------- Topping Selection Section ------------------------- */}
                        <OptionList
                            optionList={toppingList}
                            type="Topping"
                            handleClick={handleToppingClick}
                        />
                        {/* ------------------------- Vegetable Selection Section ------------------------- */}
                        <OptionList
                            optionList={vegetableList}
                            type="Vegetable"
                            handleClick={handleVegetableClick}
                        />
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
