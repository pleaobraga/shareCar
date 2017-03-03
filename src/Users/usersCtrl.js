shareCar.controller("usersCtrl", ['$scope', function($scope){

  $scope.users = [1,2,3];
  $scope.showOptionIcons = [];
  $scope.classImag = [];
  $scope.classIcon = [];
  $scope.usersActivate = [{id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car_name: 'Picasso', maker: 'Land Rover', owner: true }, {name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car_name: 'Picasso', maker: 'Land Rover', owner: true },{name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car_name: 'Picasso', maker: 'Land Rover', owner: true },{name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com',
  phone: '(31)99993-3774', car_name: 'Picasso', maker: 'Land Rover', owner: true }];

  $scope.usersInvited = [{id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com' },
    {id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com' },
  {id: 0, name: 'Antonio Leão Braga', email: 'pedro_leao_braga@hotmail.com' }];

  //$scope.usersActivate = [];

  $scope.invite = function()
  {
    //userService
  };

  $scope.showOptionIcons = function(index)
  {
    $scope.showOptionIcons[index] = true;
    $scope.classIcon[index] = {'margin-top': '-90px'};
  };

  $scope.hideOptionIcons = function(index)
  {
    $scope.showOptionIcons[index] = false;
    $scope.classIcon[index] = {'margin-top': '16px'};
  };

  $scope.showOptionImage = function(index)
  {
    $scope.showOptionImage[index] = true;
    $scope.classImag[index] = {'margin-top': '-68px'};
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
