import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";


function Item({ item, onAddItem }) {
  const handleClick = () => {
    onAddItem(item);
    console.log(item);
  };

  return (
    <div className="Item">
      <div className="Item-code">{item.code}</div>
      <div className="Item-title"> {item.title} </div>
      <div className="Item-price"> {Intl.NumberFormat("ru-RU").format(item.price)} ₽</div>
      <div className="Item-actions">
        <button onClick={handleClick}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddItem: PropTypes.func,
};

Item.defaultProps = {
  onAddItem: () => {},
 };

export default React.memo(Item);
