import { useState } from "react";

const COLORS = {
    good: "#91C964",
    mediocre: "#C7BB2F",
    bad: "#EE2A28",
    indifferent: "#D5D5D4"
};

const STATES = ["good", "mediocre", "bad", "indifferent"];

interface DiamondProps {
    children: React.ReactNode;
}


const CenterDiamond = ({ children }: DiamondProps) => {
    const [stateIndex, setStateIndex] = useState(0);
    const currentState = STATES[stateIndex];
    const currentColor = COLORS[currentState];

    const handleClick = () => {
        setStateIndex((prev) => (prev + 1) % STATES.length);
    };

    return (
        <div className="flex justify-center items-center select-none cursor-pointer -mx-16" onClick={handleClick}>
            <svg
                width="168"
                height="135"
                viewBox="0 0 159 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M156.498 59.6857L79.498 117.506L2.49805 59.6857L79.498 1.87573L156.498 59.6857Z"
                    fill={currentColor}
                    stroke="white"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                />
            </svg>
            <div className="absolute">
                {children}
            </div>
        </div>
    );
};

export default CenterDiamond;
