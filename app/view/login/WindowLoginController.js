Ext.define('app.view.login.WindowLoginController', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.windowlogincontroller',
    onIngresar: function(){
        let formulario = this.lookup('formulario'); 

        if(formulario.isValid()){
            Ext.Ajax.request({
                url: 'server/login/login.json',
                params:  formulario.getValues(),
                scope: this,
			    success:  this.onSuccess,
                
                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }

        console.info(formulario.getValues()); 
    },

    onSuccess: function(response, opts) {
        var obj = Ext.decode(response.responseText);
        console.dir(obj);

        if(obj.success){
            Ext.Msg.alert('Usuario Autenticado!', obj.msg, this.alFinalizar(), this)
        }else{ 
         Ext.Msg.alert('Mensaje sistema',obj.msg); 
        }
    },

   alFinalizar: function (){
       this.getView().close();
   },

    alFinalizar: function(){
        this.getView().close();
    }
});