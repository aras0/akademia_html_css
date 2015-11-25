if (Meteor.isClient) {
    var worker;

    Meteor.startup(function () {
        Reveal.initialize();
    });
    Template.reveal.onRendered(function () {

        // Full list of configuration options available at:
        // https://github.com/hakimel/reveal.js#configuration
        // https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,
            themes: 'league',
            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // Optional reveal.js plugins
            dependencies: [
                //{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                //{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                //{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
            ]
        });

    });
    Template.css_template.events({
        "click .top-lef": function () {
            document.getElementById("rogi").style.borderTopRightRadius = "0px";
            document.getElementById("rogi").style.borderBottomLeftRadius = "0px";
            document.getElementById("rogi").style.borderBottomRightRadius = "0px";
            document.getElementById("rogi").style.borderTopLeftRadius = "6px";
        },
        "click .top-right": function () {
            document.getElementById("rogi").style.borderTopLeftRadius = "0px";
            document.getElementById("rogi").style.borderBottomLeftRadius = "0px";
            document.getElementById("rogi").style.borderBottomRightRadius = "0px";
            document.getElementById("rogi").style.borderTopRightRadius = "6px";
        },
        "click .bottom-left": function () {
            document.getElementById("rogi").style.borderTopLeftRadius = "0p6x";
            document.getElementById("rogi").style.borderTopRightRadius = "0x";
            document.getElementById("rogi").style.borderBottomRightRadius = "0px";
            document.getElementById("rogi").style.borderBottomLeftRadius = "6px";
        },
        "click .bottom-right": function () {
            document.getElementById("rogi").style.borderTopLeftRadius = "0px";
            document.getElementById("rogi").style.borderTopRightRadius = "0px";
            document.getElementById("rogi").style.borderBottomLeftRadius = "0px";
            document.getElementById("rogi").style.borderBottomRightRadius = "6px";
        },
        "click .border-radius": function () {
            document.getElementById("rogi").style.borderRadius = "20px 5px";
        },
        "click .box-shadow": function () {
            document.getElementById("cien").style.boxShadow = "10px 10px #666";
        },
        "click .box-shadow2": function () {
            document.getElementById("cien").style.boxShadow = "10px 10px 10px #666";
        },
        "click .box-shadow3": function () {
            document.getElementById("cien").style.boxShadow = "10px 10px 0 10px #666";
        },
        "click .box-shadow4": function () {
            document.getElementById("cien").style.boxShadow = "0 0 10px 10px #FF0000";
        },
        "click .inset-shadow": function () {
            document.getElementById("cien2").style.boxShadow = "inset 10px 10px #666";
        },
        "click .inset-shadow2": function () {
            document.getElementById("cien2").style.boxShadow = "inset 10px 10px 10px #666";
        },
        "click .inset-shadow3": function () {
            document.getElementById("cien2").style.boxShadow = "inset 10px 10px 0 10px #666";
        },
        "click .inset-shadow4": function () {
            document.getElementById("cien2").style.boxShadow = "inset 0 0 10px 10px #FF0000";
        }
    });

    Template.html_template.events({
        "click #myCanvas": function () {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.strokeStyle = "red";
            ctx.stroke();
        },
        "click #image1": function () {
            var canvas;
            var context;
            var x = 200;
            var y = 20;
            var dy = 10;
            var kolory = new Array("blue", "red", "yellow", "green");
            var i = 0;

            canvas = document.getElementById('image1');
            context = canvas.getContext('2d');
            setInterval(anim, 100);

            function anim() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                y += dy;
                if (y > (canvas.height - 20)) {
                    dy = -10;
                    i = ++i % kolory.length;
                }
                if (y < 20) {
                    dy = 10;
                    i = ++i % kolory.length;
                }
                context.beginPath();
                context.fillStyle = kolory[i];
                context.arc(x, y, 20, 0, Math.PI * 2, true);
                context.closePath;
                context.fill();
            }
        },
        "click #runSta": function (number) {
            function sFact(num) {
                var rval = 1;
                for (var i = 2; i <= num; i++)
                    rval = rval * i;
                return rval;
            }
            number = document.getElementById('text');
            alert(sFact(number.value));
        },
        "click #start": function(){
            $('#list').html("");
            var count = $('#count').val();
            var settings = {};
            settings.count = parseInt(count);
            worker = new Worker('js/factorial.js');
            worker.onmessage = function(event){
                var list = event.data;
                $.each(list, function(){
                    printNumber(this);
                })
            };
            worker.postMessage(settings);
        },
        "click #terminate": function() {
            if (worker) {
                worker.terminate();
            }
        }
    });

    function printNumber(number){
        $('#list').append('<li>'+number+'</li>');
    }
}

if (Meteor.isServer) {
    Meteor.startup(function () {

        // code to run on server at startup
    });
}
