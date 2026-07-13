import React from 'react'

const ItemsList = ({items,handleCheck,deleteCheck}) => {
  return (
    <>
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
    </>
)
}

export default ItemsList