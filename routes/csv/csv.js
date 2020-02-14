(function () {

	let csv = angular.module(
		"csv", [
		]);

	csv.config(function ($stateProvider) {
		$stateProvider.state(
			'csv', {
				url: '/csv',
				templateUrl: '/routes/csv/csv.html',
				controller: "csvCtrl",
				controllerAs: "csv"
			})
	});
 csv
	csv.controller(
    "csvCtrl",
    function ($scope, $stateParams) {
    this.csv = $scope.$parent.csv;
	var csv = this;
	
	function makeTable(input) {

		var rows = input.split('\n'),
			table = document.createElement('table'),
			tr = null,
			td = null,
			tds = null;
	  
		for (var i = 0; i < rows.length; i++) {
		  tr = document.createElement('tr');
		  tds = rows[i].split(',');
		  for (var j = 0; j < rows.length; j++) {
			tds[j] = typeof tds[j] != "undefined" ? tds[j] : ""
			td = document.createElement('td');
			td.innerHTML = tds[j];
			tds[j] = typeof tds[j] == "undefined"
			tr.appendChild(td);
		  }
		  table.appendChild(tr);
		}
	  
		return table
	  
	  }
	  
	  jQuery(document).ready(function() {
		jQuery(document.body).on('mousedown', '#csvcontents', function() {
		  var csvText = jQuery('#textinput').val()
		  var table = makeTable(csvText)
		  jQuery(table).appendTo('#output')
		})
	  })


	  $scope.$on('second-bag.drag', function (e, el) {
		el.removeClass('ex-moved');
	  });
	
	  $scope.$on('second-bag.drop', function (e, el) {
		el.addClass('ex-moved');
	  });
	
	  $scope.$on('second-bag.over', function (e, el, container) {
		container.addClass('ex-over');
	  });
	
	  $scope.$on('second-bag.out', function (e, el, container) {
		container.removeClass('ex-over');
	  });
	});
	
	csv.controller('AnotherExampleCtrl', ['$scope', 'dragulaService',
	  function ($scope, dragulaService) {
		dragulaService.options($scope, 'third-bag', {
		  removeOnSpill: true
		});
	  }
	]);
	
	csv.controller('SuchExampleCtrl', ['$scope', 'dragulaService',
	  function ($scope, dragulaService) {
		dragulaService.options($scope, 'fourth-bag', {
		  revertOnSpill: true
		});
	  }
	]);
	
	csv.controller('VeryExampleCtrl', ['$scope', 'dragulaService',
	  function ($scope, dragulaService) {
		dragulaService.options($scope, 'fifth-bag', {
		  copy: true
		});
	  }
	]);
	
	csv.controller('MuchExampleCtrl', ['$scope', 'dragulaService',
	  function ($scope, dragulaService) {
		dragulaService.options($scope, 'sixth-bag', {
		  moves: function (el, container, handle) {
			return handle.classList.contains('handle');
		  }
		});
	  }
	]);
	
	csv.controller('WowExampleCtrl', ['$scope', '$timeout',
	  function ($scope, $timeout) {
		$scope.onclick = onclick;
	
		function onclick () {
		  $scope.clicked = true;
		  $timeout(function offclick () {
			$scope.clicked = false;
		  }, 2000);
		}
	  }
	]);
	
	csv.controller('RepeatCtrl', ['$scope',
	  function ($scope) {
		$scope.many = ['The', 'possibilities', 'are', 'endless!'];
		$scope.many2 = ['Explore', 'them'];
	  }
	]);
	
	csv.controller('NestedRepeatCtrl', ['$scope',
	  function ($scope) {
		$scope.groups = [
		  {
			name: 'Group A',
			items: [{name: 'Item A'},{name: 'Item B'},{name: 'Item C'},{name: 'Item D'}]
		  },
		  {
			name: 'Group B',
			items: [{name: 'Item 1'},{name: 'Item 2'},{name: 'Item 3'},{name: 'Item 4'}]
		  }
		];
	
		$scope.$on('nested-bag.drop', function(e, el, container, source) {
		  console.log(container.scope());
		});



	}]);

})();