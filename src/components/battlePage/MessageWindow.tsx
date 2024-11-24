import styled from "styled-components";
import { COLORS } from "../../lib/Constants";
import React from "react";
import { MetaDataDTO } from "../../types/MonsterBattle";

const SdivMessageWindowFrame = styled.div`
    height: 180px;
    border: inset 4px ${COLORS.BORDER_COLOR};
    overflow-y: scroll;
`;
const SdivMessageWindow = styled.div`
    margin: 10px;
`;

interface ArgProps { shortLog: MetaDataDTO[]; }

const MessageWindow = ({shortLog}: ArgProps) => {
    return (
        <>
            <SdivMessageWindowFrame id="messageWindow">
                <SdivMessageWindow>
                    {
                        shortLog.map((log, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {log.Message}<br />
                                </React.Fragment>
                            )
                        })
                    }
                </SdivMessageWindow>
            </SdivMessageWindowFrame>
        </>
    );
}

export default MessageWindow;