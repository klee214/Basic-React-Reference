import React from 'react'

const Validation = (props)=>{ 

    return(
        <div>
            { props.length > 5 ? 
                <p>THE LENGTH IS LONG ENOUGH</p> :
                <p>THE LENGTH IS TOO SHORT</p>
            }
        </div>
    )
}

export default Validation