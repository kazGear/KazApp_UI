import styled from "styled-components";
import { COLORS, KEYS } from "../lib/Constants";
import Button from "../components/common/Button";
import DialogFrame from "../components/common/DialogFrame";
import { useCallback, useLayoutEffect, useState } from "react";
import Input from "../components/common/Input";
import { useLogin } from "../hooks/useHooksOfUser";
import UserRegistBlock from "../components/loginPage/UserRegistBlock";
import OutSideFrame from "../components/common/OutSideFrame";

const LoginContainer = styled.div`
    text-align: center;
    display: flex;
`;

const frameStyle: React.CSSProperties = {
    width: "50%",
    minWidth: "300px",
    height: "200px",
    margin: "auto",
    alignContent: "center",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

const Sspan = styled.span`
    color: ${COLORS.ALERT_MESSAGE_COLOR};
    font-size: 12px;
`;

const LoginPage = () => {
    const [inputLoginId, setInputLoginId] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [showRegistForm, setShowRegistForm] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    // 初期処理
    useLayoutEffect(() => {
        const token = localStorage.getItem(KEYS.TOKEN);
        if (token) setToken(token);
    }, []);

    // ユーザー登録の内容
    const renderUserRegistContents = () => {
        return <UserRegistBlock setShowRegistForm={setShowRegistForm}/>
    }

    // ログイン処理
    const login = useLogin();
    const loginHandler = useCallback(() => {
        login({inputLoginId, inputPassword, setToken, setShowAlert});
    }, [inputLoginId, inputPassword]);

    return (
        <>
            <LoginContainer>
                <OutSideFrame styleObj={frameStyle} >
                    <form action="" method="post">
                        <Input labelTitle="ログインID"
                            inputType="text"
                            id="loginId"
                            name="loginId"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputLoginId(e.target.value)}
                            />
                        <Input labelTitle="パスワード"
                            inputType="password"
                            id="password"
                            name="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputPassword(e.target.value)}
                            />
                        {
                            showAlert ? <Sspan>ID又はパスワードに誤りがあります。</Sspan> : ""
                        }
                        <br />
                        <div>
                            <Button text="ログイン" onClick={loginHandler}/>
                            <br/>
                            <Button text="ユーザー登録がお済でない方"
                            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setShowRegistForm(!showRegistForm)}
                            styleObj={{width: "220px", marginTop: "15px"}}
                            />
                        </div>
                    </form>
                </OutSideFrame>
            </LoginContainer>

            {/* ユーザ登録フォーム */}
            <DialogFrame renderChild={renderUserRegistContents}
                         showDialog={showRegistForm}/>
         </>
    );
};

export default LoginPage;
