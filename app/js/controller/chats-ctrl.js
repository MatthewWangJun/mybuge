define(['app','dataServices'], function (app) {
  return app.controller('ChatsCtrl', ['$scope','Chats','$timeout',function ($scope, Chats, $timeout) {
    $timeout(function(){
      $scope.chats=Chats.all();
    },200)

    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }]);
});

