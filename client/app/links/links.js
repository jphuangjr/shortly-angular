angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.addOne = function(){
    Links.addOne($scope.linkInput);
    $scope.getAll();
  };
  $scope.getAll = function(){
    $scope.ourLinks = Links.getAll();
  };
  $scope.ourLinks = {};

});
