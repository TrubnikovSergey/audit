import React from "react";
import PropTypes from "prop-types";
import { ArrivalItem } from "../arrivalItem";
import "./arrivalList.css";

const ArrivalList = ({ list }) => {
  return (
    <div className="arrival-list">
      {list.map((el) => (
        <ArrivalItem key={el.id} item={el} />
      ))}
    </div>
  );
};

ArrivalList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default ArrivalList;
