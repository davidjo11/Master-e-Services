/**
 * Created by David on 03/09/2015.
 */

trtd = "<table>";
for($i=1;$i<=10;$i++){
    trtd += "<tr>";
    for($j=1;$j<=10;$i++)
        trtd += "<td>" + ($i * $j) + "</td>";
    trtd += "</tr>";
}
trtd += "</table>";

document.write(trtd);

table = document.getElementsByTagName("table")[0];
table.borderStyle = "1px";
table.cellPadding = "5px";