shareCar.controller("loginCtrl", ['$scope', '$location', '$rootScope',function($scope, $location, $rootScope){

  if(angular.isUndefined($rootScope.user))
  {
    $rootScope.user = {name: '', lastName: '', email: '', passWord: '', isEmailExist: false};
  }

  $scope.verifyEmail = function(email)
  {
    //insert loginService

    $rootScope.user.name = 'Antônio';
    $rootScope.user.lastName = 'Leão Braga';
    $rootScope.usersenha = '';
    $rootScope.user.isEmailExist = true;
  };

  $scope.backToLogin = function()
  {
    $rootScope.user.isEmailExist = false;
    $rootScope.user.senha = '';
    $scope.loginForm2.$setUntouched(true);
    $scope.loginForm2.$setPristine(true);

  };

  $scope.login = function()
  {
    //insert loginService
    // $scope.isEmailExist = false;
    $rootScope.user.isEmailExist = false;

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
