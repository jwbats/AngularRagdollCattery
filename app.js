(function(){
	var app = angular.module('angularCattery', []);
	
	app.controller('PhotoController', function(){
		this.imageIndex = 0;
		
		this.setPhotoIndex = function(index){
			this.imageIndex = index || 0;
		}
		
		this.getPhotoUrl = function(ragdoll){
			return (this.imageIndex < ragdoll.Photos.length)
				? ragdoll.Photos[this.imageIndex]
				: 'images/error.jpg';
		}
	});
	
	app.controller('RagdollController', function(){
		this.ragdolls = GetRagdolls();
	});
	
	// let's pretend this is a service call
	function GetRagdolls() {
		return [
			{
				Name : 'Fleurtje',
				Color : 'Seal point',
				Fluffiness: 100,
				Photos : [
					'images/fleurtje/0.jpg',
					'images/fleurtje/1.jpg',
					'images/fleurtje/2.jpg',
					'images/fleurtje/3.jpg',
					'images/fleurtje/4.jpg',
					'images/fleurtje/5.jpg'
				]
			},
			{
				Name : 'Random',
				Color : 'All sorts!',
				Fluffiness: 100,
				Photos : [
					'images/random/0.jpg',
					'images/random/1.jpg',
					'images/random/2.jpg',
					'images/random/3.jpg',
					'images/random/4.jpg',
					'images/random/5.jpg'
				]
			}
		];
	}
	
	// let's pretend this is a service call
	function GetRagdolls2() {
		var ragdolls = [];
		
		var names = ['Pete', 'Zeke', 'Zachary', 'Jake', 'Leo', 'Dude'];
		var colors = ['A bit white', 'Lots of white', 'A bit gray', 'Lots of gray', 'Standard white', 'White/black mix'];
		
		for (var i = 0; i < 6; i++)
		{
			ragdolls.push({
				Name : names[i],
				Color : colors[i],
				Fluffiness: 100 + i,
				Photos : [
					'images/random/0.jpg',
					'images/random/1.jpg',
					'images/random/2.jpg',
					'images/random/3.jpg',
					'images/random/4.jpg',
					'images/random/5.jpg'
				]
			});
		}
		
		return ragdolls;
	}
	
})();