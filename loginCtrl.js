shareCar.controller("loginCtrl", ['$scope', '$location', function($scope, $location){

  $scope.isEmailExist = false;
  $scope.senha = '';

  $scope.verifyEmail = function(email)
  {
    //insert loginService

    $scope.name = 'Antônio Leão Braga';
    $scope.senha = '';
    $scope.isEmailExist = true;
  };

  $scope.backToLogin = function()
  {
    $scope.isEmailExist = false;
    $scope.senha = '';
    $scope.loginForm2.$setUntouched(true);
    $scope.loginForm2.$setPristine(true);

  };

  $scope.login = function()
  {
    //insert loginService
    // $scope.isEmailExist = false;
    $scope.isEmailExist = false;

  };

  $scope.pagAddUser = function()
  {
    $location.path("/createUser");
    //$scope.addUser = true;
  };

  $scope.pagForgotPass = function ()
  {
    $location.path("/forgotPassword")

  };



}]);
