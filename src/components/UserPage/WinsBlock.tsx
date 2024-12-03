import styled from "styled-components";
import { UserDTO } from "../../types/UserManage";
import Strong from "../common/Strong";

const SdivWinFrame = styled.div`
    height: 50%;
    margin: 25px;
`;

interface ArgProps {
    user: UserDTO | null;
}

const WinsBlock = ({user}: ArgProps) => {
    return (
        <SdivWinFrame>
            <p><Strong>的中数</Strong> : {user != null ? user!.Wins : ""} 回</p>
            <p><Strong>配当金</Strong> : {user != null ? user!.WinsGetCash : ""} Gil</p>
        </SdivWinFrame>
    );
}

export default WinsBlock;