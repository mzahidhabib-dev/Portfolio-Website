export const StatusIndicator = ({
  status = "active",
  label = "",
  className = "",
  size = "md",
}) => {
  const sizeMap = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  };

  const statusConfig = {
    active: {
      color: "bg-status-active",
      pingColor: "bg-status-active",
      text: "text-status-active",
      defaultLabel: "LIVE_SYSTEM",
    },
    idle: {
      color: "bg-status-neutral",
      pingColor: "",
      text: "text-status-neutral",
      defaultLabel: "IDLE",
    },
    warning: {
      color: "bg-status-warning",
      pingColor: "bg-status-warning",
      text: "text-status-warning",
      defaultLabel: "DEGRADED",
    },
    offline: {
      color: "bg-status-error",
      pingColor: "",
      text: "text-status-error",
      defaultLabel: "OFFLINE",
    },
  };

  const config = statusConfig[status] || statusConfig.active;
  const dotSize = sizeMap[size] || sizeMap.md;
  const displayLabel = label || config.defaultLabel;

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs ${className}`}>
      <span className="relative flex items-center justify-center">
        {config.pingColor && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping motion-reduce:animate-none ${config.pingColor}`}
          />
        )}
        <span className={`relative inline-flex rounded-full ${dotSize} ${config.color}`} />
      </span>
      {displayLabel && <span className={`font-medium uppercase tracking-wider ${config.text}`}>{displayLabel}</span>}
    </div>
  );
};

export default StatusIndicator;
