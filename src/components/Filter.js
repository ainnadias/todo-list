import React from "react";

const Filter = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="filter">
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
