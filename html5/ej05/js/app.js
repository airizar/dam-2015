(function(){
    var tweet={
        id:"id4",
        text:"stexto4",
        author:"autor4",
        createAt:"fecha4"
    };
    //APP.DB.insert(tweet);
   
    APP.DB.get(tweet.id,function(t){
        console.log(t);
    });
    var success=function(datos){
        console.log(datos);
    };

})();
