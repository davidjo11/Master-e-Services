/**
 * Created by David on 19/09/2015.
 */
function genererTableauMultiplication(xs, ys){

    //Sous-fonctions:
    texteSimple = function (texte){
        return new Array("" + texte, null);
    };

    intitule = function (texte){
        return new Array(""+texte, "intitule");
    };

    valeur = function (texte){
        return new Array(""+texte, "valeur");
    };

    var tabValeurs = new Array(), tabCell = new Array();
    tabCell.push(intitule(""));

    for(x = 0;x<xs.length;x++){
        tabCell.push(intitule(xs[x]));
    }
    tabValeurs.push(tabCell);

    for(y = 0;y<ys.length;y++){
        tabCell = new Array();
        tabCell.push(intitule(ys[y]));
        for(x=0;x<xs.length;x++){
            tabCell.push(valeur(ys[y] * xs[x]));
        }
        tabValeurs.push(tabCell);
    }
    return tabValeurs;
}

function ecrireTableau(tableauValeursClasses, classeCssTableau){
    recupValeur = function (tableau){
        return tableau[0];
    };
    recupClasse = function (tableau){
        return tableau[1];
    };
    ecrireDebutBalise = function (nomBalise, classeCss){
        document.write("<" + nomBalise + " class=\""+ classeCss +"\">");
    };
    ecrireFinBalise = function (nomBalise){
        document.write("<\/\""+ nomBalise +"\">");
    };
    ecrireBalise = function (nomBalise, classeCss, contenu){
        ecrireDebutBalise(nomBalise, classeCss);
        document.write(""+contenu);
        ecrireFinBalise(nomBalise);
    };

    document.write("<table class=\""+ classeCssTableau +"\">");
    for(i in tableauValeursClasses){
        var aux = tableauValeursClasses[i];
        ecrireDebutBalise("tr","");
        for(j in aux){
            ecrireBalise("td", recupClasse(aux[j]), recupValeur(aux[j]));
        }
        ecrireFinBalise("tr");
    }

    document.write("</table>");
}

intitules_colonnes = prompt("Entrez une série de nombre séparés par des virgules:", "2,4,6,8,10,12,19");

intitules_lignes = prompt("Entrez une série de nombres séparés par des virgules:", "3,6,9,12,15,18,21");

tab = genererTableauMultiplication(intitules_colonnes.split(","), intitules_lignes.split(","));

ecrireTableau(tab, "multiplication");