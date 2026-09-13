export const Card = ({
  children,
  className = "",
  variant = "default",
  interactive = false,
  as = "div",
  ...props
}) => {
  const Component = as;
  const baseStyles = "rounded-xl border transition-[background-color,border-color,box-shadow] duration-200";

  const variantStyles = {
    default: "bg-bg-surface border-border-main text-text-main shadow-xs",
    elevated: "bg-bg-elevated border-border-main text-text-main shadow-sm",
    outline: "bg-transparent border-border-main text-text-main",
  };

  const interactiveStyles = interactive
    ? "hover:border-accent-main/40 hover:shadow-md cursor-pointer"
    : "";

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
