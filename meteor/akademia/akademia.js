if (Meteor.isClient) {
  Meteor.startup( function() {
    Reveal.initialize();
  });
  Template.reveal.onRendered( function() {

    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,

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
      document.getElementById("rogi").style.borderTopRightRadius="0px";
      document.getElementById("rogi").style.borderBottomLeftRadius="0px";
      document.getElementById("rogi").style.borderBottomRightRadius="0px";
      document.getElementById("rogi").style.borderTopLeftRadius="6px";
    },
    "click .top-right": function () {
      document.getElementById("rogi").style.borderTopLeftRadius="0px";
      document.getElementById("rogi").style.borderBottomLeftRadius="0px";
      document.getElementById("rogi").style.borderBottomRightRadius="0px";
      document.getElementById("rogi").style.borderTopRightRadius="6px";
    },
    "click .bottom-left": function () {
      document.getElementById("rogi").style.borderTopLeftRadius="0p6x";
      document.getElementById("rogi").style.borderTopRightRadius="0x";
      document.getElementById("rogi").style.borderBottomRightRadius="0px";
      document.getElementById("rogi").style.borderBottomLeftRadius="6px";
    },
    "click .bottom-right": function () {
      document.getElementById("rogi").style.borderTopLeftRadius="0px";
      document.getElementById("rogi").style.borderTopRightRadius="0px";
      document.getElementById("rogi").style.borderBottomLeftRadius="0px";
      document.getElementById("rogi").style.borderBottomRightRadius="6px";
    },
    "click .border-radius": function () {
      document.getElementById("rogi").style.borderRadius="20px 5px";
    },
    "click .box-shadow": function () {
      document.getElementById("cien").style.boxShadow="10px 10px #666";
    },
    "click .box-shadow2": function () {
      document.getElementById("cien").style.boxShadow="10px 10px 10px #666";
    },
    "click .box-shadow3": function () {
      document.getElementById("cien").style.boxShadow="10px 10px 0 10px #666";
    },
    "click .box-shadow4": function () {
      document.getElementById("cien").style.boxShadow ="0 0 10px 10px #FF0000";
    },
    "click .inset-shadow": function () {
      document.getElementById("cien2").style.boxShadow="inset 10px 10px #666";
    },
    "click .inset-shadow2": function () {
      document.getElementById("cien2").style.boxShadow="inset 10px 10px 10px #666";
    },
    "click .inset-shadow3": function () {
      document.getElementById("cien2").style.boxShadow="inset 10px 10px 0 10px #666";
    },
    "click .inset-shadow4": function () {
      document.getElementById("cien2").style.boxShadow ="inset 0 0 10px 10px #FF0000";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup
  });

}
