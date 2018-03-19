// main.js
import React from 'react'
import {render} from 'react-dom'
import { browserHistory, Router, Route, IndexRoute,Link } from 'react-router'
import { Provider } from 'react-redux';
// import configureStore from './stores/configureStore';
import configureStore from './commom/store/configureStore'
import routes from './Routes'
import './main.css'
import './test.scss'

const store = configureStore();
const Dashboard = React.createClass({
      render() {
        return <div>Welcome to the app1.0!</div>
      }
})
// let routes = <Route path="/" component={App}>
//   <Route path="/greeter" component={Greeter}/>
//   <Route path="/first" component={FirstTestpage}/>
// </Route>;
 {/* <Router history={browserHistory}>
        <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />     
          <Route path='greeter' component={Greeter} />
          <Route path='first' component={FirstTestpage} />
        </Route>
      </Router>, */}
render(
    <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
    </Provider>,
      document.getElementById('root')
 )