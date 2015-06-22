PrincipalController = RouteController.extend({
  layoutTemplate: 'mainLayout',
  yieldRegions: {
    'navBar': {to: 'navBarYield'}
  },
  action: function () {
    this.render()
  }
});

Router.configure({
  controller: 'PrincipalController',
  loadingTemplate: 'loading',
  onBeforeAction : function(){
    //validación si esta logeado
    this.next();
  },
  notFoundTemplate: 'sinDatos',
  waitOn:function(){
    var ruta = Router.current().route.getName();
    Session.set("tituloPagina", TITLE[ruta]);
    Session.set("rutaPagina",ruta)
    // Session.set("noDatos", "hide");
  }
});

Router.onBeforeAction('dataNotFound');

Router.route('/',{
  name:'home'
});
