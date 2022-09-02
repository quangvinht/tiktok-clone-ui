import { useState, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './RecommendVideos.module.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as listVideosService from '~/services/listVideosService';
import VideoRecommend from './VideoRecommend';
import Button from '../Button';

const cx = classNames.bind(styles);

function RecommendVideos() {
    const [videos, getVideos] = useState([]);

    useEffect(() => {
        try {
            const getApiListVideos = async () => {
                const response = await listVideosService.getListVideos({ type: 'for-you', page: 1 });

                getVideos(response);
            };

            getApiListVideos();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className={cx('recommend-videos')}>
            {videos.map((video) => {
                return <VideoRecommend video={video} key={video.id} />;
            })}
        </div>
    );
}

RecommendVideos.propTypes = {};

export default RecommendVideos;
