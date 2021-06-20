'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      { title: "Outdoors", caption: "Went for a morning hike with my pup", imgURL: "https://images.unsplash.com/photo-1591225721994-8dec7e2c7ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 4 },
      { title: "Beachy", caption: null, imgURL: "https://images.unsplash.com/photo-1594922099630-c5c0e8f2435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80", userId: 4 },
      { title: "Go fetch", caption: null, imgURL: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80", userId: 4 },
      { title: "Feeling pretty", caption: null, imgURL: "https://images.unsplash.com/photo-1593874105671-d745ff7ce8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 4 },
      { title: "Bourne woods", caption: null, imgURL: "https://images.unsplash.com/photo-1531791245779-d204d0e77e44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1594&q=80", userId: 4 },
      { title: "Tired", caption: null, imgURL: "https://images.unsplash.com/photo-1554079501-d62bfb6f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80", userId: 4 },
      { title: "Surrey Hills", caption: "Sitting on an old stump surrounded by purple flowers", imgURL: "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 4 },
      { title: "Sunset", caption: null, imgURL: "https://images.unsplash.com/photo-1604165094771-7af34f7fd4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", userId: 4 },
      { title: "Red vest ready", caption: null, imgURL: "https://images.unsplash.com/photo-1579981585180-a607ac041812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 4 },
      { title: "Odie", caption: "Just enjoying the morning", imgURL: "https://images.unsplash.com/photo-1546447147-3fc2b8181a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2RpZSUyMGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Morning", caption: null, imgURL: "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9kaWUlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Lemme sleep more", caption: null, imgURL: "https://images.unsplash.com/photo-1529343097104-386dca989049?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2RpZSUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Paddle me", caption: null, imgURL: "https://images.unsplash.com/photo-1561312176-5aedf7172115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Saturday field day", caption: null, imgURL: "https://images.unsplash.com/photo-1535914125057-dc89f2ec083d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2RpZSUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Nap time", caption: null, imgURL: "https://images.unsplash.com/photo-1520721973443-8f2bfd949b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2RpZSUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "Bliss", caption: null, imgURL: "https://images.unsplash.com/photo-1540092634799-a937b758282a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1c2tpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 3 },
      { title: "Sledding", caption: null, imgURL: "https://images.unsplash.com/photo-1495377701095-00261b767581?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", userId: 3 },
      { title: "Sleeping Alaskan Huskies", caption: null, imgURL: "https://images.unsplash.com/photo-1526241136408-e149857c5548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80", userId: 3 },
      { title: "Namiq", caption: "Goofy husky in the Artic Circle", imgURL: "https://images.unsplash.com/photo-1526240738457-1b84344668ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80", userId: 3 },
      { title: "Frisbee throw", caption: null, imgURL: "https://images.unsplash.com/photo-1558430100-fa153c59d51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 3 },
      { title: "Cheesin", caption: null, imgURL: "https://images.unsplash.com/photo-1546708455-bcf526639c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 1 },
      { title: "Cotton candy", caption: "The scenery was so beautiful", imgURL: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 1 },
      { title: "Happy", caption: null, imgURL: "https://images.unsplash.com/photo-1584005982132-c114b40608f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80", userId: 1 },
      { title: "Gotta catch the leaves", caption: null, imgURL: "https://images.unsplash.com/photo-1542370504-659b9da35022?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", userId: 1 },
      { title: "Be cool", caption: null, imgURL: "https://images.unsplash.com/photo-1533273859801-d731381dfe2d?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 1 },
      { title: "Dreamy", caption: "A world with no problems", imgURL: "https://images.unsplash.com/photo-1580298689915-73cb3035ae1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80", userId: 1 },
      { title: "Make a wish", caption: "Blowing some dandelions together", imgURL: "https://images.unsplash.com/photo-1526394024593-9c828fb04420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1620&q=80", userId: 1 },
      { title: "Morning walk", caption: null, imgURL: "https://images.unsplash.com/photo-1536267656550-21325499adb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", userId: 1 },
      { title: "What do I smell?", caption: "It looked like something good was in the air", imgURL: "https://images.unsplash.com/photo-1530388912399-100ec80bf4ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80", userId: 1 },
      { title: "Where am I?", caption: null, imgURL: "https://images.unsplash.com/photo-1536880337592-fb77aa719b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80", userId: 1 },
      { title: "Let's go", caption: null, imgURL: "https://images.unsplash.com/photo-1530564299287-6dded211c615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80", userId: 1 },
      { title: "Deep breaths", caption: null, imgURL: "https://images.unsplash.com/photo-1531086703779-e8678f3b996b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80", userId: 1 },
      { title: "Two dogs", caption: null, imgURL: "https://images.unsplash.com/photo-1585563563490-bbab51a9ab77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "Cinammon roll", caption: null, imgURL: "https://images.unsplash.com/photo-1585592053073-2b85decdc72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "Halloween costumes", caption: null, imgURL: "https://images.unsplash.com/photo-1585591572951-1f63ff005813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", userId: 5 },
      { title: "What's this on my back?", caption: null, imgURL: "https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "Flower crown", caption: "She loves the flower crown", imgURL: "https://images.unsplash.com/photo-1585589930868-9c1f174f1dc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "I'm stuck up here", caption: null, imgURL: "https://images.unsplash.com/photo-1585591204086-3cca950223b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "Borzoi dog", caption: null, imgURL: "https://images.unsplash.com/photo-1585563803284-cbfaadedb2ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 5 },
      { title: "Snow buddies", caption: null, imgURL: "https://images.unsplash.com/photo-1583762713699-7a6d1b8b6679?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 1 },
      { title: "Gimme the stick", caption: null, imgURL: "https://images.unsplash.com/photo-1536835542494-a43c885482f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 1 },
      { title: "Hammocking", caption: "Just chilling outside with Odie", imgURL: "https://images.unsplash.com/photo-1585761006683-e758bde62637?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", userId: 2 },
      { title: "First snow", caption: null, imgURL: "https://images.unsplash.com/photo-1550180252-8ac7596afd52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", userId: 4 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
