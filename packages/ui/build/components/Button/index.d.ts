import React from 'react';
interface Props {
    style?: Record<string, unknown>;
    loadingButton?: boolean;
    color: string;
    onClick?: () => void;
    prefix?: any;
    children: React.ReactNode;
}
export declare const Button: React.FC<Props>;
export default Button;
