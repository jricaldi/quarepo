Router.route('/datos',{
  name:'datos',
  waitOn: function () {
    return [
      Meteor.subscribe('listarTiposRoles'),
      Meteor.subscribe('listarEmpresas')
    ];
  }
});
/////////////////////////////////////////////////////
Router.route('/datos/mantenimientoNuevoTipoRol',{
  name:'datosTipoRol.new',
  waitOn: function () {
    return Meteor.subscribe('listarSequences');
  },
  loadingTemplate : "loadingBlanco"
});

Router.route('/datos/mantenimientoEditarTipoRol',{
  name:'datosTipoRol.edit',
  waitOn: function () {
    return Meteor.subscribe('listarTiposRoles');
  },
  loadingTemplate : "loadingBlanco",
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
  loadingTemplate : "loadingBlanco"
});

Router.route('/datos/mantenimientoEditarEmpresa',{
  name:'datosEmpresa.edit',
  waitOn: function () {
    return Meteor.subscribe('listarEmpresas');
  },
  loadingTemplate : "loadingBlanco",
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
Router.route("datosEmpresa",{
  name:'datosEmpresa',
  action: function(){
    this.redirect('/datos');
  }
});
/////////////////////////////////////////////////////
