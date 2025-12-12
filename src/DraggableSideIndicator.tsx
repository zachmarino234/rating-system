import { useState, useRef } from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IndicatorProps {
    UpIcon: IconComponent;
    NeutralIcon: IconComponent;
    DownIcon: IconComponent;
}

export default function DraggableSideIndicator({
    UpIcon,
    NeutralIcon,
    DownIcon,
}: IndicatorProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [state, setState] = useState<"up" | "neutral" | "down">("up");

    const startDrag = () => {
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", stopDrag);
    };

    const stopDrag = () => {
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("mouseup", stopDrag);
    };

    const handleDrag = (e: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const offsetY = e.clientY - rect.top;

        const third = rect.height / 3;

        if (offsetY < third) {
            setState("up");
        } else if (offsetY < third * 2) {
            setState("neutral");
        } else {
            setState("down");
        }
    };

    return (
        <div className="flex justify-center py-12">
            <div
                ref={containerRef}
                onMouseDown={startDrag}
                className="relative w-16 h-64 select-none cursor-pointer flex flex-col"
            >
                {/* Top */}
                <div className="flex-1 flex items-start justify-center pt-10">
                    {state === "up" && <UpIcon className="w-10 h-10" />}
                </div>

                {/* Middle */}
                <div className="flex-1 flex items-center justify-center">
                    {state === "neutral" && <NeutralIcon className="w-10 h-10" />}
                </div>

                {/* Bottom */}
                <div className="flex-1 flex items-end justify-center pb-10">
                    {state === "down" && <DownIcon className="w-10 h-10" />}
                </div>
            </div>
        </div>
    );
}
