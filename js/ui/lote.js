export const lote = (inner) => {
    const loteContent = document.createElement("div");
    const loteContentBody1 = document.createElement("div");
    const loteContentBody2 = document.createElement("div");
    const loteContentBody3 = document.createElement("div");
    const loteInput1 = document.createElement("div");
    const loteInput2 = document.createElement("div");
    const loteInput3 = document.createElement("div");
    const loteInput4 = document.createElement("div");
    const loteInput5 = document.createElement("div");
    const loteInput6 = document.createElement("div");
    const loteInput7 = document.createElement("div");
    const loteInput8 = document.createElement("div");
    const loteInput9 = document.createElement("div");
    const loteInput10 = document.createElement("div");
    const loteInput100 = document.createElement("div");
    const loteInput160 = document.createElement("div");
    const loteInput1602 = document.createElement("div");

    const labelId = document.createElement("label");
    const labelName = document.createElement("label");
    const labelLaboratory = document.createElement("label");
    const labelQuantity = document.createElement("label");
    const labelCategory = document.createElement("label");
    const labelUnitaryCost = document.createElement("label");
    const labelTotalCost = document.createElement("label");
    const labelWarehouse = document.createElement("label");
    const labelEndDate = document.createElement("label");
    const labelLote = document.createElement("label");

    const inputID = document.createElement("input");
    const inputName = document.createElement("input");
    const inputLaboratory = document.createElement("input");
    const inputQuantity = document.createElement("input");
    const selectCategory = document.createElement("select");
    const optionCategory1 = document.createElement("option");
    const optionCategory2 = document.createElement("option");
    const optionCategory3 = document.createElement("option");
    const optionCategory4 = document.createElement("option");
    const textareaDescription = document.createElement("textarea");
    const inputCU = document.createElement("input");
    const inputCT = document.createElement("input");
    const selectWarehouse = document.createElement("select");
    const optionWarehouse1 = document.createElement("option");
    const optionWarehouse2 = document.createElement("option");
    const optionWarehouse3 = document.createElement("option");
    const optionWarehouse4 = document.createElement("option");
    const inputEndDate = document.createElement("input");
    const inputLote = document.createElement("input");
    const closeBtn = document.createElement("button");
    const closeImage = document.createElement("img");

    loteContent.className = "lote-content";
    loteContentBody1.className = "lote-content-body";
    loteContentBody2.className = "lote-content-body";
    loteContentBody3.className = "lote-content-body";
    loteInput1.className = "lote-input";
    loteInput2.className = "lote-input";
    loteInput3.className = "lote-input";
    loteInput4.className = "lote-input";
    loteInput5.className = "lote-input";
    loteInput6.className = "lote-input";
    loteInput7.className = "lote-input";
    loteInput8.className = "lote-input";
    loteInput9.className = "lote-input";
    loteInput10.className = "lote-input";
    loteInput100.className = "lote-input max-w-100";
    loteInput160.classList = "lote-input max-w-160";
    loteInput1602.classList = "lote-input max-w-160";

    labelId.textContent = "ID"
    labelId.htmlFor = "id-lote";
    labelName.textContent = "Nombre del artículo";
    labelName.htmlFor = "name-lote";
    labelLaboratory.textContent = "Nombre del labotatorio";
    labelLaboratory.htmlFor = "laboratory-lote";
    labelQuantity.textContent = "Cantidad";
    labelQuantity.htmlFor = "quantity-lote";
    labelCategory.textContent = "Categoría";
    labelCategory.htmlFor = "category-lote";
    labelUnitaryCost.textContent = "Costo unitario";
    labelUnitaryCost.htmlFor = "cu-lote";
    labelTotalCost.textContent = "Costo total";
    labelTotalCost.htmlFor = "ct-lote";
    labelWarehouse.textContent = "Almacen";
    labelWarehouse.htmlFor = "warehouse-lote";
    labelEndDate.textContent = "Fecha de vencimiento";
    labelEndDate.htmlFor = "enddate-lote";
    labelLote.textContent = "Lote";
    labelLote.htmlFor = "lote-lote";

    inputID.id = "id-lote";
    inputID.type = "text";
    inputID.placeholder = "Ej: 28993200"

    inputName.id = "name-lote";
    inputName.type = "text";
    inputName.placeholder = "Ej: Ibruprofeno Farma"

    inputLaboratory.id = "laboratory-lote";
    inputLaboratory.type = "text";
    inputLaboratory.placeholder = "Ej: Farma"

    inputQuantity.id = "quantity-lote";
    inputQuantity.type = "number";
    inputQuantity.placeholder = "Ej: 215"

    selectCategory.id = "category-lote";
    optionCategory1.value = "";
    optionCategory1.selected = true;
    optionCategory1.disabled = true;
    optionCategory1.textContent = "-- Elije una categoría --";
    optionCategory2.value = "opc1";
    optionCategory2.textContent = "Optión 1";
    optionCategory3.value = "opc2";
    optionCategory3.textContent = "Optión 2";
    optionCategory4.value = "opc3";
    optionCategory4.textContent = "Optión 3";

    textareaDescription.placeholder = "Agrega una descripción aquí";

    inputCU.id = "cu-lote";
    inputCU.type = "number";
    inputCU.placeholder = "Ej: 3$"

    inputCT.id = "ct-lote";
    inputCT.type = "number";
    inputCT.placeholder = "Ej: 300$"

    selectWarehouse.id = "warehouse-lote";
    optionWarehouse1.value = "";
    optionWarehouse1.selected = true;
    optionWarehouse1.disabled = true;
    optionWarehouse1.textContent = "-- Elije un almacen--";
    optionWarehouse2.value = "opc1";
    optionWarehouse2.textContent = "Optión 1";
    optionWarehouse3.value = "opc2";
    optionWarehouse3.textContent = "Optión 2";
    optionWarehouse4.value = "opc3";
    optionWarehouse4.textContent = "Optión 3";

    inputEndDate.id = "enddate-lote";
    inputEndDate.type = "date";

    inputLote.id = "lote-lote";
    inputLote.type = "number";
    inputLote.placeholder = "Ej: 215145";

    closeBtn.className = "close-btn";
    closeBtn.id = "close-btn";
    closeImage.src = "/assets/img/icon/add_icon.svg";
    closeImage.alt = "add icon"

    inner.appendChild(loteContent);
    loteContent.appendChild(closeBtn);
    closeBtn.appendChild(closeImage);
    loteContent.appendChild(loteContentBody1);
    loteContentBody1.appendChild(loteInput160);
    loteInput160.appendChild(labelId);
    loteInput160.appendChild(inputID);
    loteContentBody1.appendChild(loteInput1);
    loteInput1.appendChild(labelName);
    loteInput1.appendChild(inputName);
    loteContentBody1.appendChild(loteInput2);
    loteInput2.appendChild(labelLaboratory);
    loteInput2.appendChild(inputLaboratory);
    loteContentBody1.appendChild(loteInput100);
    loteInput100.appendChild(labelQuantity);
    loteInput100.appendChild(inputQuantity);
    loteContentBody1.appendChild(loteInput3);
    loteInput3.appendChild(labelCategory);
    loteInput3.appendChild(selectCategory);
    selectCategory.appendChild(optionCategory1);
    selectCategory.appendChild(optionCategory2);
    selectCategory.appendChild(optionCategory3);
    selectCategory.appendChild(optionCategory4);
    loteContent.appendChild(loteContentBody2);
    loteContentBody2.appendChild(textareaDescription);
    loteContent.appendChild(loteContentBody3);
    loteContentBody3.appendChild(loteInput4);
    loteInput4.appendChild(labelUnitaryCost);
    loteInput4.appendChild(inputCU);
    loteContentBody3.appendChild(loteInput5);
    loteInput5.appendChild(labelTotalCost);
    loteInput5.appendChild(inputCT);
    loteContentBody3.appendChild(loteInput6);
    loteInput6.appendChild(labelWarehouse);
    loteInput6.appendChild(selectWarehouse);
    selectWarehouse.appendChild(optionWarehouse1);
    selectWarehouse.appendChild(optionWarehouse2);
    selectWarehouse.appendChild(optionWarehouse3);
    selectWarehouse.appendChild(optionWarehouse4);
    loteContentBody3.appendChild(loteInput7);
    loteInput7.appendChild(labelEndDate);
    loteInput7.appendChild(inputEndDate);
    loteContentBody3.appendChild(loteInput1602);
    loteInput1602.appendChild(labelLote);
    loteInput1602.appendChild(inputLote);
}