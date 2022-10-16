const addExpenseBtn = document.querySelector('#add-expense-btn');
const tableBody = document.getElementById('table-body');

const type = document.getElementById('type');
const nameField = document.getElementById('name');
const dateField = document.getElementById('date');
const amountField = document.getElementById('amount');

let td1;
let td2;
let td3;
let td4;
let td5;

addExpenseBtn.addEventListener('click', () => {


    createNewTableRow();
});

function createNewTableRow() {
    const newTableRow = document.createElement('tr');

    // Why can't I declare these as const at the top of the page - 
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    td5 = document.createElement('td');

    tableBody.appendChild(newTableRow);
    newTableRow.appendChild(td1);
    newTableRow.appendChild(td2);
    newTableRow.appendChild(td3);
    newTableRow.appendChild(td4);
    newTableRow.appendChild(td5);

    removePlaceholder();
    populateTypeField();
    populateNameField();
    populateDateField();
    populateAmountField();
    deleteButton();
}

function removePlaceholder() {
    const placeHolder = document.getElementById('placeholder-row');

    if (placeHolder) {
        placeHolder.parentElement.remove();
    }
}

function populateTypeField() {
    const icon = document.createElement('i');

    if (type.value == 'card') {
        icon.setAttribute('class', 'fa-regular fa-credit-card');
    } else if (type.value == 'cash') {
        icon.setAttribute('class', 'fa-regular fa-money-bill-1');
    } else if (type.value == 'cryptocoin') {
        icon.setAttribute('class', 'fa-solid fa-bitcoin-sign');
    } else if (type.value == 'other') {
        icon.setAttribute('class', 'fa-regular fa-circle-question');
    }
    td1.appendChild(icon);
}

function populateNameField() {
    const cell2 = document.createTextNode(nameField.value);
    td2.appendChild(cell2);
}

function populateDateField() {
    const dateValue = dateField.value;

    const dateChosen = new Date(dateValue).getDate();
    const dateAppender = (dateChosen) => {

        return (dateChosen === 1 || dateChosen === 21 || dateChosen === 31) ?
            `${dateChosen}st`
            : (dateChosen === 2 || dateChosen === 22) ? `${dateChosen}nd`
                : (dateChosen === 3 || dateChosen === 23) ? `${dateChosen}rd`
                    : `${dateChosen}th`;
    }
    const month = new Date(dateValue).toLocaleString('en-us', { month: 'long' });
    const year = new Date(dateValue).toLocaleString('en-us', { year: 'numeric' });

    const date = `${dateAppender(dateChosen)} ${month}, ${year}`;


    const cell3 = document.createTextNode(date);
    td3.appendChild(cell3);

}

function populateAmountField() {

    const amountValue = Number(amountField.value).toFixed(2);
    const cell4 = document.createTextNode(`$${amountValue}`);
    td4.appendChild(cell4);
}

function deleteButton() {
    const deleteBtn = document.createElement('i');
    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.setAttribute('class', 'fa-solid fa-trash-can');
    td5.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        const deleteRow = e.target;
        deleteRow.parentElement.parentElement.remove();
    });

}





