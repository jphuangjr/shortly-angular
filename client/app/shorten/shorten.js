angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.link = {};

  $scope.addLink = function(){
    Links.addOne($scope.linkInput);
  };
  $scope.getAll = function(){
    Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  };
});
