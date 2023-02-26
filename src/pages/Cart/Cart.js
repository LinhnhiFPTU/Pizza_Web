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

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0),
        );
    }, [cart]);

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
                                        <td className={cx('product-name', 'col-lg-5')}>
                                            <span>{prod.name}</span>
                                        </td>
                                        <td className={cx('product-price')}>
                                            $ {prod.price}
                                        </td>
                                        <td className={cx('product-quantity')}>
                                            <Form.Control
                                                type="number"
                                                as="select"
                                                value={'currentValue'}
                                                onChange={(e) =>
                                                    dispatch({
                                                        type: 'CHANGE_CART_QTY',
                                                        payload: {
                                                            id: prod.id,
                                                            qty: e.target.value,
                                                        },
                                                    })
                                                }
                                            >
                                                {[
                                                    ...Array(
                                                        prod.inStock,
                                                    ).keys(),
                                                ].map((x, i) => (
                                                    <option
                                                        value={
                                                            i + 1 === prod.qty
                                                                ? 'currentValue'
                                                                : ''
                                                        }
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
                                        <td className={cx('delete-icon')}>
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

            <div className={cx('bottom', 'col-lg-12')}>
                <div className={cx('col-lg-5', 'shipping-cart')}>
                    <div>ESTIMATE SHIPPING AND TAX</div>
                    <Form.Control className={cx('col-lg-12')} as="select">
                        <option value="">Select Country</option>
                        <option value="">French</option>
                        <option value="">England</option>
                        <option value="">Vietnam</option>
                    </Form.Control>
                    <div className={cx('shipping-details')}>
                        <Form.Control className={cx('col-lg-6')} as="select">
                            <option value="">Select State/Province</option>
                            <option value="">---</option>
                        </Form.Control>
                        <Form.Control className={cx('col-lg-5')} as="select">
                            <option value="">Select City</option>
                            <option value="">---</option>
                        </Form.Control>
                    </div>
                </div>
                <div className={cx('col-lg-5', 'total-details')}>
                    <div className={cx('cart-filters')}>
                        <div className={cx('cart-total-header')}>
                            Cart Total
                        </div>
                        <div className={cx('amount-payable')}>
                            Amout Payable
                            <div>${total}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                className={cx('checkout-button')}
                type="button"
                disabled={cart.length === 0}
            >
                Proceed to Checkout
            </Button>
        </div>
        </div>
    );
};

export default Cart;
