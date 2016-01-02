angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getAll = function(){
    Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  };
  $scope.addOne = function(){
    Links.addOne($scope.linkInput).then(function(data){
      $scope.getAll();
      $scope.tester= data;
    });
  };

  $scope.getAll();
  $scope.linkInput = "http://"

});
