import React from "react";
import Menu from "./Menu";
import MyList from "./MyList";
import Form from "./Form";

const LoggedIn = () => {
    return (
        <div>
            <Menu></Menu>
            <MyList></MyList>
            <Form></Form>
        </div>
    )
}

export default LoggedIn;