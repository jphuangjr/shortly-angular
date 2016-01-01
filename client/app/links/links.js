angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.addOne = function(){
    Links.addOne($scope.linkInput);
    $scope.getAll();
  };
  $scope.getAll = function(){
    Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  };

  $scope.getAll();

});
