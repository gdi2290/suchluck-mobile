angular.module('home', [])

.config(function($stateProvider) {

  $stateProvider
  .state('app.home', {
    url: '/search',
    views: {
      'main': {
        templateUrl: 'app/home/home.html'
      }
    }
  });

})

.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');

});