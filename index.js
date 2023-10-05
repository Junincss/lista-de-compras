function addItem() {
  const ul = document.getElementById("market-list");
  const product = document.getElementById("item").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brandItem").value;
  const amount = document.getElementById("amount").value;
  const uom = document.getElementById("unity-of-measurement").value;
  if (product === "" || description === "" || brand === "" || amount === "") {
    return alert(`Atenção!
    Existem campos vazios, por favor preencha com todos os dados`);
  } else if (uom === "None") {
    return alert(`Atenção!
    Por gentileza, insira a unidade de medida!`);
  } else {
    const newLabelforItem = document.createElement("label");
    newLabelforItem.innerText = `${amount} - ${uom} de ${product} da marca: ${brand} (${description})`;
    newLabelforItem.id = `${product}${brand}`;
    newLabelforItem.name = `${product}`;

    const newItemInList = document.createElement("input");
    newItemInList.type = "checkbox";
    newItemInList.id = `check - ${product}${brand}`;

    newLabelforItem.appendChild(newItemInList);
    ul.appendChild(newLabelforItem);
    ul.appendChild(document.createElement("hr"));
    ul.appendChild(document.createElement("br"));

    document.getElementById("item").value = "";
    document.getElementById("description").value = "";
    document.getElementById("brandItem").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("unity-of-measurement").volue = "None";
  }
}

function removeItem() {
  const product = document.getElementById("remove-item").value;
  const brand = document.getElementById("brand-remove").value;
  const itemToRemove = document.getElementById(`${product}${brand}`);
  const confirmation = confirm(`Remover: ${itemToRemove.innerText} da lista ?`);
  if (confirmation) {
    document.getElementById("market-list").removeChild(itemToRemove);
    document.getElementById("removeTheItem").value = "";
    document.getElementById("brand-remove").value = "";
  }
}
