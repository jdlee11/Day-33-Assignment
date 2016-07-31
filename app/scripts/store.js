import Categories from './collections/categories';
import QuestionModel from './models/questionmodel';

// total represents the player's total score (will be displayed like $total). starts at 0 upon refresh

const store = {
  total: 0,
  categories: new Categories(),
  currentQuestion: new QuestionModel()
};

store.categories.populate();

export default store;
