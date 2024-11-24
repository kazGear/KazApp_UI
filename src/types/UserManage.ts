export interface UserDTO {
    LoginId: string;
    LoginPass: string;
    FailedLoginCnt: number;
    IsLoginDisabled: boolean;
    DispName: string;
    DispShortName: string;
    Role: number;
    Cash: number;
    Wins: number;
    WinsGetCash: number;
    Losses: number;
    BankruptcyCnt: number;
    LossesLostCash: number;
}