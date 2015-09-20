/**
 * Created by David on 20/09/2015.
 */
html = {

    // renvoie la balise body du document
    getBody : function(){
        return document.getElementsByTagName("body")[0];
    },

    // ajouter une balise nomBalise à la balise baliseMere
    ajouterBalise : function(baliseMere, nomBalise){
        baliseMere.appendChild(nomBalise);
    },


    // il est possible de passer des attributs et leur valeur en paramètres à l'infini
    // ex : ajouterBalise (document.getElementById("i0"),"P","align","center","valign","middle");
    creerBalise : function(nomBalise){
        var newBalise = document.createElement(nomBalise);
        for(i=1;i<arguments.length;i++)
            newBalise.setAttribute(arguments[i++], arguments[i]);
        return newBalise;
    },

    // ajoute (et renvoie) une balise textuelle à balise
    // ex : ajouterBalise (document.getElementById("i0"),"bonjour");
    ajouterTexte : function(balise, texte){
        var text = document.createTextNode(texte);
        balise.appendChild(text);
    }
};

table = {
    // comme ecriteurTableau.ecrire mais via DOM et
    // renvoie la balise table correspondante
    creer : function(tableauValeursClasses, classeCssTableau){
        var table = html.creerBalise("table", "class", classeCssTableau);
        for(i in tableauValeursClasses){
            var aux = tableauValeursClasses[i];
            var tr = html.creerBalise("tr");
            var td;
            for(j in aux){
                td = html.creerBalise("td", "class", aux[j].classeCss);
                html.ajouterTexte(td, aux[j].valeur);
                html.ajouterBalise(tr, td);
            }
            html.ajouterBalise(table, tr);
        }
        return table;
    }
};

generateurTableauMultiplication = {

    generer : function(xs, ys){

        var tabValeurs = [], tabCell = [];
        tabCell.push(this.intitule(""));

        for(x = 0;x<xs.length;x++){
            tabCell.push(this.intitule(xs[x]));
        }
        tabValeurs.push(tabCell);

        for(y = 0;y<ys.length;y++){
            tabCell = [];
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

function go(){
    var intitules_colonnes, intitules_lignes;
    intitules_colonnes = prompt(
        "Colonnes : entrer une série de nombres séparés par des virgules",
        "2,4,6,8,10,12,19").split(",");
    intitules_lignes = prompt(
        "Lignes : entrer une série de nombres séparés par des virgules",
        "3,6,9,12,15,18,21").split(",");

    html.ajouterBalise(html.getBody(), table.creer(
            generateurTableauMultiplication.generer(intitules_colonnes, intitules_lignes),
            "multiplication"
        )
    );
}