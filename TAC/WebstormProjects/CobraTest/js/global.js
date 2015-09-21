html = {
    // renvoie la balise body du document
    getBody : function(){
        return document.getElementsByTagName("body")[0];
    },

    // ajouter une balise nomBalise � la balise baliseMere
    ajouterBalise : function(baliseMere, nomBalise){
        baliseMere.appendChild(nomBalise);
    },

    // il est possible de passer des attributs et leur valeur en param�tres � l'infini
    // ex : ajouterBalise (document.getElementById("i0"),"P","align","center","valign","middle");
    creerBalise : function(nomBalise){
        var newBalise = document.createElement(nomBalise);
        for(i=1;i<arguments.length;i++)
            newBalise.setAttribute(arguments[i++], arguments[i]);
        return newBalise;
    },

    // ajoute (et renvoie) une balise textuelle � balise
    // ex : ajouterBalise (document.getElementById("i0"),"bonjour");
    ajouterTexte : function(balise, texte){
        var text = document.createTextNode(texte);
        balise.appendChild(text);
    }
};

Menu = "MENU";

menu = {
  
}
