import React from 'react';
import styles from '~/components/Popper/Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
