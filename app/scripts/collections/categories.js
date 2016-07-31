import Backbone from 'backbone';
import RandomQuestions from '../models/randomQuestions';
import SingleCategory from '../models/singleCategory';

const Categories = Backbone.Collection.extend({
  model: SingleCategory,
  populate: function(){
    var randomQs = new RandomQuestions();
    randomQs.getRandomQuestions(this, 6);
  }
});

export default Categories;
