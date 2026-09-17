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
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ease-out focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.97]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4.5 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent-main text-white hover:bg-accent-hover shadow-md shadow-accent-main/20 hover:shadow-lg hover:shadow-accent-main/30 border border-white/20",
    secondary:
      "bg-bg-elevated/80 backdrop-blur-md text-text-main hover:bg-bg-elevated border border-border-main hover:border-white/20 shadow-xs",
    outline:
      "bg-white/5 backdrop-blur-md text-text-main border border-border-main hover:border-accent-main/50 hover:bg-accent-subtle/50",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-main hover:bg-bg-elevated/70 backdrop-blur-xs",
    glass: "liquid-glass-btn text-text-main",
    glassPrimary: "liquid-glass-primary text-white",
    glassAccent:
      "bg-accent-main/15 dark:bg-accent-main/20 backdrop-blur-xl text-accent-main border border-accent-main/35 hover:bg-accent-main/25 hover:border-accent-main/50 shadow-[0_4px_16px_rgba(59,130,246,0.12),inset_0_1px_1px_rgba(255,255,255,0.3)]",
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
