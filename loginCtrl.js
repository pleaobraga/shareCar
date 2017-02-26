shareCar.controller("loginCtrl", ['$scope', '$location', function($scope, $location){

  $scope.isEmailExist = false;
  $scope.addUser = false;
  $scope.senha = '';
  $scope.forgotPass = false;

  $scope.verifyEmail = function(email)
  {
    //insert loginService

    $scope.name = 'Antônio Leão Braga';
    $scope.senha = '';
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

  $scope.createAccount = function ()
  {

    //insert loginService
    $scope.backToLogin();

  };

  $scope.pagForgotPass = function ()
  {
    $scope.forgotPass = true;

  };

  $scope.newPass = function ()
  {
    //insert loginService
  };






}]);
