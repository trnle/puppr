'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Photos', [
      { title: "Outdoors", caption: "Went for a morning hike with my pup", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo1.jpg", userId: 4 },
      { title: "Beachy", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo2.jpg", userId: 4 },
      { title: "Go fetch", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo3.jpg", userId: 4 },
      { title: "Feeling pretty", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo4.jpg", userId: 4 },
      { title: "Bourne woods", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo5.jpg", userId: 4 },
      { title: "Tired", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo6.jpg", userId: 4 },
      { title: "Surrey Hills", caption: "Sitting on an old stump surrounded by purple flowers", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo7.jpg", userId: 4 },
      { title: "Sunset", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo8.jpg", userId: 4 },
      { title: "Red vest ready", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo9.jpg", userId: 4 },
      { title: "Odie", caption: "Just enjoying the morning", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo10.jpg", userId: 2 },
      { title: "Morning", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo11.jpg", userId: 2 },
      { title: "Lemme sleep more", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo12.jpg", userId: 2 },
      { title: "Paddle me", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo13.jpg", userId: 2 },
      { title: "Saturday field day", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo14.jpg", userId: 2 },
      { title: "Nap time", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo15.jpg", userId: 2 },
      { title: "Bliss", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo16.jpg", userId: 3 },
      { title: "Sledding", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo17.jpg", userId: 3 },
      { title: "Sleeping Alaskan Huskies", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo18.jpg", userId: 3 },
      { title: "Namiq", caption: "Goofy husky in the Artic Circle", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo19.jpg", userId: 3 },
      { title: "Frisbee throw", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo20.jpeg", userId: 3 },
      { title: "Cheesin", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo21.jpg", userId: 1 },
      { title: "Cotton candy", caption: "The scenery was so beautiful", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo22.jpg", userId: 1 },
      { title: "Happy", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo23.jpg", userId: 1 },
      { title: "Gotta catch the leaves", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo24.jpg", userId: 1 },
      { title: "Be cool", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo25.jpg", userId: 1 },
      { title: "Dreamy", caption: "A world with no problems", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo26.jpg", userId: 1 },
      { title: "Make a wish", caption: "Blowing some dandelions together", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo27.jpg", userId: 1 },
      { title: "Morning walk", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo28.jpg", userId: 1 },
      { title: "What do I smell?", caption: "It looked like something good was in the air", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo29.jpg", userId: 1 },
      { title: "Where am I?", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo30.jpg", userId: 1 },
      { title: "Let's go", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo31.jpg", userId: 1 },
      { title: "Deep breaths", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo32.jpg", userId: 1 },
      { title: "Two dogs", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo33.jpg", userId: 5 },
      { title: "Cinammon roll", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo34.jpg", userId: 5 },
      { title: "Halloween costumes", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo35.jpg", userId: 5 },
      { title: "What's this on my back?", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo36.jpg", userId: 5 },
      { title: "Flower crown", caption: "She loves the flower crown", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo37.jpg", userId: 5 },
      { title: "I'm stuck up here", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo38.jpg", userId: 5 },
      { title: "Borzoi dog", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo39.jpg", userId: 5 },
      { title: "Snow buddies", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo40.jpg", userId: 1 },
      { title: "Gimme the stick", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo41.jpg", userId: 1 },
      { title: "Hammocking", caption: "Just chilling outside with Odie", imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo42.jpg", userId: 2 },
      { title: "First snow", caption: null, imgURL: "https://puppr-content.s3.us-east-2.amazonaws.com/puppr-images/photo43.jpg", userId: 4 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
