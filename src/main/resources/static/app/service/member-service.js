angular
	.module("memberList", [])
	.service("memberService", function($http){
		this.getMembers = function(){
			$http.get("app/app.json")
			.success(function(response){
				console.log(response.data);
				return response.data;
			});
		};
	});