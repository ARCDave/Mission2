$("#btnCheck").click(function () {
    /*I have never written in Javascript as I took cs 142, be nice pleeeeease*/

    /* pre-sets the variables to numbers because that was an issue for a bit, I think thats fixed so probably not needed*/
    let assigments = 0.0;
    let groupProject = 0.0;
    let quizzes = 0.0;
    let exam = 0.0;
    let intex = 0.0;


    assigments = $("#assignments").val();
    groupProject = $("#groupProject").val();
    quizzes = $("#quizzes").val();
    exam = $("#exams").val();
    intex = $("#intex").val();
    

    /* equation for calculating GPA based off of sylabus*/
    let gpa = Math.round((assigments * .55) + (groupProject * .05) + (quizzes * .10) + (exam * .20) + (intex * .10)).toFixed(2);


    let grade = "";

    if (gpa >= 94) {
        grade = "A";
    }
    else if (gpa >= 90) {
        grade = "A-";
    }
    else if (gpa >= 87) {
        grade = "B+";
    }
    else if (gpa >= 84) {
        grade = "B";
    }
    else if (gpa >= 80) {
        grade = "B-";
    }
    else if (gpa >= 77) {
        grade = "C+";
    }
    else if (gpa >= 74) {
        grade = "C";
    }
    else if (gpa >= 70) {
        grade = "C-";
    }
    else if (gpa >= 67) {
        grade = "D+";
    }
    else if (gpa >= 64) {
        grade = "D";
    }
    else if (gpa >= 60) {
        grade = "D-";
    }
    else {
        grade = "E";
    }

    alert("Your Grade is: " + gpa + "% " + grade);
})

