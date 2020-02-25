(function () {

	let csv = angular.module(
		"csv", []);

	csv.config(function ($stateProvider) {
		$stateProvider.state(
			'csv', {
				url: '/csv',
				templateUrl: '/routes/csv/csv.html',
				controller: "csvCtrl",
				controllerAs: "csv"
			})
	});


	csv.controller(
		"csvCtrl",
		function ($scope, $http) {
			this.csv = $scope.$parent.csv;
			var csv = this;


			csv.send = function() {
				const form = document.getElementsByClassName()

			}



			//GET STAFF INFORMATION
			$http.get('assets/data/data.json').then(function(response) {
				$scope.staff = response.data;
				$scope.staffOrder = 'name';
			});







			//DEFAULT LIST OF NAMES
			csv.list = [
				"Contact", "Date", "Email", "Name", "Occupation", "Room",
			]
			//MAKE TAG NAME LIST ITEMS DRAGGABLE
			function $(id) {
				return document.getElementById(id);
			}

			dragula([$('drag-elements'), $('drop-target')], {
				revertOnSpill: true
			})







			







			
			//ADD DELETE BUTTON TO LIST
			csv.bool = false;
			csv.addx = function () {
				if (csv.bool == false){
					document.getElementById('drag-elements');
					csv.bool = true;
				} else {
					csv.bool = false;
				}

			}

			csv.delete = function () {
				var close = document.getElementsByClassName("close");
				var i;
			for (i = 0; i < close.length; i++) {
				close[i].onclick = function () {
					var div = this.parentElement;
					div.style.display = "none";
				}
			}
				
			}


			






			//CREATE TABLES WITH CSV CONTENT
			csv.makeTable = function (input) {

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

			jQuery(document).ready(function () {
				jQuery(document.body).on('mousedown', '#csvcontents', function () {
					var csvText = jQuery('#textinput').val()
					var table = makeTable(csvText)
					jQuery(table).appendTo('#output')
				})
			})







			

			// Click on a close button to hide the current list item
			var close = document.getElementsByClassName("close");
			var i;
			for (i = 0; i < close.length; i++) {
				close[i].onclick = function () {
					var div = this.parentElement;
					div.style.display = "none";
				}
			}

			// Create a new list item when clicking on the "Add" button
			csv.newElement = function () {
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
			}

			//OPENS ADD TAG DIV
			$scope.openUp = function () {

				document.getElementById('myDIV').style.display = 'block';

			}


		});


})();