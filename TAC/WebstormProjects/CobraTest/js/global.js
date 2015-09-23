//Lancer les traitements après le chargement de la page de sorte à pouvoir
// récupérer le body (faire onload() sur body).
function go(){
  var initialize = new InitializeBundle();
  initialize.initialize();
}

colors = ["blueBody" : "#226677", "grayMenu" : "gray"];


function InitializeBundle(){
  this._connection = new ConnectionBundle();
  this.body = this._getBody();
  this.divLoader = null;
  this.divConnection = null;
  this.divMenu = null;
  this.divContent = null;
}

InitializeBundle.prototype = {

  initialize : function (){

    /* Partie connexion*/
    this.divConnection = this._createStyledElement("div",
      "padding", "25px",
      "background-color", "white",
      "color", "black",
      "text-align", 'center',
      "display", "none",
      "flex-direction", "column",
      "justify-content", "space-around",
      "align-items", "center",
      "position", "absolute",
      "left", "50%",
      "font-size", "25px",
      "-webkit-box-shadow", "7px 13px 23px #000000",
      "box-shadow", "7px 13px 23px #000000",
      "-webkit-transform", "translate(-50%, -50%)",
      "transform", "translate(-50%, -50%)",
      "-webkit-animation", "connectionTranslateY 3s",
      "animation", "connectionTranslateY 3s",
      "-webkit-animation-iteration-count", "1",
      "animation-iteration-count", "1",
      "-webkit-animation-fill-mode", "forwards",
      "animation-fill-mode", "forwards");
    this._assignAttributes(this.divConnection,
      "class", "connection");
    this._ajouterTexte(this.divConnection, "Entrez votre pseudo:");

    var input = this._createStyledElement("input",
      "margin-top", "15px",
      "margin-bottom", "5px",
      "font-size", "22px");
    this._assignAttributes(input,
      "type", "text",
      "placeholder", "Your pseudo",
      "required", "",
      "autofocus", "");
    this._ajouterBalise(this.divConnection, input);

    var button = this._createStyledElement("button",
      "color", "white",
      "margin", "10px",
      "padding", "10px 25px",
      "border", "0px",
      "background-color", "green",
      "font-size", "16px",
      "box-shadow", "2px 5px 10px gray",
      "-webkit-box-shadow", "2px 5px 10px gray",
      "-moz-box-shadow", "2px 5px 10px gray",
      "-moz-border-radius", "22px 5px 22px 5px",
      "-webkit-border-radius", "22px 5px 22px 5px",
      "border-radius", "22px");
    this._assignAttributes(button,
      "id", "ValiderConnexion",
      "type", "button");
    this._ajouterTexte(button, "Valider");
    this._ajouterBalise(this.divConnection, button);

    var body = this._getBody();
    body.style.fontFamily = 'CoolveticaRg-Regular';

    this._ajouterBalise(this._getBody(), this.divConnection);

    /*Partie loader*/
    this.divLoader = this._createStyledElement("div",
      "width", "250px",
      "height", "50px",
      "line-height", "50px",
      "text-align", "center",
      "position", "absolute",
      "top", "50%",
      "left", "50%",
      "transform", "translate(-50%, -50%)",
      "text-transform", "uppercase",
      "font-weight", "900",
      "color", "#ce4233",
      "letter-spacing", "0.2em");
    this._assignAttributes(this.divLoader,
      "class", "loader",
      "display", "none");
  },

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
        this.body.style.transition = "background-color 2s";
      }
    }, false);
  }
};
