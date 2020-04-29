import React, { Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        }
    }
    render() {
        return(
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label1 htmlFor="email id">EmailId</label1>
                        <input type="email" name="emailid" placeholder="Emailid" />
                    </div>
                    <div className="input-group">
                        <label1 htmlFor="password">Password</label1>
                        <input  type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="input-group">
                        <label1 htmlFor="Firstname">Firstname</label1>
                        <input  type="text" name="Firstname" placeholder="Firstname"/>
                    </div>
                    <div className="input-group">
                        <label1 htmlFor="Lastname">Lastname</label1>
                        <input type="text" name="Lastname" placeholder="Lastname" />
                     
                    </div>
                   <Button>Subscribe</Button>
                </div>

                {/* <input type="text" name="user" onChange={(event)=> this.setState({name:event.target.value})} /> <br /> <br />
                <input type="password" name="password" onChange={(event) => this.setState({password:event.target.value})} /> <br /> <br /> */}
            </div>
        )
    }

}
export default Login;