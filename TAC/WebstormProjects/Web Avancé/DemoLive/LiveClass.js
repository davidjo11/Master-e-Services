/**
 * Created by josias on 04/09/15.
 */


//javascript:{baliseScript = document.createElement("script");baliseScript.src = "http://localhost:63342/WebstormProjects/Web Avancé/DemoLive/LiveClass.js";document.getElementsByTagName("body")[0].appendChild(baliseScript);}


createStyleElement = function (){
    var element = document.createElement(arguments[0]);
    for(var i=1;i<arguments.length;i++){
        element.style[arguments[i++]] = arguments[i];
        console.log(i);
    }
    return element;
};

bg = createStyleElement("div",
        "position", "absolute",
        "backgroundColor", "black",
        "opacity", "0.5",
        "top", "0",
        "left" , "0",
        "height", "50%",
        "width", "100%",
        "zIndex", "300"
    );

bg2 = createStyleElement("div",
        "margin", "auto",
        "backgroundColor", "white",
        "width", "50%",
        "color", "black",
        "height", "50%",
        "position", "relative"
    );

bg2.appendChild(document.createTextNode("Titre:"));

button1 = createStyleElement("button",
        "position", "absolute",
        "height", "20px",
        "width", "20px",
        "bottom", "5%",
        "color", "black",
        "text-align", "center",
        "right", "5%",
        "border-radius", "50px"
    );

button1.innerText = "Ok";

bg2.appendChild(button1);

bg.appendChild(bg2);

bg2.addEventListener("click", {handleEvent : function (event){ event.stopPropagation()}}, false);
//Fils aux parents => propagation stoppée, autrement quand tu cliques sur le fond bg2 tous se barre.

bg.addEventListener("click", { handleEvent : function (){ document.getElementsByTagName("body")[0].removeChild(bg); } }, false);

document.getElementsByTagName("body")[0].appendChild(bg);