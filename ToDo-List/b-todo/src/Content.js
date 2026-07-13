import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handleCheck,deleteCheck}) => {
    
   
  return (
    <main>
        {items.length ? ( 
            <ItemsList 
                items = {items}
                handleCheck = {handleCheck}
                deleteCheck = {deleteCheck}
            />       
        ) : (
            <p>Your list is Empty</p>
        )}
    </main>
)
}

export default Content