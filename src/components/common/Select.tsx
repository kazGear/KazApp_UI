import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../../lib/Constants";

const Sselect = styled.select`
    width: 150px;
    margin: 0 10px 0 10px;
    height: ${SIZE.INPUT_HEIGHT};
    box-shadow: darkgreen 1px 1px;
    color: ${COLORS.MAIN_FONT_COLOR};
`;

interface ArgProps {
    children: React.ReactNode[] | React.ReactNode;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({children, onChange}: ArgProps) => {
    return (
        <Sselect onChange={onChange}>
            {children}
        </Sselect>
    );
}

export default Select;