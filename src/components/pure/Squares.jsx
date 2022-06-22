import React from 'react'

const Squares = ({ numberColor, stopChange, setIsHover }) => {

    return (
        <div onDoubleClick={stopChange} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='square' style={{ width: '255px', height: '255px', backgroundColor: `rgb(${numberColor.R}, ${numberColor.G}, ${numberColor.B})` }}></div>
    )
}

export default Squares