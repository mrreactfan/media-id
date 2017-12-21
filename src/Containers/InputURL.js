import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMediaID} from '../actions/index';

 class InputURL extends Component {

  constructor(props){
    super(props);
    this.state = { shortcode: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({shortcode: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchMediaID(this.state.shortcode);
    this.setState({shortcode: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group inputform'>
        <input
          placeholder='Enter Instagram URL here'
          className='form-control inputform__input'
          value= {this.state.shortcode}
          onChange = {this.onInputChange} />

        <span className='input-group-btn inputform__botton__wrapper'>
          <button type='submit' className='inputform__botton btn btn-secondary'>Get Media Id</button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchMediaID},dispatch);
}

export default connect(null,mapDispatchToProps)(InputURL);
