interface ButtonProps {
    label: string | React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any;
}

export type { ButtonProps };
