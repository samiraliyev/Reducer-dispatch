import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import CreateForm from "./components/CreateForm";
import Todos from "./components/Todos";


function App() {
  // console.log("app render oldu");
// const [value, setValue] = useState("");
// const [todos, setTodos] = useState([]);

const [count, setCount] = useState(0);
const [value,setValue] = useState("");


const initialState ={
  value : "",
  todos : [],
  search: ""
}


const reducer = useCallback(
  (state, action)=>{
// console.log(state,action);
    switch(action.type){
      case "text":
        return {
          ... state,
          value: action.input
        }
  
        case "todos":
          return{
            ... state,value : "",
            todos
            : [... state.todos, state.value]
          }

          case "search":
            return{
              ... state,
              search: state.todos.filter((toto)=>toto.toLowerCase().includes(action.search.toLowerCase()))
            }
    }
  }
) 



const [state, dispatch] = useReducer(reducer, initialState);

// console.log(state.todos, "state todos");

const submit=useCallback(((e)=>{
  e.preventDefault();

  dispatch({type: "todos"})
  // setTodos([...todos, value])
  // setValue("");

}),[])
// console.log(state.search, "search");


let filters =useMemo(()=>{
 return state.todos.filter((toto)=>toto.toLowerCase().includes(value.toLowerCase()))
},[state.todos, value]) 
console.log(filters, "filter");
  return (
    <div className="App">
     <CreateForm onSubmit={submit} dispatch={dispatch} value={state.value}/>

<Todos todos={filters}/>
   
<button onClick={()=>setCount(count+1)} className="bg-red-700 p-3">{count}</button>


<input className="border-2 border-black p-3" onChange={(e)=>setValue(e.target.value)} type="text"/>

<ul>
  {}
</ul>
    </div>
  );
}

export default App;



























































{/* <div className="btn-box flex flex-col w-[90px] gap-5 m-5">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 p-3"
        >
          increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count == 0}
          className={count == 0 ? "bg-gray-600 p-3" : "bg-red-700 p-3"}
        >
          decrement
        </button>
      </div>
      <div className="count-box border-2 border-red-500 pl-2 w-[100px] m-5">
        {count}
      </div>

      <hr />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="border-2 border-green-500 p-3 w-[150px] bg-orange-300"
      />
      <div>{value}</div>

      <button
        onClick={() => setShow(!show)}
        className={show ? "bg-green-600 p-3" : "bg-red-700 p-3"}
      >
        {show ? "goster" : "gizlet"}
      </button>

      <hr />

      <div>
        <form onSubmit={submit}>
        <input value={value} onChange={(e)=>setValue(e.target.value)}
          type="text"
          className="border-3 border-gray-900 w-[150px] p-3 bg-yellow-200"
        />
        <button className="bg-green-500 p-2">Add+</button>
        </form>
        <ul className="p-4 bg-emerald-100">
          {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div> */}