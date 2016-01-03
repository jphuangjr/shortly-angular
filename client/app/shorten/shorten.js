angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.link = {};

  $scope.addLink = function(isValid){
    if(isValid){
      Links.addOne($scope.link);
      $scope.getAll();
      $scope.tester2 = $scope.link
    } else {
      alert("nahhhh BRAH. NO VALID URL. GET YOUR ISH TOGETHER")
    }
    
  };
  $scope.getAll = function(){
    Links.getAll().then(function(data){
      $scope.data.links = data;
    });
  };



  



  $scope.getAll();

});
