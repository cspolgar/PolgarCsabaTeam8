function DiakInfo(nev, csoport, tipus) {
    if (tipus = true) {
        return nev + " [Team0" + csoport + "] Junior Frontend";
    }
    return nev + " [Team0" + csoport + "] Webfejlesztő";
}
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Váltózó"];
    }
    else if (jegy == 2) {
        return ["Rossz", "Hanyag"];
    }
}
function HarommalOszthatokSzama(tomb) {
    var oszhatoszam = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            oszhatoszam++;
        }
    }
    return oszhatoszam;
}
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var i = 0;
    var nyeroSzamok = [];
    while (i > mennyiseg) {
        var nyeroSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        var szerepelE = false;
        for (var j = 0; i < nyeroSzamok.length; i++) {
            if (nyeroSzamok[j] == nyeroSzam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroSzamok.push(nyeroSzam);
            i++;
        }
    }
    return nyeroSzamok;
}
