import React from "react";
import { useTodoStore } from "../../store/store";

import ListItem from "./ListItem";

const ListItems = () => {
  const todos = useTodoStore((state) => state.todos);

  return todos.map((item) => <ListItem key={item.id} {...item} />);
};

export default ListItems;
