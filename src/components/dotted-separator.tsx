import { cn } from "@/lib/utils";

interface DottedSepratorProps {
    className?: string;
    color?: string;
    height?: string;
    dotsize?: string;
    gapsize?: string;
    direction?: "horizontal" | "vertical";
}

export const DottedSeprator: React.FC<DottedSepratorProps> = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotsize = "2px",
    gapsize = "6px",
    direction = "horizontal",
}) => {
    const isHorizontal = direction === "horizontal";

    return (
    <div className={cn(
      isHorizontal ? 
      "w-full flex flex-row items-center" :
      "h-full flex flex-col items-center",
      className
    )}>
      <div 
      className={isHorizontal ? "flex-grow" : "flex-grow-0"}
      style={{
        background: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
        width: isHorizontal ? "100%" : height,
        height: isHorizontal ? height : "100%",
        backgroundSize: isHorizontal ? `${parseInt(dotsize) + parseInt(gapsize)}px ${height}` :
        `${height} ${parseInt(dotsize) + parseInt(gapsize)}px`,
        backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
        backgroundPosition: "center"
      }}/>
    </div>
    );
};