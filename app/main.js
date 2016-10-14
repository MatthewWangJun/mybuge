/**
 * Created by songle on 2016/10/12.
 */
require.config({
  baseUrl: '',
  paths: {
    "angular": "bower_components/angular/angular",
    "angular-animate": "bower_components/angular-animate/angular-animate",
    "angular-sanitize":"bower_components/angular-sanitize/angular-sanitize",
    "angularUiRouter": "bower_components/angular-ui-router/release/angular-ui-router",
    "angular-ionic":"bower_components/ionic/release/js/ionic",
    "ionic-angular":"bower_components/ionic/release/js/ionic-angular",
    "angularAMD": "bower_components/angular-amd/angularAMD",
    "ng-cordova":"bower_components/ngCordova/dist/ng-cordova",
    "angularBootstrap": "bower_components/angular-bootstrap/angular-bootstrap",
    'ionic': 'bower_components/ionic/release/js/ionic.bundle',

    "ChatDetailCtrl": "js/scripts/controller/chat-detail-ctrl",
    "DashCtrl": "js/scripts/controller/dash-ctrl",
    "ChatsCtrl": "js/scripts/controller/chats-ctrl",
    "AccountCtrl": "js/scripts/controller/account-ctrl",

    "dataServices":"js/scripts/service/dataServices",
    "app":"app"
    },
    shim: {
      'angular': {
        exports: 'angular',
      },
      'ionic-angular': {deps: ['ionic']},
      'ng-cordova': {deps: ['ionic']},
      'angularAMD': {deps: ['angular']},
      'angularUiRouter': {deps: ['angular']},
      'angular-animate': {deps: ['angular']},
      'angular-ionic': {
        deps: ['angular', 'ionic'],
        exports: 'ionic'
      },
      'ionic': {
        exports: 'ionic'
      },
      'angular-cordova': ['angular']
    }
});
      /* Requires the app, bootstraping Angular in AMD mode */
      require(['app'], function(app) {

      });






