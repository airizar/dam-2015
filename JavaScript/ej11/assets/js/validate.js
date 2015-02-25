HTMLFormElement.prototype.validate=function() 
{
    var validador={
        required:function(val){
            return false;
        },
        email:function(val){
            return false;
        }
    };
    var required=this.querySeltorAll('.required');
    var validate=function(){

    };
this.addEventListener('submit',validate,false);
    
};
