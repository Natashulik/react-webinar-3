import React from "react";
import PropTypes from "prop-types";
import Item from "../item";
import BasketItem from "../basketItem";
import "./style.css";

function List(props) {
  const isBasket = props.isBasket;
  
  return (
    <div className="List">
      {props.list.map((item) => (
        <div key={item.code} className={isBasket ? "BasketItem" : "List-item "}>
          {isBasket ?  <BasketItem item={item} onDeleteItem={props.onDeleteItem}/> : 
          <Item item={item} onAddItem={props.onAddItem} />}
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      title:  PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
  isBasket: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

List.defaultProps = {
  isBasket: false,
  onAddItem: () => {
 },
  onDeleteItem: () => {
 },
}


export default React.memo(List);
