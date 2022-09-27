window.onload = inici;

function inici() {
    dropdown();
    carregarImatges();
}
function dropdown() {
    var families = ["EINES", "MOBLES", "TECNOLOGIA", "MAQUINES"];
    var select = document.getElementsByTagName("select")[0];
    families = families.sort();
    for (let i = 0; i < families.length; i++) {
        var fam = new Option(families[i], families[i]);
        select.appendChild(fam);
    }
}

function carregarImatges() {
    for (let i = 0; i <  document.getElementsByTagName("img").length; i++) {
        document.getElementsByTagName("img")[i].src = "../IMG/creu.png";
        
    }
}

function comprobarCodi() {
    var codi = document.getElementsByTagName("input")[0].value;
    var select = document.getElementsByTagName("select")[0].value;
    codi = codi.substring(0,3).toLowerCase() + codi.substring(3, codi.length);
    var lletra = obtenirLletra(codi);
    
    var numeros_regex = "[0-9]{7}";
    var reg_codi = new RegExp("^" + select.substring(0, 3).toLowerCase() + "-" + numeros_regex + "-" + lletra + "$");
    
    if (reg_codi.test(codi)) {
        document.getElementsByTagName("img")[0].src = "../IMG/tick.png";
    }else{
        document.getElementsByTagName("img")[0].src = "../IMG/creu.png";
    }
}

function obtenirLletra(codi) {
    var numeros = parseInt(codi.substring(4, 11));
    switch (numeros % 10) {
        case 0:
            lletra = "A";
            break;
    
        case 1:
            lletra = "X";
            break;
        
        case 2:
            lletra = "M";
            break;
        case 3:
            lletra = "T";
            break;
            
        case 4:
           lletra = "B";
            break;

        case 5:
            lletra = "C";
            break;
    
        case 6:
            lletra = "S";
            break;
        
        case 7:
            lletra = "O";
            break;

        case 8:
            lletra = "P";
            break;
            
        case 9:
           lletra = "Z";
            break;
    }
    
    return lletra;
}

function comprobarMides(){
    var amplada = document.getElementsByTagName("input")[2].value;
    var llargada = document.getElementsByTagName("input")[3].value;
    var alçada = document.getElementsByTagName("input")[4].value;

    //comprobar contingut amplada
    var amplada_correcte = comprobarContingutMides(amplada, 1);
    //comprobar contingut llargada
    var llargada_correcte = comprobarContingutMides(llargada, 2);
    //comprobar contingut alçada
    var alçada_correcte = comprobarContingutMides(alçada, 3);

    if (amplada_correcte && llargada_correcte && alçada_correcte) {
        document.getElementsByTagName("p")[0].innerHTML = amplada + " x " + llargada + " x " + alçada;
    }else{
        document.getElementsByTagName("p")[0].innerHTML = "";
    }
}

function comprobarContingutMides(mida, numero) {
    //S'accepta numeros sense o amb decimals(amb coma o punt): 3 | 3,3 | 3.3
    if (/^(\d+|\d+\,\d+|\d+\.\d+)$/.test(mida)) {
        document.getElementsByTagName("img")[numero].src = "../IMG/tick.png";
        return true;
    }else{
        document.getElementsByTagName("img")[numero].src = "../IMG/creu.png";
        return false;
    }
}