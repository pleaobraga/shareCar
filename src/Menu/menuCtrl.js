shareCar.controller("menuCtrl", ['$scope', '$location', '$routeParams', '$mdSidenav', function($scope, $location, $routeParams, $mdSidenav){

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
    if(pageName == 'login')
    {
        var adress = "/" + pageName;
    }
    else
    {
        var adress = "/" + $routeParams.group + "/" + pageName;
    }

    $location.path(adress);

  };

  $scope.goToSubMenuVehicles = function(subAba)
  {
    $scope.currentNavItem = subAba;

  };

  $scope.toggleLeft = buildToggler('left');
   $scope.toggleRight = buildToggler('right');

   function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
   };

   $scope.close = function(componentId)
   {
     $mdSidenav(componentId).close();
   };


}]);
