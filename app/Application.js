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
    //sencha app build development
    launch: function() {

        this.viewport = Ext.create("Ext.container.Viewport",{
            style:"border: 2px solid green",
            layout:"fit"
        });
        
        //if( no existe la sesion)
            //this.showLogin();
        //else
        //
        this.showApp(); 
    },

    showApp: function (){
        this.viewport.add({
            xtype:"panel",

            tbar: ["Mi app","->",{
                text:"Salir"
            }],

            layout:"border",

            items:[{
                region:"west",
                width:260,
                style:"border-right: 1px solid gray",
                layout:"fit",
                items:{
                    xtype: 'treelist',
                    store: {
                        root: {
                        expanded: true,
                            children: [{
                                text: 'detention',
                                leaf: true,
                                iconCls: 'x-fa fa-frown-o'
                            }, {
                                text: 'homework',
                                expanded: true,
                                iconCls: 'x-fa fa-folder',
                                children: [{
                                    text: 'book report',
                                    leaf: true,
                                    iconCls: 'x-fa fa-book'
                                }, {
                                    text: 'algebra',
                                    leaf: true,
                                    iconCls: 'x-fa fa-graduation-cap'
                                }]
                            }, {
                                text: 'buy lottery tickets',
                                leaf: true,
                                iconCls: 'x-fa fa-usd'
                            }]
                        }
                    }
                }
            },{
                region:"center",
                xtype:"tabpanelclientes"//,
                //style:"border: 2px solid pink",
                /*items:[{
                    title:"Dashboard resumen",
                    html:'tablero'
                }]*/
            }]
        });
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
