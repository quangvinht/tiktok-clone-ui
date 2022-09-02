import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './VideoRecommend.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview/AccountPreview';

import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function VideoRecommend({ video }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={video.user} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('video')}>
            <div className={cx('header')}>
                <div className={cx('avatar-and-description')}>
                    <Tippy offset={[120, 10]} interactive placement="bottom" delay={[500, 0]} render={renderPreview}>
                        <Image src={video.user.avatar} className={cx('avatar')} />
                    </Tippy>
                    <div className={cx('description')}>
                        <div className={cx('des-item')}>
                            <strong>{video.user.nickname}</strong>
                            <span>
                                {video.user.first_name} {video.user.last_name}
                            </span>
                        </div>
                        <div className={cx('des-item')}>
                            <span>{video.description}</span>
                        </div>
                        <div className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                            <span>{video.music ? video.music : 'No music '}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('button')}>
                    {video.user.is_followed ? (
                        <Button outlineBlack small>
                            Following
                        </Button>
                    ) : (
                        <Button outline small>
                            Follow
                        </Button>
                    )}
                </div>
            </div>
            <div className={cx('body')}>
                <video
                    className={cx('video-tiktok')}
                    playsInline={true}
                    x5-playsinline="true"
                    webkit-playsinline="true"
                    tabIndex="2"
                    autoPlay
                    muted
                    mediatype="mp4/video"
                    controls
                    src={video.file_url}
                ></video>
                <div className={cx('icons')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faHeart} className={cx('icon-emoji')} />
                        <span className={cx('icon-number')}>{video.likes_count}</span>
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faCommentDots} className={cx('icon-emoji')} />
                        <span className={cx('icon-number')}>{video.comments_count}</span>
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faShare} className={cx('icon-emoji')} />
                        <span className={cx('icon-number')}>{video.shares_count}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoRecommend.propTypes = {
    video: PropTypes.object.isRequired,
};

export default VideoRecommend;
