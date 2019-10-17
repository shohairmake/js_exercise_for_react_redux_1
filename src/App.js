import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Todoアプリ</h1>
      <TodoList />
    </div>
  );
}

export default App;
