/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    name: 'app',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    //sencha app refresh
    //sencha app rebuild 
    launch: function(){
      //Ext.Msg.alert('Stado','Cambios salvados correctamente!');  
      this.showLogin();
     
    },

    showLogin: function(){
        Ext.create('app.view.login.WindowLogin',{ 
            autoShow: true
        }); 
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});