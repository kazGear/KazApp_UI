import { useCallback } from "react";
import { createMonstersJson } from "../../lib/CreateJson";

export const useServerWithJson = () => {
    // モンスターたちの行動 ターン進行
    const useServerWithJson = useCallback(async (params: any, url: string) => {
        const paramasJson = createMonstersJson([...params]);
        // json形式で大量のパラメータ送信
        const option: {} = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paramasJson),
        };
        // モンスターたちの一連の行動
        try {
            const res = await fetch(url, option);
            const result = await res.json();
            return result;
        } catch (err) {
            console.error("サーバー通信に失敗しました。");
            console.error(err);
        }
    }, []);

    return useServerWithJson;
}
