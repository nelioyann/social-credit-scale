window.addEventListener("DOMContentLoaded", () => {
    console.log("object");
    const boutonEnvoyer = document.querySelector("#calculate");
    const formulaire = document.querySelector("form");
    const compter = e => {
        e.preventDefault();
        // console.log(e)
        var inputs = document.querySelectorAll('input[type="radio"]');
        var total = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (
                inputs[i].checked &&
                inputs[i].getAttribute("data-correct") == "oui"
            ) {
                total += 1;
            }
        }
        let score = total * 45 + 350;
        alert("Ton score est de" + "\n" + score);
        // formulaire.unbind('submit').submit()
    };
    // if score inf
    // boutonEnvoyer.addEventListener("click", compter);
    // boutonEnvoyer.addEventListener("click", compter);
    formulaire.addEventListener("submit", compter)

});
