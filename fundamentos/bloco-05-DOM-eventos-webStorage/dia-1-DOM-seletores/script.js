const header1 = document.querySelector("#header-container");
header1.style.backgroundColor = 'green';
header1.style.color = "white";

document.querySelectorAll(".tituloNaoImportante")[0].style.backgroundColor = "#232525";
document.querySelectorAll(".tituloNaoImportante")[1].style.backgroundColor = "#232525";

// Mudando as cores das tasks
const importantes = document.querySelector(".emergency-tasks")
importantes.style.backgroundColor = "#FF9F84";
const naoImportantes = document.querySelector(".no-emergency-tasks")
naoImportantes.style.background = "#F9DB5E";

const titulosImportantes = document.querySelectorAll(".tituloImportante");
for (i in titulosImportantes) {
  titulosImportantes[i].style.backgroundColor = "#A500F3";
  titulosImportantes[i].style.color = "white";
}

// const titulosNaoImportantes = document.querySelectorAll(".tituloNaoImportante");
// for (i in titulosNaoImportantes) {
//   titulosNaoImportantes[i].style.backgroundColor = "#232525";
//   titulosNaoImportantes[i].style.color = "white";
// }


// #232525

