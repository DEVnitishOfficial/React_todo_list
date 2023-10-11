
import React, { useState } from 'react'

function Todo({TodoData,isFinished, changeFinished}) {
  const [finished, setFinished] = useState(isFinished)
  return (
    <div> 
     <input  type="checkbox" checked={finished} onChange={(e) => {
      setFinished(e.target.checked);
      changeFinished(e.target.checked)
      }}/>
    {TodoData}
    <button className='border-indigo-600 border-2 m-2 px-4 bg-slate-600 rounded-sm '>Edit</button>
    <button className='border-indigo-600 border-2 m-2 px-4 bg-slate-600 rounded-sm '>Delete</button>
    </div>
  )
}
export default Todo