shareCar.controller("loginCtrl", ['$scope', '$location', '$rootScope',function($scope, $location, $rootScope){

  if(angular.isUndefined($rootScope.user))
  {
    $rootScope.user = {name: '', lastName: '', email: '', passWord: '', groupName: '', isEmailExist: false};
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
    //$rootScope.user.isEmailExist = false;
    $location.path("/panteras/users")

  };

  $scope.verifyGroupName = function()
  {
    //service login
    $location.path("/createUser/" + $rootScope.user.groupName);
  }

  $scope.pagAddUser = function()
  {
    $location.path("/createUser");
  };

  $scope.paddAddGroupUser = function()
  {

  }

  $scope.pagForgotPass = function ()
  {
    $location.path("/forgotPassword")

  };



}]);
