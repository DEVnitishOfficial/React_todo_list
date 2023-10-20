import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        className="bg-transparent border-2 border-gray-600 rounded-md m-4 px-2 py-1 outline-none text-center"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add your next todo....."
      />
      <button
        className="border-indigo-600 border-2 m-2 px-4 bg-slate-600 rounded-sm"
        onClick={() => {
          addTodo({todoText : inputText});
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
