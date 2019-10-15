var app = angular.module("mainApp", [ 'ngRoute' ]);

app.controller('step1controller', function($scope, $location, $q, $http) {

	$scope.step2 = function() {
		console.log($scope.neuro);
		window.location = "step2.html"; // TODO : remove this after url call
		// TODO:: url of API
		url = '';
		var deferred = $q.defer();
		$http.post(url, $scope.neuro).then(function(response) {
			deferred.resolve(response);
			window.location = "step2.html";
		}, function(errResponse) {
			alert('Error while callin API');
			deferred.reject(errResponse);
		});
		return deferred.promise;

	}
});

app.controller('step2controller', function($scope, $location) {
	
		
	$scope.step2 = function() {
		// TODO:: call of API same as above method
	}

});
