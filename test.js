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
//  button select 
    $scope.selectedIndex = null;
    $scope.itemClicked = ($index) => {
        $scope.selectedIndex = $index;
    } 

 // input box to appear on click
    $showField = false
    $scope.changeStatus = function () {
        if ($scope.selectedIndex != $scope.selectedIndex) {
          return  $showField = false;
        }
    }

    
});

calendar.filter('dayOfWeek', function () {
    
    return function(day) {
        // console.log(day)
    
    var dayNum = [];
      dayNum = day.day
    console.log(dayNum)
    var count = 1
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sun', 'Mon', 'Tue']
    var i, c = "";
    for (var i = 0;  i < 31; i++) {
        for (var j = 1; j <dayNames.length; j++) {
            c = dayNum[i]
            var dayCombo = dayNum + ' ' + dayNames[j]
        console.log(dayCombo)
       
    //     dayNum = count + " " + dayNames[]
    //     console.log(dayNames[i])
    //     console.log(dayNum)
    //     if (count <= 30) {
            
    //      count=count+1;
    //      }
       }
    
    }
    
    return dayCombo
   }
});