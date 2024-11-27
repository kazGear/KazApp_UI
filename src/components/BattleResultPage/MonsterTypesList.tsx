import { ChangeEvent, useLayoutEffect, useState } from "react";
import { useServerWithQuery } from "../../hooks/useHooksOfCommon";
import Select from "../common/Select";
import { URL } from "../../lib/Constants";
import { MonsterTypeDTO } from "../../types/BattleReport";

interface ArgProps {
    setMonsterTypeId: React.Dispatch<React.SetStateAction<string>>;
}

const MonsterTypesList = ({setMonsterTypeId}: ArgProps) => {
    const [monsterTypes, setMonsterTypes] = useState<MonsterTypeDTO[]>([]);
    const fetchMonsterTypes = useServerWithQuery();

    useLayoutEffect(() => {
        const fetchTypes = async () => {
            const types: MonsterTypeDTO[] = await fetchMonsterTypes(URL.INIT_BATTLE_REPORT);
            setMonsterTypes(types);
        }
        fetchTypes();
    }, []);

    const changeMonsterTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonsterTypeId(e.target.value);
    }

    return (
        <>
            <Select title="モンスター種" onChange={changeMonsterTypeHandler}>
                <option value="0">指定なし</option>
                {
                    monsterTypes.map((monster, index) => {
                        return (
                            <option value={monster.MonsterTypeId} key={index}>
                                {monster.MonsterTypeName}
                            </option>
                    )})
                }
            </Select>
        </>
    );
}

export default MonsterTypesList;