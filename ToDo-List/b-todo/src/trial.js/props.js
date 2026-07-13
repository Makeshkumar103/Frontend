import React from 'react'
<Header title='Makesh'/>
const Header = (props) => {
    
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
)
}

//  *****************
<Header title='Makesh'/>
const Header = ({title}) => {    
  return (
    <header>
        <h1>{title}</h1>
    </header>
)
}

export default Header