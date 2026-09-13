export const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-[background-color,border-color,color,box-shadow] duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent-main text-white hover:bg-accent-hover shadow-xs active:bg-accent-hover/90",
    secondary:
      "bg-bg-elevated text-text-main hover:bg-border-main border border-border-main shadow-xs",
    outline:
      "bg-transparent text-text-main border border-border-main hover:border-accent-main/50 hover:bg-accent-subtle",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-main hover:bg-bg-elevated",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={`${combinedClasses} ${disabled ? "pointer-events-none opacity-50" : ""}`}
        aria-disabled={disabled ? "true" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
