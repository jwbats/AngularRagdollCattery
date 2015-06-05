(function(){
	var app = angular.module('angularCattery', []);
	
	app.controller('RagdollController', function(){
		this.ragdolls = GetRagdolls();
	});
	
	// let's pretend this is a service call
	function GetRagdolls() {
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
					'images/0.jpg',
					'images/1.jpg',
					'images/2.jpg',
					'images/3.jpg',
					'images/4.jpg',
					'images/5.jpg'
				]
			});
		}
		
		return ragdolls;
	}
	
})();