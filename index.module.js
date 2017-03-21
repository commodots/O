/*eslint angular/di: [2,"array"]*/
'use strict';
(function() {
  angular.module('minotaur', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'pascalprecht.translate',
      'cfp.loadingBar',
      'ngAlertify',
      'FBAngular',
      'daterangepicker',
      'ui.sortable',
      'slick',
      'textAngular',
      'ngTagsInput',
      'angularBootstrapNavTree',
      'ui.tree',
      'ipsum',
      'wu.masonry',
      'dragularModule',
      'chart.js',
      'angular.morris',
      'easypiechart',
      'angular-svg-round-progressbar',
      'angular-rickshaw',
      'datatables',
      'datatables.bootstrap',
      'datatables.colreorder',
      'datatables.buttons',
      'datatables.columnfilter',
      'rzModule',
      'colorpicker.module',
      'nk.touchspin',
      'localytics.directives',
      'ui.select',
      'validation.match',
      'angularFileUpload',
      'ngImgCrop',
      'ui.grid',
      'ui.grid.edit',
      'ui.grid.resizeColumns',
      'ui.grid.moveColumns',
      'ngTable',
      'smart-table',
      'ui.footable',
      'angular-intro',
      'ngMap',
      'leaflet-directive',
      'ui.calendar',
      'angular-flot',
      'vcRecaptcha',
      'angular-loading-bar',
      'LocalStorageModule'
      // 'satellizer',
      // 'vesparny.fancyModal'
    ])
    .config([
    "$httpProvider",
        function($httpProvider){
            $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        }
    ])

    .config(['localStorageServiceProvider',function (localStorageServiceProvider) {
      localStorageServiceProvider
        .setPrefix('ODI')
        .setStorageType('localStorage')
        .setNotify(true, true);

      //   $authProvider.baseUrl = 'http://localhost:5000';
      //   // $authProvider.loginUrl = '/auth/login';
      //   $authProvider.loginUrl = '/auth/login';
      //   $authProvider.facebook({
      //     name: 'facebook',
      //     url: '/auth/facebook',
      //     authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      //     redirectUri:  '/',
      //     requiredUrlParams: ['display', 'scope'],
      //     scope: ['email'],
      //     scopeDelimiter: ',',
      //     display: 'popup',
      //     oauthType: '2.0',
      //     popupOptions: { width: 580, height: 400 }
      //   });
      //   $authProvider.facebook({
      //   clientId: '1256409474449833'
      // });
      
    }])
    

})();
