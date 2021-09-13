import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import EditPost from './components/EditPost'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'
//import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import login from './components/Login'
import pro from './components/pro'

//import landingPage from './components/landingPage'
// import Dashboard from './components/Dashboard'
// import Auth from './components/Auth'


export default class App extends Component {
    render() {
        return (

         <BrowserRouter key={App.BrowserRouter}>
            <div className="container">

            {/* <NavBar/> */}
            <NavBar2/>
            <br/>
            {/* <Route path="/" component = {landingPage} key={App.landingPage}></Route> */}
            <Route path="/home" component = {HomePage} key={App.HomePage}></Route>
            <Route path="/dashboard/data" exact component = {Home} key={App.Home}></Route>
            <Route path="/Registration" component = {CreatePost} key={App.CreatePost}></Route>
            <Route path="/edit/:id" component = {EditPost} key={App.EditPost}></Route>
            <Route path="/post/:id" component = {PostDetails} key={App.PostDetails}></Route>
            <Route path="/login" component = {login} key={App.login}></Route>
            <Route path="/pro" component = {pro} key={App.pro}></Route>
            {/* <Route path="/Dashboard" component = {Dashboard} key={App.Dashboard}></Route>
            <Route path="/Auth" component = {Auth} key={App.Auth}></Route> */}
            <br/>
            <br/>
            </div>
            <Footer/>
        </BrowserRouter>
    
        );
    }
}


