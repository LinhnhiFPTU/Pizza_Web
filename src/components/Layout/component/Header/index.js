import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header class={cx('header')}>
            <div class={cx('header__nav grid')}>
                <div class={cx('header__nav-list')}>
                    <a href="/">
                        <img src="./assets/img/header-logo.png" alt="" />
                    </a>
                </div>

                <div class={cx('header__nav-list')}>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')} d>
                            Home
                        </a>
                    </div>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            Menu
                        </a>
                    </div>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            Blog
                        </a>
                    </div>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            Reservaion
                        </a>
                    </div>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            Pages
                        </a>
                    </div>

                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            <i class="fa-solid fa-phone icon-format header__nav-link-icon"></i>
                            <span class={cx('header__nav-link-items')}>
                                +91 123 456 789
                            </span>
                        </a>
                    </div>
                    <div class={cx('header__nav-list-items')}>
                        <a href="/" class={cx('header__nav-link-items')}>
                            <i class="fa-solid fa-bag-shopping icon-format header__nav-link-icon"></i>
                            <span class={cx('header__nav-link-items')}>
                                0 items - $0.00
                            </span>
                        </a>
                    </div>

                    <div class={cx('header__nav-list-items')}>
                        <a
                            href="/"
                            class="header__nav-link-items header__nav-order"
                        >
                            Order Online
                        </a>
                    </div>
                </div>
            </div>

            <div class="header__show">
                <div class="grid">
                    <div class="grid__row header-show-product">
                        <div class="header__show-product-text grid__col lg-col-6">
                            <div class="">
                                <p>
                                    Quality F<span>oo</span>ds
                                </p>
                            </div>

                            <div class="">
                                <p class="header__show-text-description">
                                    Healthy food for healthy body
                                </p>
                            </div>
                        </div>

                        <div class="header-show-product-img grid__col lg-col-6"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
