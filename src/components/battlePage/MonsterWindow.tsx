import styled from "styled-components";
import MonsterImg from "./MonsterImg";
import MonsterInfo from "./MonsterInfo";
import MonsterSkills from "./MonsterSkills";
import { MetaDataDTO, MonsterDTO } from "../../types/MonsterBattle";

const SdivMonsterWindowFrame = styled.div`
    text-align: center;
    margin: 0 20px 0 20px;
    min-width: 180px;
`;

interface ArgProps {
    monster: MonsterDTO;
    shortLog: MetaDataDTO[];
}

const MonsterWindow = ({monster, shortLog}: ArgProps) => {
    return (
        <SdivMonsterWindowFrame>
            <MonsterInfo monster={monster} shortLog={shortLog}/>
            <MonsterImg monster={monster} shortLog={shortLog}/>
            <MonsterSkills monster={monster} />
        </SdivMonsterWindowFrame>
    );
}

export default MonsterWindow;