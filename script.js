window.addEventListener("DOMContentLoaded", () => {
    console.log("object");
    // const boutonEnvoyer = document.querySelector("#calculate");
    const formulaire = document.querySelector("form");
    const bar = document.querySelector("#bar");
    const inputs = document.querySelectorAll('input[type="radio"]');
    const compter = e => {
        // e.preventDefault();
        // console.log(e)
        var total = 0;
        for (var i = 0; i < inputs.length; i++) {
            if (
                inputs[i].checked &&
                inputs[i].getAttribute("data-correct") == "oui"
            ) {
                total += 1;
            }
        }
        bar.style.width = (total*10)+1 + "%"
        let score = total *  60 + 350;
        bar.innerHTML = score
        // alert("Ton score est de" + "\n" + score);
        // formulaire.unbind('submit').submit()
    };
    // if score inf
    // boutonEnvoyer.addEventListener("click", compter);
    inputs.forEach(input =>{
        input.addEventListener("click", compter);

    })
    formulaire.addEventListener("submit", compter)

});
