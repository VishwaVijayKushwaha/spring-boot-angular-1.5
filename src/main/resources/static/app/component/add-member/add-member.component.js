'user strict';

angular.module('addMember')
	.component('addMember', {
		templateUrl:"app/component/add-member/add-member.html",
		controller: function($http, $scope){
			$scope.members = [],
			$scope.submitMember = function(){
				console.log('Clicked');
				$http.get("app/app.json")
					.success(function(response){
						return response.data;
					})
					.then(function(response) {
						console.log(response.data);
						console.log($scope.members);
						$scope.members = response.data;
						console.log($scope.members)
					});
			}
		}
	});

console.log('Loaded add-member.component.js');