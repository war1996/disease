import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Login from './components/Login'
import * as LoginPageActions from './LoginPageAction'
import {loginPage} from './LoginPageReducer.js'

class LoginPage extends React.Component {

    componentWillMount(){
		// this.props.onSignUp();
	}

	render(){
		return <div>
            <Login {...this.props}/>
            {/* 哈哈我是登陆页面 */}
            </div>
	}
}
function mapStateToProps(state) {
    return {
        // loginArr: state.loginArr
    }
}
function mapDispatchToProps(dispatch) {
    let actions = Object.assign({}, LoginPageActions)
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)