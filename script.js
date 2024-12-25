let description = document.getElementById('description');
let category = document.getElementById('category');
let amount = document.getElementById('amount');
let expenseList = document.getElementById('expense-list');
let expenseForm = document.getElementById('expense-form');

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default reload on change

    // Storing input values
    const desc = description.value;
    const cat = category.value;
    const amt = amount.value;

    // Creating new row for table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${desc}</td>
        <td>${cat}</td>
        <td>${amt}</td>
    `
    //  Appending to expenseList Area
    expenseList.appendChild(newRow);
});
