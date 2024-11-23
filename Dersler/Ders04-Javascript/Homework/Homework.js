let btnAdd = document.getElementById("ekle-btn");

btnAdd.addEventListener("click", function () {
  // Get the text input
  const text1 = document.getElementById("textarea").value;

  // Check if the input is not empty
  if (text1.trim() === "") {
    alert("Lütfen geçerli bir görev giriniz.");
    return;
  }

  // Create the <li> for the task
  const item = document.createElement("li");
  item.className =
    "list-group-item d-flex justify-content-between align-items-center"; // Add flex classes

  // Create the task text span
  const taskText = document.createElement("span");
  taskText.textContent = text1;

  // Strike-through functionality when clicking on the task
  taskText.addEventListener("click", function () {
    taskText.style.textDecoration = taskText.style.textDecoration === "line-through" ? "" : "line-through";
  });

  // Create the Update button
  const button1 = document.createElement("button");
  button1.textContent = "Güncelle";
  button1.className = "btn btn-primary btn-sm ms-2";
  button1.addEventListener("click", function () {
    // Prompt user to update the task text
    const updatedText = prompt("Yeni görev metnini girin:", taskText.textContent);
    if (updatedText) {
      taskText.textContent = updatedText;
    }
  });

  // Create the Delete button
  const button2 = document.createElement("button");
  button2.textContent = "Sil";
  button2.className = "btn btn-danger btn-sm ms-2";
  button2.addEventListener("click", function () {
    // Remove the task item from the list
    item.remove();
  });

  // Create a container for buttons and append them
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);

  // Append task text and button container to the item
  item.appendChild(taskText);
  item.appendChild(buttonContainer);

  // Append the <li> item to the <ul> list
  const ulSec = document.querySelector("#taskList");
  ulSec.appendChild(item);

  // Clear the input field after adding the task
  document.getElementById("textarea").value = "";
});
