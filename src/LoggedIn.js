import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import MyList from "./MyList";

const LoggedIn = () => {
    return (
        <div>
            <Header></Header>
            <MyList></MyList>
            <Menu></Menu>
        </div>
    )
}

export default LoggedIn;