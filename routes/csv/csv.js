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
	
	function $(id) {
		return document.getElementById(id);
	  }
	  
	  dragula([$('drag-elements'), $('drop-target')], {
		revertOnSpill: true
	  })
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


	 


	});

})();