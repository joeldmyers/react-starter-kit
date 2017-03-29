import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startSteps, changeStepForward, changeStepBackwards, genderType, closePlugin, base64Img, settingUserStatus} from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: false,
      step: 0
    };

    this.addImagebtn = this
      .addImagebtn
      .bind(this);

  }

  componentWillMount(){
  }
  componentDidMount(){
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  addImagebtn(event) {
    event.preventDefault();
    console.log('button pressed');

    this
      .props
      .startSteps();

  }




  render() {
    return (
      <div>
        <input type="text" placeholder="search" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {globalState: state.globalState};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startSteps,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
