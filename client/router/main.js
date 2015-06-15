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
    Session.set("tituloPagina", TITLE[Router.current().route.getName()]);
    this.next();
  },
  notFoundTemplate: 'sinDatos'
});

Router.onBeforeAction('dataNotFound');

Router.route('/',{
  name:'home'
});

Router.route('/colaboradoresClaro',{
  name:'colClaro.list',
  waitOn: function () {
    return Meteor.subscribe('listarColClaro');
  },
  data : function(){
    return helpMongoData(Colaboradores.find({tipo:"claro"}));
  }
});
