import { useCallback } from "react";
import { URL } from "../lib/Constants";
import { MetaDataDTO, MonsterDTO } from "../types/MonsterBattle";
import { isEmpty } from "../lib/CommonLogic";

interface ArgPropsRegistResult {
    monsters: MonsterDTO[];
    lastLog: MetaDataDTO | undefined;
    setResultLog: React.Dispatch<React.SetStateAction<MetaDataDTO | null>>;
    setShowResultDialog: React.Dispatch<React.SetStateAction<boolean>>;
    registResult: (params: any, urls: string) => Promise<any>;
}
/**
 * 戦闘結果を記録する
 */
export const useRegistResult = () => {
    const registBattleResult = useCallback(({
        monsters,
        lastLog,
        setResultLog,
        setShowResultDialog,
        registResult
    }: ArgPropsRegistResult) => {
        if (isEmpty(lastLog)) return;
        setResultLog(lastLog!);

        if (lastLog!.ExistWinner || lastLog!.AllLoser) {
            setShowResultDialog(true);
            // 戦績の記録
            registResult(monsters, URL.RECORD_BATTLE_RESULT);
        }
    }, []);

    return registBattleResult;
}
