shareCar.controller("vehiclesCtrl", ['$scope', function($scope){

    $scope.vehicleTypes = [
      {name : 'Carro', icon : 'directions_car'},
      {name : 'Moto', icon : 'motorcycle'},
      {name : 'Ônibus', icon : 'directions_bus'},
      {name : 'Náutico', icon : 'directions_boat'},
      {name : 'Caminhão', icon : 'local_shipping'}
    ];

    $scope.vehicleFabricant = ['Fiat', 'Renault', 'Volkswagen', 'Audi', 'Toyota', 'Ford', 'Honda', 'BMW', 'Land Rover', 'Chery', 'JAC'];

}]);
