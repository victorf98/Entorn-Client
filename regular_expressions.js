function codiPostal(codi) {
    return /^\d{5}$/.test(codi)
}

function compteCorrent(compte) {
    return /^\d{4}-\d{4}-\d{2}-\d{10}$/.test(compte)
}

function telefon(ntelf) {
    return /^\(\+0{2}34\) \d{3}.\d{3}.\d{3}$/.test(ntelf)
}

function id(identificacio) {
    return /^\d{8}[A-Z]$|^\d{8}-[A-Z]$|^[A-Z]\d{8}$/.test(identificacio)
}

function exercici() {
    console.log("Codi postal --> 17800: " + codiPostal("17808"));
    console.log("Codi postal --> 1780a: " + codiPostal("1780a"));
    console.log("Codi postal --> 178084: " + codiPostal("178084"));

    console.log("Compte corrent - dddd-dddd-dd-dddddddddd --> 1234-2132-21-1020101040: " + compteCorrent("1234-2132-21-1020101040"));
    console.log("Compte corrent - dddd-dddd-dd-dddddddddd --> 12344-2132-21-1020101040: " + compteCorrent("12344-2132-21-1020101040"));
    console.log("Compte corrent - dddd-dddd-dd-dddddddddd --> 12a4-2132-21-1020101040: " + compteCorrent("12a4-2132-21-1020101040"));
    console.log("Compte corrent - dddd-dddd-dd-dddddddddd --> 12442132-21-1020101040: " + compteCorrent("12442132-21-1020101040"));

    console.log("Telefon - {(+0034) ddd.ddd.ddd} --> (+0034) 435.542.768: " + telefon("(+0034) 435.542.768"));
    console.log("Telefon - {(+0034) ddd.ddd.ddd} --> (0034) 435.542.768: " + telefon("(0034) 435.542.768"));
    console.log("Telefon - {(+0034) ddd.ddd.ddd} --> (+0034) 4a5.542.768: " + telefon("(+0034) 4a5.542.768"));
    console.log("Telefon - {(+0034) ddd.ddd.ddd} --> (+0034) 435542.768: " + telefon("(+0034) 435542.768"));

    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> 77923194E: " + id("77923194E"))
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> 77923194-E: " + id("77923194-E"))
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> E77923194: " + id("E77923194"))
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> 77923194: " + id("77923194"))
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> 77923194aE: " + id("7792319aE"))
    console.log("DNI: ddddddddC dddddddd-C Cdddddddd --> 77923194.E: " + id("77923194.E"))
}

exercici()