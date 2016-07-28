import React from 'react';
import store from '../store';
import { hashHistory } from 'react-router';

const Menu = React.createClass({
  clickHandler: function(evt){
    store.total += 1;
    console.log('Begin!');
    hashHistory.push('board');
  },
  render: function(){
    return (
      <div className="menu">
				<button onClick={this.clickHandler}>Start!</button>
			</div>
    );
  }
});

export default Menu;
