import React from "react";

import ListItem from "./ListItem";

const ListItems = ({ data }) => {
  return data.map((item) => <ListItem key={item.id} {...item} />);
};

export default ListItems;
