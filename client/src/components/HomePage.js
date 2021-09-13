import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (

            
                      
                         <div class="d-grid gap-4 col-6 mx-auto">
                             <br/> <br/> <br/> <br/>
                            <button class="btn btn-success btn-lg" type="button">
                                <a className="text-white" style={{textDecoration: 'none'}} href={`/Registration`}>
                                Register</a>
                            </button>
                            <button class="btn btn-info btn-lg" type="button"> 
                            <a className="text-white" style={{textDecoration: 'none'}} href={`/Login`}>
                                Login</a></button>
                                <br/> <br/> <br/>
                            </div>

           
          
        );
       
    }
}


export default HomePage;

