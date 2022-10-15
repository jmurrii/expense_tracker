const addExpenseBtn = document.querySelector('#add-expense-btn');




const purchaseType = document.getElementById('type');
const purchaseName = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');





addExpenseBtn.addEventListener('click', () => {

    returnFormValues();
    console.log(returnFormValues());
    createNewTableRow();

});


function returnFormValues() {
    const formValue = {
        "Type": purchaseType.value,
        "Name": purchaseName.value,
        "Date": date.value,
        "Amount": amount.value
    }
    return formValue;
}

function createNewTableRow() {
    const newRow = document.createElement('tr');
    const newTD = document.createElement('td');
    const tableBody = document.getElementById('table-body');
    // tableBody.firstElementChild.remove();
    tableBody.appendChild(newRow).appendChild(newTD);


}