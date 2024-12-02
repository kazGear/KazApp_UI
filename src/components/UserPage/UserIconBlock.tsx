import styled from "styled-components";
import userImg from "../../images/user/ahiruguchi_man.png";

const SdivImageFrame = styled.div`
    height: 150px;
`;
const Simg = styled.img`
    widht: 150px;
    height: 150px;
    border-radius: 100%;
`;

const UserIconBlock = () => {
    return (
        <SdivImageFrame>
            <Simg src={userImg} alt="イメージ"/>
        </SdivImageFrame>
    );
}

export default UserIconBlock;