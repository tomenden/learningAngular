'use strict';

eventsApp.directive('mySample', function () {
    return {
        restrict: 'A',
        scope: {},
        template: "<input type='text' ng-model='sampleData'/> {{sampleData}}<br/>"
    }
});