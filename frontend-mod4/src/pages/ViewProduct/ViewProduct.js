import React from 'react'

const ViewProduct = (props) => {
    const id = props.match.params.id

    return (
        <div>
          ViewProduct {id}  
        </div>
    )
}

export default ViewProduct
