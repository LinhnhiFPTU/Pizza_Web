import { useEffect, useState } from 'react';
import { Button, Form, Image, ListGroup, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../context/Context';

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

    console.log(cart);

    return (
        <div className="cart-container">
            <div className="product-container">
                <ListGroup>
                    <div className="cart-item">
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
                                        <td className="product-image">
                                            <Image
                                                src={prod.image}
                                                alt={prod.name}
                                                fluid
                                                rounded
                                            />
                                        </td>
                                        <td className="product-name">
                                            <span>{prod.name}</span>
                                        </td>
                                        <td className="product-price">
                                            $ {prod.price}
                                        </td>
                                        <td className="product-quantity">
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
                                        <td className="sub-total">$ 0</td>
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

            <div className="bottom">
                <div className="col-md-6 shipping-cart">
                    <div>ESTIMATE SHIPPING AND TAX</div>
                    <Form.Control className="col-md-12" as="select">
                        <option value="">Select Country</option>
                        <option value="">French</option>
                        <option value="">England</option>
                        <option value="">Vietnam</option>
                    </Form.Control>
                    <div className="shipping-details">
                        <Form.Control className="col-md-5" as="select">
                            <option value="">Select State/Province</option>
                            <option value="">---</option>
                        </Form.Control>
                        <Form.Control className="col-md-5" as="select">
                            <option value="">Select City</option>
                            <option value="">---</option>
                        </Form.Control>
                    </div>
                </div>
                <div className="col-md-5 total-details">
                    <div className="cart-filters">
                        <div className="cart-total-header">Cart Total</div>
                        <div className="items-subtotal">
                            Items Subtotal
                            <div>${total}</div>
                        </div>
                        <div className="items-shipping">
                            Shipping
                            <div>$30</div>
                        </div>
                        <div className="amount-payable">
                            Amout Payable
                            <div>$</div>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                className="checkout-button"
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
