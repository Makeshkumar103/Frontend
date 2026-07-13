import { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem  from "./ToDoItem";

function App() {
  const [items, setItems]= useState([]);
  const addItems = (inputText)=>{
    setItems((prevItems)=>{
      return[...prevItems,inputText];
   });
  };
  const deleteItem = (id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      });
    });

  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <InputArea additems={addItems} />
      <>
      <ul>
        {
            items.map((item,index) => {
              return(
                <ToDoItem 
                key={index} 
                text={item}
                deleteItem={deleteItem}
                id={index} />
              )
            })
        }
      </ul>
      </>
    </div>
    
  );
}

export default App;
