import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { COLORS, KEYS, URL } from "../../lib/Constants";
import { useEffect, useLayoutEffect, useState } from "react";
import { isEmpty } from "../../lib/CommonLogic";
import { useServerWithQuery } from "../../hooks/useHooksOfCommon";

const Sheader = styled.header`
    height: 50px;
    box-shadow: 0px 0px 10px 0px #000000;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between
`;
const SdivButtonFrame = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: 20px;
`;
const Sh1 = styled.h1`
    margin: 20px;
    color: ${COLORS.ACCENT_FONT_COLOR2};
`;

const Sspan = styled.span`
    transform: translateY(3px);
    margin-right: 10px;
`;

interface ArgProps { title: string; }

const AppHeader = ({title}: ArgProps) => {
    const [loginId, setLoginId] = useState<string | null>("");
    const [dispName, setDispName] = useState<string | null>("");

    const navigate = useNavigate();
    const currentUrl: string = window.location.href;
    const isRootPage: boolean = currentUrl.endsWith("/"); // 最初のページ
    const isRootPage2: boolean = currentUrl.endsWith("/IndexPage");

    // ユーザー名取得のため
    useLayoutEffect(() => {
        const id: string | null = localStorage.getItem(KEYS.USER_ID);
        setLoginId(id);
    }, [loginId]);

    // 表示名取得
    const select = useServerWithQuery();
    useEffect(() => {
        const selectName = async () => {
            const name: string | null = await select(`${URL.SELECT_LOGIN_USER}?loginId=${loginId}`);
            setDispName(name);
        }
        selectName();
    }, [loginId, dispName]);

    return (
        <Sheader>
            <Sh1>{title}</Sh1>
            <SdivButtonFrame style={{
                display: isRootPage || isRootPage2 ? "none" : ""
                }}>
                <Button text="モンスター闘技場"
                        width={125}
                        onClick={() => navigate("/BattlePage")}/>
                <Button text="闘技場戦績"
                        width={90}
                        onClick={() => navigate("/BattleResultPage")}/>
                <Button text="ユーザーページ"
                        width={120}
                        onClick={() => navigate("/UserPage")}/>
                <Button text="工事中"
                        width={60}
                        onClick={() => {}}/>
            </SdivButtonFrame>
            <div style={{display: "flex"}}>
                {
                    !isEmpty(dispName) ? <Sspan>ようこそ{dispName}さん</Sspan> :""
                }
                <Button text="メニューへ"
                        onClick={() => navigate("/")}
                        styleObj={{
                            marginRight: "20px",
                            position: "relative",
                            zIndex: 5000
                        }}
                />
            </div>
        </Sheader>
    );
};

export default AppHeader;
