import { useCallback } from "react";
import { isEmpty } from "../../lib/CommonLogic";

interface ArgProps {
    from: string;
    to: string;
    setInvalid: React.Dispatch<React.SetStateAction<boolean>>;
    setDisable: React.Dispatch<React.SetStateAction<boolean>>;
}

const useCheckFromTo = () => {
    const checkFromTo = useCallback(({from, to, setInvalid, setDisable}: ArgProps) => {
        // from or to のみの入力は有効
        if (isEmpty(from)) {
            setInvalid(false);
            setDisable(false);
            return;
        }
        if (isEmpty(to)) {
            setInvalid(false);
            setDisable(false);
            return;
        }
        // 過去、未来の日付が逆転していないか
        if (from > to) {
            setInvalid(true);
            setDisable(true);
        } else {
            setInvalid(false);
            setDisable(false);
        }
    }, []);

    return checkFromTo;
}

export default useCheckFromTo;