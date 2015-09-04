/**
 * Created by david on 04/09/2015.
 */
var trtd = "<table style=\"border: #000088 1px dashed\">";
var i = 0, j = 0;
for(i=1;i<=10;i++){
    trtd += "<tr>";
    for(j=1;j<=10;j++)
        trtd += "<td style=\"border-top: solid 1px red; border-right:solid 1px darkgray; border-bottom: solid 1px green; border-left: solid 1px blue;\">" + (i * j) + "</td>";
    trtd += "</tr>";
}
trtd += "</table>";

document.write(trtd);