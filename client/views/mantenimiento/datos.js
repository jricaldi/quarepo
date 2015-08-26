Template.datos.events({
  "change #selDatos": function(e, t){
    var input = Number(e.currentTarget.value);
    helpSetViewMantDatos(input);
  }
});

Template.datos.onRendered(function(){
  if (Session.get("opcionMant")) {
    this.$("#selDatos").val(Session.get("opcionMant"));
  }
  var input = Number(this.$("#selDatos").val());
  helpSetViewMantDatos(input);

});

Template.datos.helpers({
  nombreTemplate: function(){
    return Session.get("mantDatos");
  }
});
