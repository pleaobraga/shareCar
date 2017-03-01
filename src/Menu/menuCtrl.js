shareCar.controller("menuCtrl", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){

  $scope.findLocateAba = function()
  {
    var aba = $location.url().split('/')

    $scope.aba = aba[2];

    if($scope.aba == 'vehicles')
    {
      $scope.currentNavItem = $routeParams.option;
    }

    switch ($scope.aba) {
      case 'vehicles':
        $scope.abaTranslate = 'Veículos';
        break;
        case 'users':
          $scope.abaTranslate = 'Usuários';
          break;

      default: $scope.abaTranslate = 'Dashboard';

    }

  };

  $scope.verifyaba = function(abaName)
  {
    return $scope.aba == abaName;
  };

  $scope.goToPage = function(pageName, subPage)
  {
    var adress = "/" + $routeParams.group + "/" + pageName;

    if(subPage)
    {
      adress += "/garage";

    }

    $location.path(adress);

  };

  $scope.goToSubMenuVehicles = function(subAba)
  {
    var adress = "/" + $routeParams.group + "/vehicles/" + subAba;
    $location.path(adress);

  };

}]);
