import Backbone from 'backbone';
import _ from 'underscore';
import Categories from '../collections/categories';
import SingleCategory from './singleCategory';

const RandomQuestions = Backbone.Model.extend({
  idAttribute: '_id',
  url: 'http://jservice.io/api/random?count=',
  urlCheck: 'http://jservice.io/api/category?id=',
  getRandomQuestions: function(categoryCollection, number){
    this.fetch({
      url: `${this.url}${number}`,
      success: (response) => {
        for (var question in response.attributes){
          let newId = response.attributes[question].category_id;
          let aNewCategory = new SingleCategory(newId);
          aNewCategory.getQuestions();
        }
      }
    });
  }
});

export default RandomQuestions;
