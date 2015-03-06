(function(){
    var tweet={
        id:"kkkkkk",
        text:"kkkk kkkk kkkk",
        author:"yo",
        createAt:"fecha"
    };
    //APP.DB.insert(tweet);
    var success=function(datos){
        console.log(datos);
    };
    APP.DB.getAll(success);

})();
