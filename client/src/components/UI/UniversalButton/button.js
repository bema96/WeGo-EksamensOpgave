const variants = {
    default: "",
    primary: "bg-[var(--teal)] text-xl font-lightbold text-[var(--white)] rounded-full cursor-pointer",
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