'user strict';

angular.module('memberList')
	.component('memberList', {
		templateUrl:"app/component/member/member-list.html",
		controller: function($http, $scope){
			$scope.members = [];
			$scope.name = "";
			$scope.address = "";
			$scope.addMember = function(){
				var name = $scope.name;
				var address = $scope.address;
				$scope.name = "";
				$scope.address = "";
				console.log("Name:"+name+"  Address:"+address);
				$http.post("/api/member/add", {name:name, address:address})
				.success(function(response){
					return response.data;
				})
				.then(function(response){
					$scope.getMembers();
				})
			};
			$scope.getMembers = function(){
				$http.get("/api/member/all")
				.success(function(response){
					return response.data;
				})
				.then(function(response) {
					console.log(response.data);
					console.log($scope.members);
					$scope.members = response.data;
					console.log($scope.members)
				});
			};
			$scope.getMembers();
			
		}
	});

console.log('Loaded member-list.component.js');