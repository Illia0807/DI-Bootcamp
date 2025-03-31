import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error catched:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>An error has occured.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
