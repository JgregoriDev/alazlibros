function mostrarMenu() {
    console.log('menu');
    let menu = document.querySelector("#myLinks");
    console.log(menu);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}