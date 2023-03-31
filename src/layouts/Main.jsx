import React from "react";
import localStorageService from "../services/localStorage.service";
import { userStore } from "../store/users-store";

import { Container } from "@mui/material";

import Header from "../Components/ui/Header";
import NotAuth from "../Components/ui/NotAuth";
import TodoList from "../Components/ui/TodoList";
import { useTodoStore } from "../store/todo-store";

const Main = () => {
  const isAuth = userStore((state) => state.isAuth);
  const userId = localStorageService.getUserId();

  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  React.useEffect(() => {
    fetchTodos(userId);
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "5rem" }}>
        {!isAuth ? <NotAuth /> : <TodoList />}
      </Container>
    </>
  );
};

export default Main;
