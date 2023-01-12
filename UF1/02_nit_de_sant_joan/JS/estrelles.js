window.onload = inici;

function inici() {
    loadEstrelles();
    var nEstrelles = localStorage.getItem("nEstrelles");
    var radi = localStorage.getItem("radi");
    var distancia = localStorage.getItem("distancia");
    crearEstrelles(parseInt(nEstrelles), parseInt(radi), parseInt(distancia));
}

function updateNEstrelles() {
    var nEstrelles = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("p")[0].innerHTML = nEstrelles;
    crearEstrelles(nEstrelles);
    localStorage.setItem("nEstrelles", nEstrelles);
}

function loadEstrelles() {
    var nEstrelles = document.getElementsByTagName("input")[0];
    nEstrelles.addEventListener("change", updateNEstrelles);
    //Si al localStorage no hi tenim res a l'HTML hi mostrarem el valor bàsic (525)
    if (localStorage.getItem("nEstrelles") == null) {
        document.getElementsByTagName("p")[0].innerHTML = nEstrelles.value;
        //En cas contrari mostrem a l'HTML el nombre que tenim guardat a localStorage
    } else {
        document.getElementsByTagName("p")[0].innerHTML = localStorage.getItem("nEstrelles");
    }
    /**
     * El valor que es mostrarà al range serà el del localStorage
     * Si hi ha un valor, es posarà a l'alçada del valor
     * Si no hi ha valor es posarà al mig
     */
    nEstrelles.value = localStorage.getItem("nEstrelles");
}

//Creació de classe

class Estrella {
    constructor(radi, posicioX, posicioY, opacitat) {
        this.radi = radi;
        this.posicioX = posicioX;
        this.posicioY = posicioY;
        this.opacitat = opacitat;
    }

    getRadi() {
        return this.radi;
    }

    getPosicioX() {
        return this.posicioX;
    }

    getPosicioY() {
        return this.posicioY;
    }

    getOpacitat() {
        return this.opacitat;
    }
}

//Canvas

var array_estrelles = [];

function random(min, max) {
    return Math.random() * ((max + 1) - min) + min;
}

function crearEstrelles(nEstrelles, radi, distancia) {
    var c = document.getElementsByTagName("canvas")[0];
    var ctx = c.getContext("2d");
    if (radi != null) {
        for (let i = 0; i < nEstrelles; i++) {
            let posicioX = random(radi, c.width - radi);
            let posicioY = random(radi, c.height - radi);
            while (!distanciaCorrecte(posicioX, posicioY, radi, distancia, array_estrelles)) {
                posicioX = random(radi, c.width - radi);
                posicioY = random(radi, c.height - radi);
            }
            let opacitat = random(0.5, 1);
            let mida_radi = random(1, radi);
            var estrella = new Estrella(mida_radi, posicioX, posicioY, opacitat);
            array_estrelles[i] = estrella;

            ctx.beginPath();
            ctx.globalAlpha = array_estrelles[i].getOpacitat();
            ctx.arc(array_estrelles[i].getPosicioX(), array_estrelles[i].getPosicioY(), array_estrelles[i].getRadi(), 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "white";
            ctx.fill();
        }
    } else {
        nEstrelles_anterior = localStorage.getItem("nEstrelles");
        if (nEstrelles_anterior > nEstrelles) {
            ctx.clearRect(0, 0, c.width, c.height);
            for (let i = 0; i < nEstrelles_anterior - nEstrelles; i++) {
                array_estrelles.pop();
            }

            for (let a = 0; a < array_estrelles.length; a++) {
                ctx.beginPath();
                ctx.globalAlpha = array_estrelles[a].getOpacitat();
                ctx.arc(array_estrelles[a].getPosicioX(), array_estrelles[a].getPosicioY(), array_estrelles[a].getRadi(), 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "white";
                ctx.fill();
            }
        } else {
            radi = parseInt(localStorage.getItem("radi"));
            distancia = parseInt(localStorage.getItem("distancia"));
            ctx.clearRect(0, 0, c.width, c.height);
            estrelles_a_crear = nEstrelles - nEstrelles_anterior;
            for (let a = 0; a < estrelles_a_crear; a++) {
                let posicioX = random(radi, c.width - radi);
                let posicioY = random(radi, c.height - radi);
                while (!distanciaCorrecte(posicioX, posicioY, radi, distancia, array_estrelles)) {
                    posicioX = random(radi, c.width - radi);
                    posicioY = random(radi, c.height - radi);
                }
                let opacitat = random(0.5, 1);
                let mida_radi = random(1, radi);
                var estrella = new Estrella(mida_radi, posicioX, posicioY, opacitat);
                array_estrelles.push(estrella);
            }


            for (let a = 0; a < array_estrelles.length; a++) {
                ctx.beginPath();
                ctx.globalAlpha = array_estrelles[a].getOpacitat();
                ctx.arc(array_estrelles[a].getPosicioX(), array_estrelles[a].getPosicioY(), array_estrelles[a].getRadi(), 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "white";
                ctx.fill();
            }
        }
        
    }
}

function distanciaCorrecte(posicioX, posicioY, radi, distancia_demanada, array_estrelles) {
    for (let i = 0; i < array_estrelles.length; i++) {
        let distancia = Math.sqrt((posicioX - array_estrelles[i].posicioX) ** 2 + (posicioY - array_estrelles[i].posicioY) ** 2);
        if (distancia < distancia_demanada + radi + array_estrelles[i].radi) {
            return false;
        }
    }
    return true;
}