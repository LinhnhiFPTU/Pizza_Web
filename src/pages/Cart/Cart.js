import { useEffect, useState } from 'react';
import { Button, Form, Image, ListGroup, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../context/Context';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Cart = () => {
    const context = CartState();
    console.log(context);
    const cart = context.state.products;
    const dispatch = context.dispatch;
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0),
        );
    }, [cart]);

    return (
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
                                                as="select"
                                                value={prod.qty}
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
                                                ].map((x) => (
                                                    <option key={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </td>
                                        <td className={cx('sub-total')}>$ 0</td>
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
                <div className={cx('col-md-6', 'shipping-cart')}>
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
                            Items Subtotal
                            <div>${total}</div>
                        </div>
                        <div className={cx('items-shipping')}>
                            Shipping
                            <div>$30</div>
                        </div>
                        <div className={cx('amount-payable')}>
                            Amout Payable
                            <div>$</div>
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
    );
};

/*  <Nav>
        <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
    </Nav>
*/

export default Cart;
