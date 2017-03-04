shareCar.controller("menuCtrl", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){

  $scope.group = $routeParams.group;

  $scope.findLocateAba = function()
  {
    var aba = $location.url().split('/')

    $scope.aba = aba[2];

    if($scope.aba == 'vehicles')
    {
      $scope.currentNavItem = 'garage';
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

  $scope.goToPage = function(pageName)
  {
    var adress = "/" + $routeParams.group + "/" + pageName;


    $location.path(adress);

  };

  $scope.goToSubMenuVehicles = function(subAba)
  {
    $scope.currentNavItem = subAba;

  };

}]);
