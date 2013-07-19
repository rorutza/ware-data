function printScope(itemtype) {
    var print = '<div itemscope itemtype=\"http://schema.org/' + itemtype + '\">' +
        'Schema: ' + itemtype + '</div>';
    console.log("###printScope: " + print);
    $("#itemschema").append(print);
}

var Itemprop = function () {
    this.itemname = string;
    this.itemclass = string;
    this.itemvalue = string;
    this.itemparents = string;
};

Itemprop.prototype.get_itemname = function () {
    return this.itemname;
};

Itemprop.prototype.get_itemclass = function () {
    return this.itemclass;
};

Itemprop.prototype.get_itemvalue = function () {
    return this.itemvalue;
};

Itemprop.prototype.get_itemparents = function () {
    return this.itemparents;
};

var nodePrint = {};
var index = 0;

function printDom(param) {
    var indexx = 0;
    var print = $(param).children();
    $(print).each(function (i) {
        if ($(print[i]).prop("tagName") === "INPUT") {
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
                scrie = scrie + '<div> _itemschema: ' + itemlabel + '</div>';
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
        }
        printDom(print[i]);
    });
    consoleVect(nodePrint, "nodePrint");
}

function consoleVect(param, nume) {
    for (var j = 0; j < param.length; ++j) {
        console.log(nume + '[' + j + '] = ' + $(param[j]).prop("tagName"));
    }
}