shareCar.controller("createUserCtrl", ['$scope', '$location', function($scope, $location){

  $scope.isEmailExist = false;
  $scope.addUser = false;
  $scope.senha = '';
  $scope.forgotPass = false;

  $scope.verifyEmail = function(email)
  {
    //insert loginService

    $scope.isEmailExist = true;
    $scope.name = 'Antônio Leão Braga';
    $scope.senha = '';
  };

  $scope.backToLogin = function()
  {

    $location.path("/login");
      //$scope.addUser = true;
    //
    // $scope.forgotPass = false;
    // $scope.addUser = false;
    // $scope.isEmailExist = false;
    // $scope.senha = '';
    // $scope.addUserForm.$setUntouched(true);
    // $scope.addUserForm.$setPristine(true);
    // $scope.loginForm2.$setUntouched(true);
    // $scope.loginForm2.$setPristine(true);

  };

  $scope.login = function()
  {
    //insert loginService
    // $scope.isEmailExist = false;
    $scope.isEmailExist = false;

  };

  $scope.pagAddUser = function()
  {
    $scope.addUser = true;
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
