//var _ = require('underscore');
//var Sequelize = require('sequelize');
var userTable = require('./models/index').User;
var tweetTable = require('./models/index').Tweet;


//var data = [];

var addUser = function (name, pictureUrl) {
  // data.push({ name: name, text: text, id: data.length });
  //console.log(userTable.length);
  userTable.create({id: null, name: name, pictureUrl: pictureUrl});
};

addUser("Chandra", "http://www.fullstackacademy.com/img/team/nimit_maru@2x_nerd.jpg");


// var list = function () {
//   return _.clone(data);
// };
//
// var find = function (properties) {
//   // return _.where(data, properties);
//
// };
//
// module.exports = { add: add, list: list, find: find };
//
// // seeding...
// var randArrayEl = function(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// };
//
// var getFakeName = function() {
//   var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
//   var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };
//
// var getFakeTweet = function() {
//   var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The fellows are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };
//
// for(var i=0; i<10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

module.exports = {
  addUser: addUser
};