(function() {
    if ("undefined" != typeof ytplayer) return;
    
    var info = ytplayer.config.args.url_encoded_fmt_stream_map.split("&").map(function(e) {
        e = e.split("=");
        return {
            key: e[0],
            value: decodeURIComponent(e[1])
        };
    });

    var all = [];
    var current = {};
    info.forEach(function(i) {
        current[i.key] = i.value;
        if (i.key == "url") {
            all.push(current);
            current = {};
        }
    });

    var element = document.getElementById('watch-description-extras');

    function printDwonload(info) {
        var a = document.createElement('a');
        a.target = "_blank";
        a.href = info.url;
        a.innerText = "הורדה " + info.quality;
        a.download = "";
        a.style.display = "block";
        element.appendChild(a);
    }
    
    all.forEach(function(i) {
        printDwonload(i);
    });
    
})();
