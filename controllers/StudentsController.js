attendanceApp.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    //get access to shared data in the factory
    $scope.students = StudentsFactory.students; 
    //now you can call methods that use shared data that are declared in the factory from your HTML 
    $scope.StudentsFactory = StudentsFactory; 

    //signIn and signOut methods are here in the students controller since the directions say that students want to sign in/out
    //teachers just want to view which students are signed in and which aren't. They don't need to sign students in.
    //if they both needed to sign students in and out then the method would be in the factory.
    $scope.signIn = function(student) {
        student.present = true;
    };
    
    $scope.signOut = function(student) {
        student.present = false;
    };
});