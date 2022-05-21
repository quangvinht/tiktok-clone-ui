import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8b3c154550ccc01257f9dcae6b4bdd0e.jpeg?x-expires=1653300000&x-signature=nQ2osQVhbPPBO9pttjRP1RhS8XQ%3D"
                alt="Ghet"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
