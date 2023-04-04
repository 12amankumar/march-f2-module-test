var selectedRow = null
let id=0;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["gpa"] = document.getElementById("gpa").value;
    formData["age"] = document.getElementById("age").value;
    formData["degree"] = document.getElementById("degree").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=`${++id}`

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gpa;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.degree;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = ` <i class="fa-solid fa-pen-to-square" id="edit" onClick="onEdit(this)"></i>
     <i class="fa-solid fa-trash" id="delete"onClick="onDelete(this)"></i>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("age").value = "";
    document.getElementById("degree").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.gpa;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.degree;
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}