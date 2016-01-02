angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.link = {};

  $scope.addLink = function(){
    Links.addOne($scope.link);
    $scope.getAll();
    $scope.tester2 = $scope.link
  };
  $scope.getAll = function(){
    Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  };



  $scope.getAll();

});
