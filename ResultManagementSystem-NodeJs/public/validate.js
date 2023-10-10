//validations are implemented here

function rollValidate(event){
    const numberInput = document.getElementById("rollno");
        if (!isNumber(numberInput.value)) {
            event.preventDefault();
            alert("Please enter roll number in numeric digits only with no spaces");
        }
}
function isNumber(value) {
        return /^[0-9]+$/.test(value);
}

function teacherSignupValidate(event){
    const teacherMail = document.getElementById("temail");
    const emailRegex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const teacherUserName = document.getElementById("uname");
    const unameRegex=/^[a-zA-Z0-9!]+$/;
    const password = document.getElementById("pwd");
    const pwdRegex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{3,}$/;
        if (!(emailRegex.test(teacherMail.value))) {
            event.preventDefault();
            alert("Please enter valid email");
        }
        else if(!unameRegex.test(teacherUserName.value)){
            event.preventDefault();
            alert("Please enter valid username! Username can consist of only alphabets,digits and !");
        }
        else if(!pwdRegex.test(password.value)){
            event.preventDefault();
            alert(" Password must have atleast: 4 characters, a lowercase letter,  an uppercase letter, a digit,  and a special symbol.");
        }
}

function teacherLoginValidate(event){
    const teacherUserName = document.getElementById("uname");
    const unameRegex=/^[a-zA-Z0-9!]+$/;
    const password = document.getElementById("pwd");
    const pwdRegex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{3,}$/;
        if(!unameRegex.test(teacherUserName.value)){
            event.preventDefault();
            alert("Please enter valid username! Username can consist of only alphabets,digits and ! with no spaces");
        }
        else if(!pwdRegex.test(password.value)){
            event.preventDefault();
            alert(" Password must have atleast: 4 characters, a lowercase letter,  an uppercase letter, a digit,  and a special symbol. And first character should not be digit");
        }
}

function addRecordValidate(event){
    const rollno = document.getElementById("rollno");
    const rollRegex= /^[0-9]+$/;
    const name = document.getElementById("name");
    const nameRegex= /^[a-zA-Z\s]+$/;
        if(!rollRegex.test(rollno.value)){
            event.preventDefault();
            alert("Please enter roll number in numeric digits only!");
        }
        else if(!nameRegex.test(name.value)){
            event.preventDefault();
            alert("Please enter valid name");
        }
}


