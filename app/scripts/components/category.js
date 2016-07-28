import React from 'react';
import Question from './question';

const Category = React.createClass({
  render: function(){
    return (
      <div className="category-container">
        <div className="category-title">
          <p>Category Name</p>
        </div>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
      </div>
    );
  }
});

export default Category;
