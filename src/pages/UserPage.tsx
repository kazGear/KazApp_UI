import styled from "styled-components";
import { UserDTO } from "../types/UserManage";
import { KEYS, URL } from "../lib/Constants";
import { useCheckToken, useServerWithQuery } from "../hooks/useHooksOfCommon";
import { MonsterDTO } from "../types/MonsterBattle";
import CashBlock from "../components/userPage/CashBlock";
import UserIdsBlock from "../components/userPage/UserIdsBlock";
import UserIconBlock from "../components/userPage/UserIconBlock";
import WinsBlock from "../components/userPage/WinsBlock";
import LossesBlock from "../components/userPage/LossesBlock";
import MonstersBlock from "../components/userPage/MonstersBlock";
import React, { useLayoutEffect, useState } from "react";
import OutSideFrame from "../components/common/OutSideFrame";

const SdivPageFrame = styled.div`
    display: flex;
    height: 100%;
`;
const SdivPageL = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
`;
const SdivPageR = styled.div`
    width: 50%;
    height: 565px;
`;

const frameStyle: React.CSSProperties = {
    margin: "20px",
    height: "100%",
    minWidth: "100px",
}
const iconStyle: React.CSSProperties = {
    margin: "20px",
    display: "flex",
    alignItems: "center",
}
const winAndLoseStyle: React.CSSProperties = {
    margin: "20px",
    height: "100px"
}

const UserPage = () => {
    const [user, setUser] = useState<UserDTO | null>(null);
    const [monsters, setMonsters] = useState<MonsterDTO[]>([]);

    const loginId = localStorage.getItem(KEYS.USER_ID);

    useCheckToken();

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
                <OutSideFrame styleObj={iconStyle}>
                    <UserIconBlock />
                    <UserIdsBlock user={user} />
                </OutSideFrame>
                <OutSideFrame styleObj={frameStyle}>
                    <CashBlock user={user} />
                </OutSideFrame>
                <OutSideFrame styleObj={winAndLoseStyle}>
                    <WinsBlock user={user} />
                </OutSideFrame>
                <OutSideFrame styleObj={winAndLoseStyle}>
                    <LossesBlock user={user}/>
                </OutSideFrame>
            </SdivPageL>
            <SdivPageR>
                <OutSideFrame styleObj={frameStyle}>
                    <MonstersBlock monsters={monsters}/>
                </OutSideFrame>
            </SdivPageR>
        </SdivPageFrame>

    );
}

export default UserPage;