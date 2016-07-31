# Day 33 assignment: React-pardy!

## description
- this app will be a simple game of Jeopardy, with 6 categories and 5 questions per category.
- questions will be chosen by clicking on the appropriate dollar amount on the game board
- answers will be typed in when the question modal appears
- correct answers will add to your score, incorrect ones will subtract
- after answering a question (correctly or not), it's box on the game board will appear empty

## progress log
- just got a big chunk of the structuring work done. The '/' route goes to a page which contains a start button. pressing that takes the user to the board, which I have not yet populated with data, just placeholder text. I spent a few minutes styling the board, mainly each category title and question box, so now it looks presentable. I will improve the visuals once it is functional.

- added the modal as another route, and styled it. When the user hits enter after answering the question, it currently logs what the user typed. however, I found that when going back to the board page, it clears the console (???). Moving forward, I worry that every time a question is answered, it might be overwritten by the board page's componentDidMount (which runs after answering the question, at the moment) and be filled in, or worse, replaced by a whole new category, if thats what the componentDidMount does to set the state.

## getting data
- data comes from the jservice.io api
- I will likely have to use .../api/categories?count=6 to get 6 categories with their id's
- then I can use .../api/category?id={id} to get the questions within each category
- to make sure categories are random, I could use .../api/random?count=6 to get 6 random questions, unlikely to be the same category, and then use the category_id property to get the rest of each category

## success with data
- successfully loaded data into a collection, stored on the store object. the collection creates a 'RandomQuestions' model which first gets 6 random questions from the jservice api, then maps them to an array of their category IDs. the RandomQuestion model then sets the Categories collection's ids to this mapped array and tells it to retrieve data on each of those categories, handled by the SingleCategory models.
- in short, the collection contains 6 category IDs, and has used them to fill itself with 6 whole categories. the next step is to shorten each category so they only contain one 200, 400, 600, 800, and 1000 dollar question
- found out that some of the categories do not have questions for all the dollar amounts. Successfully filtered values by multiples of 200, and sampled one question from each dollar amount. Six categories, UP TO 5 questions each! except when a category is missing some questions

## replace data-search structure
- i will need to verify that categories have at least 5 questions, and manually set the value (stop caring about what the api says the value should be). that way, i will definitely have 5 questions with the appropriate values

## data is properly loading
- the data has been loaded properly, and the board page now re-renders upon receiving data from ajax calls. At the moment, each category is showing the title, so I will now move on to making each individual question show the dollar amount and respond to a click event

## It works!
- upon loading the page, the data is filled in, categories are given proper titles, and each one is filled with 5 questions, each with different values. Clicking a question removes it from the board and opens a modal containing the question and input. After entering an answer and hitting 'ENTER', the program checks the user's answer and changes the score appropriately.
- To get it to display the right question in the modal, I made a currentQuestion property on the store, and change it in the clickHandler of a question box. That way, it can easily set the currentQuestion to its own question prop





-
