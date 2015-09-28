attendanceApp.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    
    //create sample data to start with
    //student has a name and a property for whether they are present or not.
    //initially they are not present and should be displayed with 'sign-in' button in sign-in state
    //and in the who's here view initially the students should all be listed as not here.
    factory.students = [
        { name: "Thor", present: false},
        { name: "Loki", present: false},
        { name: "Odin", present: false},
    ];
    
    //for extra exercise, add addStudent method to factory, called from teacher form in 'presence'
    //since method modifies shared data, it is in the factory rather than either controller.
    //use studentName model to create new student object and set its present property to default false
    factory.addStudent = function() {
        factory.students.push({ name: factory.studentName, present: false });
        factory.studentName = null;
    };

    return factory;
});