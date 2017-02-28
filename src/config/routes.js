shareCar.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider)
{
  $routeProvider.when("/login", {
    templateUrl: "src/Login/loginGroup.html",
    controller: "loginCtrl"
  });
  $routeProvider.when("/createUser", {
    templateUrl: "src/CreateUser/createUser.html",
    controller: "createUserCtrl"
  });
  $routeProvider.when("/createUser/:id", {
    templateUrl: "src/CreateUser/createUser.html",
    controller: "createUserCtrl"
  });
  $routeProvider.when("/forgotPassword", {
    templateUrl: "src/ForgotPassword/forgotPassword.html",
    controller: "forgotPasswordCtrl"
  });
  $routeProvider.otherwise({redirectTo: "#/login"});

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');


}]);
