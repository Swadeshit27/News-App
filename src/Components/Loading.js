import React from "react";
import spining from "./spining.gif";

const Loading=()=> {
  return (
    <div className=" text-center">
      <img src={spining} alt="loading" />
    </div>
  );
};
export default Loading;