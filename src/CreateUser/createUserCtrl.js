shareCar.controller("createUserCtrl", ['$scope', '$location','$routeParams', function($scope, $location, $routeParams)
{
  $scope.confirmPassword = '';

  $scope.group = $routeParams.group;

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
