//angular.module('todoApp',[]);//modulo que a su vez es aplicacion
var todoApp=angular.module('todoApp',[]);
//creamos controlador
todoApp.controller('TodoController',['$scope',function($scope){
	//console.log($scope);
	//obtenemos los datos
	var todos=[];
	//realmente seria con base de datos
	//todos=database.findAll();
	todos.push({done:false, task:"Aprender AngularJS"});
	todos.push({done:true, task:"Aprender CSS"});
	todos.push({done:false, task:"Aprender html"});
	/*pintamos los datos
	$scope es la que hace de intermediario entre el controlador y la 
	vista y le avisa a esta que tiene que tener en cuenta*/
	$scope.todos=todos;

	 $scope.addTodo = function() {
      $scope.todos.push({done:false, task:$scope.inputText });
      $scope.inputText = '';
    };
}]);
