Template.sideBar.onRendered(function(){
  $('#btnMenuPrincipal').sideNav({
     edge: 'left',
     closeOnClick: true
  });
});

Template.sideBar.events({
  // "click ul li.bold ul>li>a": function(event, template){
  //   $('.button-collapse').sideNav('hide');
  // }
});
