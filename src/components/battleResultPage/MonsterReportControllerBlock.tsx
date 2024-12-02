import { ChangeEvent, useCallback, useState } from "react";
import { COLORS, URL } from "../../lib/Constants";
import Button from "../common/Button";
import FromToDate from "../common/FromTo";
import { BattleReportDTO } from "../../types/BattleReport";
import { useServerWithQuery } from "../../hooks/useHooksOfCommon";
import styled from "styled-components";
import BattleScaleListBlock from "./BattleScaleListBlock";

const Sh1Title = styled.h1`
    font-size: 16px;
    color: ${COLORS.CAPTION_FONT_COLOR};
    margin-top: 5px;
`;

interface ArgProps {
    setBattleReport: React.Dispatch<React.SetStateAction<BattleReportDTO[]>>;
}

const MonsterReportControllerBlock = ({setBattleReport}: ArgProps) => {
    // 送信パラメータ系
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
     // 送信パラメータ系
    const [battleScale, setBattleScale] = useState("0");

    const [disable, setDisable] = useState(false);
    const fetchServerUseQuery = useServerWithQuery();
    /**
     * 戦闘規模の選択
     */
    const changeBattleScaleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setBattleScale(e.target.value);
    }
    /**
     * 戦闘毎のレポートを取得
     */
    const fetchBattleReportHandler = useCallback(async () => {
        const battleReport: BattleReportDTO[]
            = await fetchServerUseQuery(
                  `${URL.BATTLE_REPORTS}?battleScale=${battleScale}
                                        &from=${from}
                                        &to=${to}`
            );
        setBattleReport(battleReport);
    }, [battleScale, from, to]);

    return (
        <div>
            <Sh1Title>戦闘結果</Sh1Title>
            <BattleScaleListBlock
                changeBattleScaleHandler={changeBattleScaleHandler}
            />
            <FromToDate
                labelText="期間"
                setDisable={setDisable}
                from={from}
                setFrom={setFrom}
                to={to}
                setTo={setTo}
            />
            <Button
                text="検索"
                onClick={fetchBattleReportHandler}
                disabled={disable}
                styleObj={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                }}
            />
        </div>
    );
}

export default MonsterReportControllerBlock;