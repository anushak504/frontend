function validateMarksForm(marksFormObj) {
    if(marksFormObj.name.value==""){
        alert("Please enter name");
        return false;
    }
    var length = marksFormObj.marks.length;
    var alertMessage = "";
    for (i = 0; i < length; i++) {
        if (marksFormObj.marks[i].value == "") {
            alert("Please enter marks");
            marksFormObj.marks[i].focus();
            return false;
        } else {
            alertMessage = alertMessage + "\n" + marksFormObj.marks[i].value;
        }
    }
    alert(alertMessage);
    return true;

}