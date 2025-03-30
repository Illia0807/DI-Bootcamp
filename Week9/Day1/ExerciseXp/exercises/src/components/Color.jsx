import React from "react";
class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    console.log("1");
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
      console.log("2");
    }, 2000);
  }
  handleColorChange = () => {
    this.setState({ favoriteColor: "blue" });
  };
  shouldComponentUpdate = () => {
    return true;
  };
  componentDidUpdate = () => {
    console.log("After update!");
    console.log("4");
  };
  getSnapshotBeforeUpdate() {
    console.log("3");
    console.log("in getSnapshotBeforeUpdate");
  }
  render() {
    return (
      <>
        <div>My favorite color is {this.state.favoriteColor}</div>
        <button onClick={this.handleColorChange}>Change color</button>
      </>
    );
  }
}
export default Color;
