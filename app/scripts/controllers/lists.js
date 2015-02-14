'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('ListsCtrl', function ($scope,$routeParams, $localStorage) {
    $scope.$storage = $localStorage;


if ($localStorage.Lists){
 $scope.lists = $localStorage.Lists;

}else
{
  $localStorage.Lists = [
  {id: 0, title:'to read',remain : 2,list:[{name:"brief history of time",done:false},{name:"The elegant universe",done:false}]},
  {id: 1, title:'to buy',remain : 0,list:[]},
  {id: 2, title:'today',remain : 0,list:[]}
];

 $scope.lists = $localStorage.Lists;
}
   

    

  $scope.currentId = $routeParams.id;
  //console.log( $scope.currentId); 
  if ($scope.currentId){
  $scope.list=$scope.lists[$scope.currentId].list;
   $scope.currentList=$scope.lists[$scope.currentId].title;
}

	$scope.addList = function() {
	 $scope.newId = $scope.lists.length; 
    // console.log( newId); 
     $scope.lists.push({id : $scope.newId ,title: $scope.newListName ,remain : 0,list:[]});
      $localStorage.Lists=$scope.lists;
    };


   $scope.addItem = function() {

     $scope.list.push({name :$scope.newItemName ,done: false});
      $scope.lists[$scope.currentId].list=$scope.list;
      $scope.newItemName="";
      $scope.lists[$scope.currentId].remain=$scope.lists[$scope.currentId].remain+1;
      //console.log( $scope.lists[$scope.currentId].remain);
      $localStorage.Lists=$scope.lists;
    };

    $scope.deleteItem = function(i) {
    	console.log(i);
    	$scope.list.splice(i, 1);
    	$scope.lists[$scope.currentId].list=$scope.list;
      $localStorage.Lists=$scope.lists;
  	};



  });