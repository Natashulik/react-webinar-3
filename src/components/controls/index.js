import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Controls({setIsBasketOpen, basket}) {

const handleClick = () => {
  setIsBasketOpen(true);
}
const totalSum = basket.reduce((sum,item) =>sum +  item.quantity*item.price, 0);
const totalPositions = basket.length;

  return (
    <div className="Controls">
      <div> В корзине: {totalPositions}  товара / {totalSum} ₽</div>
      <button onClick={handleClick}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  isBasketOpen: PropTypes.bool,
  setIsBasketOpen: PropTypes.func,
};

Controls.defaultProps = {
  setIsBasketOpen: () => {},
};


export default React.memo(Controls);
