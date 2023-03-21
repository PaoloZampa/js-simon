/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//genero 5 numeri
const randomNumbers = Array(5).fill().map(() => Math.floor(100 * Math.random()));
console.log(randomNumbers);

const container = document.querySelector(".container");

for (let i = 0; i < randomNumbers.length; i++) {
    const random = `<div class="random">${randomNumbers[i]}</div>`
    container.innerHTML += random
    setTimeout(() => {
        container.classList.add('d-none')
        let userNumbers = Number(prompt("inserisci i tuoi numeri uno alla volta!"));
        console.log(userNumbers);
        if (userNumbers !== randomNumbers[i]){
            alert(`Il numero ${userNumbers} non è presente! Ricarica la pagina da solo che io non lo so fare!`)
        }
    }, 3000); 
}

