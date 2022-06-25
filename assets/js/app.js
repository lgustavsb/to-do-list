/*
 * BUTTONS
 */
let btnAddPainel = document.getElementById("btn_add_painel");

/*
 * INPUTS
 */
let nomeTarefa = "";
let nomeLista = "";

/*
 * Painels
 */
let painelTarefas = document.getElementById("painel-tarefas");
let listaTarefa = "";
let itemTarefa = "";
let tarefasFixadas = "";

const controlPainelTarefa = () => {
  btnAddPainel.addEventListener("click", function () {
    let lenght = painelTarefas.querySelectorAll(".lista-tarefa").length;
    let elementItem = document.createElement("div");

    elementItem.classList = `lista-tarefa`;

    elementItem.innerHTML = `<div class='box-lista'>
                              <button class='btn_add_lista' id='btn_add_lista${lenght}'>
                                <i class="fa-solid fa-plus"></i>
                              </button>
                              <input class='name_lista' type="text" placeholder="Digite o nome da lista"
                                  id='name_lista${lenght}'></div>`;
    listaTarefa = elementItem;

    listaTarefa
      .querySelector(".name_lista")
      .addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
          evt.preventDefault();
          if (this.value != 0) {
            nomeLista = this;
            createTarefa(listaTarefa, nomeLista);
          } else {
            alert("digite algo!");
          }
        }
      });

    painelTarefas.appendChild(listaTarefa);
    listaTarefa.querySelector(".name_lista").focus();
  });
};

const createTarefa = function () {
  let elementItem = document.createElement("div");
  elementItem.classList = `title-lista`;

  elementItem.innerHTML = `<h4>${nomeLista.value}</h4>
                           <button class='btn_remove'>
                              <i class="fa-solid fa-times"></i>
                            </button>`;

  listaTarefa.appendChild(elementItem);

  document.querySelector(".box-lista").remove();

  createItemTarefa(listaTarefa);

  listaTarefa.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("btn_remove")) {
      e.target.parentElement.parentElement.remove();
    }
  });
};

const createItemTarefa = function () {
  let lenght = listaTarefa.querySelectorAll(".item-add-tarefa").length;
  tarefasFixadas = document.createElement("div");
  tarefasFixadas.classList = `tarefas-fixadas`;
  let elementItem = document.createElement("div");
  elementItem.classList = `item-add-tarefa`;

  elementItem.innerHTML = ` <button class="add">
                              <i class="fa-solid fa-plus"></i>
                            </button>
                            <input type="text" placeholder="Digite uma tarefa"
                            class="name_tarefa" id="name_tarefa${lenght}" />`;
  itemTarefa = elementItem;

  listaTarefa.appendChild(itemTarefa);

  itemTarefa
    .querySelector(".name_tarefa")
    .addEventListener("keypress", function (evt) {
      if (evt.key === "Enter") {
        evt.preventDefault();
        if (this.value != 0) {
          nomeTarefa = this;
          createFixarTarefas(tarefasFixadas, listaTarefa, nomeTarefa);
        } else {
          alert("digite algo!");
        }
      }
    });

  itemTarefa.querySelector(".name_tarefa").focus();
};

const createFixarTarefas = function () {
  let lenght = listaTarefa.querySelectorAll(".item-tarefa").length;
  let elementItem = document.createElement("div");
  elementItem.classList = `item-tarefa`;

  elementItem.innerHTML = `<input type="checkbox" id='tarefa${lenght + 1}' />
                              <label for='tarefa${lenght + 1}'>
                              ${nomeTarefa.value}</label>
                              <button class='btn_remove'>
                                <i class="fa-solid fa-times"></i>
                              </button>`;
  tarefasFixadas.appendChild(elementItem);

  listaTarefa.insertBefore(tarefasFixadas, itemTarefa);

  nomeTarefa.value = "";
  nomeTarefa.focus();

  tarefasFixadas.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn_remove")) {
      e.target.parentElement.remove();
    }
  });
};

var init = function () {
  controlPainelTarefa();
};

init();
