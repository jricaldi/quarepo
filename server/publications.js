Meteor.publish("listarColClaro", function () {
  return Colaboradores.find({tipo : "claro"});
});

Meteor.publish("listarColIbm", function () {
  return Colaboradores.find({tipo : "ibm"});
});
