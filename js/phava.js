    //PHAVA @enoxh
/**/
    function showItem(str) {
        if (str == "") {
            document.getElementById("show").innerHTML = "";
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("show").innerHTML = this.responseText;

                }
            };
            xmlhttp.open("GET", "includes/getItem.php?q=" + str, true);
            xmlhttp.send();
        }
    }

/**/
    function showItemsList(str, tid, tt, tc) {
        if (str == "") {
            document.getElementById("show").innerHTML = "";
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    // var data = JSON.parse(this.responseText);
                    var data = JSON.parse(this.responseText);
                    //select box
                    var view = makeList(data, 'userList', tt, tc);
                    show.innerHTML = view;

                }
            };
            xmlhttp.open("GET", "includes/getItems.php?q=" + str, true);
            xmlhttp.send();
        }
    }
 
/**/
    function showItemSelectList(str) {
        if (str == "") {
            document.getElementById("show").innerHTML = "";
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    // var data = JSON.parse(this.responseText);
                    var data = JSON.parse(this.responseText);
                    //select box
                    var view = makeSelect(data, 'userSelect', 'usr-select');
                    show.innerHTML = view;
                }
            };
            xmlhttp.open("GET", "includes/getItems.php?q=" + str, true);
            xmlhttp.send();
        }
    }

/**/
    function showItemsTable(str) {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                // var data = JSON.parse(this.responseText);
                var data = JSON.parse(this.responseText);
                //select box
                var view = makeTable(data, 'userSelect', 'table', 'table');
                show.innerHTML = view;
            }
        };
        xmlhttp.open("GET", "includes/getItems.php?q=" + str, true);
        xmlhttp.send();
    }



/**/
    function insertNewUser(str) {

        if (str == "") {
            document.getElementById("show").innerHTML = "";
            return;
        } else {
var u = document.getElementById("username").value;

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    // var data = JSON.parse(this.responseText);
                    var data = JSON.parse(this.responseText);
                    //select box
                    var view = makeSelect(data, 'userSelect', 'usr-select');
                    show.innerHTML = view;
                }
            };
            xmlhttp.open("GET", "includes/insertItem.php?q=" + u, true);
            xmlhttp.send();
        }
    }















/**/
    function makeList(data, did, listType, listClass) {
        var v = '<' + listType + '>';
        for (var i = 0; i < data.length; i++) {
            v += '<li>' + data[i][1] + '</li>';
        }
        v += '</' + listType + '>';
        return v;
    }


/**/
    function makeTable(data, did, listType, listClass) {
        var v = '';
        v += '<table class="table">';
        for (var i = 0; i < data.length; i++) {
            v += '<tr>';
            for (var j = 0; j < data[i].length; j++) {
                v += '<td>';
                v += data[i][j];
                v += '</td>';
            }
            v += '</tr>'
        }
        v += '</table>';
        return v;
    }

/**/
    function makeSelect(data, did, dname) {
        var v = '';
        v += '<select id="' + did + '" class="form-control" name="' + dname + '">';
        for (var i = 0; i < data.length; i++) {
            v += '<option value="' + data[i][0] + '">' + data[i][1] + '</option>';
        }
        v += '</select>';
        return v;
    }