/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import todosData from './dataApi/todosData';

function App() {
  console.log(todosData);
  const allTodos = todosData.map(item => (
    <TodoItem key={item.id} todo={item} />
  ));

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
