import React from "react";

function Search({ setInputText, todos, setTodos, inputText }) {
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
    <div className="Search">
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="search" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fa fa-search"></i>
          {/* <Link to="/App"></Link> */}
        </button>
      </form>
    </div>
  );
}

export default Search;
