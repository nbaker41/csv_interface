(function() {


    var app = angular.module('formCreateDirective', []);

    app.controller('formCtrl', ['$scope', function($scope)  {
        var app = this;
        // var id = document.getElementById(id).value;
        // var form = document.createElement(FORM);
        // inp.setAttribute("type", "text");
        var form = document.createElement(FORM);
        app.formCreate = function() {
        var inp = document.createElement(INPUT);
        inp.setAttribute("type", "text");
        inp.setAttribute("value", "Bad Juju...")
        }
        app.scrape = form.appendChild(inp);

    }])
    app.directive('formCreateDirective', function(){
        return {
            template: ''
        }
    })
})