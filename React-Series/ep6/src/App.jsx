import React from 'react'
import { use } from 'react';
import { useEffect, useState } from 'react'
const App = () => {
  const [num1, setNum1] = useState(100);
  useEffect(() => {
    setNum1(200);
    console.log("useEffect called");
  }, []);
  console.log("num1",num1);
  return (
  <>
  <h1>{num1}</h1>
  <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
  </>
  )
}

export default App