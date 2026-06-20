import logo from "@/assets/mellowmoon-logo.png.asset.json";

export function Logo({
  className = "",
  showText = true,
  variant = "dark",
}: {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo.url}
        alt="MellowMoon SoftTech logo"
        width={48}
        height={48}
        className="h-11 w-11 object-contain"
        style={{
          mixBlendMode: "screen",
          filter: isLight ? "brightness(1.1) contrast(1.05)" : "none",
        }}
      />
      {showText && (
        <div className="leading-tight">
          <div
            className={`font-display text-lg font-semibold tracking-tight ${
              isLight ? "text-cream" : "text-maroon"
            }`}
          >
            MellowMoon
          </div>
          <div
            className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
              isLight ? "text-cream/70" : "text-muted-foreground"
            }`}
          >
            SoftTech Pvt Ltd
          </div>
        </div>
      )}
    </div>
  );
}
