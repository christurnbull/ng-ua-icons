'use strict';

/**
 * @ngdoc function
 * @name ngApp.directive:ngUaIcons
 * @license MIT
 * @copyright 2016 Chris Turnbull <https://github.com/christurnbull>
 * @description Uses ua-parser.js to convert a ua string into browser, os &
 *  device icons
 */
angular.module('ngUaIcons', [])
  .directive('ngUaIcons', ['$window', function($window) {
    return {
      template: '<span style="font-size: 1.5em;"><i title="{{browser}}" class="{{browserIcon}}"></i> <i title="{{os}}" class="{{osIcon}}"></i> <i title="{{device}}" class="{{deviceIcon}}"></i></span>',
      scope:{
        ngUaIcons: '@'
      },
      link: function(scope, element, attrs) {

        var ion = false;
        if (attrs.hasOwnProperty('ionic')) {
          ion = true;
        }
        
        var ua= attrs.ngUaIcons ? attrs.ngUaIcons : null;
        var uaObj = new $window.UAParser(ua);
        var parsed = uaObj.getResult();

        switch (parsed.browser.name) {
          case 'Chrome':
            scope.browserIcon = ion ? 'ion-social-chrome' : 'fa fa-chrome';
            break;
          case 'Firefox':
            scope.browserIcon = ion ? 'ion-flame' : 'fa fa-firefox';
            break;
          case 'Safari':
            scope.browserIcon = ion ? 'ion-social-apple' : 'fa fa-safari';
            break;
          case 'Mobile Safari':
            scope.browserIcon = ion ? 'ion-social-apple' : 'fa fa-safari';
            break;
          case 'IE':
            scope.browserIcon = ion ? 'ion-social-windows' : 'fa fa-internet-explorer';
            break;
          case 'IE Mobile':
            scope.browserIcon = ion ? 'ion-social-windows' : 'fa fa-internet-explorer';
            break;
          default:
            scope.browserIcon = '';
        }

        switch (parsed.os.name) {
          case 'Windows':
          case 'Windows Phone':
          case 'Windows Mobile':
          case 'Windows Phone/Mobile':
            scope.osIcon = ion ? 'ion-social-windows-outline' : 'fa fa-windows';
            break;
          case 'Mac OS':
          case 'iOS':
            scope.osIcon = ion ? 'ion-social-apple-outline' : 'fa fa-apple';
            break;
          case 'Chromium OS':
          case 'Android':
            scope.osIcon = ion ? 'ion-social-android-outline' : 'fa fa-android';
            break;
          case 'Arch':
          case 'CentOS':
          case 'Fedora':
          case 'FreeBSD':
          case 'Debian':
          case 'Gentoo':
          case 'GNU':
          case 'Joli':
          case 'Linpus':
          case 'Mageia':
          case 'Mandriva':
          case 'MeeGo':
          case 'Mint':
          case 'NetBSD':
          case 'OpenBSD':
          case 'PCLinuxOS':
          case 'RedHat':
          case 'Slackware':
          case 'SUSE':
          case 'Ubuntu':
          case 'UNIX':
          case 'VectorLinux':
          case 'Linux':
            scope.osIcon = ion ? 'ion-social-tux' : 'fa fa-linux';
            break;
          case 'Nintendo':
          case 'Playstation':
            scope.osIcon = ion ? 'ion-ios-game-controller-a-outline' : 'fa fa-gamepad';
            break;
          default:
            scope.osIcon = '';
        }

        switch (parsed.device.type) {
          case 'console':
            scope.deviceIcon = ion ? 'ion-ios-game-controller-a' : 'fa fa-gamepad';
            break;
          case 'mobile':
            scope.deviceIcon = ion ? 'ion-iphone' : 'fa fa-mobile';
            break;
          case 'tablet':
            scope.deviceIcon = ion ? 'ion-ipad' : 'fa fa-tablet';
            break;
          case 'smarttv':
            scope.deviceIcon = ion ? 'ion-videocamera' : 'fa fa-television';
            break;
          case 'wearable':
            scope.deviceIcon = ion ? 'ion-ios-body' : 'fa fa-male';
            break;
          case 'embedded':
            scope.deviceIcon = ion ? 'ion-cube' : 'fa fa-cubes';
            break;
          default:
            scope.deviceIcon = ion ? 'ion-android-desktop' : 'fa fa-desktop';
        }
      }
    };
  }]);
