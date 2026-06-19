import logo from "@/assets/mellowmoon-logo.png.asset.json";

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo.url}
        alt="MellowMoon SoftTech logo"
        width={48}
        height={48}
        className="h-10 w-10 object-contain"
      />
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-lg font-semibold tracking-tight text-maroon">
            MellowMoon
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            SoftTech Pvt Ltd
          </div>
        </div>
      )}
    </div>
  );
}
