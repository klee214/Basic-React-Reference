import React from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpits from '../components/Cockpits/Cockpits';
// import WithClasses from '../hoc/WithClasses'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'

/************************** CLASS BASED COMPONENT ***************************/
/************************** CLASS BASED COMPONENT ***************************/
/************************** CLASS BASED COMPONENT ***************************/
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor is running... ', props)
  }
  state = {
    person: [
      { id: '123', name: "kimin", age: 27 },
      { id: '1234', name: "sure", age: 28 },
      { id: '1235', name: "lee", age: "30" }
    ],
    otherState: "this is the other state",
    isHide: false,
    isCockpits: true,
    counting: 0,
    isLogin: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }


  componentDidMount() {
    console.log('[App.js] componentDidMount is running')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate is running')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate is running');
    return true;
  }

  hideAndRevealHandler = () => {
    this.setState({ isHide: !this.state.isHide })
  }

  changeInputValue = (event, key) => {

    const personIndex = this.state.person.findIndex(person => person.id === key)
    const tmpPersons = [...this.state.person];

    tmpPersons[personIndex].name = event.target.value;

    this.setState((preState, props) => {
      return ({
        person: tmpPersons,
        counting: ++preState.counting
      })
    })
  }

  deletePersons = (index) => {
    const tmpPersons = [...this.state.person];

    tmpPersons.splice(index, 1);

    this.setState({
      person: tmpPersons
    })
  }

  removeCockpits = () => {
    this.setState({
      isCockpits: !this.state.isCockpits
    })
  } 

  loginAuth = () => {
    this.setState((preState, props) => {
      return ({ isLogin: !preState.isLogin })
    })
  }

  render() {

    console.log('[App.js] rendering')
    let person = null;
    let buttonStyles = [styles.button];

    if (this.state.isHide) {
      person = <Persons
        person={this.state.person}
        deleted={this.deletePersons}
        changed={this.changeInputValue}
        isAuth={this.loginAuth} />

      buttonStyles.push(styles.Red);
    }

    return (
      <Aux>
        <button onClick={this.removeCockpits}>removeCockpits</button>
        <AuthContext.Provider value={{
          Authentication: this.state.isLogin,
          login: this.loginAuth
        }}>
          {this.state.isCockpits ?
            <Cockpits
              title={this.props.title}
              personLength={this.state.person.length}
              btnStyle={buttonStyles.join(' ')}
              isHide={this.hideAndRevealHandler} 
              isLogin={this.loginAuth}/> : null}
          {person}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'} ,React.createElement('h1', null, 'I am a react App'));
  }
}
export default withClass(App, styles.App);

/************************** Functional COMPONENT ***************************/
/************************** Functional COMPONENT ***************************/
/************************** Functional COMPONENT ***************************/
// const App = props => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { id: '123', name: "kimin", age: 27 },
//       { id: '1234', name: "sure", age: 28 },
//       { id: '1235', name: "lee", age: 30 }
//     ],
//     hideAndReveal: false
//   })

//   const [hideState, setHideState] = useState({
//     isHide: false
//   })

//   const deletePerson = (index) => {
//     const tmpPerson = [...personState.person];

//     tmpPerson.splice(index, 1)
//     setPersonState({ person: tmpPerson })
//   }

//   const hideAndRevealHandler = () => {
//     setHideState({
//       isHide: !hideState.isHide
//     })
//   }

//   const changeInputValue = (event, id) => {
//     const personIndex = personState.person.findIndex(person => person.id === id);
//     const tmpPerson = [...personState.person];

//     tmpPerson[personIndex].name = event.target.value;

//     setPersonState({
//       person: tmpPerson
//     })
//   }

//   let person = null;
//   let buttonStyles = [styles.button]

//   if (hideState.isHide) {
//     person = (
//       <Persons
//         person={personState.person}
//         deleted={deletePerson}
//         changed={changeInputValue}
//         />
//     )

//     buttonStyles.push(styles.red)
//   }

//   return (
//     <div className={styles.App}>
//       <Cockpits 
//       person={personState.person}
//       isHide={hideAndRevealHandler}
//       btnStyle={buttonStyles.join(' ')}/>
//       {person}
//     </div>
//   );
// }

// export default App;

// /************************** ASSIGNMENT COMPONENT ****************************/
// /************************** ASSIGNMENT COMPONENT ****************************/
// /************************** ASSIGNMENT COMPONENT ****************************/

// class App extends React.Component {

//   state = {
//     text: [
//       { id: '1', desc: 'first' },
//       { id: '2', desc: 'second' },
//       { id: '3', desc: 'third' }
//     ],
//     isClick: false
//   }


//   clickHandler = () => {
//     this.setState({
//       isClick: !this.state.isClick
//     })
//   }

//   textChangeHandler = (e, id) => {

//     if (id != null) {
//       const textIndex = this.state.text.findIndex(text => text.id === id)
//       const tmpText = [...this.state.text];

//       tmpText[textIndex].desc = e.target.value;

//       this.setState({
//         text: tmpText
//       })
//     } else {
//       this.setState({
//         text: [
//           { id: '1', desc: e.target.value },
//           { id: '2', desc: 'second' },
//           { id: '3', desc: 'third' }
//         ],
//         isClick: true
//       })
//     }
//   }

//   render() {
//     const char = (
//       <div>
//         {this.state.text.map((text, i) =>
//           <Char
//             changed={e => this.textChangeHandler(e, text.id)}
//             text={text.desc}
//             key={text.id} />
//         )}
//       </div>
//     )

//     return (
//       <div>
//         <button onClick={this.clickHandler}>Click!</button>
//         {this.state.isClick ?
//           <div>
//             <label>Write down something</label>
//             <input type="text" placeholder="type something here" onChange={this.textChangeHandler} value={this.state.text[0].desc}></input>
//             <Validation
//               length={this.state.text[0].desc.length} />
//             <p>{this.state.text[0].desc}</p>
//             {char}
//           </div>
//           : null}
//       </div>
//     )
//   }
// }

// export default App
