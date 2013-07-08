$(document).ready(function () {

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


//Create object with a closure
//Known object - author
//itemtype = author;

$("input").change(function () {
    var itemtype = this.className;
    var itemprop = this.name;
    udata[itemtype][itemprop] = this.value;
    //   var itemprop = this.name;
    if (console.log) {
        console.log('itemtype = ' + itemtype + ' --- ');
        console.log('itemprop = ' + itemprop + ' --- ');
        console.log('udata = ' + udata[itemtype][itemprop]);
        //console.log('meta.itemtype.itemprop = ' + meta.itemtype.itemprop);
    }
/*
    var dl = $("#properties");
    var dt = dl.append($("<dt>" + itemprop + "</dt>"));
 //var dt = $("#" + udata.uprop);
    var dd = dt.next();
    if (dd.is("dd")) {
        dd.remove();
    }
 dt.append($("<dd itemprop=\"" + itemprop + "\">" + print + "</dd>"));
 //   var a = obtenir(udate.uid);
 */
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