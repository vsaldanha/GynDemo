var routingApp = angular.module('routingApp', [ 'ngRoute', 'ui.grid',
		'ui.grid.pagination' ]);

console.log("Entered app.js")

/* Define Routing */
routingApp.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/index', {
				templateUrl : 'index.html',
				controller : 'HomeController'
			}).when('/grid', {
				templateUrl : 'Gyn/pages/grid.html',
				controller : 'GridController'
			}).when('/tabs', {
				templateUrl : 'Gyn/pages/tabular_forms.html',
				controller : 'TabController'
			}).otherwise({
				redirectTo : '/index'
			});
			$locationProvider.html5Mode({
				enabled : true,
				requireBase : false
			})
		} ]);

routingApp.controller(
				"uigridCtrl",
				function($scope, $http) {
					$scope.gridOptions = {
						enableFiltering : true,
						enablePagination : true,
						data : 'data',
						paginationPageSizes : [ 5, 10, 15 ],
						paginationPageSize : 5,
						onRegisterApi : function(gridApi) {
							$scope.grid1Api = gridApi;
						}
					};

					$scope.gridOptions.columnDefs = [
							{
								field : 'ur_number',
								cellTemplate : '<div><a href="/tabs">{{row.entity.ur_number}}</a></div>'
							}, {
								field : 'surname'
							}, {
								field : 'given_name'
							}, {
								field : 'date_of_birth'
							}, {
								field : 'first_presented_diagnosis'
							} ];

					$http.get('Gyn/mockJSON/mock.json').then(successCallback,
							errorCallback);
					function successCallback(data) {
						console.log(data.data);
						$scope.data = data.data;
					}
					function errorCallback(error) {
						console.log("AJAX call error");
					}

				});

/* Controller for Homepage */
routingApp.controller('HomeController', function($scope) {
	console.log("home controller executed");
	$scope.message = 'This is the homepage!';
});

/* Controller for Grid */
routingApp.controller(
				'GridController',
				function($scope) {
					console.log("grid controller executed");
					$scope.message = 'Message from Controller B. Using Routing showing in Template B.';
				});

/* Controller for displaying tabular forms */
routingApp.controller(
				'TabController',
				function($scope, $window, $http) {
					console.log("tab controller executed");
					
					$http.get('Gyn/mockJSON/PatientDetails.json').then(successCallback,
							errorCallback);
					function successCallback(data) {
						console.log(data.data);
						$scope.data = data.data;
					}
					function errorCallback(error) {
						console.log("AJAX call error");
					}
					$window.location.href="http://localhost:8080/Gyn/pages/tabular_forms.html";
				});