import React from 'react'

const Footer = ({length}) => {
    const year = new Date();


  return (
    <>
    <footer>
    <p>{length}List items</p>
    </footer>
        Copyright &copy; {year.getFullYear()}
    </>
    

)
}

export default Footer