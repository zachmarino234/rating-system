import CenterDiamond from "./svg/CenterDiamond";
import DraggableSideIndicator from "./DraggableSideIndicator";
import DashedLeftLineSvg from "./svg/sentiment/DashedLeftLineSvg";
import DownLeftArrowSvg from "./svg/sentiment/DownLeftArrowSvg";
import UpLeftArrowSvg from "./svg/sentiment/UpLeftArrowSvg";
import DashedRightLineSvg from "./svg/sentiment/DashedRightLineSvg";
import DownRightArrowSvg from "./svg/sentiment/DownRightArrowSvg";
import UpRightArrowSvg from "./svg/sentiment/UpRightArrowSvg";

interface GlyphProps {
    children: React.ReactNode;
}

const Glyph = ({children}: GlyphProps) => {
    return (
        <div className="w-full flex justify-center items-center">
            <DraggableSideIndicator
                UpIcon={UpLeftArrowSvg}
                NeutralIcon={DashedLeftLineSvg}
                DownIcon={DownLeftArrowSvg}
            />
            <CenterDiamond>
                {children}
            </CenterDiamond>
            <DraggableSideIndicator
                UpIcon={UpRightArrowSvg}
                NeutralIcon={DashedRightLineSvg}
                DownIcon={DownRightArrowSvg}
            />
        </div>
    );
}

export default Glyph;