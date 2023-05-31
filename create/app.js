const addRowButton = document.getElementById("add-row-button");
addRowButton.addEventListener("click", function () {
  const table = document.getElementById("ingredients-table");
  const newRow = table.insertRow(-1);
  const ingredientCell = newRow.insertCell(0);
  const quantityCell = newRow.insertCell(1);
  const unitCell = newRow.insertCell(2);
  const unitSelect = document.createElement('select');
  const deleteCell = newRow.insertCell(3);
  

  unitSelect.name = 'unit[]';
  unitSelect.classList.add('unitSelect');

  ingredientCell.innerHTML = '<input type="text" name="ingredient[]" required>';
  quantityCell.innerHTML = '<input type="number" name="quantity[]" required>';
  unitSelect.innerHTML = `
    <select name="unit[]" required>
      <option value="">Select Unit</option>
      <option value="n">number</option>
      <option value="g">g</option>
      <option value="ml">ml</option>
      <option value="tsp">tsp</option>
      <option value="tbsp">tbsp</option>
    </select>
  `;
  unitCell.appendChild(unitSelect);

  deleteCell.innerHTML = '<button type="button" class="delete-row-button"><i class="fa-solid fa-minus"></i></button>';

  // Delete Row button functionality
  const deleteRowButton = deleteCell.querySelector(".delete-row-button");
  deleteRowButton.addEventListener("click", function () {
    const rowIndex = newRow.rowIndex;
    table.deleteRow(rowIndex);
  });
  
});
