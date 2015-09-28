attendanceApp.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    //get access to shared data in the factory
    $scope.students = StudentsFactory.students; 
    //now you can call methods that use shared data that are declared in the factory from your HTML 
    $scope.StudentsFactory = StudentsFactory; 

    $scope.signIn = function(student) {
        student.present = true;
    };
});