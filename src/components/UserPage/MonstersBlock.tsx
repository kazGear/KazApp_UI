import styled from "styled-components";
import { UserDTO } from "../../types/UserManage";
import Strong from "../common/Strong";
import monsterImages from "../../lib/MonsterImages";
import { MonsterDTO } from "../../types/MonsterBattle";

const SdivMonsters = styled.div`
    height: 100px;
`;

interface ArgProps {
    monsters: MonsterDTO[] | null;
}

const MonstersBlock = ({monsters}: ArgProps) => {
    return (
        <SdivMonsters>
            <Strong>開放モンスター</Strong>
            <table>
                <tbody>
                    { monsters != null ?
                        monsters.map((monster, index) => (
                            <tr key={index}>
                                <td>{monster.MonsterName}</td>
                                <td><img src={monsterImages(monster.MonsterId)} alt="アイコン"/>{}</td>
                                <td>攻撃力：{monster.Attack}</td>
                                <td>スピード：{monster.Speed}</td>
                            </tr>
                        ))
                        : ""
                    }
                </tbody>
            </table>
        </SdivMonsters>
    );
}

export default MonstersBlock;