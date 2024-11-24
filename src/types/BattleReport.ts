export interface MonsterTypeDTO {
    MonsterTypeId: number;
    MonsterTypeName: string;
}

export interface MonsterReportDTO {
    MonsterId: number;
    MonsterName: string;
    BattleCount: number;
    Wins: number;
    WinRate: string;
}

export interface BattleReportDTO {
    BattleId: number;
    BattleEndDateStr: string;
    BattleEndTimeStr: string;
    Serial: number;
    MonsterId: number;
    MonsterName: string;
    IsWin: boolean;
}