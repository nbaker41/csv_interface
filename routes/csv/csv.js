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




//New List Addition	 
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
$scope.newElement = function () {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("drag-elements").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
	  
	});


})();