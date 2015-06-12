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
  controller: 'PrincipalController'
});

Router.route('/',{
  name:'home'
});

Router.route('/colaboradoresClaro',{
  name:'colClaro',
  loadingTemplate: 'loading',
  waitOn: function () {
      return Meteor.subscribe('listarColClaro');
  }
});
