var calendar = angular.module('calApp', []);

calendar.controller('CalendarCtrl', function CalendarController($scope) {
    function init() {
        var data = [];
        for (var i = 1; i <= 31; i++) {
            data.push({
                day: i,
                message: ''
            });
        }
     $scope.days = data;
    }

    init();
});

calendar.filter('dayOfWeek', function () {

});