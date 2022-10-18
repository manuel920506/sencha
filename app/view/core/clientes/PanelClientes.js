Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",

	tbar:[{
		text:"Agregar cliente",
		handler: function (){

			let windo = Ext.create("Ext.window.Window", {
				title:"Agregar cliente",
				iconCls:"x-fa fa-user",

				width: 400,
				layout:"fit",

				draggable: false,
				resizable: false,
				modal: true,

				items: {
					xtype:"formcliente"
				},

				buttons:[{
					text:"Guardar",
					iconCls:"x-fa fa-save"
				},{
					text:"Cancelar"
				}]
			});

			windo.show();
		}
	},"->",{
		xtype:"textfield",
		emptyText:"Buscar..."
	}],
 
    layout: 'fit',
    items:{
        xtype: 'gridclientes'
    }
	
});