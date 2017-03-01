shareCar.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider)
{
  $routeProvider.when("/login", {
    //templateUrl: "src/Login/login.html",
    templateUrl: "src/Login/login.html",
    controller: "loginCtrl"
  });
  $routeProvider.when("/group", {
    templateUrl: "src/Login/loginGroup.html",
    controller: "loginCtrl"
  });
  $routeProvider.when("/createUser", {
    templateUrl: "src/CreateUser/createUser.html",
    controller: "createUserCtrl"
  });
  $routeProvider.when("/createUser/:group", {
    templateUrl: "src/CreateUser/createUser.html",
    controller: "createUserCtrl"
  });
  $routeProvider.when("/forgotPassword", {
    templateUrl: "src/ForgotPassword/forgotPassword.html",
    controller: "forgotPasswordCtrl"
  });
  $routeProvider.when("/:group/vehicles/:option", {
    templateUrl: "src/Vehicles/vehicles.html",
    controller: "vehiclesCtrl"
  });
  $routeProvider.when("/:group/dashBoard", {
    templateUrl: "src/DashBoard/dashBoard.html",
    controller: "dashBoardCtrl"
  });
  $routeProvider.when("/:group/users", {
    templateUrl: "src/Users/users.html",
    controller: "usersCtrl"
  });
  $routeProvider.otherwise({redirectTo: "/login"});

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');


}]);
