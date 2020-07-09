import React, { useContext } from 'react';
import { useEffect, useRef } from 'react';

import styles from './Cockpits.module.css'
import AuthContext from '../../context/auth-context'

const Cockpits = props => {
    const toggleBtnRef = useRef(null);
    const context = useContext(AuthContext)

    useEffect(() => {
        console.log('[Cockpits] 1st useEffect')

        const timer = setTimeout(() => {
            alert('timer!!')
        }, 1000);
        toggleBtnRef.current.click();
        return () => {
            clearTimeout(timer)
            console.log('[Cockpits] 1st cleanUp')
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpits] 2nd useEffect')
        return () => {
            console.log('[Cockpits] 2nd cleanUp')
        }
    })
    const classes = [];

    if (props.personLength < 2) {
        classes.push(styles.red)
    }

    if (props.personLength < 1) {
        classes.push(styles.bold);
    }

    return (
        <div>{console.log('[Cockpits] rendering')}
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>this is really working</p>
            <button
                ref={toggleBtnRef}
                className={props.btnStyle}
                onClick={props.isHide}>click</button>
            <button
                className={props.btnStyle}
                onClick={context.login}>log in</button>)}
        </div>
    )
}

export default React.memo(Cockpits)