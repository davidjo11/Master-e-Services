/**
 * Created by josias on 10/09/15.
 */

multiplicateur = undefined;

do {
    multiplicateur = prompt("Entrez un nombre:");
}
while(isNaN(multiplicateur));

multiplicateur = Math.round(multiplicateur);

var trtd = "<table style=\"border: #000088 1px dashed\">";
var i = 0, j = 0;
for(i=1;i<=10;i++){
    trtd += "<tr>";
    for(j=1;j<=10;j++){
        var val = new String(i * j * multiplicateur);
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