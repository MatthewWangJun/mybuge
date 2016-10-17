define(['app','dataServices'], function (app) {
  return app.controller('DashCtrl', ['$scope','$stateParams','Chats',function ($scope,$stateParams,Chats) {
    console.log($stateParams.id);
    $scope.chat =Chat.get($stateParams.id);
  }]);
});
