(function(){

	let formCreate = angular.module(
	"formCreate", [
	]);

formCreate.directive('formCreate', function() {
  return {
    restrict:'E',
   link: function($scope, elem, attrs){
    csv.formCreate( "create", function () {

        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("value", "Hello World!");
        document.getElementById("fromHere").appendChild(x);

    })

   }
}
})
});