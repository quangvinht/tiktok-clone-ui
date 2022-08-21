import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './SuggestedAcconts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661230800&x-signature=TdIerPZqvI%2F4KyQGh6mTKQg9pGA%3D"
                alt=""
            />
            <div className={cx('item-infor')}>
                <p className={cx('nickname')}>
                    <strong>Dit me may</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </p>
                <p className={cx('name')}>Ao that day</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
