let btnAdd = document.getElementById("ekle-btn");

btnAdd.addEventListener("click", function () {
  // Textin içindeki yazıyı alma
  const text1 = document.getElementById("textarea").value;

  // Görev için <li> oluştur
  const item = document.createElement("li");
  item.className =
    "list-group-item d-flex justify-content-between align-items-center"; // Flex düzenleme için sınıf ekle

  // Görev içeriğini ekle
  const taskText = document.createElement("span");
  taskText.textContent = text1;

  // Güncelle butonunu oluştur
  const button1 = document.createElement("button");
  button1.textContent = "Güncelle";
  button1.className = "btn btn-primary btn-sm ms-2";

  // Sil butonunu oluştur
  const button2 = document.createElement("button");
  button2.textContent = "Sil";
  button2.className = "btn btn-danger btn-sm ms-2";

  // Butonları ve görevi aynı satıra ekle
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);

  // item içine görev ve butonları ekle
  item.appendChild(taskText);
  item.appendChild(buttonContainer);

  // UL içine <li> öğesini ekle
  const ulSec = document.querySelector("#taskList");
  ulSec.appendChild(item);
});