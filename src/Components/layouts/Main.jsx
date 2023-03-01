import Container from "@mui/material/Container";

import Header from "../ui/Header";
import TodoList from "../ui/TodoList";

const Main = () => {
  const data = [
    {
      id: 0,
      content: "Test0",
      created_at: "12:20",
      checked: false,
    },
    {
      id: 1,
      content: "Test1",
      created_at: "12:20",
      checked: false,
    },
    {
      id: 2,
      content: "Test2",
      created_at: "12:20",
      checked: true,
    },
  ];
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "5rem" }}>
        <TodoList oList data={data} />
      </Container>
    </>
  );
};

export default Main;
