import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const QuestionModal = React.createClass({
  submitHandler: function(evt){
    evt.preventDefault();
    let answer = this.refs.answer.value;
    if (answer === store.currentQuestion.answer){
      store.total += store.currentQuestion.value;
    } else {
      store.total -= store.currentQuestion.value;
    }
    hashHistory.push('board');
  },
  render: function(){
    console.log(store.currentQuestion); // HINT: open the outputs in the console to see answers
    return (
      <div className="entire-modal">
        <div className="q-modal">
          <p>{store.currentQuestion.question}</p>
          <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="Answer" ref="answer"/>
          </form>
        </div>
      </div>
    );
  }
});

export default QuestionModal;
