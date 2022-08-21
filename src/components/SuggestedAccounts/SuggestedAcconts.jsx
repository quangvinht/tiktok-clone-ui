import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAcconts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from '~/components/SuggestedAccounts/AccountItem';

const cx = classNames.bind(styles);

export default function SuggestedAcconts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('lable')}>{lable}</h3>
            <AccountItem />
            <AccountItem />

            <AccountItem />
            <p className={cx('see-all')}>See all</p>
        </div>
    );
}
SuggestedAcconts.propTypes = {
    lable: PropTypes.string.isRequired,
};
