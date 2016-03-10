var app = angular.module('myMod', []);

app.factory('myFact', function($http) {

	return $http.get('/api/just')

})

app.controller('myController', ['$scope', 'myFact', function($scope, myFact) {

	myFact.then(function(response) {
		console.log(response);
		$scope.lyric = response.data;
	})

}]);