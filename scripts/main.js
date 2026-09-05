function change_artem(){
    let name = prompt("Введите имя: ");
    document.querySelector("#hello-artem").textContent = "А теперь об " + name + "е";
    document.querySelector("#short-artem").textContent = "Об " + name + "е долго можно не говорить. Он изображён на картинке выше.";
    document.querySelector("#describe-artem").textContent = name + ", он...";
    document.querySelector("#list-artem").textContent = "ФИО: ███████████ " + name + " (НЕТ ОТЧЕСТВА)";

}
document.querySelector("button").onclick = change_artem;