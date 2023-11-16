import PropTypes from "prop-types";
import { GoodsItem } from "../goodsItem";
import "./goodsList.css";

const GoodsList = ({ list, short = false }) => {
  return (
    <div className="goods-list">
      {list.map((item) => (
        <GoodsItem key={item.id} item={item} short={short} />
      ))}
    </div>
  );
};

export default GoodsList;

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  short: PropTypes.bool,
};
