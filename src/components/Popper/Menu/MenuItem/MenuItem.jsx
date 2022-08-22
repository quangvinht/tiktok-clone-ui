import React from 'react';
import styles from '~/components/Popper/Menu/Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import PropTypes from 'prop-types';
import tippy from 'tippy.js';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        sepatate: data.sepatate,
    });

    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
