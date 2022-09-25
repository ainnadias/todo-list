import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Filter from "./components/Filter";
import Search from "./components/Search";

function App() {
  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    //Functions
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Nadia To Do List</h2>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <Search inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <Filter filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} setStatus={setStatus} />
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />.
      <div className="todo-container">
        <button className="button">Delete Done Task</button>
        <button className="button">Delete all task</button>
      </div>
    </div>
  );
}

export default App;
