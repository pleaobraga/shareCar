shareCar.controller("createUserCtrl", ['$scope', '$location','$routeParams', function($scope, $location, $routeParams)
{
  $scope.confirmPassword = '';

  $scope.group = $routeParams.group;

  $scope.hasGroup = function()
  {
    return !(angular.isUndefined($scope.group) || $scope.group == '' || $scope.group == null);
  }

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
