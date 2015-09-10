/**
 * Created by josias on 04/09/15.
 */

function Popup (titre){
    this.titre = titre;
};

Popup.prototype =  {
    creationFond : function (){
        var element = document.createElement(arguments[0]);
        for(var i=1;i<arguments.length;i++){
            element.style[arguments[i++]] = arguments[i];
            console.log(i);
        }
        return element;
    },
    createFondBlanc : function (){

    },
    createTitre : function (){

    },
    createBouton : function(){

    }
};

