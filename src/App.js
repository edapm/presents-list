import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import List from "./List";
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <Menu></Menu>
      <List name="My Presents List"></List>
      <List name="Everyone Else's Lists"></List>
      <Footer></Footer>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
