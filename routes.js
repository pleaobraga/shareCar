shareCar.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider)
{
  $routeProvider.when("/login", {
    templateUrl: "login.html",
    controller: "loginCtrl"
  });
  $routeProvider.when("/createUser", {
    templateUrl: "createUser.html",
    controller: "createUserCtrl"
  });
  $routeProvider.otherwise({redirectTo: "/login"});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


}]);