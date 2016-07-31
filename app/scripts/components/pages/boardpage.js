import React from 'react';
import Category from '../category';
import store from '../../store';

const BoardPage = React.createClass({
  getInitialState: function(){
    return {
      cats: store.categories
    };
  },
  componentDidMount: function(){
    store.categories.on('update change', () => {
      this.setState({cats: store.categories});
    });
  },
  render: function(){
    return (
      <div className="board-container">
        <Category cat={this.state.cats.models[0]}/>
        <Category cat={this.state.cats.models[1]}/>
        <Category cat={this.state.cats.models[2]}/>
        <Category cat={this.state.cats.models[3]}/>
        <Category cat={this.state.cats.models[4]}/>
        <Category cat={this.state.cats.models[5]}/>
        {this.props.children}
        <p className="earnings" style={{
          color: store.total >= 0 ? 'white' : 'red'
        }}>${store.total}</p>
      </div>
    );
  }
});

export default BoardPage;
