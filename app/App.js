import React from 'react'
import { Router, Route, Link } from 'react-router'
import LoginPage from './Page/loginPage/LoginPage'

class App extends React.Component {
    constructor(props) {
        super(props);
      }
	render(){
        return(
        <div>
           {this.props.children}
		</div>)
	}
}

export default App