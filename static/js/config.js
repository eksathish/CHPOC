var openstackApp = angular.module('openstackApp', ['ui.bootstrap']);

var App_Constants = { "url": "http://169.53.139.163:8000" }

openstackApp.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});