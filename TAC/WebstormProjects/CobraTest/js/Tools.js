Tools = {
  _createStyledElement: function (tagName) {
       var element = document.createElement(tagName);
       for (var i = 1; i < arguments.length; i += 2) {
           element.style[arguments[i]] = arguments[i + 1];
       }
       return element;
  },

  _assignAttributes : function (balise){
    for(i = 1;i<arguments.length;i++){
      balise.setAttribute(arguments[i++], arguments[i]);
    }
  },

  // renvoie la balise body du document
  _getBody : function(){
      return document.getElementsByTagName("body")[0];
  },

  // ajouter une balise nomBalise � la balise baliseMere
  _ajouterBalise : function(baliseMere, nomBalise){
      baliseMere.appendChild(nomBalise);
  },

  // il est possible de passer des attributs et leur valeur en param�tres � l'infini
  // ex : ajouterBalise (document.getElementById("i0"),"P","align","center","valign","middle");
  _creerBalise : function(nomBalise){
      var newBalise = document.createElement(nomBalise);
      for(i=1;i<arguments.length;i++)
          newBalise.setAttribute(arguments[i++], arguments[i]);
      return newBalise;
  },

  // ajoute (et renvoie) une balise textuelle � balise
  // ex : ajouterBalise (document.getElementById("i0"),"bonjour");
  _ajouterTexte : function(balise, texte){
      var text = document.createTextNode(texte);
      balise.appendChild(text);
  },

  _eventListener : function (e){
    document.addEventListener("click", function (){
      var target = event.getTarget();
      if(target.id == "ValiderConnexion"){
        
      }
    }, false);
  }
}
