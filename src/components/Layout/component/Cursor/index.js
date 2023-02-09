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
    }, []);

    return <div className={cx('cursor')} ref={cursor}></div>;
}

export default Cursor;
