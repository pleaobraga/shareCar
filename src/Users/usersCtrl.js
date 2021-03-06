shareCar.controller("usersCtrl", ['$scope','$mdMedia', function($scope, $mdMedia){

  $scope.users = [1,2,3];
  $scope.showOptionIcons = [];
  $scope.classImag = [];
  $scope.classIcon = [];
  $scope.usersActivate = [{id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car:[{car_name: 'Picasso', maker: 'Land Rover', owner: true},{car_name: 'Picasso', maker: 'Land Rover', owner: true},{car_name: 'Picasso', maker: 'Land Rover', owner: true}] }, {name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car:[{car_name: 'Picasso', maker: 'Land Rover', owner: true},{car_name: 'Picasso', maker: 'Land Rover', owner: true}] },{name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car:[{car_name: 'HB20', maker: 'Hyundai', owner: true},{car_name: 'Picasso', maker: 'Land Rover', owner: true}] },{name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car:[{car_name: 'Picasso', maker: 'Land Rover', owner: true}] }];

  $scope.usersInvited = [{id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com' }];

  //$scope.usersActivate = [];

  $scope.invite = function()
  {
    //userService
  };


  $scope.showOptionIcons = function(index)
  {
    $scope.showOptionIcons[index] = true;
    $scope.classIcon[index] = {'margin-top': '-86px'};
  };

  $scope.hideOptionIcons = function(index)
  {
    $scope.showOptionIcons[index] = false;
    $scope.classIcon[index] = {'margin-top': '16px'};
  };

  $scope.showOptionImage = function(index)
  {
    $scope.showOptionImage[index] = true;
    $scope.classImag[index] = {'margin-top': '-78px'};
    if($mdMedia('max-width: 600px')){
      $scope.classImag[index] = {'margin-top': '-58px'};
    };
  };

  $scope.hideOptionImage = function(index)
  {
    $scope.showOptionImage[index] = false;
    $scope.classImag[index] = {'margin-top': '16px'};
  };

  $scope.associateAnotherVehicle = function(idUser)
  {
    //veicleRedict
  };

  $scope.edit = function(id)
  {
    //usersService
    //edit function
  };

  $scope.deleteUser = function(id)
  {
    //usersService
  };

}]);
