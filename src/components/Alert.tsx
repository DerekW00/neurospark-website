import React from 'react';

interface AlertProps {
    variant?: 'default' | 'destructive';
    className?: string;
    children?: React.ReactNode;
}

interface AlertTitleProps {
    className?: string;
    children?: React.ReactNode;
}

interface AlertDescriptionProps {
    className?: string;
    children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> & {
    Title: React.FC<AlertTitleProps>;
    Description: React.FC<AlertDescriptionProps>;
} = ({
    variant = 'default',
    className = '',
    children
}) => {
        const baseClasses = "relative w-full rounded-lg border p-4";
        const variantClasses = variant === 'destructive'
            ? "border-red-500 text-red-600 bg-red-50"
            : "bg-white text-gray-900";

        return (
            <div
                role="alert"
                className={`${baseClasses} ${variantClasses} ${className}`}
            >
                {children}
            </div>
        );
    };

const AlertTitle: React.FC<AlertTitleProps> = ({
    className = '',
    children
}) => {
    return (
        <h5
            className={`mb-1 font-medium leading-none tracking-tight ${className}`}
        >
            {children}
        </h5>
    );
};

const AlertDescription: React.FC<AlertDescriptionProps> = ({
    className = '',
    children
}) => {
    return (
        <div
            className={`text-sm ${className}`}
        >
            {children}
        </div>
    );
};

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert, AlertTitle, AlertDescription }; 