import React from 'react'
import { nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { findDOMNode } from 'react-dom';
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/css/form-elements.css'
import './assets/css/style.css'


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this)
    }
    handleSignUp() {
    const name = findDOMNode(this.refs.name);
    const pass = findDOMNode(this.refs.pass);
    const uname = name.value.trim();
    const upass = pass.value.trim();
    console.log(uname,upass)
    this.props.onSignUp(uname,upass);
    name.value = '';
    pass.value ='';
    }
	render(){
		return(
        <div className="view-port-1024 first-test">
	      <nav className="navbar navbar-inverse navbar-no-bg" role="navigation">
			<div className="container">
				<div className="navbar-header">
                   <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="index.html">Bootstrap Registration Form Template</a>
                </div>
                <div className="collapse navbar-collapse" id="top-navbar-1">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<span className="li-social">
								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-envelope"></i></a>
								<a href="#"><i className="fa fa-skype"></i></a>
							</span>
						</li>
					</ul>
				</div>
             </div>
          </nav>   
          <div className="top-content">
        	
            <div className="inner-bg">
                <div className="container">
                    <div className="row">     
                       <div className="col-sm-7 text">
                            <h1><strong>尕然然</strong> Login Form</h1>
                            <div className="description">
                            	<p>
                                    This is a personal webset.you can click the<strong><Link to="/game">WELCOME</Link></strong>,  if u don't have the authority.
                                </p>
                            </div>
                            <div className="top-big-link">
                            	<a className="btn btn-link-1" href="#">Button 1</a>
                            	<a className="btn btn-link-2" href="#">Button 2</a>
                            </div>
                        </div>
                        <div className="col-sm-5 form-box">
                        	<div className="form-top">
                        		<div className="form-top-left">
                        			<h3>Login up now</h3>
                            		<p>Fill in the form below to get instant access:</p>
                        		</div>
                        		<div className="form-top-right">
                        			<i className="fa fa-pencil"></i>
                        		</div>
                            </div>
                            <div className="form-bottom">
			                    <div role="form" className="registration-form">
                                    <div className="form-group">
			                    		<label className="sr-only" for="form-first-name">user name</label>
                                        <input type="text" name="form-first-name" placeholder="User name..." className="form-first-name form-control" id="form-first-name" ref='name'></input>
			                        </div>
                                    <div className="form-group">
			                        	<label className="sr-only" for="form-last-name">password</label>
			                        	<input type="password" name="form-last-name" placeholder="Password..." className="form-last-name form-control" id="form-last-name" ref='pass'></input>
			                        </div>
                                    <button className="btn" onClick={this.handleSignUp}>Sign me up!</button>
			                    </div>
		                    </div>
                        </div>       
                    </div>
                </div>
            </div> 
        </div>    
        </div>)
	}
}