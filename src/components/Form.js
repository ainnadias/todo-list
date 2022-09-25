import React from "react";
// import { Link } from "react-router-dom";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  };
  return (
    <div >
      {/* <header>
        <h2>To Do Input</h2>
      </header> */}
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="input to do" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
          {/* <Link to="/App"></Link> */}
        </button>
      </form>
    </div>
  );
};

export default Form;
