  Template.navBarTemp.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.navBarTemp.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.navBarTemp.rendered = function(){
    $(".button-collapse").sideNav();
  }