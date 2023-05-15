import React, { memo } from 'react'

export const Todo = ({todo}) => {

    console.log("todo render oldu", todo);
  return (
    <>
        <li>{todo}</li>
    </>
  )
}

export default memo(Todo)
