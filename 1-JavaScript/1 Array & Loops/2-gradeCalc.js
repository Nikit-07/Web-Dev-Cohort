//grade 90 >= - A, 80 >= - B , 70 >= - C, 60 >= - D, 60< f

function calculateGrade( marks){
    if(marks >=90){
        return "A";
    }
    else if(marks >=80){
        return "B";
    } else if(marks >=70){
        return "C";
    } else if(marks >= 60){
        return "D";
    } else{
        return "F";
    }
}

let Marks= 55;

let grade = calculateGrade(Marks);

console.log(grade);
