FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  
  console.log($routeParams.id);
  Api.getTopic($routeParams.id).success(function(topic) {
      $scope.topic = topic;
  })
});
