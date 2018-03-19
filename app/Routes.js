import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter'
import {Route,IndexRoute} from 'react-router'
import App from './App'
import FirstTestpage from './Page/firstTestPage/FirstTestPage'
import LoginPage from './Page/loginPage/LoginPage'
import GamePage from './Page/gamePage/GamePage'
import PictureWallPage from './Page/picPage/PictureWallPage'

let routes = <Route path="/" component={App}>
    <IndexRoute component={LoginPage}/>
    <Route path="/greeter" component={Greeter}/>
    <Route path="/first" component={FirstTestpage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/game" component={GamePage}/>
    <Route path="/pic" component={PictureWallPage}/>
</Route>;

export default routes;