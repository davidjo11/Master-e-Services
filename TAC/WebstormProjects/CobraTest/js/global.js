//Lancer les traitements après le chargement de la page de sorte à pouvoir
// récupérer le body (faire onload() sur body).
function go(){
  var initialize = new InitializeBundle();
  initialize.initialize();
}

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
    this.divConnection = Tools._createStyledElement("div",
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

    var input = Tools._createStyledElement("input",
      "margin-top", "15px",
      "margin-bottom", "5px",
      "font-size", "22px");
    this._assignAttributes(input,
      "type", "text",
      "placeholder", "Your pseudo",
      "required", "",
      "autofocus", "");
    this._ajouterBalise(this.divConnection, input);

    var button = Tools._createStyledElement("button",
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

    var body = Tools._getBody();
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
  }
};
