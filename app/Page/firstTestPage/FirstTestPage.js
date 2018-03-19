import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FirstTest from './components/FirstTest'
import * as FirstTestActions from './FirstTestAction'
import {firstTest} from './FirstTestReducer.js' 

class FirstTestPage extends React.Component {
	render(){
		return <div>
            Page
            <FirstTest/>
            </div>
	}
}

// function mapStateToProps(state) {
//     return {
//         firstTest: state.firstTest
//     }
// }

// function mapDispatchToProps(dispatch) {
//     let actions = Object.assign({}, FirstTestActions)
//     return bindActionCreators(actions, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FirstTestPage)
export default FirstTestPage
