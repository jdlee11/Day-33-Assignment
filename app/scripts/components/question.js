import React from 'react';

const Question = React.createClass({
  // represents a box with dollar value. when clicked, opens modal
  render: function(){
    return (
      <div className="question-container">
        <p>$200</p>
      </div>
    );
  }
});

export default Question;
