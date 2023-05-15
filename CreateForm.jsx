import React, { memo } from 'react'

const CreateForm = ({onSubmit,value, dispatch}) => {
  console.log("form render oldu");
  return (
    <>
     <form onSubmit={onSubmit}>
        <input value={value} onChange={(e)=>dispatch({type:"text", input: e.target.value})} type="text"  className="border-2 border-green-500" />
        <button>add</button>
      </form></>
  )
}

export default memo(CreateForm)