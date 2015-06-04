  Template.navBar.rendered = function(){
    $(document).ready(function () {
      console.log("parasito");
      $(".button-collapse").sideNav(function() {
        console.log("dentro navBar.js");
      });
    });
    $.when(jQuery.toolTip).then(function(){
      console.log("entro al when");
      console.log(jQuery.toolTip);

    });

  };

  Template.navBar.events({
    "click a#lnkAyuda": function (event, template) {
      var fbHelpAccount = "http://www.facebook.com/jorge.ricaldi/";
      var spanText = "<span class='text-darken-1 yellow-text'>Cont&aacute;ctame @jricaldip</span>";
      Materialize.toast(spanText, 5000,'rounded')
    }
  });
