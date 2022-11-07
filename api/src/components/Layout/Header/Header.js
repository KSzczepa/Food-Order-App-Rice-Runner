import React from "react";

import Image from "./Image";
import MealsSummary from "./MealsSummary";

const Header = () => {
    return(
        <React.Fragment>
            <Image></Image>
            <MealsSummary></MealsSummary>
        </React.Fragment>
    );
};

export default Header;