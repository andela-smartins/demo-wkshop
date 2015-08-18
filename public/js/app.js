var app = angular.module('starter', ['ngRoute', 'vcRecaptcha']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'templates/home.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);


app.controller('mainController', ['$http', '$scope', function($http, $scope) {
  $scope.posts = {};

  $scope.create = function () {
    $http.post('/create', {title: 'Test', content: 'Test post for Tutorial'})
      .success(function (data) {
        alert('Successfully created', data);
      })
      .error(function(err) {
        alert('Error');
      });
  };

  $scope.getPosts = function () {
    $http.get('/get')
      .success(function (data) {
        console.log(data);
        $scope.posts = data;
      })
      .error(function() {
        alert('Error');
      });
  };

}]);
