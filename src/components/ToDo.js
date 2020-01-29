import React from 'react';

function ToDoItem() {
  const styles = {
    color: '#000000',
  };

  return (
    <div className="todo-item" style={styles}>
      <input type="checkbox" />
      <label>primeiro item novo</label>
    </div>
  );
}

export default ToDoItem;
