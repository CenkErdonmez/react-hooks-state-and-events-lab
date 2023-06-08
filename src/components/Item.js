import React, { useState } from "react";

function Item({ name, category }) {
  const [item,setItem]=useState(false)
  function handleCart(){
    setItem(!item)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={item ? "in-cart":"" } onClick={handleCart}>{item ? "Remove From Cart." :"Add to Cart" }</button>
    </li>
  );
}

export default Item;
