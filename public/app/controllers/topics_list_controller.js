FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
    });

    $scope.addTopic = function () {
        Api.addTopic($scope.newTopicue = {
            name: $scope.newTopic.name,
            description: $scope.newTopic.description
        }).success(function (newTopicue) {
            $location.path('/topics/' + newTopicue.id);
        });
    };
});
