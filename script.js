var selectedRow = null

function onFormSubmit(){
      if(validate()){
            const formData = readFormData();
            if(selectedRow == null)
                  insertNewRecord(formData);
            else
                  updateRecord(formData);
            resetForm();
      }
}

function readFormData(){
      const formData = {};
      formData["fullName"] = document.getElementById("fullName").value;
      formData["empCode"] = document.getElementById("empCode").value;
      formData["jenisKelamin"] = document.getElementById("jenisKelamin").value;
      formData["salary"] = document.getElementById("salary").value;
      formData["city"] = document.getElementById("city").value;
      return formData;
}

function insertNewRecord(data){
      const table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow(table.length);
      cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.fullName;
      cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.empCode;
      cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.jenisKelamin;
      cell4 = newRow.insertCell(3);
      cell4.innerHTML = "Rp " + data.salary;
      cell5 = newRow.insertCell(4);
      cell5.innerHTML = data.city;
      cell5 = newRow.insertCell(5);
      cell5.innerHTML = `<button onClick="onEdit(this)" style="background-color:#c2ee25; border:1px solid black; border-radius:3px">Edit</button>
                         <button onClick="onDelete(this)"style="background-color:#ec4c4c; border:1px solid black; border-radius:3px">Delete</button>`;
}

function resetForm(){
      document.getElementById("fullName").value = "";
      document.getElementById("empCode").value = "";
      document.getElementById("jenisKelamin").value = "";
      document.getElementById("salary").value = "";
      document.getElementById("city").value = "";
      selectedRow = null;
}

function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
      document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
      document.getElementById("jenisKelamin").value = selectedRow.cells[2].innerHTML;
      document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
      document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
      selectedRow.cells[0].innerHTML = formData.fullName;
      selectedRow.cells[1].innerHTML = formData.empCode;
      selectedRow.cells[2].innerHTML = formData.jenisKelamin;
      selectedRow.cells[3].innerHTML = formData.salary;
      selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td){
      if(confirm("are you sure to delete this record ?")){
            row = td.parentElement.parentElement;
            document.getElementById("employeeList").deleteRow(row.rowIndex);
            resetForm();
      }
}

function validate(){
      isValid = true;
      if(document.getElementById("fullName").value == ""){
            isValid=false;
            document.getElementById("fullNameValidationError").classList.remove("hide");
      } else{
            isValid = true;
            if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
      }
      return isValid;
}