//Selectors
const dateInput = document.querySelector('.date-input')
const descriptionInput = document.querySelector('.description-input')
const amountInput = document.querySelector('.amount-input')
const submitButton = document.querySelector('.expense-button')
const expenseTable = document.querySelector('.expense-table')

//Event Listener

submitButton.addEventListener('click', addExpense)


//Functions

function addExpense(event) {
    event.preventDefault();
    const newTr = document.createElement('tr')
    const newTdDate = document.createElement('td')
    const newTdDescription = document.createElement('td')
    const newTdAmount = document.createElement('td')
    //expense table
    newTdDate.innerText = dateInput.value
    newTdDescription.innerText = descriptionInput.value
    newTdAmount.innerText = amountInput.value
    newTr.appendChild(newTdDate)
    newTr.appendChild(newTdDescription)
    newTr.appendChild(newTdAmount)
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    newTr.appendChild(completedButton)
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    newTr.appendChild(trashButton)
    expenseTable.appendChild(newTr);
    //clear input values
    dateInput.value = "";
    descriptionInput.value = "";
    amountInput.value = "";
}

