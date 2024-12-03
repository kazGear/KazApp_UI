import styled from "styled-components";
import { COLORS } from "../../lib/Constants";

const Sdiv = styled.div`
    border: solid 1px ${COLORS.BORDER_COLOR};
    box-shadow: 2px 2px ${COLORS.SHADOW_COLOR};
    overflow: overlay;
`;

interface ArgProps {
    children: React.ReactNode;
    styleObj?: React.CSSProperties;
}

const OutSideFrame = ({children, styleObj}: ArgProps) => {
    return (
        <Sdiv style={styleObj}>
            {children}
        </Sdiv>
    );
}

export default OutSideFrame;