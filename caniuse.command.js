var caniuseData = require("./data/data.js");
var adapterQueryData = require("./data/adapter.js");

module.exports = function(view, edit){
	// view.insert(edit, 0, "HelloWorld");

    var detectBrowers = [
        'ie'
        , 'firefox'
        , 'chrome'
        , 'safari'
        , 'chrome'
        , 'opera'
    ];

    function getSelContent() {
        var selections = view.sel()[0];
        var text = "";
        if(!selections.empty()) {
            var begin = selections.a;
            while(begin++ < selections.b) text += view.substr(begin - 1)
        }
        return text;
    }

    function getResult(data) {
        var result = [];
        for(var i = 0, li; li = detectBrowers[i++]; ) {
            var vers = getVers(data[li]);
            vers && result.push(li + " " + vers);
        }
        return result.join(" | ");
    }

    function getVers(data) {
        var ret = [];
        var result = [];

        var keys = Object.keys(data).sort(function (a, b) {
            return +a > +b;
        });

        for (var i = 0; i < keys.length; i++) {
            (~data[keys[i]].indexOf("a") || ~data[keys[i]].indexOf("y")) && ret.push(keys[i]);
        };
        var begin = ret.shift();
        var end = ret.pop();

        begin && result.push(begin);
        end && result.push(end);

        return result.join("-");
    }

    var showStatus = function() {
        var timeout = true;
        var timer = null;
        return function(content) {
            timeout = true;
            view.erase_status("caniuse");
            timer && clearTimeout(timer);
            (function set() {
                view.set_status("caniuse", content);
                !timeout && setTimeout(set, 200)
            })();
            timer = setTimeout(function() {
                view.erase_status("caniuse");
                timeout = true;
            }, 15000);
        }
    }();

    function adapterQuery(query, data) {
        if(adapterQueryData[query]) return adapterQueryData[query];
        for(var key in adapterQueryData) {
            if(~key.indexOf(query)) return adapterQueryData[key];
        }

        if(data[query]) return query;
        for(var k in data) {
            if(~k.indexOf(query)) return k;
        }
        return "";
    }

    var text = getSelContent();

    if(!text) return;

    var data = caniuseData.data;

    var query = adapterQuery(text, data);

    if(query && data[query]) showStatus(data[query].title + ": " + getResult(data[query].stats));
}