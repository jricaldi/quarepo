Meteor.publish("listarColClaro", function () {
  // var self = this;
  // Meteor.setTimeout(function(){
  //    self.ready();
  // }, 2000);
  return helpFindColClaro();
});

Meteor.publish("listarColIbm", function (){
  return Colaboradores.find({tipo : CONSTANTE.ibm});
});

Meteor.publish("listarSequences", function(){
  return helpFindSequences();
});

Meteor.publish("listarTiposRoles", function(){
  return helpFindTipoRoles();
});
