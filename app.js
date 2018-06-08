
// jQuery.ajax({
//     type: 'GET',
//     url: 'http://127.0.0.1:5500/data.json',
//     success: function(data){
//         console.log(data);
//     },
//     error: function(error){
//         console.log(error);
//     }    
// });

let loc = ["NJ", "NY", "FL", "CA", "WA"];
let data = [];
let location1 = function () {
    var local = loc[Math.floor(Math.random()* 5)];
    return local;
};
         for(var i = 0; i < 10; i++) {
             data.push({
                "firstname": "User firstname" + i,
                "lastname": "User lastname" + i,
                "email": "user1@google.com" + i,
                "location": location1(),
                "phone": "98888999999"+i,
                "batch": "UI" + i,
                "address": {
                    "communication": "Google, NY",
                    "permanent": "Google, CA"
                },
                "previous employer": {
                    "google": "Computer Programmer",
                    "facebook": "Front end Developer",
                    "linkedIn": "Software Engineer "
                }
             });
          }
          console.log(data);
          var jsonString = JSON.stringify(data);
          //console.log(jsonString);


      
        console.log(location1());
        //console.log(loca);