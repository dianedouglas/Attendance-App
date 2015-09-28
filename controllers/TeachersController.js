attendanceApp.controller('TeachersCtrl', function TeachersCtrl($scope, StudentsFactory) {
    //same as students controller for now. Just needs to display the list of students.
    $scope.students = StudentsFactory.students; 
    $scope.StudentsFactory = StudentsFactory; 
});