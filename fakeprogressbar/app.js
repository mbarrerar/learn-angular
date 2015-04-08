	var myApp = angular.module('myApp',[]);

	myApp.controller('ProgressController', ['$scope','$interval', function($scope, $interval) {
	  var p = 0;
	  var promise;
	  $scope.labelstart = 'Iniciar';
	  $scope.start = function(){
	  		if ( angular.isDefined(promise) ) return;
		    promise = $interval( function(){ 
			 if(p < 100){
			 	p++;
			 	$scope.porcentaje = p;
			 }else{
			 	$scope.stop();
			 }
		  }, 100);
	}

	  $scope.stop = function(){
	  	console.log('called stop')
	  	if (angular.isDefined(promise)) {
	  		$interval.cancel(promise);
	  		promise = undefined;
	  		$scope.labelstart = 'Continuar';	  	}
	  }

	  $scope.reset = function(){
	  	if(!angular.isDefined(promise)){
	  		p = 0;
	  		 $scope.labelstart = 'Iniciar';
	  		$scope.porcentaje = 0;
	  	}
	  }

	   $scope.$on('$destroy', function() {
 			$scope.stop();
        });

	}]);