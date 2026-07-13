import React from 'react'
import { useState } from 'react';

const Content = () => {
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
    <main>
        {items.length ? (        
        <ul>
            {items.map((item) => (
                <li className='item' key ={item.id} >  
                    <input 
                    type ='checkbox'
                    onChange={() =>handleCheck(item.id)}
                    checked = {item.checked}>
                    </input>
                    <label style = {(item.checked)?{textDecoration:'line-through'}: null } onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    <button onClick={() => deleteCheck(item.id) }>Delete</button>
                </li>
            ))}
        </ul>
        ) : (
            <p>Your list is Empty</p>
        )}
    </main>
)
}

export default Content