import React from "react";

const Item = (props) => {
  const { present, uid } = props.present;


  return (
    <div>
      <p>{present}</p>
    </div>
  )
}

export default Item;