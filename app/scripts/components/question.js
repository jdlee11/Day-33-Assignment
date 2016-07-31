import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const Question = React.createClass({
  // represents a box with dollar value. when clicked, opens modal
  // replace $200 with appropriate amount
  clickHandler: function(){
    store.currentQuestion = this.props.question;
    this.props.question.attributes.answered = true;
    hashHistory.push(`/board/${this.props.question.id}`);
  },
  render: function(){
    this.value = this.props.question ? this.props.question.value : 0;
    this.display = 'block';
    if (this.props.question && this.props.question.attributes.answered){
      this.display = 'none';
    }
    return (
      <div className="question-container">
        <p onClick={this.clickHandler} style={{
          display: this.display
        }}>${this.value}</p>
      </div>
    );
  }
});

export default Question;
