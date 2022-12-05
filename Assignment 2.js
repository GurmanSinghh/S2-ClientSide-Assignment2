


function createTable() {
    var r = parseInt(document.getElementById("rows").value);
    var c = parseInt(document.getElementById("cols").value);
    var t = "<table><caption> Your Table Dimensions Are: " + r + " * " + c + " </caption>";
    for (var trows = 1; trows <= r; trows++) {
        t += "<tr>";
        for (var tcols = 1; tcols <= c; tcols++) {
            t += "<td>" + trows + "," + tcols + "</td>";
        }
        t += "</tr>"
    }
    document.getElementById("home").innerHTML = t + "</table>";
}

window.onload = createTable();




   