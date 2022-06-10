import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image/Image';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />

            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>

                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
// eslint-disable-next-line react/no-typos
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
