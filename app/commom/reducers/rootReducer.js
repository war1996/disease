import { combineReducers } from 'redux';
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
import FirstTestReducer from '../../Page/firstTestPage/FirstTestReducer'
import LoginPageReducer from '../../Page/loginPage/LoginPageReducer'
import GamePageReducer from '../../Page/gamePage/GamePageReducer'
import PictureWallReducer from '../../Page/picPage/PictureWallReducer'

const rootReducer = combineReducers({
    FirstTestReducer,
    LoginPageReducer,
    GamePageReducer,
    PictureWallReducer
});

export default rootReducer;