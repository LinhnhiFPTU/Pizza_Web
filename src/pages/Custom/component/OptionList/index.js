import classNames from 'classnames/bind';
import styles from './OptionList.module.scss';

const cx = classNames.bind(styles);

function OptionList({ optionList, handleClick, type }) {
    return (
        <div className={cx('selection-section')}>
            <h4 className={`${cx('selection-type')}`}>{type}</h4>
            <ul className={cx('selection-list')}>
                {optionList.map((optionItem) => {
                    return (
                        <li
                            key={optionItem.Id}
                            className={cx('selection-item')}
                        >
                            <input
                                data-price={optionItem.price}
                                value={optionItem.Id}
                                onClick={(e) => handleClick(e.target)}
                                className={`${cx('selection-checkbox')}`}
                                type="checkbox"
                            />
                            <div className={cx('selection-item-desc')}>
                                <p className={cx('item-name')}>
                                    {optionItem.name}
                                </p>
                                <p className={cx('item-price')}>
                                    {optionItem.price}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default OptionList;
