import React, {useState} from 'react'

const App = () => {
 let [num, setNum] = useState(1);
 const handleAdd = () => {
  setNum((currvalue) => currvalue + 1);
 }
  return (
    <>
    <h1>{num}</h1>
    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default App;