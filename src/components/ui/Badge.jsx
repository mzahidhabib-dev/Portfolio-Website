export const Badge = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-md tracking-tight transition-colors duration-150 select-none";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-mono",
    md: "px-2.5 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-bg-elevated text-text-secondary border border-border-main",
    accent: "bg-accent-subtle text-accent-main border border-accent-main/20",
    outline: "bg-transparent text-text-secondary border border-border-main",
    success: "bg-status-active-subtle text-status-active border border-status-active/20",
    warning: "bg-status-warning-subtle text-status-warning border border-status-warning/20",
    error: "bg-status-error-subtle text-status-error border border-status-error/20",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
