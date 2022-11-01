import React from "react";

import Sticker from "./Sticker";
import Image from "./Image";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
    return(
        <React.Fragment>
            <Sticker></Sticker>
            <Image></Image>
            <HeaderInfo></HeaderInfo>
        </React.Fragment>
    );
};

export default Header;