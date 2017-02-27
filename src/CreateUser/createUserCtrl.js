shareCar.controller("createUserCtrl", ['$scope', '$location', function($scope, $location)
{
  $scope.confirmPassword = '';

  $scope.backToLogin = function()
  {
    $location.path("/login");
  };

  $scope.createAccount = function ()
  {

    //insert loginService
    $scope.backToLogin();

  };

}]);
