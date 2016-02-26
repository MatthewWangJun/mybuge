angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

   /* navigator.contactsPhoneNumbers.list(function(contacts) {
      $timeout(function(){
        $scope.chats=contacts;
      })
    }, function(error) {
      console.error(error);
    });*/
    $timeout(function(){
      $scope.chats=Chats.all();
    },200)

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams,Chats) {
console.log($stateParams.id)
  $scope.chat =Chats.get($stateParams.id);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
