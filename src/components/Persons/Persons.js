import React from 'react';
import Person from './Person/Person'

class Persons extends React.PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponenetUpdate')

    //     if(nextProps.person !== this.props.person ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.deleted !== this.props.deleted){
    //         return true
    //     }
    //     return false
    // }

    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: "snapshot"};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate ', snapshot)
    }
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')

    }

    render() {
        console.log('[Persons.js] is rendering...')
        return (
            this.props.person.map((person, index) =>
                <Person
                    name={person.name}
                    age={person.age}
                    click={this.props.deleted.bind('this', index)}
                    changed={(event) => { this.props.changed(event, person.id) }}
                    key={person.id} 
                    isAuth={this.props.isAuth}/>
            )
        )
    }
}
export default Persons