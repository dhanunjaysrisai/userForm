var serialNo=1;

function submit(){
    var name=document.getElementById('name').value;
    var age=Number(document.getElementById('age').value);
    var mobileNumber=Number(document.getElementById('mobileNumber').value);
    var email=document.getElementById('mail').value;

    if((name===""||age===""||mobileNumber===""||email==="") ||( isNaN(age) || isNaN(mobileNumber))){
        alert("Enter valid data!");
    }else{
        var tableRow = document.getElementById("table").getElementsByTagName("tbody")[0];
        var newRow = tableRow.insertRow();

        newRow.innerHTML = `<td>${serialNo}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${mobileNumber}</td>
            <td>${email}</td>`;
            serialNo++;
    }
}
