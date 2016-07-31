import Backbone from 'backbone';

const QuestionModel = Backbone.Model.extend({
  initialize: function(retrievedQuestion, value){
    if (retrievedQuestion){
      this.id = retrievedQuestion.id;
      this.answer = retrievedQuestion.answer;
      this.question = retrievedQuestion.question;
      this.value = value;
    }
  },
  defaults: {
    answered: false
  },
  id: '',
  answer: '',
  question: '',
  value: ''
});

export default QuestionModel;
