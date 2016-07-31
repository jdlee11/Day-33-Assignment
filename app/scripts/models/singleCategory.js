import Backbone from 'backbone';
import QuestionModel from './questionmodel';
import RandomQuestions from './randomQuestions';
import _ from 'underscore';
import store from '../store';

const SingleCategory = Backbone.Model.extend({
  initialize: function(id){
    this.id = id;
    this.fiveQuestions = [];
    this.category_name = '';
  },
  id: '',
  fiveQuestions: [],
  category_name: '',
  urlRoot: `http://jservice.io/api/category?id=`,
  getQuestions: function(){
    this.fetch({
      url: `${this.urlRoot}${this.id}`,
      success: (response) => {
        if (response.attributes.clues.length < 5){
          let replacement = new RandomQuestions();
          replacement.getRandomQuestions(store.categories, 1);
        } else {
          for (var index = 1; index < 6; index ++){
            let newQuestion = new QuestionModel(response.attributes.clues[index - 1], index * 200);
            this.fiveQuestions.push(newQuestion);
          }
          this.category_name = response.attributes.title;
          store.categories.add(this);
        }
      }
    });
  }
});

export default SingleCategory;
