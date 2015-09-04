/**
 * Created by David on 03/09/2015.
 */

var trtd = "<table>";
var i = 0, j = 0;
for(i=1;i<=10;i++){
    trtd += "<tr>";
    for(j=1;j<=10;j++)
        trtd += "<td>" + (i * j) + "</td>";
    trtd += "</tr>";
}
trtd += "</table>";

document.write(trtd);

var table = document.getElementsByTagName("table")[0];
table.style.border = "solid 1px";
table.cellPadding = "5px";
table.cellSpacing = "0px";