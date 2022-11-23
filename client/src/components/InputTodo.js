import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!description) {
        alert("Please Enter todo")
      }else{
        const body = {description};
        const response = await fetch("http://localhost:5000/todos", {
          method:"POST",
          headers:{"content-Type":"application/json"},
          body:JSON.stringify(body)
        })
        window.location = '/';
        console.log(response)
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <div>
      <h1 className="text-center mt-5">Input Todo</h1>
      <form className="d-flex mt-5" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
