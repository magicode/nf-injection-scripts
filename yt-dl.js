(function() {

    function setList() {
        if ("undefined" == typeof ytplayer) return;

        var formats = {
            '5': {
                'ext': 'flv',
                'width': 400,
                'height': 240
            },
            '6': {
                'ext': 'flv',
                'width': 450,
                'height': 270
            },
            '13': {
                'ext': '3gp'
            },
            '17': {
                'ext': '3gp',
                'width': 176,
                'height': 144
            },
            '18': {
                'ext': 'mp4',
                'width': 640,
                'height': 360
            },
            '22': {
                'ext': 'mp4',
                'width': 1280,
                'height': 720
            },
            '34': {
                'ext': 'flv',
                'width': 640,
                'height': 360
            },
            '35': {
                'ext': 'flv',
                'width': 854,
                'height': 480
            },
            '36': {
                'ext': '3gp',
                'width': 320,
                'height': 240
            },
            '37': {
                'ext': 'mp4',
                'width': 1920,
                'height': 1080
            },
            '38': {
                'ext': 'mp4',
                'width': 4096,
                'height': 3072
            },
            '43': {
                'ext': 'webm',
                'width': 640,
                'height': 360
            },
            '44': {
                'ext': 'webm',
                'width': 854,
                'height': 480
            },
            '45': {
                'ext': 'webm',
                'width': 1280,
                'height': 720
            },
            '46': {
                'ext': 'webm',
                'width': 1920,
                'height': 1080
            },
            '59': {
                'ext': 'mp4',
                'width': 854,
                'height': 480
            },
            '78': {
                'ext': 'mp4',
                'width': 854,
                'height': 480
            },
        };


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

        var element = document.getElementById('watch7-main');

        function printDwonload(info) {
            var a = document.createElement('a');
            var format = formats[info.itag];
            a.target = "_blank";
            a.href = info.url;
            a.innerText = "הורדה " + format.ext + " " + format.width + "x" + format.height;
            a.download = "";
            a.style.display = "block";
            element.appendChild(a);
        }

        all.forEach(function(i) {
            if (!i.itag) return;
            printDwonload(i);
        });
    }
    
    
    var element = document.getElementById('watch7-main');
    //var a = document.createElement('a');

    var a = document.createElement('button');

    a.type = "submit";
    a.id = "download-submit";
    a.onclick = "setList";
    a.addEventListener('click', setList);
    a.target = "_blank";
    //a.href = 'setList()';
    a.innerText = "הורדה ";
    a.download = "";
    a.style.display = "block";
    a.style.color = "#fff";
    a.style.padding = "15px 25px";
    a.style.background = "#1ab394";
    a.style['background-color'] = "#428bca";
    a.style['border-color'] = "#357ebd";
    a.style['font-size'] = "18px";
    a.style.top = '30px';
    a.style.right = "auto";
    a.style.left = "auto";
    a.style.margin = "20px";

    element.appendChild(a);
})();