import React from "react";
import List from "./List";

function Tree({ data }) {
  return (
    <div>
      {data.vpcs &&
        data.vpcs.map((item, key) => <List item={item} key={key} />)}
    </div>
  );
}

export default Tree;
