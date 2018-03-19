import * as Actions from './LoginPageAction'
const defaultState = {
	   curStatus:'false'
}

export default function LoginPage(state = defaultState, action){
    console.log("reducer")
	switch(action.type){
        case Actions.POST_LOGIN_MESSAGE:
            console.log(action)
			return {curStatus:action.curStatus}
		default:
			return state;
	}
}
