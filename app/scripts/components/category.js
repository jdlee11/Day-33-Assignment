import React from 'react';
import Question from './question';

const Category = React.createClass({
  render: function(){
    if (this.props.cat){
      return (
        <div className="category-container">
          <div className="category-title">
            <p>{this.props.cat.category_name}</p>
          </div>
          <Question question={this.props.cat.fiveQuestions[0]}/>
          <Question question={this.props.cat.fiveQuestions[1]}/>
          <Question question={this.props.cat.fiveQuestions[2]}/>
          <Question question={this.props.cat.fiveQuestions[3]}/>
          <Question question={this.props.cat.fiveQuestions[4]}/>
        </div>
      );
    } else {
      return (
        <div className="category-container">
          <div className="category-title">
            <p>Undefined</p>
          </div>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
        </div>
      );
    }
  }
});

export default Category;
