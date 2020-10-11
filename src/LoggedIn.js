import React from "react";
import Menu from "./Menu";
import List from "./List";
import Header from "./Header";

const LoggedIn = () => {
    return (
        <div>
            <Header></Header>
            <List></List>
            <Menu></Menu>
        </div>
    )
}

export default LoggedIn;