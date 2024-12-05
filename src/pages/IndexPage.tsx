import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuTitle from "../components/common/MenuTitle";
import { useState } from "react";
import { COLORS } from "../lib/Constants";
import { useCheckLogin } from "../hooks/useHooksOfIndex";

const Slink = styled(Link)`
    text-decoration: none;
    color: gray;
`;
const SdivLinkFrame = styled.div`
    width: 80%;
    margin: 80px auto;
`;
const SpDescription = styled.p`
    margin: 0 0 0 40px;
`;

const fontColor = COLORS.MAIN_FONT_COLOR;
const backColor = "darkgray"
const classOfAnime: string = "noneAnimation";
const titleStyle: {} = {
    color: fontColor,
    background: backColor,
}

const IndexPage = () => {
    const [validToken, setValidToken] = useState(false);

    useCheckLogin(setValidToken);

    return (
        <>
            <SdivLinkFrame>
                <Slink to={"/LoginPage"}>
                    <MenuTitle title={"ログイン"}
                               className={classOfAnime}/>
                </Slink>
                <SpDescription>
                    ユーザ登録も可能です。ログインすると、各種機能をご利用いただけます。<br/>
                    数日程は、ログイン状態が維持されます。<br/>
                    <br/>
                    ※登録済ユーザー&emsp; ログインID：guest、パスワード：guest
                </SpDescription>

                <Slink to={validToken ? "/BattlePage" : "/"} >
                    <MenuTitle title={"モンスタ－闘技場"}
                               className={validToken ? classOfAnime : ""}
                               styleObj={validToken ? {} : titleStyle}/>
                </Slink>
                <SpDescription>
                    某RPGカジノ風のモンスター闘技場です。どのモンスターが勝ち残るか当ててみてください。<br/>
                    ※バッチ処理でも毎晩強制的に戦わされています。
                </SpDescription>

                <Slink to={validToken ? "/BattleResultPage": "/"}>
                    <MenuTitle title={"闘技場戦績"}
                               className={validToken ? classOfAnime : ""}
                               styleObj={validToken ? {} : titleStyle}/>
                </Slink>
                <SpDescription>
                    モンスター達がこれまで戦ってきた戦績を残してありますので<br/>
                    その戦績レポートを閲覧できます。
                </SpDescription>

                <Slink to={validToken ? "/UserPage" : ""} >
                    <MenuTitle title={"ユーザーページ"}
                               className={validToken ? classOfAnime : ""}
                               styleObj={validToken ? {} : titleStyle}/>
                </Slink>
                <SpDescription>
                    ユーザーの所持金、所持物などのユーザー情報を確認できます。<br/>
                    所持金が尽きた際には、自己破産も可能です（所持金のリセット）。
                </SpDescription>

                <Slink to={validToken ? "/" : ""} >
                    <MenuTitle title={"ショップ（ 工事中 ）"}
                               className={validToken ? classOfAnime : ""}
                               styleObj={validToken ? {} : titleStyle}/>
                </Slink>
                <SpDescription>
                    制作予定・・・ モンスターセット、スキルセットの開放、アイテム ...
                </SpDescription>

                <Slink to={validToken ? "/" : ""} >
                    <MenuTitle title={"各種設定（ 工事中 ）"}
                               className={validToken ? classOfAnime : ""}
                               styleObj={validToken ? {} : titleStyle}/>
                </Slink>
                <SpDescription>
                    制作予定・・・ モンスターデータ編集、モンスター所持スキル編集、スキル編集、ユーザー編集・・・
                </SpDescription>

                <p>※スマホ非対応、Chrome, edge推奨。</p>
            </SdivLinkFrame>
        </>
    );
};

export default IndexPage;
