const addExpenseBtn = document.querySelector('#add-expense-btn');
const tableBody = document.getElementById('table-body');

let td1;
let td2;
let td3;
let td4;





addExpenseBtn.addEventListener('click', () => {

    createNewTableRow();

});

// possibly move inside eventListener
// const type = document.getElementById('type').value;

// const date = document.getElementById('date').value;
// const amount = document.getElementById('amount').value;





function createNewTableRow() {
    const newTableRow = document.createElement('tr');

    // Why can't I declare these as const at the top of the page - 
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');



    tableBody.appendChild(newTableRow);
    newTableRow.appendChild(td1);
    newTableRow.appendChild(td2);
    newTableRow.appendChild(td3);
    newTableRow.appendChild(td4);

    populateNameField();
    populateAmountField();
    populateDateField();

}

function populateNameField() {
    const nameValue = document.getElementById('name').value;
    const cell2 = document.createTextNode(nameValue);
    td2.appendChild(cell2);
}

function populateAmountField() {
    const amount = document.getElementById('amount').value;
    const cell4 = document.createTextNode(amount);
    td4.appendChild(cell4);
}
function populateDateField() {
    const date = document.getElementById('date').value;
    console.log(new Date(date).toLocaleString('en-us', { month: 'short', year: 'numeric' }));
    const cell3 = document.createTextNode(date);
    td3.appendChild(cell3);
    console.log("date:",);
}