export const Metric = ({
  label,
  value,
  change,
  description,
  trend = "neutral",
  size = "md",
  className = "",
}) => {
  const valueSizeMap = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
  };

  const trendColorMap = {
    positive: "text-status-active",
    negative: "text-status-error",
    warning: "text-status-warning",
    neutral: "text-text-muted",
  };

  return (
    <div className={`flex flex-col p-4 rounded-lg bg-bg-surface border border-border-main ${className}`}>
      {label && (
        <span className="font-mono text-xs font-medium tracking-wider text-text-muted uppercase mb-1">
          {label}
        </span>
      )}
      <div className="flex items-baseline gap-2">
        <span className={`font-mono font-bold text-text-main tracking-tight ${valueSizeMap[size] || valueSizeMap.md}`}>
          {value}
        </span>
        {change && (
          <span className={`font-mono text-xs font-semibold ${trendColorMap[trend] || trendColorMap.neutral}`}>
            {change}
          </span>
        )}
      </div>
      {description && (
        <span className="text-xs text-text-secondary mt-1">
          {description}
        </span>
      )}
    </div>
  );
};

export default Metric;
