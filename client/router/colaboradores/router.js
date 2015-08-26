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
