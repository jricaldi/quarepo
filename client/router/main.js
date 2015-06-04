Router.configure({
  layoutTemplate: 'mainLayout'
});

// Router.route('/', function(){
//   this.render("home");
//   this.render('navBar', {to: 'navBarYield'});
// });

Router.route('/', {
  template:'home',
  yieldRegions: {
    'navBar': {to:'navBarYield'}
  },
  onAfterAction: function () {
    console.log("onAfterAction");
    // $(document).on("ready",function(){
    //   $(".button-collapse").sideNav(function(){console.log("navBar activo");});
    // });
  },
  action:function() {
    this.render();
  }
});

// Router.route('/', function(){
//   this.render("home", {
//     yieldTemplates: {
//         'narBar': {to:'navBarYield'}
//       }
//   });
// });

Router.route('/colaboradoresClaro', function () {
  this.render('colClaro');
});
