if (Meteor.isClient) {
  Meteor.startup( function() {
    Reveal.initialize();
  });
  Template.hello.onRendered( function() {
    Reveal.initialize({
      //loop: true,
      //controls: false,
      //progress: false,
      //autoSlide: 5000
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup
  });
}
