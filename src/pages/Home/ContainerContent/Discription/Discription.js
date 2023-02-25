import classNames from 'classnames/bind';
import styles from './Discription.module.scss';
import images from '../../../../assets/images';

function Discription() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('container__content', 'mg-top-minus-20')}>
            <div>
                <img
                    src={images.orderTop}
                    alt=""
                    className={cx('full-width', 'orderTop')}
                />
            </div>
            <div className={cx('container__content-order')}>
                <div className={cx('grid')}>
                    <div className={cx('container__content-order-list', 'row')}>
                        <div
                            className={cx(
                                'container__content-order-list-items',
                                'lg-col-4',
                                'c-12',
                                'col',
                                'm-4',
                            )}
                        >
                            <img
                                src={images.order1}
                                alt=""
                                className={cx('logo-format')}
                            />
                            <h3>ORDER YOUR FOOD</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do
                                eius-Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-
                            </p>
                        </div>

                        <div
                            className={cx(
                                'container__content-order-list-items',
                                'lg-col-4',
                                'c-12',
                                'col',
                                'm-4',
                            )}
                        >
                            <img
                                src={images.order2}
                                alt=""
                                className={cx('logo-format')}
                            />
                            <h3>DELIVERY OR PICK UP</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do
                                eius-Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-
                            </p>
                        </div>

                        <div
                            className={cx(
                                'container__content-order-list-items',
                                'lg-col-4',
                                'c-12',
                                'col',
                                'm-4',
                            )}
                        >
                            <img
                                src={images.order3}
                                alt=""
                                className={cx('logo-format')}
                            />
                            <h3>DELICIOUS RECEIPE</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit, sed do
                                eius-Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eius-
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={images.orderBottom}
                    alt=""
                    className={cx('full-width')}
                />
            </div>
        </div>
    );
}

export default Discription;
