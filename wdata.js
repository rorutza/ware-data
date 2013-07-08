$(document).ready(function () {

    var d = $("#microudata");

    /*    $("#buton1").click(function () {
     $("#about").html($("#wabout").val());
     });
     $("#buton2").click(function () {
     $("#accountablePerson").html($("#waccountablePerson").val());
     });
     */
    /*    $("#buton3").click(function () {
     var wval = $("#waudio").val();
     d.append('<span id = "new" itemprop = "audio" content = "About">');
     d.append(wval);
     d.append('</span>');
     });
     */
    var udata = {
        uprop: "test",
        uvalue: "test"
    };
//TODO - other ways of doing it
    $("input").change(function () {
        udata.uprop = this.name;
        udata.uvalue = this.value;
        if (console.log) {
            console.log(udata.uprop + ' ' + udata.uvalue);
        }
        var dl = $("#properties");
        var dt = dl.append($("<dt>" + udata.uprop + "</dt>"));
        //var dt = $("#" + udata.uprop);
        var dd = dt.next();
        if (dd.is("dd")) {
            dd.remove();
        }
        dt.append($("<dd itemprop=\"" + udata.uprop + "\">" + udata.uvalue + "</dd>"));
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