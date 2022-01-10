import React from 'react'
import "./style.css"

const Todolist = ({isLoggedIn}) => {
    return (
        <>
        {!isLoggedIn ? <div className='loginerror'>Please Login 
        </div>: <div className='container-fluid'>
        


        </div>}
        </>
    )
}

export default Todolist
