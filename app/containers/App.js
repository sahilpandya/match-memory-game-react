import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showLoading : true
    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <div className="site row">
        {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}


export default connect(mapStateToProps)(App);
