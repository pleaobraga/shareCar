shareCar.controller("forgotPasswordCtrl", ['$scope', '$location', function($scope, $location){

  $scope.ChangedPassword = false;

  $scope.login = function()
  {
    //insert loginService

  };

  $scope.backToLogin = function()
  {
    $location.path("/login");
  };


  $scope.newPass = function ()
  {
    //insert loginService
    $scope.ChangedPassword = true;


  };






}]);
