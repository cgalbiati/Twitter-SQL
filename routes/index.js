var tweetBank = require('../tweetBank');


module.exports = function (io) {
	var router = require('express').Router();

	router.get('/', function (req, res) {
		// will trigger res.send of the index.html file
		// after rendering with swig.renderFile
		tweetBank.list().then(function(tweetList){
			res.render('index', {
				showForm: true,
				title: 'Home',
				tweets: tweetList
			});
		});
	});

	router.get('/users/:name', function (req, res) {

		tweetBank.findUser(req.params.name)
		.then(function(tweetList){
			res.render('index', {
				showForm: true,
				title: req.params.name,
				tweets: tweetList,
				theName: req.params.name
			});
		});
	});

	router.get('/users/:name/tweets/:id', function (req, res) {
		var id = parseInt(req.params.id);
		tweetBank.findUser(req.params.name)
		.then(function(tweetList){
			res.render('index', {
				title: req.params.name,
				tweets: tweetList
			});
		});
	});

	router.post('/submit', function (req, res) {
	// 	tweetBank.add(req.body.shenanigans, req.body.text);
	// 	var theNewTweet = tweetBank.list().pop();
	// 	io.sockets.emit('new_tweet', theNewTweet);
	// 	res.redirect('/');
	});
	return router;
};
