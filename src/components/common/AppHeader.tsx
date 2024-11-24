import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { COLORS, KEYS } from "../../lib/Constants";
import { useEffect, useState } from "react";
import { isEmpty } from "../../lib/CommonLogic";

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
    const [dispName, setDispName] = useState<string | null>("");

    const navigate = useNavigate();
    const currentUrl: string = window.location.href;
    const isRootPage: boolean = currentUrl.endsWith("/");

    // 表示名取得
    useEffect(() => {
        const loginName: string | null = localStorage.getItem(KEYS.USER_NAME);
        setDispName(loginName);
    }, [dispName]);

    return (
        <Sheader>
            <Sh1>{title}</Sh1>
            <SdivButtonFrame style={{display: isRootPage ? "none" : ""}}>
                <Button text="モンスター闘技場"
                        width={125}
                        onClick={() => navigate("/battlePage")}/>
                <Button text="闘技場戦績"
                        width={90}
                        onClick={() => navigate("/battleResultPage")}/>
                <Button text="工事中"
                        width={60}
                        onClick={() => {}}/>
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
