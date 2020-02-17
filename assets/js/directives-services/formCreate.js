(function() {


    var app = angular.module('formCreate', []);
    app.directive('formCreate', function(){
        var form = {};

        form.restrict = 'E';

        form.template = '<form>{{tag.name}}<input type="text"></form>'
    })
})