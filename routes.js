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
  $routeProvider.when("/forgotPassword", {
    templateUrl: "forgotPassword.html",
    controller: "forgotPasswordCtrl"
  });
  $routeProvider.otherwise({redirectTo: "/login"});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


}]);
