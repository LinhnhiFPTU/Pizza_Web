import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './Cursor.module.scss';

const cx = classNames.bind(styles);

function Cursor() {
    const cursor = useRef();
    var timeout = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;
            cursor.current.style.top = y + 'px';
            cursor.current.style.left = x + 'px';
            cursor.current.style.display = 'block';
        });
        clearTimeout(timeout);
        document.addEventListener('mouseout', () => {
            cursor.current.style.display = 'none';
        });

        document.addEventListener('click', (e) => {
            let cursorClone = cursor.current.cloneNode(true);
            cursorClone.classList.add(cx('active'));
            console.log(cursorClone);
            document.querySelector('body').appendChild(cursorClone);
            setTimeout(() => {
                cursorClone.remove();
            }, 1000);
        });
    }, []);

    return (
        <div className={cx('cursor')} ref={cursor}>
            <div className={cx('click-animation')}>
                <div
                    className={`${cx('shape')} ${cx('circle')} ${cx('big')}`}
                ></div>
                <div
                    className={`${cx('shape')} ${cx('circle')} ${cx('small')}`}
                ></div>
                <div
                    className={`${cx('shape')} ${cx('triangle')} ${cx(
                        'yellow',
                    )}`}
                ></div>
                <div
                    className={`${cx('shape')} ${cx('triangle')} ${cx(
                        'green',
                    )}`}
                ></div>
                <div className={`${cx('shape')} ${cx('disc')} `}></div>
            </div>
        </div>
    );
}

export default Cursor;
