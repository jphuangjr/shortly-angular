angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.addLink = function(){
    Links.addLink();
    $scope.getLinks();
  };
  $scope.getLinks = function(){
    $scope.data = Links.getLinks();
  };
  $scope.data = {};

});
