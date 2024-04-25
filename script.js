function addNewItem() {
  const itemList = document.getElementById("items-list");
  const input = document.getElementById("input-text");
  const newItem = document.createElement("li");
  newItem.textContent = input.value;

  const deleteButton = document.createElement("button");
  deleteButton.style.cssText = "background-color: white;" + "color:red;";
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", function (e) {
    deleteButton.parentElement.remove();
  });

  newItem.appendChild(deleteButton);
  itemList.appendChild(newItem);
}
