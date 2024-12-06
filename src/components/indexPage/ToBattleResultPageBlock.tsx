import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../lib/Constants";
import MenuTitle from "../common/MenuTitle";

const Slink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.MAIN_FONT_COLOR};
`;
const SpDescription = styled.p`
    margin: 0 0 0 40px;
`;

interface ArgProps {
    validToken: boolean;
    classOfAnime: string;
    titleStyle: {}
}

const ToBattlePageBlock = ({validToken, classOfAnime, titleStyle}: ArgProps) => {
    return (
        <div>
            <Slink to={validToken ? "/BattlePage" : "/"} >
                <MenuTitle title={"モンスタ－闘技場"}
                        className={validToken ? classOfAnime : ""}
                        styleObj={validToken ? {} : titleStyle}/>
            </Slink>
            <SpDescription>
                某RPGカジノ風のモンスター闘技場です。どのモンスターが勝ち残るか当ててみてください。<br/>
                ※バッチ処理でも毎晩強制的に戦わされています。
            </SpDescription>
        </div>
    );
}

export default ToBattlePageBlock;