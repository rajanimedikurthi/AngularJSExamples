'use strict';
var hellowWorldControllers=angular.module("hellowWorldControllers",[]);
hellowWorldControllers.controller('MainCtrl',['$scope', function MainCtrl($scope){
  $scope.message="Hello World";
}]);
hellowWorldControllers.controller('ShowCtrl',['$scope', function ShowCtrl($scope){
  $scope.message="Show Ctrl Hello World";
}]);
