const players_elm = document.querySelector(".p_n")
const id_elm = document.querySelector(".id_n")
window.addEventListener("message", (event) => {
    let e = event.data;

    if (e.action === "update") {
        players_elm.innerHTML = event.data.players;
        id_elm.innerHTML = event.data.id;
    }
});