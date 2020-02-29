window.addEventListener("DOMContentLoaded", () => {
    console.log("object");
    const boutonEnvoyer = document.querySelector("#calculate");
    const compter = e => {
        e.preventDefault();
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
    };
    // if score inf
    boutonEnvoyer.addEventListener("click", compter);
});
