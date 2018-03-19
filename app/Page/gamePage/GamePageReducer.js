import * as Actions from './GamePageAction'
const defaultState = {
}

export default function GamePage(state = defaultState, action){
    console.log("reducer--game")
	switch(action.type){
        case Actions.BEGIN_GAME:
            console.log(action)
            // return {curStatus:action.curStatus}
            return{
                
            }
		default:
			return state;
	}
}
