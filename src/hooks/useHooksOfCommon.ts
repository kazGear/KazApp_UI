import { useEffect } from "react";
import { KEYS, URL } from "../lib/Constants";
import { useCallback } from "react";
import { createMonstersJson } from "../lib/CreateJson";

/**
 *  トークンが有効か確認
 */
export const useCheckToken = async () => {
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem(KEYS.TOKEN);

            // ログイントークンの期限を確認
            const option = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
            }
            const res = await fetch(`${URL.CHECK_LOGIN_TOKEN}?token=${token}`,option);

            // 期限切れ
            if (!res.ok) {
                window.location.href = "/IndexPage";
                return false;
            }
        }
        checkToken();
    }, []);
}

/**
 * サーバーと通信する（リクエストのボディ使用）
 */
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

/**
 * サーバーと通信を行う（クエリパラメータを使用）
 */
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