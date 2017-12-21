import React, {Component} from 'react';
// import {connect} from 'react-redux';


export default class Output extends React.Component {

   // renderMediaID(mediaData){
   //   return(
   //     // <div>{mediaData.media_id}</div>
   //     <div>Output</div>
   //   );
   // }
   // <div className='url-output'> {this.state.mediaid.map(this.renderMediaID)} </div>

  render(){
    return(
        <div className='url-output'> Output </div>
      );
    }
  }

//
// function mapStateToProps(state){
//   return { mediaid: state.mediaid };
// }
//
// export default connect(mapStateToProps,Output);
