var quizApp = angular
			.module('quizApp', ['ui.router'])
			.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
					$urlRouterProvider.otherwise('/');
					$stateProvider
						.state('main', {
							url: '/',
							templateUrl: 'pages/main.html',
							controller: 'listOfSoccerClubsCtrl'
						})
						.state('quiz', {
							url: '/quiz',
							templateUrl: 'pages/quiz.html',
							controller: 'quizCtrl'
						})
						.state('results', {
							url: '/results',
							templateUrl: 'pages/results.html',
							controller: 'resultsCtrl'
						});
						$locationProvider.html5Mode(true);
				}]);
