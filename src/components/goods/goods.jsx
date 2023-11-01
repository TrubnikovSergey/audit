import { useState, useEffect } from "react";
import { GoodsList } from "../goodsList";
import "./goods.css";

const Goods = () => {
  const [goods, setGoods] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((respons) => respons.json())
      .then((data) => {
        setGoods(data);
        setisLoading(false);
      });
  }, []);

  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : (
    <>
      <div className="goods-wrapper">
        <div className="goods-container">
          <div className="goods-title">
            {`Продукты / ${goods.length}`}
            <select className="goods-title__search">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <GoodsList list={goods} />
        </div>
      </div>
    </>
  );
};

export default Goods;
