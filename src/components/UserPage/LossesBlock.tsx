import styled from "styled-components";
import { UserDTO } from "../../types/UserManage";
import Strong from "../common/Strong";

const SdivLose = styled.div`
    height: 100px;
`;

interface ArgProps {
    user: UserDTO | null;
}

const LossesBlock = ({user}: ArgProps) => {
    return (
        <SdivLose>
            <p><Strong>敗北数</Strong> : {user != null ? user!.Losses : ""} 回</p>
            <p><Strong>損失</Strong> : {user != null ? user!.LossesLostCash : ""} Gil</p>
        </SdivLose>
    );
}

export default LossesBlock;