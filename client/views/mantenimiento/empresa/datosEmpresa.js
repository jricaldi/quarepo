Template.datosEmpresaNew.events({
  "submit" : function(e,t){
    e.preventDefault();
    var empresaEnt = {};
    empresaEnt.nombre = t.$("#txtNombre").val().toLowerCase();
    empresaEnt.estado = t.$("#selEstado").val();
    empresaEnt.domicilio = t.$("txtDomicilio").val();
    empresaEnt.celular = t.$("#txtCelular").val();

    var data = [CONSTANTE.datosTipoRol,empresaEnt];
    helpExecuteMethod(true,"insert_DatosEmpresa",data)
  }
});

Template.datosEmpresaNew.helpers({
  // data_sequence: function(){
  //   var res = helpFindOneSequences(CONSTANTE.datosTipoRol);
  //   return res.seq;
  // }
});
//////////////////////////////////////////////
Template.datosEmpresa.onRendered(function(){
    Session.set("opcionMant","2");
});
