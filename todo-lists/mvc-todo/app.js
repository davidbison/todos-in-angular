var app = angular.module("Todo", []);
app.controller("TodoCtrl", function($scope) {
  $scope.tasks = [
    "Build Todo List", "Watch Videos on AngularJS", "Outline Informative Screencast", "~Go Home and Eat Smokehouse~"
  ];

  $scope.done = function(todo) {
    var indexOf = $scope.tasks.indexOf(todo);
    if (indexOf !== -1) {
      $scope.tasks.splice(indexOf, 1);
    }
  };

  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.tasks.push($scope.newTask);
      $scope.newTask = "";
    }
  };

});