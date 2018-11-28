import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import feedback from '../../img/feedback.png';
import './Feedback.css';
import { modalOpen } from '../../actions';

const Feedback = props =>
  <button className="feedback-btn"
          onClick={() => props.modalOpen('feedback')}>
    <img src={feedback} alt="feedback" />
  </button>;

const mapDispatchToProps = dispatch => ({
  modalOpen: bindActionCreators(modalOpen, dispatch)
});

export default connect(null, mapDispatchToProps)(Feedback);