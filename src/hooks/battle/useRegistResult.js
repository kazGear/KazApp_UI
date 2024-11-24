import { useCallback } from "react";
import { URL } from "../../lib/Constants";

const useRegistResult = () => {
    const registBattleResult = useCallback((
        monsters,
        log,
        setResultLog,
        setShowResultDialog,
        registResult
    ) => {
        setResultLog(log);

        if (log.ExistWinner || log.AllLoser) {
            setShowResultDialog(true);
            // 戦績の記録
            registResult(monsters, URL.RECORD_BATTLE_RESULT);
        }
    }, []);

    return registBattleResult;
}

export default useRegistResult;