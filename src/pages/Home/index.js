import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../../src/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('containerHome')}>
                <div className={cx('container__content', 'mg-top-minus-20')}>
                    <div><img src={images.orderTop} alt='' className={cx('full-width')} /></div>
                    <div className={cx('container__content-order')}>
                        <div className={cx('grid')}>
                            <div className={cx('container__content-order-list', 'row')}>
                                <div className={cx('container__content-order-list-items', 'lg-col-4','c-12' , 'col')}>
                                    <img src={images.order1} alt='' className={cx('logo-format')} />
                                    <h3>ORDER YOUR FOOD</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eius-</p>
                                </div>

                                <div className={cx('container__content-order-list-items', 'lg-col-4', 'c-12' , 'col')}>
                                    <img src={images.order2} alt='' className={cx('logo-format')} />
                                    <h3>DELIVERY OR PICK UP</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eius-</p>

                                </div>

                                <div className={cx('container__content-order-list-items', 'lg-col-4', 'c-12' , 'col')}>
                                    <img src={images.order3} alt='' className={cx('logo-format')} />
                                    <h3>DELICIOUS RECEIPE</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eius-</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div><img src={images.orderBottom} alt='' className={cx('full-width')} /></div>
                </div>

                <div className={cx('container__content')}>
                    <div className={cx('container__content-speciality')}>
                        <div className={cx('grid')}>
                            <div className={cx('container__content-header', 'mr-30')}>
                                <h3>Fresh From Pizzon</h3>
                                <h2 className={cx('font30')}>Our Speciality</h2>
                            </div>

                            <div className={cx('container__content-speciality-list', 'mr-30', 'row')}>
                                <div className={cx('container__content-speciality-list-items', 'lg-col-4', 'col', 'c-12')}>
                                    <a href=''><img src={images.speciality1} alt='' className={cx('spec-img', 'rounded')} /></a>
                                    <p><a href='' className={cx('font12')}>Mexican Green Wave </a></p>
                                </div>

                                <div className={cx('container__content-speciality-list-items', 'lg-col-4', 'col', 'c-12')}>
                                    <a href=''><img src={images.speciality2} alt='' className={cx('spec-img', 'rounded')} /></a>
                                    <p><a href='' className={cx('font12')}>Double Cheese Pizza</a></p>
                                </div>

                                <div className={cx('container__content-speciality-list-items','lg-col-4', 'col', 'c-12')}>
                                    <a href=''><img src={images.speciality3} alt='' className={cx('spec-img', 'rounded')} /></a>
                                    <p><a href='' className={cx('font12')}>Margerita Pizza</a></p>
                                </div>
                            </div>

                            <div className={cx('container__content-speciality-footer', 'mr-30')}>
                                <button className={cx('l-btn', 'orange-l-btn')}>View More</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={cx('container__content')}>
                    <div className={cx('container__content-menu')}>
                        <div><img src={images.menuTopBg} alt='' className={cx('full-width')} /></div>
                        <div className={cx('grid')}>
                            <div className={cx('container__content-header', 'mr-30')}>
                                <h3>Fresh From Menu</h3>
                                <h2 className={cx('white-text', 'font30')}>Our Speciality</h2>
                            </div>

                            <div className={cx('container__content-menu-body', 'mr-30')}>
                                <div className={cx('container__content-menu-body-header')}>
                                    <div className={cx('container__content-menu-body-header-list')}>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href='' className='m-btn'>All</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Drinks</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Salads</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Pasta</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Burgers</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Deserts</a>
                                        </div>
                                        <div className={cx('container__content-menu-body-header-list-items')}>
                                            <a href=''>Pizzas</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('container__content-menu-list', 'row')}>
                                    <div className={cx('container__content-menu-list-items','lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu1} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items','lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu2} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items', 'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu3} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items',  'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu6} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items',  'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu7} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items',  'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu8}alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items',  'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu2} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>

                                    <div className={cx('container__content-menu-list-items',  'lg-col-3', 'col', 'c-12')}>
                                        <a href=''><img src={images.menu1} alt=''
                                            className={cx('full-width', 'photo-format')} /></a>
                                        <h3><a href='' className={cx('font16')}>Margherita Pizza</a></h3>
                                        <p><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</a></p>
                                        <p>$20.50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('menu-bottom')}><img src={images.menuBottomBg} alt='' className={cx('full-width')} /></div>
                    </div>
                </div>

                <div className={cx('container__content')}>
                    <div className={cx('container__content-booking')}>
                        <div className={cx('grid', 'book-online')}>
                            <div className={cx('container__content-booking-body','row')}>
                                <div
                                    className={cx('container__content-booking-body-label', 'container__content-header', 'mr-30','lg-col-4', 'col', 'c-12')}>
                                    <h3>Fresh From Pizzon</h3>
                                    <h2 className={cx('font30')}>BOOK ONLINE</h2>
                                    <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero
                                        curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur
                                        adipiscing elit quisque eget maximus velit, non eleifend libero curabitur</p>
                                    <p><a href='' className={cx('phone-button')}>
                                        <i className={cx('fa-solid', 'fa-phone')}></i>
                                        +91 123 456 789 0</a></p>
                                </div>

                                <div
                                    className={cx('container__content-booking-body-form', 'container__content-header', 'mr-30',  'lg-col-6', 'col', 'c-12')}>
                                    <h3>Book A Table</h3>

                                    <div>
                                        <input type='text' placeholder='Name' className={cx('full-width')} />
                                        <input type='email' placeholder='Email' className={cx('full-width')} />
                                        <input type='text' placeholder='How many persons?' className={cx('full-width')} />
                                        <input type='text' placeholder='Date' className={cx('full-width')} />
                                    </div>

                                    <button className={cx('l-btn', 'black-l-btn')}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('container__content')}>
                    <div className={cx('container__content-chef')}>
                        <div className={cx('chef-top-bg')}><img src={images.chefTopBg} alt='' className={cx('full-width')} /></div>

                        <div className={cx('grid', 'container__content-chef-body')}>
                            <div className={cx('container__content-header')}>
                                <h3>Fresh From Pizzon</h3>
                                <h2 className={cx('white-text','font30')}>OUR BEST CHEF</h2>
                            </div>

                            <div className={cx('container__content-cheft-list', 'text-center', 'row')}>
                                <div className={cx('container__content-chef-list-items',  'lg-col-3', 'col', 'c-12')}>
                                    <div className={cx('container__content-chef-list-items-content')}>
                                        <img src={images.chef1} alt='' className={cx('full-width')} />
                                        <div className={cx('container__content-chef-list-items-content-script')}>
                                            <h3>John Doe</h3>
                                            <p>Sous Chef</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('container__content-chef-list-items',  'lg-col-3', 'col', 'c-12')}>
                                    <div className={cx('container__content-chef-list-items-content')}>
                                        <img src={images.chef2} alt='' className={cx('full-width')} />
                                        <div className={cx('container__content-chef-list-items-content-script')}>
                                            <h3>John Doe</h3>
                                            <p>Sous Chef</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('container__content-chef-list-items',  'lg-col-3', 'col', 'c-12')}>
                                    <div className={cx('container__content-chef-list-items-content')}>
                                        <img src={images.chef3} alt='' className={cx('full-width')} />
                                        <div className={cx('container__content-chef-list-items-content-script')}>
                                            <h3>John Doe</h3>
                                            <p>Sous Chef</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('container__content-chef-list-items',  'lg-col-3', 'col', 'c-12')}>
                                    <div className={cx('container__content-chef-list-items-content')}>
                                        <img src={images.chef4} alt='' className={cx('full-width')} />
                                        <div className={cx('container__content-chef-list-items-content-script')}>
                                            <h3>John Doe</h3>
                                            <p>Sous Chef</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('chef-bottom-bg')}><img src={images.chefBottomBg} alt='' className={cx('full-width')} /></div>
                    </div>
                </div>

                <div className={cx('container__content')}>
                    <div className={cx('container__content-news')}>

                        <div className={cx('grid')}>
                            <div className={cx('container__content-header')}>
                                <h3>Recent Events</h3>
                                <h2 className={cx('font30')}>Latest News</h2>
                            </div>

                            <div className={cx('container__content-news-list', 'text-center','row')}>
                                <div className={cx('container__content-news-list-items',  'lg-col-4', 'col', 'c-12')}>
                                    <div className={cx('container__content-news-list-items-content')}>
                                        <div className={cx('container__content-news-list-items-content-photo')}>
                                            <img src={images.news1} alt='' className={cx('full-width')} />
                                        </div>
                                        <ul className={cx('container__content-news-list-items-content')}>
                                            <li>
                                                <span>by - john doe</span>
                                                <span> 0 comments</span>
                                            </li>
                                            <li>
                                                <h3><a href=''>Possession so comparison inquietude he conviction</a></h3>
                                            </li>
                                            <li>
                                                <p><a href=''>Read More</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx('container__content-news-list-items',  'lg-col-4', 'col', 'c-12')}>
                                    <div className={cx('container__content-news-list-items-content')}>
                                        <div className={cx('container__content-news-list-items-content-photo')}>
                                            <img src={images.news2} alt='' className={cx('full-width')} />
                                        </div>
                                        <ul className={cx('container__content-news-list-items-content')}>
                                            <li>
                                                <span>by - john doe</span>
                                                <span> 0 comments</span>
                                            </li>
                                            <li>
                                                <h3><a href=''>Possession so comparison inquietude he conviction</a></h3>
                                            </li>
                                            <li>
                                                <p><a href=''>Read More</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx('container__content-news-list-items',  'lg-col-4', 'col', 'c-12')}>
                                    <div className={cx('container__content-news-list-items-content')}>
                                        <div className={cx('container__content-news-list-items-content-photo')}>
                                            <img src={images.news3} alt='' className={cx('full-width')} />
                                        </div>
                                        <ul className={cx('container__content-news-list-items-content')}>
                                            <li>
                                                <span>by - john doe</span>
                                                <span> 0 comments</span>
                                            </li>
                                            <li>
                                                <h3><a href=''>Possession so comparison inquietude he conviction</a></h3>
                                            </li>
                                            <li>
                                                <p><a href=''>Read More</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={cx('container__content')}>
                    <div className={cx('container__content-reviews')}>
                        <div className={cx('customer-top-bg')}>
                            <img src={images.customerTopBg} className={cx('full-width')} />
                        </div>

                        <div className={cx('grid')}>
                            <div className={cx('container__content-header')}>
                                <h3>What Say Our Clients</h3>
                                <h2 className={cx('white-text', 'font30')}>CUSTOMER REVIEWS</h2>
                            </div>

                            <div className={cx('container__content-reviews-body', 'row')}>
                                <div className={cx('container__content-reviews-photo', 'lg-col-2','col','c-12')}>
                                    <img src={images.customer1} alt='' className={cx('full-width',  'customer-photo')} />
                                    <p>John Doe</p>
                                </div>
                                <div className={cx( 'container__content-reviews-text', 'lg-col-10','col','c-12')}>
                                    <i>The one day when the lady met this fellow and they knew it was much more than a hunch the
                                        first mate and his Skipper too will do their comforta The one day when the lady met this
                                        fellow and they knew it was much more than a hunch the first mate and his Skipper too
                                        will do their comforta The one day when the lady met this fellow and they knew it was
                                        much </i>
                                    <p>John Doe - <span>designer</span></p>
                                </div>
                            </div>
                        </div>


                        <div className={cx('customer-bottom-bg')}>
                            <img src={images.customerBottomBg} alt='' className={cx('full-width')} />
                        </div>


                    </div>

                </div>


                <div className={cx('container__content')}>
                    <div className={cx('container__content-about')}>
                        <div className={cx('grid')}>
                            <div className={cx('container__content-about-body','row')}>
                                <div className={cx('container__content-about-body-label', 'container__content-header', 'mr-30',  'lg-col-5','col','c-12')}>
                                    <h3>Fresh From Pizzon</h3>
                                    <h2 className={cx('font30')}>BOOK ONLINE</h2>
                                    <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero
                                        curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur
                                        adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet,
                                        consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                                        dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing
                                        elit quisque eget maximus velit, non eleifend libero curabitur</p>
                                    <button className={cx('l-btn','orange-l-btn')}>View More</button>
                                </div>

                                <div className={cx('container__content-pizza-photo', 'mr-30',  'lg-col-6','col','c-12')}>
                                    <img src={images.aboutPizzon} alt='' className={cx('about-pizzon-img')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Home;
