import { useEffect, useState } from 'react';
import { Button, Form, Image, ListGroup, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../context/Context';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState();
    const [finalTotal,setFinalTotal] = useState(0);
    
    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0),
        );
        if(total!==0) {
            setFinalTotal(total+30)
        }else setFinalTotal(0)        
    }, [cart]);

    const handleOrderCreate = () => {        
        (cart.map((prod) => {
        let eachPizza = prod.name            
        let nameIngredients = eachPizza.split('| ');
        let name = nameIngredients[0]
        let ingredients = nameIngredients[1];
        let sauce, cheese, vegetables,topping;
        if(ingredients!=null) {
            ingredients = ingredients.split(',');
            sauce = ingredients[0]
            cheese = ingredients[1]
            topping = ingredients[2]
            vegetables = ingredients[3]
        }else{
            sauce = cheese = topping = vegetables = "";
        }
        console.log("Pizza name: "+name);
        console.log('Ingredients: '+sauce+' '+cheese+' '+topping+' '+vegetables);
        
        //Sends the request to the back-end, to create a new order.
        const orderInfo = {"name":name,"address":"","phone":"","sauce":sauce,"cheese":cheese,"topping":topping,"vegetables":vegetables}
        const requestOptions = {
            method:'POST',
            credentials:'include',
            headers:{'Content-Type': 'application/json' ,
                'Accept': 'application/json, text/plain, */*'},
            
            
            body:JSON.stringify(orderInfo),                                
        }                        
        //To fetch the data from the API, there are 3 steps to do in React:
        //fetch -> convert response to json format -> read data from that converted json.
        fetch('https://localhost:7072/Pizzon/Order',requestOptions)
        .then(response => response.json())
        .then(data => {                
                alert(data.message)                                             
            }
        )            
        }))        
        
        
        };                                           
      
    const handleClick = (e) => {
        e.preventDefault();
        console.log('yooo')
        handleOrderCreate();
    }


    return (
        <div>
            <div className={cx('customerHeader')}>
                <div>
                    <h2>Cart</h2>
                    <p>Home / Cart</p>
                </div>
            </div>
            <div className={cx('cart-container')}>
            <div className={cx('product-container')}>
                <ListGroup>
                    <div className={cx('cart-item')}>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((prod) => (
                                    <tr key={prod.id}>
                                        <td className={cx('product-image')}>
                                            <Image
                                                src={prod.image}
                                                alt={prod.name}
                                                fluid
                                                rounded
                                            />
                                        </td>
                                        <td className={cx('product-name')}>
                                            <span>{prod.name}</span>
                                        </td>
                                        <td className={cx('product-price')}>
                                            $ {prod.price}
                                        </td>
                                        <td className={cx('product-quantity')}>
                                            <Form.Control
                                                type="number"
                                                as="select"
                                                value={prod.qty}
                                                onChange={(e) => {
                                                    console.log(e.target);
                                                    dispatch({
                                                        type: 'CHANGE_CART_QTY',


payload: {
                                                            id: prod.id,
                                                            qty: e.target.value,
                                                        },
                                                    });
                                                }}
                                            >
                                                {[
                                                    ...Array(
                                                        prod.inStock,
                                                    ).keys(),
                                                ].map((x, i) => (
                                                    <option
                                                        value={i + 1}
                                                        key={i + 1}
                                                    >
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </td>
                                        <td className={cx('sub-total')}>
                                            $ {prod.price * prod.qty}
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() =>
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: prod,
                                                    })
                                                }
                                            >
                                                <AiFillDelete fontSize="20px" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </ListGroup>
            </div>

            <div className={cx('bottom')}>
                <div className={cx('col-lg-6', 'shipping-cart')}>
                    <div>ESTIMATE SHIPPING AND TAX</div>
                    <Form.Control className={cx('col-md-12')} as="select">
                        <option value="">Select Country</option>
                        <option value="">French</option>
                        <option value="">England</option>
                        <option value="">Vietnam</option>
                    </Form.Control>

<div className={cx('shipping-details')}>
                        <Form.Control className={cx('col-md-5')} as="select">
                            <option value="">Select State/Province</option>
                            <option value="">---</option>
                        </Form.Control>
                        <Form.Control className={cx('col-md-5')} as="select">
                            <option value="">Select City</option>
                            <option value="">---</option>
                        </Form.Control>
                    </div>
                </div>
                <div className={cx('col-md-5', 'total-details')}>
                    <div className={cx('cart-filters')}>
                        <div className={cx('cart-total-header')}>
                            Cart Total
                        </div>
                        <div className={cx('items-subtotal')}>
                            Amount Payable
                            <div>${total}</div>
                        </div>      
                    </div>
                </div>
            </div>
            <div className={cx('flex-box')}>
                <Button
                    className={cx('checkout-button', 'center')}
                    type="button"
                    disabled={cart.length === 0}
                    onClick={handleClick}
                >
                    Proceed to Checkout
                </Button>   
            </div>
        </div>
    


            
        </div>
    )
}
        
export default Cart