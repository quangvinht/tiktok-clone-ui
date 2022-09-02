import { faCheckCircle, faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div>
                    <Button small primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />}
                </p>
                <p className={cx('name')}>
                    {data.first_name} {data.last_name}
                </p>
                <p className={cx('analyst')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('lable')}>Follower </span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('lable')}> Like </span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
