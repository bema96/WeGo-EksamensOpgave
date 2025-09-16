const variants = {
    default: "",
    primary: "bg-[var(--teal)] w-full text-xl font-lightbold text-[var(--white)] p-4 rounded-full",
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