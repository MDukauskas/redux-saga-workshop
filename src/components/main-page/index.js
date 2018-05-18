import React from "react";
import { Flex, TodoForm, TodoList } from "Components";

export const MainPage = () => (
  <React.Fragment>
    <Flex style={{ justifyContent: "center" }}>
      <Flex style={{ width: "700px" }} direction="column">
        <h3>Add todo item</h3>
        <TodoForm />
        <h3>Todo List</h3>
        <TodoList items={["test 1", "test 2"]} />
      </Flex>
    </Flex>
  </React.Fragment>
);
