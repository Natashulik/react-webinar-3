import React from "react";
import PropTypes from "prop-types";
import List from "../list";
import "./style.css";

function Basket(props) {

 const handleBasketClose = () =>  {
  props.setIsBasketOpen(false);
 }
const totalSum = props.list.reduce((sum,item) =>sum +  item.quantity*item.price, 0);

  return (
    <div className="Basket">
      <div className="Basket-head">
      <h1 className="Basket-title">Корзина</h1>
      <button className="Basket-button" onClick={handleBasketClose}>Закрыть</button>
      </div>
      <List list={props.list} onDeleteItem={props.onDeleteItem} isBasket={true} />
      <div className="Basket-total"> Итого <span className="Basket-total-span"> {Intl.NumberFormat("ru-RU").format(totalSum)} ₽</span></div>
    </div>
  );
}

Basket.propTypes = {
 list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title:  PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
       })
  ).isRequired,
  isBasket: PropTypes.bool.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  setIsBasketOpen: PropTypes.func.isRequired
};

Basket.defaultProps = {
  isBasket: true,
  onDeleteItem: () => {},
  setIsBasketOpen: () => {} 
}


export default Basket;
