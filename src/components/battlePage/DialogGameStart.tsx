import { ReactNode } from "react";
import DialogFrame from "../common/DialogFrame";
import BattleStartContents from "./BattleStartContents";

interface ArgProps {
    battleStartHandler: (e: any) => Promise<void>;
    selectMonstersCountHandler: (e: any) => void;
    showResultDialog : boolean
}

const DialogGameStart = ({
    battleStartHandler, selectMonstersCountHandler, showResultDialog
 }: ArgProps) => {

    const contents = (): ReactNode => {
        return <BattleStartContents
                    battleStartHandler={battleStartHandler}
                    selectMonstersCountHandler={selectMonstersCountHandler}
                    />
    }

    return (
        <DialogFrame
            renderChild={contents}
            showDialog={showResultDialog} />
    );
}

export default DialogGameStart;