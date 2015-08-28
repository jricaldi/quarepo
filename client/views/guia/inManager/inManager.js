Template.inManager.onRendered(function(){
    $("ul.tabs").tabs();
    var lineas = []
    for (var i = 0; i < testLineas.length; i++) {
      console.log(testLineas[i]);
      var data = [testLineas[i]];
      Meteor.apply("find_linea",data,function(error,result){
        if (error) {
          console.log(error);
        }
        else {
          Session.set("linea",result);
        }
      });
      console.log("session: " + Session.get("linea"));
    }
});



// try {
//   var client = Soap.createClient(url);
//   var result = client.MyFunction(args);
//
//   console.log(result);
// }
// catch (err) {
//   if(err.error === 'soap-creation') {
//     console.log('SOAP Client creation failed');
//   }
//   else if (err.error === 'soap-method') {
//     console.log('SOAP Method call failed');
//   }
//
// }
