var routingApp = angular.module('routingApp', [ 'ngRoute', 'ui.grid', 'ui.grid.pagination' ]);

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
			}).otherwise({
				redirectTo : '/index'
			});
			$locationProvider.html5Mode({
				enabled : true,
				requireBase : false
			})
		} ]);

routingApp.controller("uigridCtrl", function($scope) {
	$scope.gridOptions = {
		enableFiltering : true,
		enablePagination: true,
		paginationPageSizes: [5, 10, 15],
		paginationPageSize: 5,
		onRegisterApi : function(gridApi) {
			$scope.grid1Api = gridApi;
		}
	};
	$scope.users = [ {
		ur_number : 154104,
		surname : 'Bortignon',
		given_name : 'Maureen Joy',
		date_of_birth : '21/10/1951',
		first_presented_diagnosis : 'Uterus'
	}, {
		ur_number : 158875,
		surname : 'Cumming',
		given_name : 'Tahnee',
		date_of_birth : '09/02/1976',
		first_presented_diagnosis : 'Cervix'
	}, {
		ur_number : 151233,
		surname : 'Simpkin',
		given_name : 'Dorothy May',
		date_of_birth : '01/05/1974',
		first_presented_diagnosis : 'Vulva'
	}, {
		ur_number : 167890,
		surname : 'Walters',
		given_name : 'Margaret Anne',
		date_of_birth : '10/10/1988',
		first_presented_diagnosis : 'Ovary'
	}, {
		ur_number : 134569,
		surname : 'De Bruijne',
		given_name : 'Elizabeth',
		date_of_birth : '16/04/1969',
		first_presented_diagnosis : 'Fallopian Tube'
	}, {
		ur_number : 151109,
		surname : 'Poland',
		given_name : 'Rose',
		date_of_birth : '28/03/1959',
		first_presented_diagnosis : 'Uterus'
	}, {
		ur_number : 153567,
		surname : 'Bishop',
		given_name : 'Mary',
		date_of_birth : '09/02/1976',
		first_presented_diagnosis : 'Cervix'
	}, {
		ur_number : 134657,
		surname : 'Lees',
		given_name : 'Alison',
		date_of_birth : '01/05/1974',
		first_presented_diagnosis : 'Vulva'
	}, {
		ur_number : 166752,
		surname : 'Vaega',
		given_name : 'Voice',
		date_of_birth : '30/09/1980',
		first_presented_diagnosis : 'Ovary'
	}, {
		ur_number : 145678,
		surname : 'Jacobs',
		given_name : 'Robyn',
		date_of_birth : '16/03/1986',
		first_presented_diagnosis : 'Ovary'
	},

	];
	$scope.gridOptions.data = $scope.users;
});

/* Controller for Homepage */
routingApp.controller('HomeController', function($scope) {
	console.log("home controller executed");
	$scope.message = 'This is the homepage!';
});

/* Controller for Grid */
routingApp
		.controller(
				'GridController',
				function($scope) {
					console.log("grid controller executed");
					$scope.message = 'Message from Controller B. Using Routing showing in Template B.';
				});