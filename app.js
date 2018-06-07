
jQuery.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5500/data.json',
    success: function(data){
        console.log(data);
    },
    error: function(error){
        console.log(error);
    }    
});