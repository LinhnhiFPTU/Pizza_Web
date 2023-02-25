import images from '../../../assets/images';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Banner() {
    const [activeBanner, setActiveBanner] = useState(1);

    useEffect(() => {
        document.getElementById(cx('radio' + activeBanner)).checked = true;
        let ret = setInterval(() => {
            if (activeBanner === 3) setActiveBanner(1);
            else setActiveBanner(activeBanner + 1);
        }, 8000);

        return () => {
            clearInterval(ret);
        };
    }, [activeBanner]);

    function handleBannerLeftIconClick() {
        if (activeBanner === 1) {
            document.getElementById(cx('radio3')).checked = true;
            setActiveBanner(3);
        } else {
            const next = activeBanner - 1;
            document.getElementById(cx('radio' + next)).checked = true;
            setActiveBanner(next);
        }
    }
    function handleBannerRightIconClick() {
        if (activeBanner === 3) {
            document.getElementById(cx('radio1')).checked = true;
            setActiveBanner(1);
        } else {
            const next = activeBanner + 1;
            document.getElementById(cx('radio' + next)).checked = true;
            setActiveBanner(next);
        }
    }

    return (
        <div className={cx('home-banner')}>
            {/* banner slider start */}
            <div className={cx('home-slider')}>
                <div className={cx('home-slides')}>
                    {/* radio button start */}
                    <input
                        type="radio"
                        name="radio-btn"
                        id={cx('radio1')}
                    ></input>
                    <input
                        type="radio"
                        name="radio-btn"
                        id={cx('radio2')}
                    ></input>
                    <input
                        type="radio"
                        name="radio-btn"
                        id={cx('radio3')}
                    ></input>
                    {/* radio button end */}
                    {/* slide banners start */}
                    <div className={`${cx('banner-1')} ${cx('banner')}`}>
                        <div className={cx('banner-center')}>
                            <h2 className={cx('banner-heading')}>
                                Quality Foods
                            </h2>
                            <p className={cx('banner-sub-heading')}>
                                Healthy food for healthy body
                            </p>
                        </div>
                        <div className={cx('banner-images')}>
                            <div className={cx('all-images-banner')}>
                                <img
                                    src={images.pizzaBanner1}
                                    alt=""
                                    className={cx('pizza-banner-img')}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_1}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-1',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_2}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-2',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_3}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-3',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_4}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-4',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_5}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-5',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner1_6}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-6',
                                    )}`}
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('banner-2')} ${cx('banner')}`}>
                        <div className={cx('banner-center')}>
                            <h2 className={cx('banner-heading')}>
                                Quality Foods
                            </h2>
                            <p className={cx('banner-sub-heading')}>
                                Healthy food for healthy body
                            </p>
                        </div>
                        <div className={cx('banner-images')}>
                            <div className={cx('all-images-banner')}>
                                <img
                                    src={images.pizzaBanner2}
                                    alt=""
                                    className={cx('pizza-banner-img')}
                                ></img>
                                <img
                                    src={images.pizzaBanner2_1}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-1',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner2_2}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-2',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner2_3}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-3',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner2_4}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-4',
                                    )}`}
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('banner-3')} ${cx('banner')}`}>
                        <div className={cx('banner-images')}>
                            <div className={cx('all-images-banner')}>
                                <img
                                    src={images.pizzaBanner3}
                                    alt=""
                                    className={cx('pizza-banner-img')}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_1}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-1',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_2}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-2',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_3}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-3',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_4}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-4',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_5}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-5',
                                    )}`}
                                ></img>
                                <img
                                    src={images.pizzaBanner3_6}
                                    alt=""
                                    className={`${cx('pizza-toping')} ${cx(
                                        'toping-6',
                                    )}`}
                                ></img>
                            </div>
                        </div>
                        <div className={cx('banner-center')}>
                            <h2 className={cx('banner-heading')}>
                                Quality foods
                            </h2>
                            <p className={cx('banner-sub-heading')}>
                                Healthy food for healthy body
                            </p>
                        </div>
                    </div>
                    {/* slide banners end */}
                    {/* automatic navigation start */}
                    <div className={cx('navigation-auto')}>
                        <div className={cx('auto-btn1')}></div>
                        <div className={cx('auto-btn2')}></div>
                        <div className={cx('auto-btn3')}></div>
                    </div>
                    {/* automatic navigation end */}
                </div>
            </div>
            {/* <div className={cx('container')}>
            </div> */}
            {/* banner slider end */}
            {/* manual navigation start */}
            <div className={cx('navigation-manual')}>
                <label
                    htmlFor={cx('radio1')}
                    className={cx('manual-btn')}
                ></label>
                <label
                    htmlFor={cx('radio2')}
                    className={cx('manual-btn')}
                ></label>
                <label
                    htmlFor={cx('radio3')}
                    className={cx('manual-btn')}
                ></label>
            </div>
            {/* manual navigation end */}
            {/* Banner navigation icon start */}
            <FontAwesomeIcon
                onClick={handleBannerLeftIconClick}
                className={`${cx('navigation-icon')} ${cx('left')}`}
                icon={faChevronLeft}
            />
            <FontAwesomeIcon
                onClick={handleBannerRightIconClick}
                className={`${cx('navigation-icon')} ${cx('right')}`}
                icon={faChevronRight}
            />
            {/* Banner navigation icon end */}
        </div>
    );
}

export default Banner;
