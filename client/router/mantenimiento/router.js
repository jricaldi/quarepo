Router.route('/datos',{
  name:'datos',
  waitOn: function () {
    return [
      Meteor.subscribe('listarTiposRoles') //pronto mas subscribes
    ];
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoTipoRol',{
  name:'datosTipoRol.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  },
  loadingTemplate : null
});

Router.route('/datos/mantenimientoEditarTipoRol',{
  name:'datosTipoRol.edit',
  waitOn: function () {
    return Meteor.subscribe('listarTiposRoles');
  },
  loadingTemplate : null,
  notFoundTemplate: 'sinDatosNoButton',
  data : function () {
    var datos = helpFindOneTipoRoles(Session.get("id"));
    if(datos!=null)
      return datos;
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoEmpresa',{
  name:'datosEmpresa.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  },
  loadingTemplate : null
});

Router.route('/datos/mantenimientoEditarEmpresa',{
  name:'datosEmpresa.edit',
  waitOn: function () {
    return Meteor.subscribe('listarEmpresas');
  },
  loadingTemplate : null,
  notFoundTemplate: 'sinDatosNoButton',
  data : function () {
    var datos = helpFindOneEmpresas(Session.get("id"));
    if(datos!=null)
      return datos;
  }
});
/////////////////////////////////////////////////////
Router.route("datosTipoRol",{
  name:'datosTipoRol',
  action: function(){
    this.redirect('/datos');
  }
});
