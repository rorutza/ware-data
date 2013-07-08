$(document).ready(function () {

    var d = $("#microudata");

    $("#buton1").click(function () {
        $("#about").html($("#wabout").val());
    });
    $("#buton2").click(function () {
        $("#accountablePerson").html($("#waccountablePerson").val());
    });

    /*    $("#buton3").click(function () {
     var wval = $("#waudio").val();
     d.append('<span id = "new" itemprop = "audio" content = "About">');
     d.append(wval);
     d.append('</span>');
     });
     */
    var udata = {
        uid: "test",
        ovalue: "test"
    };
    $("input").change(function () {
        udata.uid = this.name;
        udata.ovalue = this.value;
        // alert(udata.uid + ' ' + udata.ovalue);
        // var a = obtenir(udate.uid);
        $("#" + udata.uid).html(udata.ovalue);
        $("#" + udata.uid).before('<label>');
        $("#" + udata.uid).after('</br>');
        $("#" + udata.uid).show();


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