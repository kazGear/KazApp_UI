import styled from "styled-components";
import Strong from "../common/Strong";
import monsterImages from "../../lib/MonsterImages";
import { MonsterDTO } from "../../types/MonsterBattle";

const SdivMonsters = styled.div`
    height: 100%;
    margin: 20px;
`;
const Img = styled.img`
    width: 50px;
    height: 50px;
`;
const Stable = styled.table`
    height: 100%;
`;
const Std1 = styled.td`
    width: 180px;
    min-width: 90px;
`;
const Std2 = styled.td`
    width: 80px;
`;
const Std3 = styled.td`
    width: 80px;
    min-width: 60px;
`;
const Std4 = styled.td`
    width: 90px;
    min-width: 70px;
`;
const Std5 = styled.td`
    width: 90px;
    min-width: 80px;
`;

interface ArgProps {
    monsters: MonsterDTO[] | null;
}

const MonstersBlock = ({monsters}: ArgProps) => {
    return (
        <SdivMonsters>
            <Strong>開放モンスター</Strong>
            <Stable>
                <tbody>
                    { monsters != null ?
                        monsters.map((monster, index) => (
                            <tr key={index}>
                                <Std1>{monster.MonsterName}</Std1>
                                <Std2><Img src={monsterImages(monster.MonsterId)} alt="アイコン"/>{}</Std2>
                                <Std3>HP：{monster.Hp}</Std3>
                                <Std4>攻撃力：{monster.Attack}</Std4>
                                <Std5>スピード：{monster.Speed}</Std5>
                            </tr>
                        ))
                        : ""
                    }
                </tbody>
            </Stable>
        </SdivMonsters>
    );
}

export default MonstersBlock;