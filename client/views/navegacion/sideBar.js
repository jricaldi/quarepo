// Template.sideBar.onRendered(function(){
//   $('.collapsible').collapsible();
// });

Template.sideBar.events({
  "click ul li.bold ul>li>a": function(event, template){
    $('.button-collapse').sideNav('hide');
  },
	"click :not(ul#mobileNavBar)" : function(event,template){
		console.log("aqui!!");
		$('.button-collapse').sideNav('hide');	
	}
});

Template.sideBar.onRendered(function(){
  
  $('.collapsible').collapsible();


});