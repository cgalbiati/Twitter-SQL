//var _ = require('underscore');
//var Sequelize = require('sequelize');
var User = require('./models/index').User;
var Tweet = require('./models/index').Tweet;


var errorCatch = function(error) {
  console.error(error);
};

var addUser = function (name, pictureUrl) {
  // data.push({ name: name, text: text, id: data.length });
  //console.log(User.length);
User.findOrCreate({where: {name: name}, defaults: {pictureUrl: 'https://s-media-cache-ak0.pinimg.com/236x/7f/75/6b/7f756bcb3481db56650768cc5fc0cf50.jpg'}});
};

// addUser("Chandra", "http://www.fullstackacademy.com/img/team/nimit_maru@2x_nerd.jpg");

var addTweet = function (name, tweet) {
  var userMemo;
  return User.findOrCreate({where: {name: name}, defaults: {pictureUrl: 'https://s-media-cache-ak0.pinimg.com/236x/7f/75/6b/7f756bcb3481db56650768cc5fc0cf50.jpg'}
   }).spread(function(user){
     userMemo = user;
     return Tweet.create({id: null, UserId: user.id, tweet: tweet});
  }).then(function(theTweet) {
    var obj = {username: userMemo.name, picture: userMemo.pictureUrl, tweet: theTweet.tweet};
    return obj;
  }).catch(errorCatch);
};

// addTweet('Chandra', 'hi');
// addTweet('Swigs', 'hey');

var list = function () {
  //leftJoin Tweet, Users
  // show username, picture, tweet
  // User.hasMany(Tweet, {foreignKey: 'UserId'});
  // Tweet.belongsTo(User, {foreignKey: 'UserId'});
  return Tweet.findAll({include: [User]})
  .then(function(t){
      return t.map(function(elem){
        var obj = {username: elem.User.name, picture: elem.User.pictureUrl, tweet: elem.tweet};
        return obj;
      });
  }).catch(errorCatch);
};
//var t = list();
// console.log(t);



var findUser = function (username) {
    return Tweet.findAll({  include: [{model: User, where: {name: username}}]  })
    .then(function(t){
        return t.map(function(elem){
          var obj = {username: elem.User.name, picture: elem.User.pictureUrl, tweet: elem.tweet};
          return obj;
        });
    }).catch(errorCatch);
};

var findTweet = function (tweetID) {
    Tweet.findById(tweetID, {include: User})
    .then(function(t){
        return {username: t.User.name, picture: t.User.pictureUrl, tweet: t.tweet};
    }).catch(errorCatch);
};

// findTweet(1);
//console.log(findTweet(1));
module.exports = {
  addUser: addUser,
  addTweet: addTweet,
  list: list,
  findUser: findUser,
  findTweet: findTweet
};
