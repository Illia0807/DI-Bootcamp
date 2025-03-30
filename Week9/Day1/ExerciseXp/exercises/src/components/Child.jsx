import React from "react";
class Child extends React.Component {
 

  componentWillUnmount(){
       alert("the comp named Headr is anout to be unmounted")
  }
  handleChange=()=>{
        this.props.setShow(false)
  }
  
  render() {
    return (
      <>
      <h2>Hello world</h2>
      <button onClick={this.handleChange}>Delete header</button>
      </>
    );
  }
}
export default Child;