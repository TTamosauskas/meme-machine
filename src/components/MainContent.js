import React from 'react';
import ToDoItem from './ToDo';

function MainContent() {
  return (
    <main>
      <div className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </main>
  );
}

export default MainContent;
