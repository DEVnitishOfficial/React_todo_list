import React, { useState } from "react";

function Todo({ TodoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditting, setIsEditting] = useState(false);
  const [editText, setEditText] = useState(TodoData);
  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEditting ? (
        <input
          className="bg-transparent border-2 border-gray-600 rounded-md m-4 px-2 py-1 outline-none text-center"
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
      ) : (
        <span>{TodoData}</span>
      )}
      <button
        className=" border-indigo-600 border-2 m-2 px-4 bg-slate-600 rounded-sm"
        onClick={() => {
          setIsEditting(!isEditting);
          console.log('see the changes in isediting',isEditting)
          if (isEditting) {
            onEdit(editText);
          }
        }}
      >
        {(!isEditting) ? "Edit" : "Save"}
      </button>

      <button
        className="border-indigo-600 border-2 m-2 px-4 bg-slate-600 rounded-sm"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}
export default Todo;
