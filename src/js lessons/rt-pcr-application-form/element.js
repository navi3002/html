var store = [];
function move() {
  if (!checkEmptyInput()) {
    document.getElementById('msg').style.display = 'none';
    var fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      dob = document.getElementById('dob').value,
      gender = document.getElementById('gender').value,
      city = document.getElementById('city').value,
      date = document.getElementById('date').value,
      time = document.getElementById('time').value,
      lab = document.getElementById('lab').value,
      report = document.getElementById('report').value,
      result = document.getElementById('result').value,
      aadhar = document.getElementById('aadhar').value;
    let store_obj = {
      firstname: fname,
      lastname: lname,
      'date of birth': dob,
      gender: gender,
      city: city,
      date: date,
      time: time,
      lab: lab,
      report: report,
      result: result,
      aadhar: aadhar,
    };
    store.push(store_obj);
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),
      cell6 = newRow.insertCell(5),
      cell7 = newRow.insertCell(6),
      cell8 = newRow.insertCell(7),
      cell9 = newRow.insertCell(8),
      cell10 = newRow.insertCell(9),
      cell11 = newRow.insertCell(10);
    cell1.innerHTML = store_obj['firstname'];
    cell2.innerHTML = store_obj['lastname'];
    cell3.innerHTML = store_obj['date of birth'];
    cell4.innerHTML = store_obj['gender'];
    cell5.innerHTML = store_obj['city'];
    cell6.innerHTML = store_obj['date'];
    cell7.innerHTML = store_obj['time'];
    cell8.innerHTML = store_obj['lab'];
    cell9.innerHTML = store_obj['report'];
    cell10.innerHTML = store_obj['result'];
    cell11.innerHTML = store_obj['aadhar'];
  }
}
function myFunction() {
  var input, i;
  input = document.getElementById('find').value;
  table = document.getElementById('table');
  tr = table.getElementsByTagName('tr');
  table1 = document.getElementById('table1');
  tr1 = table.getElementsByTagName('tr');
  console.log(tr.length);
  if (tr.length === 1) {
    document.getElementById('msg').innerHTML = 'there is no record found';
  } else {
    for (i = 1; i < tr.length; i++) {
      console.log(table.rows[i].cells[10].innerHTML);
      if (table.rows[i].cells[10].innerHTML === input) {
        var newRow1 = table1.insertRow(table1.length),
          cell1 = newRow1.insertCell(0),
          cell2 = newRow1.insertCell(1),
          cell3 = newRow1.insertCell(2),
          cell4 = newRow1.insertCell(3),
          cell5 = newRow1.insertCell(4),
          cell6 = newRow1.insertCell(5),
          cell7 = newRow1.insertCell(6),
          cell8 = newRow1.insertCell(7),
          cell9 = newRow1.insertCell(8),
          cell10 = newRow1.insertCell(9),
          cell11 = newRow1.insertCell(10);
        cell1.innerHTML = table.rows[i].cells[0].innerHTML;
        cell2.innerHTML = table.rows[i].cells[1].innerHTML;
        cell3.innerHTML = table.rows[i].cells[2].innerHTML;
        cell4.innerHTML = table.rows[i].cells[3].innerHTML;
        cell5.innerHTML = table.rows[i].cells[4].innerHTML;
        cell6.innerHTML = table.rows[i].cells[5].innerHTML;
        cell7.innerHTML = table.rows[i].cells[6].innerHTML;
        cell8.innerHTML = table.rows[i].cells[7].innerHTML;
        cell9.innerHTML = table.rows[i].cells[8].innerHTML;
        cell10.innerHTML = table.rows[i].cells[9].innerHTML;
        cell11.innerHTML = table.rows[i].cells[10].innerHTML;
      }
    }
  }
}
function checkEmptyInput() {
  var isEmpty = false,
    fname = document.getElementById('fname').value,
    lname = document.getElementById('lname').value,
    dob = document.getElementById('dob').value,
    gender = document.getElementById('gender').value,
    city = document.getElementById('city').value,
    time = document.getElementById('time').value,
    lab = document.getElementById('lab').value,
    report = document.getElementById('report').value,
    result = document.getElementById('result').value,
    aadhar = document.getElementById('aadhar').value;
  if (fname === '') {
    alert('First Name Connot Be Empty');
    isEmpty = true;
  } else if (lname === '') {
    alert('Last Name Connot Be Empty');
    isEmpty = true;
  } else if (dob === '') {
    alert('date of birth Connot Be Empty');
    isEmpty = true;
  } else if (gender === '') {
    alert('Gender Connot Be Empty');
    isEmpty = true;
  } else if (city === '') {
    alert('City Connot Be Empty');
    isEmpty = true;
  } else if (time === '') {
    alert('Time Connot Be Empty');
    isEmpty = true;
  } else if (lab === '') {
    alert('Lab Connot Be Empty');
    isEmpty = true;
  } else if (report === '') {
    alert('Report Connot Be Empty');
    isEmpty = true;
  } else if (result === '') {
    alert('Result Connot Be Empty');
    isEmpty = true;
  } else if (aadhar === '') {
    alert('Aadhar Connot Be Empty');
    isEmpty = true;
  }
  return isEmpty;
}
function reset() {
  var table, tr;
  table = document.getElementById('table1');
  tr = table.getElementsByTagName('tr');
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = 'none';
  }
}
