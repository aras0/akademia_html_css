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
            themes: 'moon',
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
            document.getElementById("rogi").style.borderTopLeftRadius = "0px";
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
        },

    });

    Template.end.events({
        "click #canvasContainer": function() {
            (function () {
                function C() {
                    e.globalCompositeOperation = "source-over";
                    e.fillStyle = "rgba(8,8,12,0.65)";
                    e.fillRect(0, 0, f, p);
                    e.globalCompositeOperation = "lighter";
                    x = q - u;
                    y = r - v;
                    u = q;
                    v = r;
                    for (var d = 0.86 * f, l = 0.125 * f, m = 0.5 * f, t = Math.random, n = Math.abs, o = z; o--;) {
                        var h = A[o], i = h.x, j = h.y, a = h.a, b = h.b, c = i - q, k = j - r, g = Math.sqrt(c * c + k * k) || 0.001, c = c / g, k = k / g;
                        if (w && g < m)var s = 14 * (1 - g / m), a = a + (c * s + 0.5 - t()), b = b + (k * s + 0.5 - t());
                        g < d && (s = 0.0014 * (1 - g / d) * f, a -= c * s, b -= k * s);
                        g < l && (c = 2.6E-4 * (1 - g / l) * f, a += x * c, b += y * c);
                        a *= B;
                        b *= B;
                        c = n(a);
                        k = n(b);
                        g =
                            0.5 * (c + k);
                        0.1 > c && (a *= 3 * t());
                        0.1 > k && (b *= 3 * t());
                        c = 0.45 * g;
                        c = Math.max(Math.min(c, 3.5), 0.4);
                        i += a;
                        j += b;
                        i > f ? (i = f, a *= -1) : 0 > i && (i = 0, a *= -1);
                        j > p ? (j = p, b *= -1) : 0 > j && (j = 0, b *= -1);
                        h.a = a;
                        h.b = b;
                        h.x = i;
                        h.y = j;
                        e.fillStyle = h.color;
                        e.beginPath();
                        e.arc(i, j, c, 0, D, !0);
                        e.closePath();
                        e.fill()
                    }
                }

                function E(d) {
                    d = d ? d : window.event;
                    q = d.clientX - m.offsetLeft - n.offsetLeft;
                    r = d.clientY - m.offsetTop - n.offsetTop
                }

                function F() {
                    w = !0;
                    return !1
                }

                function G() {
                    return w = !1
                }

                function H() {
                    this.color = "rgb(" + Math.floor(255 * Math.random()) + "," + Math.floor(255 *
                            Math.random()) + "," + Math.floor(255 * Math.random()) + ")";
                    this.b = this.a = this.x = this.y = 0;
                    this.size = 1
                }

                var D = 2 * Math.PI, f = 1E3, p = 560, z = 600, B = 0.96, A = [], o, e, n, m, q, r, x, y, u, v, w;
                //window.onload = function () {/*try{var nlng=navigator.language||navigator.userLanguage;var lng=nlng.substr(0, 2).toLowerCase();if(lng=="ru"||lng=="uk"||lng=="be")document.getElementById("flw").innerHTML=': <a href="http://www.twitter.com/spielzeugz" target="_blank">Twitter</a> / <a href="http://plus.google.com/116743952899287181520" target="_blank">G+</a> / <a href="http://vk.com/id266298870">VK</a>';}catch(e){}*/
                    o = document.getElementById("mainCanvas");
                    if (o.getContext) {
                        m = document.getElementById("outer");
                        n = document.getElementById("canvasContainer");
                        e = o.getContext("2d");
                        for (var d = z; d--;) {
                            var l = new H;
                            l.x = 0.5 * f;
                            l.y = 0.5 * p;
                            l.a = 34 * Math.cos(d) * Math.random();
                            l.b = 34 * Math.sin(d) * Math.random();
                            A[d] = l
                        }
                        q = u = 0.5 * f;
                        r = v = 0.5 * p;
                        document.onmousedown =
                            F;
                        document.onmouseup = G;
                        document.onmousemove = E;
                        setInterval(C, 33);
                    } else document.getElementById("output").innerHTML = "Sorry, needs a recent version of Chrome, Firefox, Opera, Safari, or Internet Explorer 9."
               // }
            })();
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
