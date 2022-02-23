let id = 'empty';
displayData();
function createData() {
  let userName = document.getElementById('userName').value;
  if (id == 'empty') {
    let localStorageArray = getData();
    if (localStorageArray == null) {
      let data = [userName];
      setData(data);
    } else {
      localStorageArray.push(userName);
      setData(localStorageArray);
    }
  } else {
    let localStorageArray = getData();
    localStorageArray[id] = userName;
    setData(localStorageArray);
    id = 'empty';
  }
  document.getElementById('userName').value = '';
  displayData();
}

function displayData() {
  let localStorageArray = getData();
  if (localStorageArray != null) {
    let text = '';
    let slNo = 1;
    for (let key in localStorageArray) {
      text += `<tr>
						<td>${slNo}</td>
						<td>${localStorageArray[key]}</td>
						<td>
							<a href="javascript:void(0)" onclick="editData(${key})">Edit</a>&nbsp;
							<a href="javascript:void(0)" onclick="deleteData(${key})">Delete</a>
						</td>
					</tr>`;
      slNo++;
    }
    document.getElementById('tableBody').innerHTML = text;
  }
}

function getData() {
  let localStorageArray = JSON.parse(localStorage.getItem('userData'));
  return localStorageArray;
}

function setData(arr) {
  localStorage.setItem('userData', JSON.stringify(arr));
}

function editData(key) {
  id = key;
  let localStorageArray = getData();
  document.getElementById('userName').value = localStorageArray[key];
}

function deleteData(key) {
  let localStorageArray = getData();
  localStorageArray.splice(key, 1);
  setData(localStorageArray);
  displayData();
}
