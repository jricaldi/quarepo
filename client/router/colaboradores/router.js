Router.route('/colaboradoresClaro',{
  name:'colClaro',
  waitOn: function () {
    Session.set("filterTipoRol", undefined);
    Session.set("txtBuscar", undefined);
    return [Meteor.subscribe('listarColaboradores',CONSTANTE.claro),
            Meteor.subscribe('listarTiposRoles'),
            Meteor.subscribe('listarEmpresas')
          ];
  },
  data : function(){
    var datos = helpMongoData(helpFindColaborador(CONSTANTE.claro));
    return datos;
  }
});

Router.route('/nuevoColaboradorClaro',{
  name:'colClaro.new',
  waitOn: function () {
    return [Meteor.subscribe('listarTiposRoles'),
            Meteor.subscribe("listarEmpresas")
          ];
  },
  loadingTemplate : "loadingBlanco",
  onBeforeAction: function(){
    if(!helpMongoData(helpFindTipoRoles(CONSTANTE.activo))){
      helpSetStatusMsg(CONSTANTE.error,MENSAJES.error_new_colab_roles);
      this.redirect("/colaboradoresClaro");
    }
    else if(!helpMongoData(helpFindEmpresas(CONSTANTE.activo))){
      console.log(helpFindEmpresas(CONSTANTE.activo).fetch());
      helpSetStatusMsg(CONSTANTE.error,MENSAJES.error_new_colab_empresas);
      this.redirect("/colaboradoresClaro");
    }
    else {
      this.next();
    }
  }
});

Router.route('/editarColaboradorClaro',{
  name:'colClaro.edit',
  waitOn: function () {
    return [Meteor.subscribe('listarTiposRoles'),
            Meteor.subscribe("listarEmpresas")
          ];
  },
  loadingTemplate : "loadingBlanco",
  notFoundTemplate: 'sinDatosNoButton',
  data : function () {
    var datos = helpFindOneColaborador(Session.get("id"));
    console.log(datos);
    return datos;
    if(datos!=null)
      return datos;
  }
});

/////////////////////////////////////////////////////////////////////////////

Router.route('/colaboradoresIBM',{
  name:'colIBM',
  waitOn: function () {
    Session.set("filterTipoRol", undefined);
    Session.set("txtBuscar", undefined);
    return [Meteor.subscribe('listarColaboradores',CONSTANTE.claro),
            Meteor.subscribe('listarTiposRoles'),
            Meteor.subscribe('listarEmpresas')
          ];
  },
  data : function(){
    var datos = helpMongoData(helpFindColaborador(CONSTANTE.claro));
    return datos;
  }
});

Router.route('/nuevoColaboradorIBM',{
  name:'colIBM.new',
  waitOn: function () {
    return [Meteor.subscribe('listarTiposRoles'),
            Meteor.subscribe("listarEmpresas")
          ];
  },
  loadingTemplate : "loadingBlanco",
  onBeforeAction: function(){
    if(!helpMongoData(helpFindTipoRoles(CONSTANTE.activo))){
      helpSetStatusMsg(CONSTANTE.error,MENSAJES.error_new_colab_roles);
      this.redirect("/colaboradoresIBM");
    }
    else if(!helpMongoData(helpFindEmpresas(CONSTANTE.activo))){
      console.log(helpFindEmpresas(CONSTANTE.activo).fetch());
      helpSetStatusMsg(CONSTANTE.error,MENSAJES.error_new_colab_empresas);
      this.redirect("/colaboradoresIBM");
    }
    else {
      this.next();
    }
  }
});
