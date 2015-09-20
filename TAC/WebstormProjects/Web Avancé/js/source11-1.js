/**
 * Created by David on 19/09/2015.
 */
ecriteurTableau = {
    ecrire : function (tableauValeursClasses, classeCssTableau){
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
    },
    ecrireDebutBalise : function (nomBalise, classeCss){
        document.write("<" + nomBalise + " class=\""+ classeCss +"\">");
    },
    ecrireFinBalise : function (nomBalise){
        document.write("<\/\""+ nomBalise +"\">");
    },
    ecrireBalise : function (nomBalise, classeCss, contenu){
        ecrireDebutBalise(nomBalise, classeCss);
        document.write(""+contenu);
        ecrireFinBalise(nomBalise);
    }
};

generateurTableauMultiplication = {

};