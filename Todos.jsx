import React, { memo } from "react";
import { Todo } from "./Todo";

const Todos = ({todos}) => {
console.log("todos render oldu");
  
  return (
    <>
      <ul className="bg-gray-500 p-1 m-2">
        {todos.map((todo,index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default memo(Todos);
