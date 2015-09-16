'use strict';

eventsApp.directive('eventThumbnail', function () {
    return {
        restrict: 'E',
        scope: {
            event: '='
        },
        templateUrl: 'templates/directives/eventThumbnail.html'
    };
});