import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(
    [
        { id:1,
        checked: true,
        item:"practice coding"
        },
        { id:2,
            checked: false,
            item:"Play Cricket"
        },
        { id:3,
            checked: true,
            item:"Read about AI"
        }
    ]);
    const handleCheck = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item,checked: !item.checked}: item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    const deleteCheck = (id) => {
    const listItems = items.filter((item) => 
    item.id!==id)
    setItems(listItems)
    }  
  
  return (
   <>
   <Header title='Makesh'/>
   <Content 
      items = {items}
      handleCheck = {handleCheck}
      deleteCheck = {deleteCheck}
   />
   <Footer 
   length = {items.length}
   />
   </>
  );
}

export default App;
