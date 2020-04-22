import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
      state={
      text: ""
    };
  
    handleAdd=async e =>{
      await this.setState({
          text: e.target.value
        })
    }
  handleSub = e => {
      e.preventDefault();
      
      let formData=new FormData();
      formData.append("text",this.state.text);
      const url="http://localhost/Hermes/BusinessWebsite/php2/index.php";
        
      axios.post(url,formData)
      .then(res=>
        {alert("gg")});
      //window.location.replace(url);
      alert("gg2");
      
      
  }

  render(){
      return(
          <div>
           <input name="text" id="text" type="text" placeholder="enter text here" onChange={this.handleAdd} />
           <button id="submit"  type="submit" onClick={this.handleSub}>Submit</button>          
          </div>
      )
  }
}
export default App;
