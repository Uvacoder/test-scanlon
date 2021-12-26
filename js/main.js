!function(e) {
    function t(n) {
        if (a[n]) 
            return a[n].exports;
        var o = a[n] = {
            i: n, l: !1, exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var a = {};
    t.m = e, t.c = a, t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            configurable: !1, enumerable: !0, get: n
        })
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 16)
}
( {
    0: function(e, t) {
        e.exports = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><meta name="description" content="Personal website of Jeff Escalante"><meta name="author" content \'Jeff Escalante\'><meta name="viewport" content="width=device-width, initial-scale=1"><title>Jeff Escalante</title><script src="https://use.typekit.net/caw0ykc.js"><\/script><script>try{Typekit.load({async:!0})}catch(a){}<\/script><link rel="stylesheet" href="/css/index.css"></head><body><div id="container"><img src="/img/1.png"><div class="text" id="about"><h1>About Me</h1><p>Hi there, I’m Jeff! I live in Philadelphia, and work at <a href="https://www.hashicorp.com">HashiCorp</a>, where I am a senior engineering manager. I work on <a href="https://github.com/reshape">tools</a> and <a href="https://github.com/static-dev">workflow</a> for developers, build and maintain ~10 marketing websites as well as analytics and marketing tooling, and manage a small team of developers. I grew up in a suburb of Boston, and went to school at <a href="https://www.hamilton.edu">Hamilton College</a>, graduating with a Neuroscience degree. In college, I ran a small charity organization, played a lot of music (mostly jazz), did freelance design and web development, and DJ’d professionally.</p><p>I started my career working at <a href="https://carrot.is/">Carrot Creative</a> (now <a href="https://www.virtueworldwide.com/">Virtue</a>) on open source developer tooling and websites & apps for a variety of clients such as Red Bull, Burton, Jaguar, Bloomberg, etc. In 2015, I took a year off of work to <a href="http://worldtrip.jeffandchristina.us">travel the world</a>. I have an adorable <a href="https://www.instagram.com/anchoviebun/">pet bunny</a>. I spend my free time building things out of metal and wood, biking, cooking, gardening, and enjoying time with friends and family. My dream is to live on a small farm, building digital and physical things and taking care of plants and animals.</p></div></div><script src="/js/main.js" async><\/script><script>!function(e,t,a,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=t.createElement(a),s=t.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","UA-77560859-1","auto"),ga("send","pageview");<\/script></body></html>'
    }, 1: function(e, t) {
        e.exports = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><meta name="description" content="Personal website of Jeff Escalante"><meta name="author" content \'Jeff Escalante\'><meta name="viewport" content="width=device-width, initial-scale=1"><title>Jeff Escalante</title><script src="https://use.typekit.net/caw0ykc.js"><\/script><script>try{Typekit.load({async:!0})}catch(a){}<\/script><link rel="stylesheet" href="/css/index.css"></head><body><div id="container"><img src="/img/1.png"><div class="text" id="index"><h1>Jeff Escalante</h1><p>I am a friendly <a href="/about">human being</a> with a variety of interests</p><p>I enjoy <a href="http://medium.com/pragmatic-life">writing</a> about science, philosophy, health, & happiness</p><p>When at home or traveling, I <a href="https://500px.com/jescalan">photograph</a> things I find interesting</p><p>I <a href="https://github.com/jescalan">write a lot of code</a> both for work and personally</p><p>Why don’t we<a class="email"> get in touch</a>?</p></div></div><script src="/js/main.js" async><\/script><script>!function(e,t,a,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=t.createElement(a),s=t.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","UA-77560859-1","auto"),ga("send","pageview");<\/script></body></html>'
    }, 16: function(e, t, a) {
        e.exports = a(17)
    }, 17: function(e, t, a) {
        a(2), document.querySelector(".email").href = "mailto:" + window.atob("amVmZkBlc2NhbGFudGUuZW1haWw=")
    }, 2: function(e, t, a) {
        function n(e) {
            var a = e;
            return "/" === e[e.length -1] && (a = e + "index.html"), a = a.substring(1).replace(/.html$/, ""), t[a]
        }
        if (t.about = a(0), t.index = a(1), window.history) {
            var o = document.querySelectorAll("a");
            window.onpopstate = function(e) {
                var t = n(e.target.location.pathname);
                t ? (document.write(t), document.close()) : window.location = e.target.location
            };
            for (var i = 0; i < o.length; i ++) {
                o[i].onclick = function(e) {
                    e.preventDefault(), document.createElement("a").href = e.target;
                    var t = n(e.target.pathname);
                    t ? (document.write(t), document.close(), history.pushState( {}, "", e.target)) : window.location = e.target
                }
            }
        }
    }
});
