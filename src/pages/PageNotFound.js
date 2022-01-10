import React from 'react'
import { useParams } from 'react-router-dom'

const PageNotFound = () => {
    const params = useParams()
    return (
        <div style={{
            display:'flex',            
            justifyContent:"center",
            marginTop:"30vh",
            fontSize:"30px",
            fontWeight:"bold"
        }}>
           {params.pagename} page Not Found .. !
        </div>
    )
}

export default PageNotFound
