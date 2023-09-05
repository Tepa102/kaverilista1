const kaverit = [];

// Kysy 10 kaverin nimeä ja lisää ne taulukkoon
for (let i = 1; i <= 10; i++) {
    let kaverinNimi = prompt(`Syötä ${i}. kaverin nimi:`);
    if (kaverinNimi.trim() === "") {
        alert("Syötä kaverin nimi.");
        i--; // Vähennetään laskuria yhdellä, jotta kaverin nimi kysytään uudestaan
    } else {
        kaverit.push(kaverinNimi); // Lisää nimi taulukkoon
    }
}

paivitaNaytto(); // Päivitä näyttö

function paivitaNaytto() {
    let nimiLista = document.querySelector("#nimiLista");
    
    for (let i = 0; i < kaverit.length; i++) {
        let listaElementti = document.createElement("li");
        listaElementti.textContent = kaverit[i];
        nimiLista.appendChild(listaElementti);
    }
}
