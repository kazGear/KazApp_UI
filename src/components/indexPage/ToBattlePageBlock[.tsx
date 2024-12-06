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

const ToBattleResultPageBlock = ({validToken, classOfAnime, titleStyle}: ArgProps) => {
    return (
        <div>
            <Slink to={validToken ? "/BattleResultPage": "/"}>
            <MenuTitle title={"闘技場戦績"}
                            className={validToken ? classOfAnime : ""}
                            styleObj={validToken ? {} : titleStyle}/>
            </Slink>
            <SpDescription>
                モンスター達がこれまで戦ってきた戦績を残してありますので<br/>
                その戦績レポートを閲覧できます。
            </SpDescription>
        </div>
    );
}

export default ToBattleResultPageBlock;