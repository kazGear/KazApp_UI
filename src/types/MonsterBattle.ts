export interface MetaDataDTO {
    TargetMonsterId: number;
    BeforeHp: number;
    ImpactPoint: number;
    StateName: string;
    EnableState: boolean;
    DisableState: boolean;
    SkillId: number;
    Message: string;
    IsStop: boolean;
    AllLoser: boolean;
    ExistWinner: boolean;
    WinnerMonsterId: number;
    WinnerMonsterName: string;
}

export interface MonsterDTO {
    MonsterId: number;
    MonsterName?: string;
    MonsterType: number;
    Hp: number;
    MaxHp: number;
    Attack: number;
    Speed: number;
    Week: number;
    Skills: SkillDTO[];
    Status: StateDTO[];
    StatusName: string[];
    BetScore: number;
    BetRate: number;
}

export interface SkillDTO {
    SkillId: number;
    SkillName: string;
    SkillType: number;
    ElementType: number;
    StateType: number;
    TargetType: number;
    Attack: number;
    Weight: number;
    Critical: bigint;
    Remarks?: string;
}

export interface StateDTO {
    Category: number;
    StateType: number;
    Name: string;
    MaxDuration: number;
    DurationCount: number;
}