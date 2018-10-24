import React from 'react';
import { Switch, Redirect } from 'react-router-dom'
import Route from './commom/router/PrivateRoute'
import App from './App'
import Greeter from './Greeter'
import FirstTestpage from './Page/firstTestPage/FirstTestPage'
import LoginPage from './Page/loginPage/LoginPage'
import GamePage from './Page/gamePage/GamePage'
import PictureWallPage from './Page/picPage/PictureWallPage'

const Routes = props => (
    <App>
        <switch>
            <Route exact path="/" component={LoginPage} {...props} />
            <Route exact path="/login" component={LoginPage} {...props} />
            <Route exact path="/greeter" component={Greeter}{...props} />
            <Route exact path="/first" component={FirstTestpage} {...props} />
            <Route exact path="/game" component={GamePage} {...props} />
            <Route exact path="/pic" component={PictureWallPage} {...props} />
        </switch>
    </App>
)

export default Routes;