(function(){
	var app = angular.module('cattery-directives', []);
	
	app.directive('ragdollReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'ragdoll-reviews.html',
			controller: function(){
				
			},
			controllerAs:'reviewCtrl'
		};
	});
	
})();