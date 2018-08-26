import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    componentDidCatch = (error, info) => {
        console.log(error);
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }
    render() {
        if (this.state.hasError) {
            return <div><h1> Message : {this.state.errorMessage}</h1></div>
        } else {
            return this.props.children;

        }
    }
}
export default ErrorBoundry;