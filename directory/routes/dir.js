(function () {

	let dir = angular.module(
		"directory", [
		]);

	dir.config(function ($stateProvider) {
		$stateProvider.state(
			'directory', {
				url: '/directory',
				templateUrl: '/directory/routes/directory.html',
				controller: "directoryCtrl",
				controllerAs: "dir"
			})
	});
 dir
	dir.controller(
    "dirCtrl",
    function ($scope, $stateParams) {
    this.dir = $scope.$parent.dir;
	var dir = this;
	

	//   .on('drop', function(el) {
		// if ($('drop-target').children.length > 0) {
		//   $('display').innerHTML = $('drop-target').innerHTML;
		// } else {
		//   $('display').innerHTML = "Display";
		// }
	  
	//   });


	// function createHeader() {
	// 	var zone = document.getElementById('drop-target');
	
	// 	for (var h = 0; h <rows.length; h++) {
	// 		th = document.createElement('th');

	// 	}

	// }



 	});


})();