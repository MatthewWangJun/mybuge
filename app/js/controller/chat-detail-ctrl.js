define(['app'], function (app) {
  return app.controller('ChatDetailCtrl', ['$scope',function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }]);
});
