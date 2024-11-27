import styled from "styled-components";
import FromToDate from "../components/common/FromTo";
import Button from "../components/common/Button";
import MonsterTypesList from "../components/BattleResultPage/MonsterTypesList";
import { ChangeEvent, useCallback, useState } from "react";
import { useServerWithQuery } from "../hooks/useHooksOfCommon";
import { COLORS, KEYS, URL } from "../lib/Constants";
import { BattleReportDTO, MonsterReportDTO } from "../types/BattleReport";
import MonsterReport from "../components/BattleResultPage/MonsterReport";
import BattleReport from "../components/BattleResultPage/BattleReport";
import BattleScaleList from "../components/BattleResultPage/BattleScaleList";
import { useCheckToken } from "../hooks/useHooksOfCommon";
import Select from "../components/common/Select";

const SdivOutsideFrame = styled.div`
    margin-top: 10px;
    height: 100%;
`;
const SdivOptionFrame = styled.div`
    display: flex;
    justify-content: space-around;
    height: 120px;
    margin: 0 20px 20px 20px;
`;
const SdivOptionL = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
`;
const SdivOptionR = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
`;
const SdivReportFrame = styled.div`
    display: flex;
    justify-content: space-around;
`;
const SdivReportL = styled.div`
    width: 50%;
    max-height: 450px;
    overflow-y: scroll;
`;
const SdivReportR = styled.div`
    width: 40%;
    max-height: 450px;
    overflow-y: scroll;
`;
const Sh1Title = styled.h1`
    font-size: 16px;
    color: ${COLORS.CAPTION_FONT_COLOR};
    margin-top: 5px;
`;

const BattleResultPage = () => {
    // レポート系
    const [monsterReport, setMonsterReport] = useState<MonsterReportDTO[]>([]);
    const [battleReport, setBattleReport] = useState<BattleReportDTO[]>([]);
    // 日付系
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    // 送信パラメータ系
    const [monsterTypeId, setMonsterTypeId] = useState("0");
    const [sortType, setSortType] = useState("0");
    const [isAscOrder, setIsAscOrder] = useState(true);
    const [battleScale, setBattleScale] = useState("0");

    const [disable, setDisable] = useState(false);
    const fetchServerUseQuery = useServerWithQuery();

    useCheckToken();

    // モンスタ毎のレポートを取得
    const fetchMonsterReportHandler = useCallback(async () => {
        const monsterReport: MonsterReportDTO[]
            = await fetchServerUseQuery(
                URL.MONSTER_REPORTS + `?monsterTypeId=${monsterTypeId}
                                                      &sortType=${sortType}
                                                      &isAscOrder=${isAscOrder}`
            );
        setMonsterReport(monsterReport);
    }, [monsterTypeId, sortType, isAscOrder]);

    // 戦闘毎のレポートを取得
    const fetchBattleReportHandler = useCallback(async () => {
        const battleReport: BattleReportDTO[]
            = await fetchServerUseQuery(
                   URL.BATTLE_REPORTS
                + `?battleScale=${battleScale}&from=${from}&to=${to}`
            );
        setBattleReport(battleReport);
    }, [battleScale, from, to]);

    // 戦闘規模の選択
    const changeBattleScaleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setBattleScale(e.target.value);
    }

    // ソート制御
    const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === KEYS.ORDER_BY_ASC) {
            setIsAscOrder(true);
        } else {
            setIsAscOrder(false);
        }
    }

    return (
        <SdivOutsideFrame>
            <SdivOptionFrame>
                {/* 検索条件部 */}
                <SdivOptionL>
                    <Sh1Title>モンスター戦績</Sh1Title>
                    <MonsterTypesList setMonsterTypeId={setMonsterTypeId}/>
                    <Select title="ソート順" onChange={sortHandler}>
                        <option value={KEYS.ORDER_BY_ASC}>昇順</option>
                        <option value={KEYS.ORDER_BY_DESC}>降順</option>
                    </Select>
                    <Button text="検索"
                            onClick={fetchMonsterReportHandler}
                            styleObj={{
                                position: "absolute",
                                bottom: "0",
                                right: "0"
                            }}
                            />
                </SdivOptionL>
                {/* 検索条件部 */}
                <SdivOptionR>
                    <Sh1Title>戦闘結果</Sh1Title>
                    <BattleScaleList changeBattleScaleHandler={changeBattleScaleHandler}/>
                    <FromToDate labelText="期間"
                                setDisable={setDisable}
                                from={from} setFrom={setFrom}
                                to={to} setTo={setTo} />
                    <Button text="検索"
                            onClick={fetchBattleReportHandler}
                            disabled={disable}
                            styleObj={{
                                position: "absolute",
                                bottom: "0",
                                right: "0"
                            }}
                            />
                </SdivOptionR>
            </SdivOptionFrame>

            <SdivReportFrame>
                {/* レポート部 */}
                <SdivReportL>
                    <MonsterReport monsterReport={monsterReport}
                                   setSortType={setSortType} />
                 </SdivReportL>
                {/* レポート部 */}
                <SdivReportR>
                    <BattleReport battleReport={battleReport} />
                </SdivReportR>
            </SdivReportFrame>
        </SdivOutsideFrame>
    );
}

export default BattleResultPage;