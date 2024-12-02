import styled from "styled-components";
import { UserDTO } from "../types/UserManage";
import { KEYS, URL } from "../lib/Constants";
import { useServerWithQuery } from "../hooks/useHooksOfCommon";
import { MonsterDTO } from "../types/MonsterBattle";
import CashBlock from "../components/userPage/CashBlock";
import UserIdsBlock from "../components/userPage/UserIdsBlock";
import UserIconBlock from "../components/userPage/UserIconBlock";
import WinsBlock from "../components/userPage/WinsBlock";
import LossesBlock from "../components/userPage/LossesBlock";
import MonstersBlock from "../components/userPage/MonstersBlock";
import { useLayoutEffect, useState } from "react";

const SdivPageFrame = styled.div`
    display: flex;
`;
const SdivPageL = styled.div`
    width: 50%;
    margin: 20px;
`;
const SdivPageR = styled.div`
    width: 50%;
    margin: 20px;
`;

const UserPage = () => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [monsters, setMonsters] = useState<MonsterDTO[]>([]);

    const loginId = localStorage.getItem(KEYS.USER_ID);

    /**
     * ユーザ情報取得
     */
    const select = useServerWithQuery();
    useLayoutEffect(() => {
        const selectUser = async () => {
            const loginUser: UserDTO | null = await select(`${URL.USER_INFO}?loginId=${loginId}`);
            const userMonsters: MonsterDTO[] = await select(`${URL.MONSTERS_INFO}?loginId=${loginId}`)
            setUser(loginUser);
            setMonsters(userMonsters);
        }
        selectUser();
    }, []);

    return (
        <SdivPageFrame>
            <SdivPageL>
                <UserIconBlock />
                <UserIdsBlock user={user} />
                <CashBlock user={user} />
            </SdivPageL>
            <SdivPageR>
                <WinsBlock user={user} />
                <LossesBlock user={user}/>
                <MonstersBlock monsters={monsters}/>
            </SdivPageR>
        </SdivPageFrame>

    );
}

export default UserPage;