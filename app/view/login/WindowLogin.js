Ext.define('app.view.login.WindowLogin', {
    extend: 'Ext.window.Window',
    title: 'Hello User', 
    controller: 'windowlogincontroller',
    width: 400, 
    modal: true,
    draggable: false,
    resizable: false,
    closable: false,
    padding: '10px',
    items: {
        xtype: 'form',
        reference: 'formulario',
        items: [{  
            xtype: 'textfield',
            fieldLabel: 'Usuario',  
            anchor: '100%',
            name: 'user',
            allowBlank: false,
            emptyText:'user@dominio.com',
            msgTarget: 'under',
            vtype: 'email'
        },{  
            xtype: 'textfield',
            fieldLabel: 'Password',  
            name: 'password',
            anchor: '100%',
            allowBlank: false
        }]
    },
    buttons: [{
        text: 'Ingresar',
        iconCls: 'x-fa fa-user',
        handler: 'onIngresar'
    }]
});