import Container from "@mui/material/Container";

import Header from "../ui/Header";
import TodoList from "../ui/TodoList";

const Main = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "5rem" }}>
        <TodoList />
      </Container>
    </>
  );
};

export default Main;
