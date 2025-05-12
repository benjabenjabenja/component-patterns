import React from 'react';

interface ErrorLabelProps {
    children: React.ReactNode;
    className?: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ children, className }) => (<span className={`${className} error-message`}>{children}</span>);

export default ErrorLabel;