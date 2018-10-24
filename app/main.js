import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './commom/store/configureStore'
// import RootContainer from './commom/store/RootContainer'
import Routes from './Routes'
import './main.css'
import './test.scss'

const store = configureStore();
render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)