import { Component } from 'react';
class Greetin extends Component {
    render() {
        var {isSuccess} =this.props
      return (
        <div>
              <h1>Task8</h1>
                {/* {isSuccess ? <h4>success!</h4>:<h4>Error!</h4>} */}
        </div>
        
      )
    }
  }
  export default Greetin