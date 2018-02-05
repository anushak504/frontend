function validateMarksForm(marksFormObj) {
    if(marksFormObj.name.value==""){
        alert("Please enter name");
        return false;
    }
    var length = marksFormObj.marks.length;
    for (i = 0; i < length; i++) {
        if (marksFormObj.marks[i].value == "") {
            alert("Please enter marks");
            marksFormObj.marks[i].focus();
            return false;
        }
    }
    return true;
}