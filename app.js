var calendar = angular.module('calApp', []);

calendar.controller('CalendarCtrl', function CalendarController($scope) {
    function init() {
        var data = [];
       
        for (var i = 1;  i <= 31; i++) {
            
            data.push({
                day: i,
                // dayName: dayNames[i],
                message: ''
            });
           
           
        }
        
     $scope.days = data;
    }

    init();
//  button select to help with class change
    $scope.selectedIndex = null;
    $scope.itemClicked = ($index) => {
        $scope.selectedIndex = $index;
    } 

 // input box to appear on click not showing before any clicks with ng-if
    $showField = false
    $scope.changeStatus = function () {
        if ($scope.selectedIndex != $scope.selectedIndex) {
          return  $showField = false;
        }
    }

    
});

calendar.filter('dayOfWeek', function () {
    
    return function(day) {
      switch(day){
        case 1: 
        case 8:
        case 15:
        case 22:
        case 29:
            return day + " " + "Sun";
        case 2: 
        case 9:
        case 16:
        case 23:
        case 30:
             return day + " " + "Mon"; 
        case 3: 
        case 10:
        case 17:
        case 24:
        case 31:
             return day + " " + "Tue" 
        case 4: 
        case 11:
        case 18:
        case 25:
            return day + " " + "Wed"
        case 5: 
        case 12:
        case 19:
        case 26:
            return day + " " + "Thu"
        case 6: 
        case 13:
        case 20:
        case 27:
             return day + " " + "Fri"
        case 7: 
        case 14:
        case 21:
        case 28:
            return day + " " + "Sat"
        }
    }
});