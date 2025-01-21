import { Component } from 'react';
class Greetin extends Component {
    render() {
        var {isLoggedIn} =this.props
      return (
        <div>
              <h1>Task7</h1>
                 {isLoggedIn ? (
                    <h4>welcome back!</h4>
                 ):(
                     <h4>try again</h4>
                 )} 
        </div>
        
      )
    }
  }
  export default function App(){
    var isLoggedIn=true
    return <Greetin isLoggedIn={isLoggedIn}/>
  }