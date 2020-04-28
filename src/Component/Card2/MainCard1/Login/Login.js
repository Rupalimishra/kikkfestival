import React, { Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    render() {
        return(
            <div>
                <input type="text" name="user" onChange={(event)=> this.setState({name:event.target.value})} /> <br /> <br />
                <input type="password" name="password" onChange={(event) => this.setState({password:event.target.value})} /> <br /> <br />
            </div>
        )
    }

}
export default Login;