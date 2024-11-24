import effect1 from "../images/effects/effect1.gif";
import effect2 from "../images/effects/effect2.gif";
import effect3 from "../images/effects/effect3.gif";
import effect4 from "../images/effects/effect4.gif";
import effect5 from "../images/effects/effect5.gif";
import effect6 from "../images/effects/effect6.gif";
import effect7 from "../images/effects/effect7.gif";
import effect8 from "../images/effects/effect8.gif";
import effect9 from "../images/effects/effect9.gif";
import effect10 from "../images/effects/effect10.gif";
import effect11 from "../images/effects/effect11.gif";
import effect12 from "../images/effects/effect12.gif";
import effect13 from "../images/effects/effect13.gif";
import effect14 from "../images/effects/effect14.gif";
import effect15 from "../images/effects/effect15.gif";
import effect16 from "../images/effects/effect16.gif";
import effect17 from "../images/effects/effect17.gif";
import effect18 from "../images/effects/effect18.gif";
import effect19 from "../images/effects/effect19.gif";
import effect20 from "../images/effects/effect20.gif";
import effect21 from "../images/effects/effect21.gif";
import effect22 from "../images/effects/effect22.gif";
import effect23 from "../images/effects/effect23.gif";
import effect24 from "../images/effects/effect24.gif";
import effect25 from "../images/effects/effect25.gif";
import effect26 from "../images/effects/effect26.gif";
import effect27 from "../images/effects/effect27.gif";
import effect28 from "../images/effects/effect28.gif";
import effect29 from "../images/effects/effect29.gif";
import effect30 from "../images/effects/effect30.gif";
import effect31 from "../images/effects/effect31.gif";
import effect32 from "../images/effects/effect32.gif";
import effect33 from "../images/effects/effect33.gif";
import effect34 from "../images/effects/effect34.gif";
import effect35 from "../images/effects/effect35.gif";
import effect36 from "../images/effects/effect36.gif";
import effect37 from "../images/effects/effect37.gif";
import effect38 from "../images/effects/effect38.gif";
import effect39 from "../images/effects/effect39.gif";
import effect40 from "../images/effects/effect40.gif";
import effect41 from "../images/effects/effect41.gif";
import effect42 from "../images/effects/effect42.gif";
import effect43 from "../images/effects/effect43.gif";
import effect44 from "../images/effects/effect44.gif";
import effect45 from "../images/effects/effect45.gif";
import effect46 from "../images/effects/effect46.gif";
import effect47 from "../images/effects/effect47.gif";
import effect48 from "../images/effects/effect48.gif";
import effect49 from "../images/effects/effect49.gif";
import effect58 from "../images/effects/effect58.gif";
import effect59 from "../images/effects/effect59.gif";
import effect60 from "../images/effects/effect60.gif";
import effect61 from "../images/effects/effect61.gif";
import effect62 from "../images/effects/effect62.gif";
import effect63 from "../images/effects/effect63.gif";
import effect64 from "../images/effects/effect64.gif";
import effect65 from "../images/effects/effect65.gif";
import effect66 from "../images/effects/effect66.gif";
import effect67 from "../images/effects/effect67.gif";
import effect68 from "../images/effects/effect68.gif";
import effect69 from "../images/effects/effect69.gif";

const effectImages = (effectId: number): string => {
    const effectImages = [];

    effectImages.push(null); // index: 0 (エフェクトなし)
    effectImages.push(effect1);
    effectImages.push(effect2);
    effectImages.push(effect3);
    effectImages.push(effect4);
    effectImages.push(effect5);
    effectImages.push(effect6);
    effectImages.push(effect7);
    effectImages.push(effect8);
    effectImages.push(effect9);
    effectImages.push(effect10);
    effectImages.push(effect11);
    effectImages.push(effect12);
    effectImages.push(effect13);
    effectImages.push(effect14);
    effectImages.push(effect15);
    effectImages.push(effect16);
    effectImages.push(effect17);
    effectImages.push(effect18);
    effectImages.push(effect19);
    effectImages.push(effect20);
    effectImages.push(effect21);
    effectImages.push(effect22);
    effectImages.push(effect23);
    effectImages.push(effect24);
    effectImages.push(effect25);
    effectImages.push(effect26);
    effectImages.push(effect27);
    effectImages.push(effect28);
    effectImages.push(effect29);
    effectImages.push(effect30);
    effectImages.push(effect31);
    effectImages.push(effect32);
    effectImages.push(effect33);
    effectImages.push(effect34);
    effectImages.push(effect35);
    effectImages.push(effect36);
    effectImages.push(effect37);
    effectImages.push(effect38);
    effectImages.push(effect39);
    effectImages.push(effect40);
    effectImages.push(effect41);
    effectImages.push(effect42);
    effectImages.push(effect43);
    effectImages.push(effect44);
    effectImages.push(effect45);
    effectImages.push(effect46);
    effectImages.push(effect47);
    effectImages.push(effect48);
    effectImages.push(effect49);
    effectImages.push(null); // 50
    effectImages.push(null); // 51
    effectImages.push(null); // 52
    effectImages.push(null); // 53
    effectImages.push(null); // 54
    effectImages.push(null); // 55
    effectImages.push(null); // 56
    effectImages.push(null); // 57
    effectImages.push(effect58);
    effectImages.push(effect59);
    effectImages.push(effect60);
    effectImages.push(effect61);
    effectImages.push(effect62);
    effectImages.push(effect63);
    effectImages.push(effect64);
    effectImages.push(effect65);
    effectImages.push(effect66);
    effectImages.push(effect67);
    effectImages.push(effect68);
    effectImages.push(effect69);

    // outOfMemory ガード（画像表示なし）
    if (effectId >= effectImages.length) effectId = 0;

    return effectImages[effectId] ?? "";
}

export default effectImages;