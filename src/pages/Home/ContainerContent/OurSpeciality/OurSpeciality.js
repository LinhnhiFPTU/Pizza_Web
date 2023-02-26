import classNames from 'classnames/bind';
import styles from './OurSpeciality.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function OurSpeciality() {
    return (
        <div className={cx('container__content')}>
            <div className={cx('container__content-speciality')}>
                <div className={cx('grid')}>
                    <div className={cx('container__content-header', 'mr-30')}>
                        <h3>Fresh From Pizzon</h3>
                        <h2 className={cx('font30')}>Our Speciality</h2>
                    </div>

                    <div
                        className={cx(
                            'container__content-speciality-list',
                            'mr-30',
                            'row',
                        )}
                    >
                        <div
                            className={cx(
                                'container__content-speciality-list-items',
                                'lg-col-4',
                                'col',
                                'c-12',
                                'm-4',
                            )}
                        >
                            <a href="">
                                <img
                                    src={images.speciality1}
                                    alt=""
                                    className={cx('spec-img', 'rounded')}
                                />
                            </a>
                            <p>
                                <a href="" className={cx('font12')}>
                                    Mexican Green Wave{' '}
                                </a>
                            </p>
                        </div>

                        <div
                            className={cx(
                                'container__content-speciality-list-items',
                                'lg-col-4',
                                'col',
                                'c-12',
                                'm-4',
                            )}
                        >
                            <a href="">
                                <img
                                    src={images.speciality2}
                                    alt=""
                                    className={cx('spec-img', 'rounded')}
                                />
                            </a>
                            <p>
                                <a href="" className={cx('font12')}>
                                    Double Cheese Pizza
                                </a>
                            </p>
                        </div>

                        <div
                            className={cx(
                                'container__content-speciality-list-items',
                                'lg-col-4',
                                'col',
                                'c-12',
                                'm-4',
                            )}
                        >
                            <a href="">
                                <img
                                    src={images.speciality3}
                                    alt=""
                                    className={cx('spec-img', 'rounded')}
                                />
                            </a>
                            <p>
                                <a href="" className={cx('font12')}>
                                    Margerita Pizza
                                </a>
                            </p>
                        </div>
                    </div>

                    <div
                        className={cx(
                            'container__content-speciality-footer',
                            'mr-30',
                        )}
                    >
                        <button className={cx('l-btn', 'orange-l-btn')}>
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurSpeciality;
