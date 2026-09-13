export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignStyles[align] || alignStyles.center} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-semibold tracking-wider text-accent-main uppercase mb-2">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
