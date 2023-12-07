import { memo } from "react";
import PropTypes from "prop-types";
import Pagination from "../pagination";
import Item from "../item";
import "./style.css";
import { useNavigate } from "react-router-dom";

function List({
  list,
  renderItem,
  onChangePage,
  currentPage,
  count,
  chooseProduct,
}) {
  const navigate = useNavigate();

  const handleClick = (_id) => {
    chooseProduct(_id);
    //navigate(`/product`);
  };

  return (
    <>
      <div className="List">
        {list.map((item) => (
          <div
            key={item._id}
            className="List-item"
            onClick={() => handleClick(item._id)}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <Pagination
        onChangePage={onChangePage}
        currentPage={currentPage}
        count={count}
      />
    </>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  renderItem: PropTypes.func,
};

List.defaultProps = {
  renderItem: (item) => {},
};

export default List;
