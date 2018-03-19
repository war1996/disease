import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Game from './components/Game' 
import * as GamePageActions from './GamePageAction'
// import {loginPage} from './LoginPageReducer.js'

class GamePage extends React.Component {

    componentWillMount(){
	}
	render(){
		return <div>
            <Game  {...this.props}/>
            </div>
	}
}
function mapStateToProps(state) {
    return {
        // loginArr: state.loginArr
    }
}
function mapDispatchToProps(dispatch) {
    let actions = Object.assign({}, GamePageActions)
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)