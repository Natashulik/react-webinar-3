import React from "react";
import PropTypes from "prop-types";
import BasketItem  from "../basketItem";
import "./style.css";

function Basket({ basket, setIsBasketOpen, onDeleteItem}) {
 const handleBasketClose = () =>  {
  setIsBasketOpen(false);
 }
const totalSum = basket.reduce((sum,item) =>sum +  item.quantity*item.price, 0);

  return (
    <div className="Basket">
      <div className="Basket-head">
      <h1 className="Basket-title">Корзина</h1>
      <button className="Basket-button" onClick={handleBasketClose}>Закрыть</button>
      </div>
     
      {basket.map((item) => (
        <div key={item.code} className="Basket-item">
          <BasketItem item={item} onDeleteItem={onDeleteItem}/>
        </div>
      ))}
      <div className="Basket-total"> Итого <span className="Basket-total-span"> {Intl.NumberFormat("ru-RU").format(totalSum)} ₽</span></div>
    </div>
  );
}

Basket.propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title:  PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
       })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  setIsBasketOpen: PropTypes.func.isRequired
};

Basket.defaultProps = {
  onDeleteItem: () => {},
  setIsBasketOpen: () => {} 
}


export default Basket;
