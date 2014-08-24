var starter = angular.module('starter', ['ionic', 'ngRoute'])

.config(function ($routeProvider, $locationProvider)
{
	$routeProvider
	.when('/', {
		templateUrl: 'views/storelist.html'
	})
	.when('/store/:id', {
		templateUrl: 'views/store.html'
	})
	.otherwise({
		redirectTo: '/'
	});


})

.run(function($ionicPlatform)
{
	$ionicPlatform.ready(function()
	{
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs)
	if(window.cordova && window.cordova.plugins.Keyboard)
	{
	  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	}
	if(window.StatusBar)
	{
	  StatusBar.styleDefault();
	}
	});
})


