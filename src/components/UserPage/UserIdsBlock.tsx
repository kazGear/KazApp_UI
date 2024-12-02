import { UserDTO } from "../../types/UserManage";
import Strong from "../common/Strong";
import styled from "styled-components";

const SdivIDFrame = styled.div`
    height: 100px;
`;

interface ArgProps {
    user: UserDTO | null;
}

const UserIdsBlock = ({user}: ArgProps) => {
    return (
        <SdivIDFrame>
            <p><Strong>ログインID</Strong> : {user != null ? user.LoginId : ""}</p>
            <p><Strong>ロール</Strong> : {user != null ? user.Role : ""}</p>
        </SdivIDFrame>
    );
}

export default UserIdsBlock;