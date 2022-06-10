import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Image = forwardRef(
    (
        {
            //Nếu chuyền fallback từ ngoài vào thì lấy fallback từ ngoài , ko thì mặc định sẽ lấy thằng images.noImage
            fallback: customFallback = images.noImage,
            src,
            className,
            alt,
            ...props
        },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');
        const handleError = () => {
            setFallBack(customFallback);
        };
        return (
            <img
                className={cx('img-wrapper', className)}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                onError={handleError}
                {...props}
            />
        );
    },
);

Image.propTypes = {
    fallback: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
