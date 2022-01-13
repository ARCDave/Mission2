$("#btnCheck").click(function () {

    alert("From: " + $("#assignments").value +
        ", Subject: " + $("#groupProject").value +
        ", Message: " + $("#quizzes").value);

    var assignments = $("#assignments").value;
    var groupProject = $("#groupProject").value;
    var quizzes = $("#quizzes").value;
    var exam = $("#exam").value;
    var intex = $("#intex").value;


    var gpa = ((assignments * .55) + (groupProject * .05) + (quizzes * .10) + (exam * .20) + (intex * .10));

    if (gpa >= 94) {
        grade = "A";
    }
    if (gpa >= 90 & gpa < 94) {
        grade = "A-";
    }
    if (gpa >= 87 & gpa < 90) {
        grade = "B+";
    }
    if (gpa >= 84 & gpa < 87) {
        grade = "B";
    }
    if (gpa >= 80 & gpa < 84) {
        grade = "B-";
    }
    if (gpa >= 77 & gpa < 80) {
        grade = "C+";
    }
    if (gpa >= 74 & gpa < 77) {
        grade = "C";
    }
    if (gpa >= 70 & gpa < 74) {
        grade = "C-";
    }
    if (gpa >= 67 & gpa < 70) {
        grade = "D+";
    }
    if (gpa >= 64 & gpa < 67) {
        grade = "D";
    }
    if (gpa >= 60 & gpa < 64) {
        grade = "D-";
    }
    if (gpa < 60) {
        grade = "E"
    }

    alert("Your Grade is: " + grade)
})

