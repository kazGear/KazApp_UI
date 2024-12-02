import styled from "styled-components";

import { useEffect, useLayoutEffect, useState } from "react";
import { UserDTO } from "../types/UserManage";
import { KEYS, URL } from "../lib/Constants";
import { useServerWithQuery } from "../hooks/useHooksOfCommon";

import Strong from "../components/common/Strong";
import { MonsterDTO } from "../types/MonsterBattle";
import monsterImages from "../lib/MonsterImages";
import UserIcon from "../components/UserPage/UserIconBlock";
import Cash from "../components/UserPage/CashBlock";
import UserIds from "../components/UserPage/UserIdsBlock";
import CashBlock from "../components/UserPage/CashBlock";
import UserIdsBlock from "../components/UserPage/UserIdsBlock";
import UserIconBlock from "../components/UserPage/UserIconBlock";
import WinsBlock from "../components/UserPage/WinsBlock";
import LossesBlock from "../components/UserPage/LossesBlock";
import MonstersBlock from "../components/UserPage/MonstersBlock";

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