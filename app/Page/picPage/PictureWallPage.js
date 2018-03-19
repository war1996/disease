import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PictureWall from './components/PictureWall' 
import * as PictureWallActions from './PictureWallAction'
import {PictureWallList} from './PictureWallReducer'

class PictureWallPage extends React.Component {

    componentWillMount(){
	}

	render(){
		return <div>
            <PictureWall {...this.props}/>
            </div>
	}
}
function mapStateToProps(state) {
    return {
        // loginArr: state.loginArr
    }
}
function mapDispatchToProps(dispatch) {
    let actions = Object.assign({}, PictureWallActions)
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureWallPage)