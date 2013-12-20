angular.module('appModule')

.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'mainController',
				templateUrl: 'client/views/main.html'
			})
		.when('/login',
			{
				controller: 'loginController',
				templateUrl: 'client/views/login.html'
			})
		.when('/parker/list',
			{
				controller: 'parkerListController',
				templateUrl: 'client/views/parker/list.html'
			})
		.when('/parker/pickUpRider',
			{
				controller: 'parkerPickUpController',
				templateUrl: 'client/views/parker/pickUp.html'
			})
		.when('/rider/where',
			{
				controller: 'riderWhereController',
				templateUrl: 'client/views/rider/where.html'
			})
		.when('/rider/wait',
			{
				controller: 'riderWaitController',
				templateUrl: 'client/views/rider/wait.html'
			})
		.when('/rider/coming',
			{
				controller: 'riderComingController',
				templateUrl: 'client/views/rider/coming.html'
			})
		.otherwise({
			redirectTo: '/'
		});
})