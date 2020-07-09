import React from 'react';
import ProTypes from 'prop-types'

import styles from './Person.module.css'
import Aux from '../../../hoc/Auxiliary';
// instead of Aux, we can simply use React.Fragment
// import WithClasses from '../../../hoc/WithClasses'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'


class Person extends React.Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        console.log('[Person.js] is rendering')
        return (
            <Aux>
                {this.context.Authentication ? <p>Log in!!!!</p> : <p>Fail!!!</p>}
                <p onClick={this.props.click}>I am {this.props.name} I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    // ref={inputEl => this.inputElementRef = inputEl}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}></input>
            </Aux>
        )
    }
}

Person.propTypes = {
    name: ProTypes.string,
    age: ProTypes.number,
    changed: ProTypes.func,
    click: ProTypes.func
}

export default withClass(Person, styles.Person);