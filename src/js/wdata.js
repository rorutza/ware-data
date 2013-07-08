$(document).ready(function () {

    /*
     Select nr de prop de acelasi fel
     Select cand se adauga noi tipuri
     O functie care tine minte daca s-a completat deja un imput
     */


    var udata = {
        article: {
            name: "",
            about: "",
            version: "",
            comment: "",
            audio: "",
            video: "",
            date: ""
        },
        author: {
            name: "",
            email: "",
            telephone: "",
            url: ""
        }
    };

    // dt.append($("<dd itemprop=\"" + itemprop + "\">" + print + "</dd>"));

    $("#makeaut").click(function() {
        //input dupa id
        var inpid = $("#makeaut");
        if (console.log) {
            console.log('Clicked');
        }
        var scrie = '<fieldset><legend class = \"author\">author:</legend>'
            + '<label>name:</label> <input class = \"author\" name = \"name\" type = \"text\"/><br>'
            + '<label>email:</label> <input class = \"author\" name = \"email\" type = \"text\"/><br>'
            + '<label>telephone:</label> <input class = \"author\" name =  \"telephone\" type = \"number\"/><br>'
            + '<label>url:</label> <input class = \"author\" name = \"url\" type = \"url\"/><br>'
            + '<button type=\"button\" class=\"button delete-parent\">X</button></fieldset>';
        inpid.after(scrie);
    });
    /*   function makeForm(anr) {
        aVal = anr.value;
        if (console.log) {
            console.log('aVal = ' + aVal);
        }
        for (var i = 1; i < aVal; i++) {
            makefield(anr, i);
        }
    };

*/
    $("form").on("click", "button.delete-parent", function() {
       $(this).parent().remove();
    });
    $("form").on("change","input",function () {
        var itemtype = this.className;
        var itemprop = this.name;
        var print = this.value;
            udata[itemtype][itemprop] = this.value;
            //   var itemprop = this.name;
            if (console.log) {
                console.log('itemtype = ' + itemtype + ' --- ');
                console.log('itemprop = ' + itemprop + ' --- ');
                console.log('obj.itemtype.itemprop = ' + udata[itemtype][itemprop]);
                //console.log('meta.itemtype.itemprop = ' + meta.itemtype.itemprop);
            }

            var dl = $("#properties");
            var dt = dl.append($("<dt>" + itemprop + "</dt>"));
            //var dt = $("#" + itemprop);
            var dd = dt.next();
            if (dd.is("dd")) {
                dd.remove();
            }
            dt.append($("<dd itemprop=\"" + itemprop + "\">" + print + "</dd>"));
            //   var a = obtenir(udate.uid);

    });

    /*
     $("#buton4").click(function () {

     });
     */
    /*
     *   <input id = "wabout" name = "wabout" type = "text" value = ""/>
     *   <span id = "about" itemprop = "about" content = "About"></span>
     */
});
