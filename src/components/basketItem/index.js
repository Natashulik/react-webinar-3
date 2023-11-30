import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function BasketItem({ item, onDeleteItem }) {

  const handleDelete = () => {
    console.log( item.code)
    onDeleteItem(item.code);
  };

  return (
    <div className="BasketItem">
      <div className="BasketItem-code">{item.code}</div>
      <div className="BasketItem-title"> {item.title} </div>
      <div className="BasketItem-price">
          {Intl.NumberFormat("ru-RU").format(item.price)} ₽
      </div>
      <div className="BasketItem-quantity"> {item.quantity} шт</div>
      <div className="BasketItem-actions">
        <button onClick={handleDelete} className="BasketItem-button">Удалить</button>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

BasketItem.defaultProps = {
  onDeleteItem: () => {}
}


export default React.memo(BasketItem);
