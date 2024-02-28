import React from 'react';
import classNames from 'classnames/bind';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = ({
    label,
    size = 'medium',
    type = 'button',
    variant = 'primary',
    disabled = false,
    loading = false,
    onClick,
    ...props
}) => {
    return (
        <button
            type={type}
            className={cx('button', `button--${size}`, `button--${variant}`)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {loading ? 'Loading...' : label}
        </button>
    );
};

export { Button };
