// Métodos DOM

const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const contador = document.querySelector("#contador");
const listaTarefas = document.querySelector("#lista-tarefas");

// Resgate de tarefas do localStorage

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

//Ouvir a agir sobre o clique

form.addEventListener("submit", adicionarTarefa);

// Funções
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    if (texto === "") {
        alert("Digite uma tarefa!");
            return        
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto, 
        concluida: false
    };
    tarefas.push(novaTarefa);
}