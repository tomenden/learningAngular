'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event) {
            window.alert('event name: ' + event.name);
        };
        $scope.cancelEdit = function () {
            window.location = 'EventDetails.html';
        };
    }
);