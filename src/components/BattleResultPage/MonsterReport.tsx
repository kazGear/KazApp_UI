import styled from "styled-components";
import { MonsterReportDTO } from "../../types/BattleReport";
import { COLORS } from "../../lib/Constants";
import monsterImages from "../../lib/MonsterImages";

const Stable = styled.table`
    width: 100%;
    border-collapse: collapse;
    position: relative;
`;
const StrHeaderRow = styled.tr`
    // なぜか１００％だと大きくはみだす
    width: 45%;
    max-width: 50%;
    color: ${COLORS.CAPTION_FONT_COLOR};
    position: sticky;
    top: 0;
    background-color: white;
    font-weight: bold;
    // 上にスクロールしたものが見えてしまうので蓋をする
    transform: translateY(-1px);
`;
const Std1 = styled.td`
    width: 34%;
    height: 35px;
    border-top: ${COLORS.BORDER_COLOR} 1px solid;
    border-bottom: ${COLORS.BORDER_COLOR} 1px solid;
    padding-left: 20px;
    `;
const Std2 = styled.td`
    border-top: ${COLORS.BORDER_COLOR} 1px solid;
    border-bottom: ${COLORS.BORDER_COLOR} 1px solid;
    width: 12%;
    text-align: left;
`;
const Std3 = styled.td`
    width: 18%;
    border-top: ${COLORS.BORDER_COLOR} 1px solid;
    border-bottom: ${COLORS.BORDER_COLOR} 1px solid;
`;
const Std4 = styled.td`
    width: 18%;
    border-top: ${COLORS.BORDER_COLOR} 1px solid;
    border-bottom: ${COLORS.BORDER_COLOR} 1px solid;
`;
const Std5 = styled.td`
    width: 18%;
    border-top: ${COLORS.BORDER_COLOR} 1px solid;
    border-bottom: ${COLORS.BORDER_COLOR} 1px solid;
`;
const Simg = styled.img`
    width: 30px;
    height: 30px;
    vertical-align: middle;
`;
interface ArgProps {
    monsterReport: MonsterReportDTO[];
}

const MonsterReport = ({monsterReport}: ArgProps) => {
    return (
        <div>
            <Stable>
                <thead >
                    <StrHeaderRow >
                        <Std1>モンスター名</Std1>
                        <Std2></Std2>
                        <Std3>勝利数</Std3>
                        <Std4>対戦数</Std4>
                        <Std5>勝率</Std5>
                    </StrHeaderRow>
                </thead>
                <tbody>
                {
                    monsterReport.map((report) => {
                        return (
                            <tr key={report.MonsterId}>
                                <Std1>{report.MonsterName}</Std1>
                                <Std2>
                                    <Simg src={monsterImages(report.MonsterId)} alt=""/>
                                </Std2>
                                <Std3>{report.Wins} 勝</Std3>
                                <Std4>{report.BattleCount} 戦</Std4>
                                <Std5>{report.WinRate}</Std5>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Stable>
        </div>
    );
}

export default MonsterReport;