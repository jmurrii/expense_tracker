const addExpenseBtn = document.querySelector('#add-expense-btn');
const tableBody = document.getElementById('table-body');

let td1;
let td2;
let td3;
let td4;





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



    tableBody.appendChild(newTableRow);
    newTableRow.appendChild(td1);
    newTableRow.appendChild(td2);
    newTableRow.appendChild(td3);
    newTableRow.appendChild(td4);

    populateTypeField();
    populateNameField();
    populateDateField();
    populateAmountField();

}

function populateTypeField() {
    const type = document.getElementById('type').value;
    const icon = document.createElement('i');
    if (type == 'card') {
        icon.setAttribute('class', 'fa-regular fa-credit-card');
    }

    // const cell1 = document.createTextNode(icon);

    console.log(cell1);

    // td1.appendChild(cell1);


}

function populateNameField() {
    const nameValue = document.getElementById('name').value;
    const cell2 = document.createTextNode(nameValue);
    td2.appendChild(cell2);
}

function populateDateField() {
    const dateValue = document.getElementById('date').value;

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
    const amount = document.getElementById('amount').value;
    const cell4 = document.createTextNode(`$${amount}`);
    td4.appendChild(cell4);
}