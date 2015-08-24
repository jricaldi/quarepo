Meteor.publish("listarColaboradores", function (tipo) {
  return helpFindColaborador(tipo);
});

// Meteor.publish("listarColIbm", function (){
//   return Colaboradores.find({tipo : CONSTANTE.ibm});
// });

Meteor.publish("listarSequences", function(){
  return helpFindSequences();
});

Meteor.publish("listarTiposRoles", function(){
  return helpFindTipoRoles();
});

Meteor.publish("listarEmpresas", function(){
  return helpFindEmpresas();
});

Meteor.publish("listarServidores", function(){
  return helpFindServidores();
});
