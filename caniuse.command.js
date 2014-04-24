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
        // console.log(selections);
        if(!selections.empty()) {
            // console.log(view.substr(21));
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
        var timer = null;
        var shower = null;
        var uid = 0;
        return function(content) {
            // for(var i = 0; i< 30;i++){
            //     view.erase_status("caniuse" + uid);
            // }

            // TODO, how to keep info on status bar?
            var id = uid++;
            // clearTimeout(timer);
            // clearInterval(shower);

            view.set_status("caniuse" + id, content);

            // var ii = 0;

            // shower = setInterval(function() {
            //     view.set_status("caniuse" + id, content);
            // }, 400);
            timer = setTimeout(function() {
                // shower && clearInterval(shower);
                view.erase_status("caniuse" + id);
            }, 30000);
        }
    }();

    function adapterQuery(query, data) {
        query = (query + "").toLowerCase();
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

    // console.log(text);

    if(!text) return;

    var data = caniuseData.data;

    var query = adapterQuery(text, data);

    if(query && data[query]) showStatus(data[query].title + ": " + getResult(data[query].stats));
}