const variants = {
    default: "",
    primary: "",
    secondary: "",
    danger: "",
};

export const Button = ({ children, variant, className, ...props }) => {
    return (
        <button
            className={`${className} ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}