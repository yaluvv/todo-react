import React from "react";

import ListItem from "./ListItem";

const ListItems = ({ data }) => {
  return data.map((item) => {
    return <ListItem key={item.id} {...item} />;
  });
};

export default ListItems;
