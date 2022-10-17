Ext.define('app.view.login.WindowLoginController', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.windowlogincontroller',
    onIngresar: function(){
        let formulario = this.lookup('formulario');
        console.info(formulario.getValues());
    }
});