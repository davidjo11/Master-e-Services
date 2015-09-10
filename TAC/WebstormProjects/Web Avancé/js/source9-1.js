/**
 * Created by josias on 10/09/15.
 */

intitules_colonnes = prompt("Entrez une série de nombre séparés par des virgules:", "2,4,6,8,10,12,19");

intitules_lignes = prompt("Entrez une série de nombres séparés par des virgules:", "3,6,9,12,15,18,21");

var colonnes = intitules_colonnes.split(","), lignes = intitules_lignes.split(",");

var trtd = "<table style=\"border: #000088 1px dashed\">";
var i = 0, j = 0;

//entete colonne
trtd += "<tr><td style=\"background-color : #00AAAA\"/><td style=\"background-color : #00AAAA\">"+ colonnes.join("</td><td style=\"background-color : #00AAAA\">")+"</td></tr>";

for(i=0;i<lignes.length;i++){
    trtd += "<tr><td style=\"background-color : #00AAAA\">"+lignes[i]+"</td>";
    for(j=0;j<colonnes.length;j++){
        var val = new String(lignes[i] * colonnes[j]);
        if(val%10 == 0)
            val = val.bold();
        if(val>=100)
            val = val.strike();
        trtd += "<td style=\"border-top: solid 1px red; border-right:solid 1px darkgray; border-bottom: solid 1px green; border-left: solid 1px blue;\">" + val + "</td>";
    }
    trtd += "</tr>";
}
trtd += "</table>";

document.write(trtd);
