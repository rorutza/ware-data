function printScope(itemtype) {
    var print = '<div itemscope itemtype=\"http://schema.org/' + itemtype + '\">' +
        'Schema: ' + itemtype + '</div>';
    console.log("###printScope: " + print);
    $("#itemschema").append(print);
}

var Itemprop = function () {
    var itemname = "name";
    var itemclass = "schema";
    var itemvalue = "";
    var itemparents = 0;
    this.get = function (item) {
        return this[item];
    }
    this.set = function (item, value) {
        this[item] = value;
    }
};

var nodePrint = {};
var index = 0;
var itemschema = $("#itemschema");

//nu merge daca ai aceiasi schema ca subschema direct
//nu face un nou div daca sunt doua schema identice unul dupa altul

function printDom(param) {
    var indexx = 0;
    var print = $(param).find("input");
    var printr = $(param).find("input:checked");
    //'input[name=radioName]:checked'
    $(printr).each(function (i) {
        var rad = 'RADIO:' + i;
        rad = rad + ', itemprop: ' + printr[i].name;
        rad = rad + ', itemtype: ' + printr[i].className;
        rad = rad + ', value: ' + printr[i].value;
        console.log(rad);
        if(printr[i].value !== "text") {
            var scrie = '<div itemprop=\"' + printr[i].name + '\" itemscope itemtype=\"http://schema.org/' + printr[i].value + '\"><legend>---' + printr[i].className + ' <b>' + printr[i].name + '</b> is ' + printr[i].value + '---</legend></div>';
        }
        var adddiv = $('div[itemtype="http://schema.org/' + printr[i].className + '"]')
        adddiv.append(scrie);
    });
        $(print).each(function (i) {
            if (print[i].type !== "radio") {
                var scrie = '<div>_____</div>';
                var scrie = scrie + '<div>__index: ' + index + '__</div>';
                scrie = scrie + '<div> _itemprop: ' + print[i].name + '</div>';
                scrie = scrie + '<div> _itemtype: ' + print[i].className + '</div>';
                scrie = scrie + '<div> _value: ' + print[i].value + '</div>';
                var itemlabel;
                if ($($(print[i]).parent().siblings("legend")).text() != print[i].className) {
                    itemlabel = $($(print[i]).parent().siblings("legend")).text();
                } else {
                    itemlabel = "";
                }
                scrie = scrie + '<div> _itemlabel: ' + itemlabel + '</div>';
                if(itemlabel == "") {
                    var itemspan = '</br><span itemprop=\"' + print[i].name + '\"><b>' + print[i].name + ': </b>' + print[i].value + '</span>';
                    var addspan = $("#itemschema").find("legend").first();
                    //var addspanleg = $(addspan + '> legend');
                    console.log('== itemschema last child: ' + $(addspan).parents().first().prop("tagName") + ' with itemtype: ' + $(addspan).attr("itemtype") );
                    addspan.append(itemspan);
                } else {
                    var itemspan = '</br><span itemprop=\"' + print[i].name + '\"><b>' + print[i].name + ': </b>' + print[i].value + '</span>';
                    var addspan = $('div[itemprop="' + itemlabel + '"]');
                    var addspanleg = $('div[itemprop="' + itemlabel + '"] > legend');
                    console.log('!= itemschema last child: ' + $(addspan).parents().first().prop("tagName") + ' with itemtype: ' + $(addspan).attr("itemtype") );
                    addspanleg.append(itemspan);
                }

                var j = 0;
                do {
                    var all_parents = $(print[i]).parents("fieldset").eq(j)
                        .map(function () {
                            return this.className;
                        })
                        .get()
                        .join(" ");
                    if ((itemlabel != "") && (all_parents != "") && (all_parents !== itemlabel)) {
                        scrie = scrie + '<div> _' + j + ' parent: ' + all_parents + '</div>';
                        ++indexx;
                    }
                    j++;
                } while (all_parents != "");
                var scrie = scrie + '<div>__indexx: ' + indexx + '__</div>';
                $("#buttonprint").append(scrie);
            }
            ++index;
        printDom(print[i]);
    });
    consoleVect(nodePrint, "nodePrint");
}

function consoleVect(param, nume) {
    for (var j = 0; j < param.length; ++j) {
        console.log(nume + '[' + j + '] = ' + $(param[j]).prop("tagName"));
    }
}