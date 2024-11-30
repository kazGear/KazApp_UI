const ACCENT_COLOR: string = "#0aff84";
const ACCENT_COLOR2: string = "#F05F8D";
const ALERT_COLOR: string = "red";
export const COLORS = {
    MAIN_FONT_COLOR: "gray",
    ACCENT_FONT_COLOR: `${ACCENT_COLOR}`,
    ACCENT_FONT_COLOR2: `${ACCENT_COLOR2}`,
    LOSER_FONT_COLOR: "#EC008C",
    ALERT_MESSAGE_COLOR: `${ALERT_COLOR}`,
    CAPTION_FONT_COLOR: "#33cc99",
    BUTTON_FORN_COLOR: "gray",

    BORDER_COLOR: "lightgray",
    LINE_COLOR: "blue",

    SHADOW_COLOR: "#132c0d",
    DIALOG_SHADOW: "gray",

    BUTTON_COLOR: `${ACCENT_COLOR}`,
    BUTTON_DISABLED: 0.3,

    THEME_COLOR: "#7fffd4",

    DIALOG_FRAME: `${ACCENT_COLOR}`,
} as const;

export const SIZE = {
    INPUT_HEIGHT: "22px"
} as const;

export const STATE_TYPE = {
    NORMAL: 0,
    POISON: 1,
    SLEEP: 2,
    CHARM: 3,
    SLOW: 4,
    POWER_UP: 5,
    DODGE_UP: 6,
    CRITICAL_UP: 7,
    AUTO_HEAL: 8
} as const;

export const STATE_NAME = {
    NORMAL: "正常",
    LOSER: "戦闘不能",
    POISON: "毒",
    SLEEP: "睡眠",
    CHARM: "魅了",
    SLOW: "スロー",
    POWER_UP: "攻撃力UP",
    DODGE_UP: "回避力UP",
    CRITICAL_UP: "クリティカルUP",
    AUTO_HEAL: "自動回復"
} as const;

export const DAMAGE_VIEW = {
    EFFECT_END: 1500,
    DAMAGE_END: 2500,
} as const;

// 環境でドメインが変化
const DOMAIN = {
    LOCAL_HOST_API: `http://localhost:5000`,
    XSERVER_API: `https://kazapp-trial.com`,
}
// ドメインを決定 // デプロイ前に確認
// const ENVIRONMENT = DOMAIN.LOCAL_HOST_API;
const ENVIRONMENT = DOMAIN.XSERVER_API;
export const URL = {
    INIT_MONSTERS: `${ENVIRONMENT}/api/battle/init`,
    BET_RATE: `${ENVIRONMENT}/api/battle/betRate`,
    BATTLE_NEXT_TURN: `${ENVIRONMENT}/api/battle/nextTurn`,
    RECORD_BATTLE_RESULT: `${ENVIRONMENT}/api/battle/recordResults`,
    RECORD_USER_RESULT: `${ENVIRONMENT}/api/user/recordUserResults`,
    INIT_BATTLE_REPORT: `${ENVIRONMENT}/api/battleReport/init`,
    MONSTER_REPORTS: `${ENVIRONMENT}/api/battleReport/monsterReport`,
    BATTLE_REPORTS: `${ENVIRONMENT}/api/battleReport/battleReport`,
    REGIST_USER_INIT: `${ENVIRONMENT}/api/user/init`,
    REGIST_USER: `${ENVIRONMENT}/api/user/userRegist`,
    LOGIN_USER: `${ENVIRONMENT}/api/login`,
    CHECK_LOGIN_TOKEN: `${ENVIRONMENT}/api/checkToken`,
    SELECT_LOGIN_USER: `${ENVIRONMENT}/api/user/loginUser`
} as const;

export const KEYS = {
    TOKEN: "token",
    USER_NAME: "userName",
    ORDER_BY_ASC: "ASC",
    ORDER_BY_DESC: "DESC"
} as const;
