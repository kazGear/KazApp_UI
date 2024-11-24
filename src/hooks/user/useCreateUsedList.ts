import { useLayoutEffect } from "react";
import { UserDTO } from "../../types/UserManage";

interface ArgProps {
    users: UserDTO[] | null;
    setUsedLoginIdList: React.Dispatch<React.SetStateAction<string[] | null>>;
    setUsedDispNameList: React.Dispatch<React.SetStateAction<string[] | null>>;
    setUsedDispShortNameList: React.Dispatch<React.SetStateAction<string[] | null>>;
}

const useCreateUsedList = (
    {users, setUsedLoginIdList, setUsedDispNameList, setUsedDispShortNameList}: ArgProps
) => {
    useLayoutEffect(() => {
        if (users !== null) {
            const usedLoginId: string[] = [];
            const usedDispName: string[] = [];
            const usedDispShortName: string[] = [];

            // すでに登録されているデータをまとめて保存
            users.forEach((user) => {
                usedLoginId.push(user.LoginId);
                usedDispName.push(user.DispName);
                usedDispShortName.push(user.DispShortName);
            });
            setUsedLoginIdList(usedLoginId);
            setUsedDispNameList(usedDispName);
            setUsedDispShortNameList(usedDispShortName);
        }
    }, [users]);
}

export default useCreateUsedList;