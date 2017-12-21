import React, { Component } from 'react';
import InputURL from '../Containers/InputURL';
import Output from '../Containers/output';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputURL />
        <Output />
      </div>
    );
  }
}
