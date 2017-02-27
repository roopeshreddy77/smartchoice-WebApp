/**
 * Created by roope on 10/21/2016.
 */

var myApp=angular.module('myApp', ['ngRoute','firebase']);

var dbRefObject = firebase.database().ref().child('sellers');


// Routing
myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/',{
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/signin',{
            templateUrl: 'pages/signin.html',
            controller: 'signinController'
        })

        .when('/signup',{
            templateUrl: 'pages/signup.html',
            controller: 'signupController'
        })

        .when('/:key',{
            templateUrl: 'pages/sellerpage.html',
            controller: 'sellerPageController'
        })



})




// Controllers
myApp.controller('mainController', ['$scope', '$firebaseArray', '$routeParams' , function ($scope, $firebaseArray, $routeParams) {

    $scope.name="Main";
    var dbRefObject = firebase.database().ref();
    $scope.sellers = $firebaseArray(dbRefObject.child('sellers'));
    $scope.key = $routeParams.key;


}]);

myApp.controller('signinController', function ($scope) {

});

myApp.controller('signupController', function ($scope) {

});

myApp.controller('sellerPageController', ['$scope', '$firebaseArray','$routeParams', function ($scope, $firebaseArray, $routeParams){
    var dbRefObject = firebase.database().ref();
    $scope.items = $firebaseArray(dbRefObject.child("Items"));
    $scope.itemlist = $firebaseArray(dbRefObject.child("Items").child());
    console.log($scope.itemlist);

}]);


// Directives
 myApp.directive("sellerList", function() {
     return {
         restrict: 'AECM',
         templateUrl: 'directives/sellerlist.html',
         replace: true,
         scope: {
             sellers: "=",
         },
         controller: function($scope){
             console.log("in directive");
             $scope.getDetails = function(seller){
                 console.log("seller");
                 //$location.path("/"+id);
             };
         }
     };
});





