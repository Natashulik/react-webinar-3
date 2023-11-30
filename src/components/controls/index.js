import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { plural } from "../../utils";

function Controls({setIsBasketOpen, basket}) {

const handleClick = () => {
  setIsBasketOpen(true);
}
const totalSum = basket.reduce((sum,item) =>sum +  item.quantity*item.price, 0);
const totalPositions = basket.length;

const variants = {
  one: 'товар',
  few: 'товара',
  many: 'товаров',
};

  return (
    <div className="Controls">
      <div className="Controls-result">В корзине: 
     { totalPositions? <span>{totalPositions} {plural(totalPositions, variants)} / {Intl.NumberFormat("ru-RU").format(totalSum)} ₽ </span> : 
     <span> пусто </span> }
      </div> 
      <button onClick={handleClick} className="Controls-actions">Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title:  PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
       })
  ).isRequired,
   setIsBasketOpen: PropTypes.func.isRequired
};

Controls.defaultProps = {
  setIsBasketOpen: () => {},
};


export default React.memo(Controls);
