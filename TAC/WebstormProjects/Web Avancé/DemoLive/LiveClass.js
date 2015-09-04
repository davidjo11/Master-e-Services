/**
 * Created by josias on 04/09/15.
 */

alert("Salut");

//javascript:{baliseScript = document.createElement("script");baliseScript.src = "http://localhost:63342/WebstormProjects/Web Avancé/DemoLive/LiveClass.js";document.getElementsByTagName("body")[0].appendChild(baliseScript);}
bg = document.createElement("div");
bg.style.backgroundColor = "rgba(0,0,0,0.5)";
bg.style.position = "absolute";
bg.style.top = "0";
bg.style.left = "0";
bg.style.height = "50%";
bg.style.width = "100%";
bg.style.zIndex = "300";

document.getElementsByTagName("body")[0].appendChild(bg);