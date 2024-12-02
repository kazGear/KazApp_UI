import styled from "styled-components";
import { UserDTO } from "../../types/UserManage";
import Button from "../common/Button";
import Strong from "../common/Strong";

const SdivCashFrame = styled.div`
    height: 100px;
`;

interface ArgProps {
    user: UserDTO | null;
}

const CashBlock = ({user}: ArgProps) => {
    return (
        <SdivCashFrame>
            <p>
                <Strong>所持金</Strong> : {user != null ? user!.Cash.toLocaleString() : ""} Gil
            </p>
            <p>
                <Strong>自己破産</Strong>（所持金初期化）<Button text="自己破産 実行" onClick={() => {}} />
            </p>
            <p>
                <Strong>自己破産回数</Strong> : {user != null ? user!.BankruptcyCnt : ""} 回
            </p>
        </SdivCashFrame>
    );

}

export default CashBlock;