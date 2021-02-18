import React from "react";

const todos = ({ todos,deleteTodo }) => {
  const todoList = todos.map((todo) => {
    return (
      <div className="collection-item" key={todo.key}>
        <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
      </div>
    );
  });

  return <div className="todos collection">{todoList}</div>;
};

export default todos;
