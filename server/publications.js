Meteor.publish("listarColClaro", function () {
  var self = this;
  Meteor.setTimeout(function(){
     self.ready();
  }, 2000);
  // return Colaboradores.find({tipo : "claro"});
});

Meteor.publish("listarColIbm", function () {
  return Colaboradores.find({tipo : "ibm"});
});
