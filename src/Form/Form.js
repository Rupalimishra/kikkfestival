import React, {Component} from 'react';
import './Form.css'
class Form extends Component {
    constructor()
    {
      super();
      this.state={
          name:"",
          password:"",
          nameError:"",
          passwordError:""
      }
    }
    valid()
    {
      if(!this.state.name.includes("@") && this.state.password.length < 5)
      {
          this.setState(
              {nameError:"Invalid Name",passwordError:"password lenght should be more than 5"}
              )
      }
     else if(!this.state.name.includes("@"))
      {
          this.setState(
              {nameError:"Invalid Name"}
              )
      }
       else if(this.state.password.length < 5)
      {
          this.setState(
              {passwordError:"password lenght should be more than 5"}
              )
      }
      else{
          return true
      }
    }
    submit()
    {
        this.setState(
            {nameError:"", passwordError:"" }
        )
        if(this.valid())
        {
         alert(" form has been submited")
        }
        
    }
    render(){
        return(
            <div>
                <form>
                    <label1> FullName </label1><br />
                    <input  className="style-text" type="text" /><br />

                    <label1> Email </label1><br />
                    <input type="text" className="style-email" onChange={(event)=>{this.setState({name:event.target.value})}} />

                    <label1> Mobile </label1><br />
                    <input type="text" className="style-number" onChange={(event)=>{this.setState({name:event.target.value})}} />

                    <label1> Age </label1><br />
                    <input  className="style-age"  type="number" /> <br />
                    <label1> Message </label1>
                      <textarea /> <br />
                      <input type="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}
export default Form;

