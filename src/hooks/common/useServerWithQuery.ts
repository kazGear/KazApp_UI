import { useCallback } from "react";

export const useServerWithQuery = () => {
     // モンスター登場。モンスター数は引数で調整
     const useServerWithQuery = useCallback(async (urlWithQuery: string) => {
        try {
            const option: {} = {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
            };
            // urlパラメータで送信
            const response = await fetch(
                urlWithQuery, option
            );
            const result = await response.json();
            return result;
        } catch (err) {
            console.error("サーバー通信に失敗しました。");
            console.error(err);
        }
    }, []);

    return useServerWithQuery;
};
