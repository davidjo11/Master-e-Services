/**
 * Created by josias on 10/09/15.
 */
/**
 * Created by josias on 10/09/15.
 */

intitules_colonnes = prompt("Entrez une série de nombre séparés par des virgules:", "2,4,6,8,10,12,19");

intitules_lignes = prompt("Entrez une série de nombres séparés par des virgules:", "3,6,9,12,15,18,21");

var colonnes = intitules_colonnes.split(","), lignes = intitules_lignes.split(",");

var trtd = "<table class=\"multiplication\">";
var i = 0, j = 0;

//entete colonne
trtd += "<tr><td class=\"intitule\"/><td class=\"intitule\">"+ colonnes.join("</td><td class=\"intitule\">")+"</td></tr>";

for(i=0;i<lignes.length;i++){
    trtd += "<tr><td class=\"intitule\">"+lignes[i]+"</td>";
    for(j=0;j<colonnes.length;j++){
        var val = new String(lignes[i] * colonnes[j]);
        if(val%10 == 0)
            val = val.bold();
        if(val>=100)
            val = val.strike();
        trtd += "<td class=\"valeur\">" + val + "</td>";
    }
    trtd += "</tr>";
}
trtd += "</table>";

document.write(trtd);
