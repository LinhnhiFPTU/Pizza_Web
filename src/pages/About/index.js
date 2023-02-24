import classNames from 'classnames/bind';
import styles from './About.module.scss';
import images from '../../assets/images';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function About() {
    const radio1 = useRef();
    const radio2 = useRef();
    const radio3 = useRef();
    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    const section5 = useRef();
    const section6 = useRef();

    const [activeMenu, setActiveMenu] = useState(1);
    useEffect(() => {
        if (activeMenu === 1) radio1.current.checked = true;
        else if (activeMenu === 2) radio2.current.checked = true;
        else radio3.current.checked = true;
        let ret = setInterval(() => {
            if (activeMenu === 3) {
                setActiveMenu(1);
                radio3.current.checked = false;
            } else if (activeMenu === 2) {
                setActiveMenu(activeMenu + 1);
                radio2.current.checked = false;
            } else {
                setActiveMenu(activeMenu + 1);
                radio1.current.checked = false;
            }
        }, 5000);
        return () => {
            clearInterval(ret);
        };
    }, [activeMenu]);

    useEffect(() => {
        window.addEventListener('scroll', reveal);
    }, []);

    function reveal() {
        var sectionList = [
            section1.current,
            section2.current,
            section3.current,
            section4.current,
            section5.current,
            section6.current,
        ];

        sectionList.forEach((section) => {
            var windowHeight = window.innerHeight;
            var revealTop = section.getBoundingClientRect().top;
            var revealPoint = 200;
            if (revealTop <= windowHeight - revealPoint) {
                section.classList.add(cx('active'));
            } else {
                section.classList.remove(cx('active'));
            }
        });
    }

    return (
        <div className={cx('wrapper')}>
            <section
                ref={section1}
                className={`${cx('about-banner-section')} ${cx('section')}`}
            >
                <div className={cx('about-banner')}>
                    <div className={cx('banner-center')}>
                        <h1 className={cx('center-title')}>About Us</h1>
                        <Link to="/">Home</Link> / About Us
                    </div>
                </div>
            </section>
            <section
                ref={section2}
                className={`${cx('about-detail-section')} ${cx('reveal')} ${cx(
                    'section',
                )} ${cx('section-1')}`}
            >
                <div
                    className={`${cx('container')} ${cx(
                        'about-detail-container',
                    )}`}
                >
                    <div className={cx('detail-img')}>
                        <img src={images.about1} alt="about img" />
                    </div>
                    <div className={cx('detail-center',)}>
                        <p className={cx('center-sub-heading')}>
                            Delicious Restaurant
                        </p>
                        <h1 className={cx('center-heading')}>About Pizzon</h1>
                        <p className={cx('center-desc')}>
                            Sit amet, consectetur adipiscing elit quisque eget
                            maximus velit, non el eifend libero curabitur
                            dapibus mauris s ed le o cur sus aliquetcras
                            suscipit. Sit amet, consec tetur adipiscin g elit
                            quisque eget maximus velit, non eleifend libero
                            curabitur Si t ame t, consectetur ad ipiscin g elit
                            quisque eget ma ximus velit, non eleifend libero
                            curabitur dapibus mauris sed leo cu rsus aliquetcras
                            suscipit. S it amet.
                        </p>
                    </div>
                </div>
            </section>
            <section
                ref={section3}
                className={`${cx('about-story-section')} ${cx('reveal')} ${cx(
                    'section',
                )}`}
            >
                <div
                    className={`${cx('container')} ${cx(
                        'about-story-container',
                    )}`}
                >
                    <div className={cx('center-content')}>
                        <p className={cx('center-sub-heading')}>Discover</p>
                        <h1 className={cx('center-heading')}>Our story</h1>
                        <p className={cx('center-desc')}>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true
                            generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful
                        </p>
                        <img src={images.signature} alt="signature img"></img>
                    </div>
                </div>
            </section>
            <section
                ref={section4}
                className={`${cx('about-experience-section')} ${cx(
                    'reveal',
                )} ${cx('reveal')} ${cx('section')} ${cx('section-1')}`}
            >
                <div
                    className={`${cx('container')} ${cx(
                        'about-experience-container',
                    )}`}
                >
                    <div className={cx('experience-img')}>
                        <img src={images.about1} alt="experience img" />
                    </div>
                    <div className={cx('experience-center')}>
                        <p className={cx('center-sub-heading')}>
                            Modern Cuisine
                        </p>
                        <h1 className={cx('center-heading')}>Experience</h1>
                        <p className={cx('center-desc')}>
                            Sit amet, consectetur adipiscing elit quisque eget
                            maximus velit, non eleifend libero curabitur dapibus
                            mauris sed leo cursus aliquetcras suscipit. Sit
                            amet, consectetur adipiscing elit quisque eget
                            maximus velit, non eleifend libero curabitur Sit
                            amet, consectetur adipiscing elit quisque eget
                            maximus velit, non eleifend libero curabitur dapibus
                            mauris sed leo cursus aliquetcras suscipit. Sit
                            amet.
                        </p>
                    </div>
                </div>
            </section>
            <section
                ref={section5}
                className={`${cx('about-review-section')} ${cx('reveal')} ${cx(
                    'section',
                )}`}
            >
                <img
                    src={images.separatorDownWhite}
                    alt=""
                    className={`${cx('separator')} ${cx('down')}`}
                ></img>
                <div className={cx('container')}>
                    <input ref={radio1} type="radio" id={cx('radio1')}></input>
                    <input ref={radio2} type="radio" id={cx('radio2')}></input>
                    <input ref={radio3} type="radio" id={cx('radio3')}></input>

                    <div className={cx('center-content')}>
                        <p className={cx('center-sub-heading')}>
                            What Our Clients Say
                        </p>
                        <h1 className={cx('center-heading dark')}>
                            Customer Reviews
                        </h1>
                    </div>
                    <div className={cx('reviews-list')}>
                        <div className={cx('reviews-group')}>
                            <div className={cx('user-info')}>
                                <img
                                    className={cx('user-avt')}
                                    src={images.customer1}
                                    alt=""
                                ></img>
                                <h2 className={cx('user-name')}>John Doe</h2>
                            </div>
                            <div className={cx('comment-info')}>
                                <p className={cx('comment-desc')}>
                                    The one day when the lady met this fellow
                                    and they knew it was much more than a hunch
                                    the first mate and his Skipper too will do
                                    their comforta The one day when the lady met
                                    this fellow and they knew it was much more
                                    than a hunch the first mate and his Skipper
                                    too will do their comfort
                                </p>
                                <p className={cx('comment-author')}>
                                    John Doe - <span>designer</span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('reviews-group')}>
                            <div className={cx('user-info')}>
                                <img
                                    className={cx('user-avt')}
                                    src={images.customer1}
                                    alt=""
                                ></img>
                                <h2 className={cx('user-name')}>John Doe</h2>
                            </div>
                            <div className={cx('comment-info')}>
                                <p className={cx('comment-desc')}>
                                    The one day when the lady met this fellow
                                    and they knew it was much more than a hunch
                                    the first mate and his Skipper too will do
                                    their comforta The one day when the lady met
                                    this fellow and they knew it was much more
                                    than a hunch the first mate and his Skipper
                                    too will do their comfort
                                </p>
                                <p className={cx('comment-author')}>
                                    John Doe - <span>designer</span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('reviews-group')}>
                            <div className={cx('user-info')}>
                                <img
                                    className={cx('user-avt')}
                                    src={images.customer1}
                                    alt=""
                                ></img>
                                <h2 className={cx('user-name')}>John Doe</h2>
                            </div>
                            <div className={cx('comment-info')}>
                                <p className={cx('comment-desc')}>
                                    The one day when the lady met this fellow
                                    and they knew it was much more than a hunch
                                    the first mate and his Skipper too will do
                                    their comforta The one day when the lady met
                                    this fellow and they knew it was much more
                                    than a hunch the first mate and his Skipper
                                    too will do their comfort
                                </p>
                                <p className={cx('comment-author')}>
                                    John Doe - <span>designer</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('auto-navigator-radio')}>
                        <div
                            className={`${cx('radio-btn')} ${cx('btn-1')}`}
                        ></div>
                        <div
                            className={`${cx('radio-btn')} ${cx('btn-2')}`}
                        ></div>
                        <div
                            className={`${cx('radio-btn')} ${cx('btn-3')}`}
                        ></div>
                    </div>
                </div>
                <img
                    src={images.separatorUpWhite}
                    alt=""
                    className={`${cx('separator')} ${cx('up')}`}
                ></img>
            </section>
            <section
                ref={section6}
                className={`${cx('about-booking-section')} ${cx('reveal')} ${cx(
                    'section',
                )}`}
            >
                <div className={cx('container')}>
                    <div className={cx('booking-content')}>
                        <div
                            className={`${cx('center-content')} ${cx(
                                'booking-center',
                            )}`}
                        >
                            <p className={cx('center-sub-heading')}>
                                What Our Clients Say
                            </p>
                            <h1 className={cx('center-heading')}>
                                Customer Reviews
                            </h1>
                            <p className={cx('center-desc')}>
                                Sit amet, consectetur adipiscing elit quisque
                                eget maximus velit, non eleifend libero
                                curabitur dapibus mauris sed leo cursus
                                aliquetcras suscipit. Sit amet, consectetur
                                adipiscing elit quisque eget maximus velit, non
                                eleifend libero curabitur
                            </p>
                            <div className={cx('booking-hotline')}>
                                <FontAwesomeIcon
                                    className={cx('hotline-icon')}
                                    icon={faPhoneVolume}
                                />
                                +0977588901
                            </div>
                        </div>
                        <form className={cx('booking-form')}>
                            <h2 className={cx('form-heading')}>Book a table</h2>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                className={cx('form-input')}
                                required
                            />
                            <input
                                name="email"
                                type="text"
                                placeholder="Email"
                                className={cx('form-input')}
                                required
                            />
                            <select className={cx('form-input')}>
                                <option value="2 Person">2 Person</option>
                                <option value="3 Person">3 Person</option>
                                <option value="4 Person">4 Person</option>
                                <option value="5 Person">5 Person</option>
                            </select>
                            <input
                                name="Date"
                                type="date"
                                placeholder="Date"
                                className={cx('form-input')}
                            />
                            <input
                                className={`${cx('btn')} ${cx('btn-dark')}`}
                                type="submit"
                                value="BOOK NOW"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
