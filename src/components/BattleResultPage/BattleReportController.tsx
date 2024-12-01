import styled from "styled-components";
import { COLORS, KEYS, URL } from "../../lib/Constants";
import MonsterTypesList from "./MonsterTypesList";
import Select from "../common/Select";
import Button from "../common/Button";
import { useCallback, useState } from "react";
import { MonsterReportDTO } from "../../types/BattleReport";
import { useServerWithQuery } from "../../hooks/useHooksOfCommon";

const Sh1Title = styled.h1`
    font-size: 16px;
    color: ${COLORS.CAPTION_FONT_COLOR};
    margin-top: 5px;
`;

interface ArgProps {
    setMonsterReport: React.Dispatch<React.SetStateAction<MonsterReportDTO[]>>;
    sortType: string;
}

const BattleReportController = ({setMonsterReport, sortType}: ArgProps) => {
    const [monsterTypeId, setMonsterTypeId] = useState("0");
    const [isAscOrder, setIsAscOrder] = useState(true);

    const fetchServerUseQuery = useServerWithQuery();

    /**
     * ソート制御
     */
    const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === KEYS.ORDER_BY_ASC) {
            setIsAscOrder(true);
        } else {
            setIsAscOrder(false);
        }
    }
    /**
     * モンスタ毎のレポートを取得
     */
    const fetchMonsterReportHandler = useCallback(async () => {
        const monsterReport: MonsterReportDTO[]
            = await fetchServerUseQuery(
                URL.MONSTER_REPORTS + `?monsterTypeId=${monsterTypeId}
                                       &sortType=${sortType}
                                       &isAscOrder=${isAscOrder}`
            );
        setMonsterReport(monsterReport);
    }, [monsterTypeId, sortType, isAscOrder]);

    return (
        <div>
            <Sh1Title>モンスター戦績</Sh1Title>
            <MonsterTypesList setMonsterTypeId={setMonsterTypeId} />
            <Select title="ソート順" onChange={sortHandler}>
                <option value={KEYS.ORDER_BY_ASC}>昇順</option>
                <option value={KEYS.ORDER_BY_DESC}>降順</option>
            </Select>
            <Button
                text="検索"
                onClick={fetchMonsterReportHandler}
                styleObj={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                }}
            />
        </div>
    );
};

export default BattleReportController;