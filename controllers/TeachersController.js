attendanceApp.controller('TeachersCtrl', function TeachersCtrl($scope, StudentsFactory) {
    //same as students controller for now. Just needs to display the list of students from factory.
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory; 

    //could create teacher specific methods here if needed 
    //for example, give a student a grade for their participation for the day
});