import styled from "styled-components";
import { useState } from "react";
import { BattleReportDTO, MonsterReportDTO } from "../types/BattleReport";
import MonsterReport from "../components/BattleResultPage/MonsterReport";
import BattleReport from "../components/BattleResultPage/BattleReport";
import { useCheckToken } from "../hooks/useHooksOfCommon";
import BattleReportController from "../components/BattleResultPage/BattleReportController";
import MonsterReportController from "../components/BattleResultPage/MonsterReportController";

const SdivOutsideFrame = styled.div`
    margin-top: 10px;
    height: 100%;
`;
const SdivOptionFrame = styled.div`
    display: flex;
    justify-content: space-around;
    height: 140px;
    margin: 0 20px 20px 20px;
`;
const SdivOptionL = styled.div`
    width: 55%;
    height: 100%;
    position: relative;
`;
const SdivOptionR = styled.div`
    width: 35%;
    height: 100%;
    position: relative;
`;
const SdivReportFrame = styled.div`
    display: flex;
    justify-content: space-around;
`;
const SdivReportL = styled.div`
    width: 55%;
    max-height: 430px;
    overflow-y: scroll;
`;
const SdivReportR = styled.div`
    width: 35%;
    max-height: 430px;
    overflow-y: scroll;
`;

const BattleResultPage = () => {
    const [monsterReport, setMonsterReport] = useState<MonsterReportDTO[]>([]);
    const [battleReport, setBattleReport] = useState<BattleReportDTO[]>([]);
    const [sortType, setSortType] = useState("0");

    useCheckToken();

    return (
        <SdivOutsideFrame>
            <SdivOptionFrame>
                {/* 検索条件部 */}
                <SdivOptionL>
                    <BattleReportController setMonsterReport={setMonsterReport}
                                            sortType={sortType}/>
                </SdivOptionL>
                {/* 検索条件部 */}
                <SdivOptionR>
                    <MonsterReportController setBattleReport={setBattleReport}/>
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