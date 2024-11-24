import { useEffect } from "react";
import { KEYS, URL } from "../../lib/Constants";

const useCheckToken = async () => {
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

export default useCheckToken;