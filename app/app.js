// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
define ([
  'angularAMD',
  'ionic',
  'ng-cordova',
  'angularUiRouter',
  'angular-ionic',
  'angular-animate'
],function(angularAMD ) {
    var app = angular.module('app', ['ionic','ui.router']);
    app.run(function ($ionicPlatform) {

      $ionicPlatform.ready(function () {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
            Chats.getContacts();
          }
          if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
          }
        }
      );
      // Chats.getContacts();
    })
   app.constant("'ENV', {name:'development',apiEndpoint:'http://dev.yoursite.com:10000/'", "/angularAMD");

   app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
     console.log("*************");
      $ionicConfigProvider.platform.ios.tabs.style('standard');
      $ionicConfigProvider.platform.ios.tabs.position('bottom');
      $ionicConfigProvider.platform.android.tabs.style('standard');
      $ionicConfigProvider.platform.android.tabs.position('standard');

      $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
      $ionicConfigProvider.platform.android.navBar.alignTitle('left');

      $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
      $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

      $ionicConfigProvider.platform.ios.views.transition('ios');
      $ionicConfigProvider.platform.android.views.transition('android');
      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider


      // setup an abstract state for the tabs directive
        .state('tab', angularAMD.route({
          url: '/tab',
          abstract: true,
          templateUrl: 'views/tabs.html'
        }))

        // Each tab has its own nav history stack:

        .state('tab.dash', angularAMD.route({
          url: '/dash',
          views: {
            'tab-dash': angularAMD.route({
              templateUrl: 'views/tab-dash.html',
              controller: 'DashCtrl'
            })
          }
        }))

        .state('tab.chats', angularAMD.route({
          url: '/chats',
          views: {
            'tab-chats':  angularAMD.route({
              templateUrl: 'views/tab-chats.html',
              controller: 'ChatsCtrl'
            })
          }
        }))
        .state('tab.chat-detail',angularAMD.route({
          url: '/detail/:id',
          views: {
            'tab-chats':  angularAMD.route({
              templateUrl: 'views/chat-detail.html',
              controller: 'ChatDetailCtrl'
            })
          }
        }))

        .state('tab.account', angularAMD.route({
          url: '/account',
          views: {
            'tab-account':  angularAMD.route({
              templateUrl: 'views/tab-account.html',
              controller: 'AccountCtrl'
            })
          }
        }));

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/account');
    });
  return angularAMD.bootstrap(app);
})
