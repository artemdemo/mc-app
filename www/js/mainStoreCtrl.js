starter
.controller('mainStoreCtrl', ['$scope', '$http', '$location', '$ionicSideMenuDelegate', function($scope, $http, $location, $ionicSideMenuDelegate){

	$scope.storelist = [
		{ name: 'Nike', date: '2014-01-03', type: 'store' },{ name: 'Adidas', date: '2001-11-23', type: 'market' },{ name: 'Brooks', date: '1980-05-18', type: 'store' },{ name: 'HBO', date: '1990-06-15', type: 'local' },{ name: 'Nike', date: '2014-01-03', type: 'store' },{ name: 'Adidas', date: '2001-11-23', type: 'market' },{ name: 'Brooks', date: '1980-05-18', type: 'store' },{ name: 'HBO', date: '1990-06-15', type: 'local' },{ name: 'Nike', date: '2014-01-03', type: 'store' },{ name: 'Adidas', date: '2001-11-23', type: 'market' },{ name: 'Brooks', date: '1980-05-18', type: 'store' },{ name: 'HBO', date: '1990-06-15', type: 'local' },{ name: 'Nike', date: '2014-01-03', type: 'store' },{ name: 'Adidas', date: '2001-11-23', type: 'market' },{ name: 'Brooks', date: '1980-05-18', type: 'store' },{ name: 'HBO', date: '1990-06-15', type: 'local' }
	];

	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

	$scope.openstore = function( store ) {
		$location.path( '/store/' + store );
	}

}])