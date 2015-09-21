/**
 * Created by David on 19/09/2015.
 */
ecriteurTableau = {
    ecrire : function (tableauValeursClasses, classeCssTableau){
        this.ecrireDebutBalise("table", classeCssTableau);
        for(i in tableauValeursClasses){
            var aux = tableauValeursClasses[i];
            this.ecrireDebutBalise("tr","");
            for(j in aux){
                this.ecrireBalise("td", aux[j].classeCss, aux[j].valeur);
            }
            this.ecrireFinBalise("tr");
        }

        this.ecrireFinBalise("table");
    },
    ecrireDebutBalise : function (nomBalise, classeCss){
        document.write("<" + nomBalise + " class=\""+ classeCss +"\">");
    },
    ecrireFinBalise : function (nomBalise){
        document.write("<\/\""+ nomBalise +"\">");
    },
    ecrireBalise : function (nomBalise, classeCss, contenu){
        this.ecrireDebutBalise(nomBalise, classeCss);
        document.write(""+contenu);
        this.ecrireFinBalise(nomBalise);
    }
};

generateurTableauMultiplication = {

    generer : function(xs, ys){

        var tabValeurs = new Array(), tabCell = new Array();
        tabCell.push(this.intitule(""));

        for(x = 0;x<xs.length;x++){
            tabCell.push(this.intitule(xs[x]));
        }
        tabValeurs.push(tabCell);

        for(y = 0;y<ys.length;y++){
            tabCell = new Array();
            tabCell.push(this.intitule(ys[y]));
            for(x=0;x<xs.length;x++){
                tabCell.push(this.valeur(ys[y] * xs[x]));
            }
            tabValeurs.push(tabCell);
        }
        return tabValeurs;
    },

    texteSimple : function (texte){
        return { valeur : "" + texte, classeCss : null };
    },

    intitule : function (texte){
        return { valeur : ""+texte, classeCss : "intitule" };
    },

    valeur : function (texte){
        return { valeur : ""+texte, classeCss : "valeur" };
    }
};

var intitules_colonnes, intitules_lignes;
intitules_colonnes = prompt(
    "Colonnes : entrer une série de nombres séparés par des virgules",
    "2,4,6,8,10,12,19").split(",");
intitules_lignes = prompt(
    "Lignes : entrer une série de nombres séparés par des virgules",
    "3,6,9,12,15,18,21").split(",");
ecriteurTableau.ecrire( generateurTableauMultiplication.generer(intitules_colonnes, intitules_lignes), "multiplication");