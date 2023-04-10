import React from 'react'

function SingleCategory({categoryImg, categoryName}) {
  return (
    <div className="category">
        <div className="img-container">
            <img src={categoryImg} alt={categoryName} />
        </div>
        <p>{categoryName}</p>
    </div>
  )
}

export default SingleCategory