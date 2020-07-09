import React from  'react'
import Validation from '../Validation/Validation'

const Char = (props)=>{
    const charStyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        border: '1px solid black'
    }

    return(
        <div className={charStyle}>
            <input type="text" placeholder="write something" onChange={props.changed} value={props.text}></input>
            <p>{props.text}</p>
            <Validation
                length={props.text.length}/>
        </div>
    )
}
export default Char