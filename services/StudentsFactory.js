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
    
    //skeleton method for adding students if needed. but one thing at a time. 
    // factory.addStudent = function() {
    //     factory.students.push({ name: factory.studentName, present: false });
    //     factory.studentName = null;
    // };

    return factory;
});