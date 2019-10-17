import React from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Todoアプリ</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
