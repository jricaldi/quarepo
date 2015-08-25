Meteor.publish("listarColaboradores", function (tipo) {
  return helpFindColaborador(tipo);
});

Meteor.publish("listarSequences", function(){
  return helpFindSequences();
});

Meteor.publish("listarTiposRoles", function(){
  return helpFindTipoRoles();
});

Meteor.publish("listarEmpresas", function(){
  return helpFindEmpresas();
});
