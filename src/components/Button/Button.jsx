import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            large = false,
            small = false,
            round = false,
            primary = false,
            outline = false,
            outlineBlack = false,
            text = false,
            disabled = false,
            href,
            onClick,
            children,
            leftIcon,
            rightIcon,
            className,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';
        const props = { onClick, ...passProps };

        //Remove event listeer btn is disabled:
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        const classes = cx('wrapper', {
            primary,
            outline,
            outlineBlack,
            small,
            large,
            text,
            disabled,
            round,
            [className]: className,
        });

        return (
            <Comp ref={ref} className={cx(classes)} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,

    large: PropTypes.bool,
    small: PropTypes.bool,
    round: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outlineBlack: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,

    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
