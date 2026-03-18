interface SplashBadgeProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  rotation?: string;
}

const SplashBadge = ({ children, className = "", size = "md", rotation = "" }: SplashBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs md:text-sm px-3 py-2 min-w-[80px] min-h-[80px]",
    md: "text-sm md:text-lg px-4 py-3 min-w-[100px] min-h-[100px]",
    lg: "text-lg md:text-2xl px-6 py-4 min-w-[130px] min-h-[130px]",
  };

  return (
    <div className={`splash-badge ${sizeClasses[size]} ${rotation} ${className}`}>
      <span className="text-center leading-tight">{children}</span>
    </div>
  );
};

export default SplashBadge;
