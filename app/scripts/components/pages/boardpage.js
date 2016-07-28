import React from 'react';
import Category from '../category';

const BoardPage = React.createClass({
  // contains 6 components (columns)
  render: function(){
    return (
      <div className="board-container">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    );
  }
});

export default BoardPage;
